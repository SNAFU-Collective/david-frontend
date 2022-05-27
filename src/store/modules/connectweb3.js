
import { ethers } from "ethers";
import Vue from "vue";
import BOREDABI from "@/assets/abis/BoredDavid.json"

import { getNetworks } from "../../utils/networks";
import { getField, updateField } from 'vuex-map-fields';
import detectEthereumProvider from '@metamask/detect-provider';


export default {
    namespaced: true,
    state: {
        connected: {},
        web3: null,
        isConnected: false,
        isLoaded: false,
        account: null,
        isConnecting: false,
        chainId: null,
        boredDavidState: {},
        airdropState: {},
    },
    getters: {
        getField,
        getUserAccount: (state) => state.account,
        getUserSigner: (state) => state.connected.signer,
        isConnecting: (state) => state.isConnecting,
        airdropState: (state) => state.airdropState,
        boredDavidState: (state) => state.boredDavidState,
        chainId: (state) => state.chainId,
        isMetamask: async (state) => {
            if (state.connected.web3 && state.connected.web3.provider.isMetamask && !state.connected.web3.provider.isMetamask()) {
                return false
            } else {
                return true
            }
        },
        isCorrectNetwork: (state) => {
            let chainId = state.chainId;
            let networks = getNetworks();
            console.log('networks', networks)
            let chain = networks[parseInt(chainId)];
            if (!chain) {
                return false
            }
            return true
        },
        getSymbol: (state) => {
            let networks = getNetworks();

            let chain = networks[parseInt(state.chainId)]
            if (chain) {
                return chain.symbol;
            }
        },
        getNetwork: (state) => {
            let networks = getNetworks();

            let chain = networks[parseInt(state.chainId)]
            if (chain) {
                return chain;
            }
            return null;
        },
        getCommonCost: (state) => {
            if (state.boredDavidState && state.boredDavidState.commonCost) {
                return state.boredDavidState.commonCost;
            }
            return 0;
        },
        getRareCost: (state) => {
            if (state.boredDavidState && state.boredDavidState.rareCost) {
                return state.boredDavidState.rareCost;
            }
            return 0;
        },
        isAirdropEligible: (state) => {
            if (state.boredDavidState) {
                return state.boredDavidState.airdropAvailable;
            }
            return false;
        }
    },
    mutations: {
        updateField,
        setConnected: (state, payload) => state.isConnected = payload,

        disconnectWallet: async function (state) {
            state.connected = {};
            state.account = null;
        },
        setBoredDavidState: (state, payload) => {
            Vue.set(state.boredDavidState, payload.chainId, payload);
        },
        setAirdropState: (state, payload) => {
            Vue.set(state.airdropState, payload.chainId, payload.airdropAvailable);
        }

    },
    actions: {
        setWeb3: async function (context, payload) {
            let { web3, connected } = payload;
            let state = context.state;
            console.log("connected", connected)
            let networks = getNetworks();


            if (connected) {
                state = context.state.connected;
                state.web3 = web3;
                let signer = await web3.getSigner();
                state.signer = signer
                context.state.account = (await signer.getAddress());
                context.state.chainId = parseInt((await web3.getNetwork()).chainId)
                //console.log('Chain ID: ', context.state.chainId)
                let chain = networks[parseInt(context.state.chainId)];
                if (chain) {
                    state.boredDavidContract = await new ethers.Contract(chain.address, BOREDABI.abi, signer);
                }

                context.dispatch("nfts/getNftsFromUser", null, {root: true})
            } else {
                for (let i in networks) {
                    let network = networks[i];
                    let provider = new ethers.providers.JsonRpcProvider(network.rpc);
                    let contract = await new ethers.Contract(network.address, BOREDABI.abi, provider);
                    context.dispatch('updateBoredDavidState', { chainId: i, contract });
                }

            }

            console.log("setting Web3");
        },
        updateBoredDavidStateForAll: async function (context) {
            let networks = getNetworks();
            for (let i in networks) {
                let network = networks[i];
                let provider = new ethers.providers.JsonRpcProvider(network.rpc);
                let contract = await new ethers.Contract(network.address, BOREDABI.abi, provider);
                await context.dispatch('updateBoredDavidState', { chainId: i, contract });
            }
        },
        connectWallet: async function (context) {
            console.log("connecting");
            context.state.isConnecting = true;

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


                // eslint-disable-next-line no-unused-vars
                provider.on("accountsChanged", (accounts) => {
                    context.dispatch("connectWallet");
                });

                // Subscribe to chainId change
                provider.on("chainChanged", (chainId) => {
                    context.state.chainId = parseInt(chainId)
                    console.log('Chain ID: ', context.state.chainId)
                });

                // Subscribe to provider disconnection
                // eslint-disable-next-line no-unused-vars
                provider.on("disconnect", (error) => {
                    console.log('provider disconnect', error)
                    context.dispatch("disconnectWallet");
                });
            }
            context.state.isConnecting = false;

        },
        disconnectWallet: async function (context) {
            await this._vm.$web3Modal.clearCachedProvider();
            context.commit("disconnectWallet");
            context.commit("setConnected", false)
        },
        startWeb3: async function (context) {

            context.dispatch("setWeb3", { web3: null, connected: false });

            if (this._vm.$web3Modal.cachedProvider) {
                //This is case where someone already connected
                context.dispatch("connectWallet")
            }

        },
        async updateBoredDavidState(context, payload) {

            let chainId = payload.chainId;
            console.log("updating bored david state for chainId", chainId)
            let contract = payload.contract || context.state.boredDavidState[chainId].contract;
            let commonCost = await contract.commonCost();
            let rareCost = await contract.rareCost();
            let maxMintAmount = await contract.maxMintAmount();
            let maxSupply = await contract.maxSupply();
            let totalSupply = await contract.totalSupply();
            context.commit("setBoredDavidState", { contract, chainId, commonCost, rareCost, maxMintAmount, maxSupply, totalSupply });
        },
        //Updates fees, balance, nfts ... to use after transactions!
        updateData(context, chainId) {
            context.dispatch("updateBoredDavidState", { contract: null, chainId: parseInt(chainId) })
            context.dispatch("checkAirdrop", context.state.account)
            context.dispatch("nfts/getNftsFromUser", null, {root: true})
        },
        async checkAirdrop(context, address) {
            let networks = getNetworks();
            for (let i in networks) {
                let contract = context.state.boredDavidState[i] && context.state.boredDavidState[i].contract ? context.state.boredDavidState[i].contract : await new ethers.Contract(networks[i].address, BOREDABI.abi, new ethers.providers.JsonRpcProvider(networks[i].rpc));
                let airdropAvailable = await contract.eligibleForAirdrop(address);
                context.commit("setAirdropState", { chainId: i, address, airdropAvailable });
            }
        },
        async checkAirdropForChain(context, payload) {
            let chainId = payload.chainId;
            let address = payload.address;
            let networks = getNetworks();

            let contract = context.state.boredDavidState[chainId] && context.state.boredDavidState[chainId].contract ? context.state.boredDavidState[chainId].contract : await new ethers.Contract(networks[chainId].address, BOREDABI.abi, new ethers.providers.JsonRpcProvider(networks[chainId].rpc));
            let airdropAvailable = await contract.eligibleForAirdrop(address);
            context.commit("setAirdropState", { chainId, address, airdropAvailable });
        },
        claimAirdrop(context) {
            let state = context.state;
            let contract = state.connected.boredDavidContract;
            let airdropAvailable = state.airdropState[state.chainId];
            if (airdropAvailable) {
                return contract.claimAirdrop();
            }
        },
        mintNfts(context, payload) {
            let state = context.state;
            let contract = state.connected.boredDavidContract;
            let  {rareMint, totalCost, mintNumber} = payload;
            if(rareMint){
                return contract.mintRare(mintNumber, {value: totalCost});
            }else{
                return contract.mintCommon(mintNumber, {value: totalCost});
            }
        },
        async connectToChain(context, chainId) {
            const provider = await detectEthereumProvider();
            let networks = getNetworks();
            let network = networks[chainId];
            if (network) {
                provider.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: `0x${Number(chainId).toString(16)}` }],
                })
                    .then((res) => {
                        console.log('switch', res)
                    })
                    .catch((e) => {
                        if (e.code === 4902) {
                            provider.request({
                                method: 'wallet_addEthereumChain',
                                params: [
                                    {
                                        chainId: `0x${Number(chainId).toString(16)}`,
                                        chainName: network.name,
                                        nativeCurrency: {
                                            name: network.symbol,
                                            symbol: network.symbol, // 2-6 characters long
                                            decimals: 18,
                                        },
                                        rpcUrls: [network.rpc],
                                        blockExplorerUrls: [network.explorer],
                                    },
                                ],
                            })
                        }
                    })
            }
        }
    },
}
