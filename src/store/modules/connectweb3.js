
import { ethers } from "ethers";
import ERC1155ABI from "../../assets/abis/ERC1155.json";
import SNAFU20 from "@/assets/abis/SNAFU20Pair.json";
import SNAFU721 from "@/assets/abis/SNAFU721.json"
import FARM from "@/assets/abis/UNIFTY_FARM.json"

import { snafu20Address, snafuNftAddress, snafu721Address, xdaiRPC, commonFarmAddress } from "../../utils/constants"

import { getField, updateField } from 'vuex-map-fields';

export default {
    namespaced: true,
    state: {
        connected: {},
        web3: null,
        isConnected: false,
        isLoaded: false,
        account: null,
        isLoading: false,
        chainId: null,
    },
    getters: {
        getField,
        getCommonFarm: (state) => state.commonFarm,
        getUserAccount: (state) => state.account,
        getUserSigner: (state) => state.connected.signer,
        isMetamask: async (state) => {
            if (state.connected.web3 && state.connected.web3.provider.isMetamask && !state.connected.web3.provider.isMetamask()) {
                return false
            } else {
                return true
            }
        },
        isXdai: (state) => {
            if (state.chainId === 100 || state.chainId === '0x64') {
                return true
            } else {
                return false
            }
        }
    },
    mutations: {
        updateField,
        setConnected: (state, payload) => state.isConnected = payload,
        setSnafuBalance: (state, payload) => state.snafuBalance = payload,
        setSnafuSupply: (state, payload) => state.snafuSupply = payload,
        setSnafuLockedSupply: (state, payload) => state.snafuLockedSupply = payload,
        setSnafuCirculatingSupply: (state, payload) => state.snafuCirculatingSupply = payload,
        setSnafuFee: (state, payload) => state.snafuFee = payload,

        disconnectWallet: async function (state) {
            state.connected = {};
            state.account = null;
        }
    },
    actions: {
        setWeb3: async function (context, payload) {
            let { web3, connected } = payload;
            let state = context.state;
            console.log("connected", connected)

            if (connected) {
                state = context.state.connected;
                state.web3 = web3;
                let signer = await web3.getSigner();
                state.signer = signer
                context.state.account = (await signer.getAddress());
                context.state.chainId = (await web3.getNetwork()).chainId
                //console.log('Chain ID: ', context.state.chainId)

                state.snafuNft = await new ethers.Contract(snafuNftAddress, ERC1155ABI, signer);
                state.snafu721 = await new ethers.Contract(snafu721Address, SNAFU721.output.abi, signer);
                state.snafu20 = await new ethers.Contract(snafu20Address, SNAFU20, signer);
                state.commonFarm = await new ethers.Contract(commonFarmAddress, FARM, signer);
            } else {
                state.web3 = web3;
                state.snafuNft = await new ethers.Contract(snafuNftAddress, ERC1155ABI, web3);
                state.snafu721 = await new ethers.Contract(snafu721Address, SNAFU721.output.abi, web3);
                state.snafu20 = await new ethers.Contract(snafu20Address, SNAFU20, web3);
                state.commonFarm = await new ethers.Contract(commonFarmAddress, FARM, web3);
                context.dispatch("updateSnafu20Supply");
                context.dispatch("updateSnafu20Fee");
            }

            console.log("setting Web3");
        },
        connectWallet: async function (context) {
            console.log("connecting");

            let provider, hasProvider
            try {
                provider = await this._vm.$web3Modal.connect();
                hasProvider = true;
            } catch (err) {
                await context.dispatch("disconnectWallet");
                hasProvider = false;
            }

            if (hasProvider) {
                const web3 = new ethers.providers.Web3Provider(provider);
                await context.dispatch("setWeb3", { web3, connected: true });
                context.commit("setConnected", true)
                context.dispatch("updateSnafu20Balance");


                // eslint-disable-next-line no-unused-vars
                provider.on("accountsChanged", (accounts) => {
                    context.dispatch("connectWallet");
                });

                // Subscribe to chainId change
                provider.on("chainChanged", (chainId) => {
                    context.state.chainId = chainId
                    console.log('Chain ID: ', context.state.chainId)
                });

                // Subscribe to provider disconnection
                // eslint-disable-next-line no-unused-vars
                provider.on("disconnect", (error) => {
                    console.log('provider disconnect', error)
                    context.dispatch("disconnectWallet");
                });
            }
        },
        disconnectWallet: async function (context) {
            await this._vm.$web3Modal.clearCachedProvider();
            context.commit("disconnectWallet");
            context.commit("setConnected", false)
        },
        startWeb3: async function (context) {
            let web3 = new ethers.providers.JsonRpcProvider(xdaiRPC);

            context.dispatch("setWeb3", { web3, connected: false });

            if (this._vm.$web3Modal.cachedProvider) {
                //This is case where someone already connected
                context.dispatch("connectWallet")
            }

        },
        async updateSnafu20Balance(context) {
            let contract = context.state.snafu20;
            let account = context.state.account;
            console.log("updatingBalance")
            let balance = await contract.balanceOf(account);
            context.commit("setSnafuBalance", balance.toString());
        },
        async updateSnafu20Supply(context) {
            let contract = context.state.snafu20;
            console.log("updatingSupply")
            let supply = await contract.totalSupply();
            context.commit("setSnafuSupply", supply.toString());
            context.dispatch("updateSnafu20LockedSupply");
        },
        async updateSnafu20LockedSupply(context) {
            const stakingPoolAddress = '0x09aAB5cE8e2F5f7De524FC000971c57f9E5E2B55'
            let contract = context.state.snafu20;

            let vestedBalance = await contract.balanceOf(stakingPoolAddress);
            context.commit("setSnafuLockedSupply", vestedBalance.toString());

            let circulatingSupply = ethers.utils.formatEther(context.state.snafuSupply) - ethers.utils.formatEther(vestedBalance)
            context.commit("setSnafuCirculatingSupply", (ethers.utils.parseUnits(circulatingSupply.toString())).toString());
        },
        async updateSnafu20Fee(context) {
            let contract = context.state.snafu20;
            console.log("updatingFee")
            let fee = await contract.fee();
            context.commit("setSnafuFee", fee.toString());
        },
        async addSnafuToMetamask(context) {
            const tokenAddress = snafu20Address
            const tokenSymbol = 'SNAFU';
            const tokenDecimals = 18;
            const tokenImage = 'https://gateway.pinata.cloud/ipfs/QmYFnC1RxAvNzWFmtR5CQYWBz8pgzDidqQKg8o1WVqppEq';

            try {
                await context.state.connected.web3.provider.request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                        options: {
                            address: tokenAddress, // The address that the token is at.
                            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                            decimals: tokenDecimals, // The number of decimals in the token
                            image: tokenImage, // A string url of the token logo
                        },
                    },
                });
            } catch (error) {
                console.log(error);
            }
        },
        //Updates fees, balance, nfts ... to use after transactions!
        updateData(context){
            context.dispatch("updateSnafu20Fee")
            context.dispatch("updateSnafu20Supply")
            context.dispatch("updateSnafu20LockedSupply")
            context.dispatch("updateSnafu20Balance")
        }
    },
}
