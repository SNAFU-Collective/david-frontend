<template>
  <div style="min-width: 100%; padding-top: 100px" class="walletPage">
    <v-container>

      <v-row justify="center" style="margin-top: 80px; margin-left: 80px;margin-right: 80px; display: grid">
        <v-avatar left style="width: 200px !important; height: 200px !important;">
          <v-img src="/pfp/unknown.jpeg"/>
        </v-avatar>
        <v-chip
            color="#e4e4e4"
            text-color="black"
            style="border: #A7A7A7;justify-content: center;"
            class="mt-5"
            v-if="isConnected"
        >
          {{ account | abbreviateAddress }}
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
        <v-row class="collectionSection" justify="center">
          <NftCard  style="margin-top: 50px !important;" :cardSize=200 v-for="nft in userNfts"
                   :key="nft.id"
                   :nft="nft" class="ma-1"/>
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
          <div v-else-if="userNfts.length === 0" class="text-body-2 my-50 mt-10 mb-10" style="text-align: center">
               <span style="font-size: 13px; text-align: center">
              No NFTs found on this wallet. <br/>
             Buy now.
               </span>
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
      currentPage: 1,
      maxPerPage: 10,
      showReadMore: true,
      currentTag: 'all',
      allNFTs: [],
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
    openChat() {
      window.open('https://chat.blockscan.com/index', '_blank')
    },
    async loadMore() {
      this.currentPage += 1

      await setTimeout(() => {
        //scroll down only on desktop
        if (window.innerWidth > 768) {
          window.scrollTo({
            left: 0,
            top: document.body.scrollHeight || document.documentElement.scrollHeight,
            behavior: 'smooth',
          })
        }
      }, 500)
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

.walletPage {
  min-height: 800px;
  background-image: url("../../public/background/bg2.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>
