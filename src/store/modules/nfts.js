import {getField, updateField} from 'vuex-map-fields'
import Vue from "vue"
import {getNetworks} from "../../utils/networks"
import {ethers} from "ethers"
import BOREDABI from "@/assets/abis/BoredDavid.json"
import axios from "axios"

function addressEqual(a, b) {
    return a.toLowerCase() === b.toLowerCase()
}

export default {
    namespaced: true,
    state: {
        allNFTs: [],
    },
    getters: {
        getField,
        getUserBalance: (state, getters, rootState, rootGetters) => (id) => {
            let userAddress = rootGetters["connectweb3/getUserAccount"]
            let nft = state[userAddress].find(nft => nft.id === id)
            return nft ? nft.editions : 0
        },
    },
    mutations: {
        updateField,
        setNfts: (state, payload) => {
            Vue.set(state, payload.address, payload.results)
        },
    },
    actions: {
        async getNftsFromUser(context) {
            console.log("updating nfts721 for user")
            let userAddress = context.rootGetters["connectweb3/getUserAccount"]
            context.dispatch("getNftsFromAddress", {address: userAddress})
        },
        async getNftsByAddress(context, address) {
            console.log("updating nfts721 for: " + address)
            context.dispatch("getNftsFromAddress", {address: address})
        },
        //https://github.com/OpenZeppelin/openzeppelin-contracts/issues/1102#issuecomment-799623364
        async getNftsFromAddress(context, payload) {
            let networks = getNetworks()
            let results = []

            for (let i in networks) {
                //TODO: we are having block limit issues with BSC when performing this code
                //https://github.com/bnb-chain/bsc/issues/113
                if (networks[i].symbol === 'BNB' || networks[i].symbol === 'MATIC' || networks[i].symbol === 'AVAX')
                    continue

                let boredDavidState = await context.rootGetters["connectweb3/boredDavidState"]
                let token = boredDavidState[i] && boredDavidState[i].contract ? boredDavidState[i].contract : await new ethers.Contract(networks[i].address, BOREDABI.abi, new ethers.providers.JsonRpcProvider(networks[i].rpc))

                let nfts = (await token.walletOfOwner(payload.address)).toString()
                if (nfts === '')
                    continue

                nfts = nfts.split(',')
                nfts.forEach((nft) => {
                    token.tokenURI(nft).then(async uri => {
                        let metadata = await axios.get(uri)
                        results.push({
                            id: nft,
                            metadata: metadata.data,
                            network_id: i,
                        })
                    })
                })
            }

            context.commit("setNfts", {address: payload.address, results})
        },
    },
}