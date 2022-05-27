import { getField, updateField } from 'vuex-map-fields';
import Vue from "vue"
import {getNetworks} from "../../utils/networks"
import {ethers} from "ethers"
import BOREDABI from "@/assets/abis/BoredDavid.json"
import axios from "axios"
//Block when the erc721 was deployed
const minBlock = 0;

function addressEqual(a, b) {
    return a.toLowerCase() === b.toLowerCase();
}

export default {
    namespaced: true,
    state: {
        allNFTs: [],
    },
    getters: {
        getField,
        getUserBalance: (state, getters, rootState, rootGetters) => (id) => {
            let userAddress = rootGetters["connectweb3/getUserAccount"];
            let nft = state[userAddress].find(nft => nft.id === id)
            return nft ? nft.editions : 0;
        }
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
            let userAddress = context.rootGetters["connectweb3/getUserAccount"];
            context.dispatch("getNftsFromAddress", { address: userAddress })
        },
        async getNftsByAddress(context, address) {
            console.log("updating nfts721 for: " + address)
            context.dispatch("getNftsFromAddress", { address: address })
        },
        //https://github.com/OpenZeppelin/openzeppelin-contracts/issues/1102#issuecomment-799623364
        async getNftsFromAddress(context, payload) {
            let networks = getNetworks()
            let results = []

            for (let i in networks) {
              let boredDavidState = await context.rootGetters["connectweb3/boredDavidState"]
                let token = boredDavidState[i] && boredDavidState[i].contract ? boredDavidState[i].contract : await new ethers.Contract(networks[i].address, BOREDABI.abi, new ethers.providers.JsonRpcProvider(networks[i].rpc));

                let account = payload.address;
                const sentLogs = await token.queryFilter(
                    token.filters.Transfer(account, null), minBlock
                );
                const receivedLogs = await token.queryFilter(
                    token.filters.Transfer(null, account), minBlock
                );

                const logs = sentLogs.concat(receivedLogs)
                    .sort(
                        (a, b) =>
                            a.blockNumber - b.blockNumber ||
                            a.transactionIndex - b.TransactionIndex,
                    );

                const owned = new Set();

                for (const log of logs) {
                    const { from, to, tokenId } = log.args;

                    if (addressEqual(to, account)) {
                        owned.add(tokenId.toString());
                    } else if (addressEqual(from, account)) {
                        owned.delete(tokenId.toString());
                    }
                }

                for (const nft of owned) {
                    token.tokenURI(nft).then(async uri => {
                        let metadata = await axios.get(uri)
                        results.push({
                            id: nft,
                            metadata: metadata.data,
                            network_id: i
                        })
                    })
                }
            }
            console.log('results',results)
             context.commit("setNfts", { address:payload.address, results });
        },
    }
}