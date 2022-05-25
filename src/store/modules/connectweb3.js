
import { ethers } from "ethers";
import Vue from "vue";
import BOREDABI from "@/assets/abis/BoredDavid.json"

import { getNetworks } from "../../utils/networks";


import { getField, updateField } from 'vuex-map-fields';

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
            if(chain){
                return chain.symbol;
            }
        },
        getNetwork: (state) => {
           let networks = getNetworks();
        
            let chain = networks[parseInt(state.chainId)]
            if(chain){
                return chain;
            }
            return null;
        },
        getCommonCost:(state) => {
            if(state.boredDavidState && state.boredDavidState.commonCost){
                return state.boredDavidState.commonCost;
            }
            return 0;
        },
        getRareCost:(state) => {
            if(state.boredDavidState && state.boredDavidState.rareCost){
                return state.boredDavidState.rareCost;
            }
            return 0;
        },
        isAirdropEligible: (state) => {
            if(state.boredDavidState){
                return state.boredDavidState.airdropAvailable;
            }
            return false;
        }
    },
    mutations: {
        updateField,
        setConnected: (state, payload) => state.isConnected = payload,
        setSnafuSupply: (state, payload) => state.snafuSupply = payload,
        setSnafuLockedSupply: (state, payload) => state.snafuLockedSupply = payload,
        setSnafuCirculatingSupply: (state, payload) => state.snafuCirculatingSupply = payload,
        setSnafuFee: (state, payload) => state.snafuFee = payload,

        disconnectWallet: async function (state) {
            state.connected = {};
            state.account = null;
        },
        setBoredDavidState: (state, payload)  => {
            state.boredDavidState[payload.chainId] = payload;
        },
        setAirdropState: (state, payload)  => {
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
                if(chain){
                    state.boredDavidContract = await new ethers.Contract(chain.address, BOREDABI.abi, signer);
                }
            } else {
                for(let i in networks){
                    let network = networks[i];
                    let provider = new ethers.providers.JsonRpcProvider(network.rpc);
                    let contract = await new ethers.Contract(network.address, BOREDABI.abi, provider );
                    context.dispatch('updateBoredDavidState', {chainId: i, contract});
                }

            }

            console.log("setting Web3");
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
            context.state.isConnecting = false;

        },
        disconnectWallet: async function (context) {
            await this._vm.$web3Modal.clearCachedProvider();
            context.commit("disconnectWallet");
            context.commit("setConnected", false)
        },
        startWeb3: async function (context) {

            context.dispatch("setWeb3", { web3:null, connected: false });

            if (this._vm.$web3Modal.cachedProvider) {
                //This is case where someone already connected
                context.dispatch("connectWallet")
            }

        },
        async updateBoredDavidState(context, payload) {
            let chainId = payload.chainId;
            let contract = payload.contract || context.state.boredDavidState[chainId].contract;
            let commonCost = await contract.commonCost();
            let rareCost = await contract.rareCost();
            let maxMintAmount = await contract.maxMintAmount();
            context.commit("setBoredDavidState", {contract, chainId, commonCost, rareCost, maxMintAmount});
        },
        //Updates fees, balance, nfts ... to use after transactions!
        updateData(context, chainId) {
            context.dispatch("updateBoredDavidState", {contract: null, chainId})
        },
        async checkAirdrop(context, address) {
            let networks = getNetworks();
            for(let i in networks){
                let contract = context.state.boredDavidState[i] && context.state.boredDavidState[i].contract ? context.state.boredDavidState[i].contract : await new ethers.Contract(networks[i].address, BOREDABI.abi, new ethers.providers.JsonRpcProvider(networks[i].rpc));
                let airdropAvailable = await contract.eligibleForAirdrop(address);
                context.commit("setAirdropState", {chainId:i, address, airdropAvailable});
            }                
        },
    },
}
