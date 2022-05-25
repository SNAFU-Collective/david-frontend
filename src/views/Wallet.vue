<template>
  <div style="min-width: 100%; margin-top: 100px">
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

      <v-row v-if="isConnected" justify="center" style=" margin-top: 25px; margin-bottom: 25px">
        <v-btn color="blue" style="color:#fff;" @click="openChat">Check messages <v-icon class="ml-2">mdi-chat</v-icon></v-btn>
      </v-row>

      <div v-if="!isConnected">
        <Login/>
      </div>

      <div v-if="isConnected">
        <div class="collectionSection" style="min-height: 500px">

        </div>

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

export default {
  components: {
    // NftCard,
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
      tab: null,
      items: [
        {tab: 'My Collection', id: 1},
        {tab: 'Wrapped NFTs', id: 2},
        {tab: 'Claim', id: 3},
        {tab: 'Wallet', id: 4},
      ],
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
