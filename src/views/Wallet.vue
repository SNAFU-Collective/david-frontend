<template>
  <div style="min-width: 100%; padding-top: 100px" class="darkBg">
    <v-container>

      <v-row justify="center" style="margin-top: 80px; display: grid">
        <v-chip
            color="#e4e4e4"
            text-color="black"
            style="border: #A7A7A7;justify-content: center;"
            class="mt-5"
            v-if="isConnected"
        >
          Connected to: {{ account | abbreviateAddress }}
          <span class="px-3">|</span>
          <button
              type="button"
              v-clipboard:copy="account"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
          >
            <v-icon size="15px" class="px-1" color="rgb(0 0 0 / 58%)">mdi-clipboard-multiple</v-icon> Copy
          </button>
        </v-chip>
      </v-row>

      <div v-if="!isConnected">
        <Login/>
      </div>

      <div v-if="isConnected">
        <v-row class="collectionSection mt-16" justify="center">
          <div v-if="nftsLoading">
            <v-row no-gutters justify="center" class="py-4 pt-16">
              <v-progress-circular
                  :size="80"
                  color="white"
                  indeterminate
              ></v-progress-circular>
            </v-row>
            <v-row no-gutters justify="center" class="py-4 pt-16">
              <p>Loading your collection</p>
            </v-row>
          </div>
          <div v-else-if="!nftsLoading" justify="center">
            <v-row justify="center">
              <NftCard  style="margin-top: 50px !important;" :cardSize="screenWidth > 768 ? 200 : 170" v-for="nft in userNfts"
                        :key="nft.id"
                        :network_id="parseInt(nft.network_id)"
                        :nft="nft" class="ma-1"/>
            </v-row>

            <v-row v-if="userNfts.length === 0" class=" mt-10 mb-10" style="text-align: center" justify="center">
               <span style=" text-align: center">
                No NFT found on this wallet. <br/>
                <router-link class="blueColor" :to="{ name: 'Sale'}">Mint now</router-link>
               </span>
            </v-row>

            <v-row  justify="center" class="mt-16 pt-16 ">
              <h1 class="pinkColor text-center">Share your NFTs on Twitter!</h1>
            </v-row>
            <v-row  justify="center" class="pt-6 pb-16">
              <h2 class="blueColor text-center">#NFTItalia #BoredDavid</h2>
            </v-row>
          </div>

        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>

import Login from '../components/Common/Login.vue'
import {mapActions, mapState} from "vuex"
import WalletStatus from "../components/Wallet/WalletStatus"
import {mapFields} from "vuex-map-fields"
import NftCard from "../components/Common/NftCard.vue"
import axios from "axios"

export default {
  components: {
    NftCard,
    Login,
    // CollectionInfo
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    onCopy: function (e) {
      alert('You just copied the following text to the clipboard: ' + e.text)
    },
    onError: function (e) {
      alert('Failed to copy the text to the clipboard')
      console.log(e);
    },
  },
  computed: {
    ...mapFields("connectweb3", ["isConnected", "account", 'chainId']),
    ...mapState("nfts", {
      nfts(state) {
        return state[this.account]
      },
      nftsLoading(state) {
        return state[this.account] == undefined
      },
    }),
    userNfts() {
      return this.nfts
    },
    screenWidth() {
      return window.innerWidth
    },
  },
}
</script>

<style>
@media screen and (max-width: 768px) {
  #mainRowStatus {
    padding-top: 0px !important;
  }
}

@media screen and (max-width: 768px) {
  #mainRowStatus {
    padding-top: 0px !important;
  }

  .claimBox {
    width: 100% !important;
    box-shadow: none !important;
  }

  .redeemBox {
    margin-top: 100px;
    width: 100% !important;
  }

  .boxRow {
    display: block !important;
  }
}

.claimBox {
  width: 50%;
  box-shadow: #0202023d 2px 0px
}

.redeemBox {
  width: 50%;
}

.boxRow {
  display: flex;
}
</style>
