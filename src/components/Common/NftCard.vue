<template>
  <v-row justify="center">
    <v-card :ripple="true" class="mx-auto nftCard" :max-width="cardSize || 250">
      <v-card-text style="white-space: pre; background-color: #F5F5F5">
        <v-row justify="center">
          <v-overlay
              :value="fullscreen"
              :opacity="0.95"
              @click="fullscreen = false"
          >
            <v-btn
                icon
                style=""
                @click="fullscreen = false"
                class="closeButton"
            >
              <v-icon style="font-size: 50px">mdi-close</v-icon>
            </v-btn>

            <v-row>
              <img :src="nftWaitingForUnveiling ? '/pfp/unveiling.gif' : fixGateway(nft.metadata.image)" class="overlayNftImage"/>
            </v-row>

          </v-overlay>

          <a @click="toggle">
            <v-img :src="nftWaitingForUnveiling ? '/pfp/unveiling.gif' : fixGateway(nft.metadata.image)" :height="cardSize || 250" :width="cardSize || 250">
              <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                  <v-progress-circular
                      indeterminate
                      color="#303030"
                  ></v-progress-circular>
                </v-row>
                <v-row no-gutters justify="center" class="py-4">
                  <p>Loading</p>
                </v-row>
              </template>
            </v-img>
          </a>
        </v-row>

        <v-row style="padding-top: 10px; padding-bottom: 5px" class="px-2">
          <v-col cols="10">
            <v-row justify="start">
              <span class=" pinkColor"><strong>{{ nft.id }}</strong></span>
            </v-row>
            <v-row justify="start">
              <span class=" blueColor blockchainSpan" style="font-size: 10px;"><strong>On {{ blockchain.name }} {{nftWaitingForUnveiling ? ' | Minting' : ''}}</strong></span>
            </v-row>
          </v-col>
          <v-col cols="2">
            <v-row justify="end">
              <v-menu
                  right
                  offset-y
                  max-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      light
                      icon
                      v-bind="attrs"
                      v-on="on"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item class="click-pointer">
                    <v-list-item-title @click="goToMarketplace">View on marketplace</v-list-item-title>
                  </v-list-item>
                  <v-list-item class="click-pointer">
                    <v-list-item-title @click="goToExplorer">View on explorer</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script>

import axios from "axios"
import {mapFields} from "vuex-map-fields"
import {getNetworks} from "@/utils/networks"

export default {
  props: {
    nft: {
      type: Object,
      required: true,
    },
    network_id: {
      type: Number,
      required: true,
    },
    cardSize: {
      type: Number,
      required: false,
    },
  },
  components: {

  },
  computed:{
    blockchain: function () {
      let networks = getNetworks()
      return networks[this.network_id]
    },
    nftWaitingForUnveiling() {
      if (!this.nft.metadata)
        return true

      if (this.nft.metadata.name && this.nft.metadata.name === "Bored David - Waiting For Unveil")
        return true

      if (this.nft.unveiled ===! undefined && !this.nft.unveiled)
        return true

      return false
    }
  },
  watch: {
  },
  methods: {
    goTo(url) {
      console.log(url)
      window.open(url, '_blank')
    },
    goToMarketplace() {
      this.goTo(this.blockchain.marketplace_url + this.nft.id)
    },
    goToExplorer() {
      this.goTo(this.blockchain.nft_explorer_url + this.nft.id)
    },
    toggle() {
      this.fullscreen = !this.fullscreen
    },
    fixGateway() {
      if (this.nft.metadata.image.startsWith("https://ipfs.infura.io")) {
        return this.nft.metadata.image.replace("https://ipfs.infura.io", "https://gateway.ipfs.io/ipfs/")
      }
      if (this.nft.metadata.image.startsWith("ipfs://")) {
        return this.nft.metadata.image.replace("ipfs://", "https://gateway.ipfs.io/ipfs/")
      }
      return this.nft.metadata.image
    }
  },
  data() {
    return {
      fullscreen: false,
    }
  },
}
</script>

<style>
.subtext {
  color: #A7A7A7;
  font-weight: bold;
}

.truncate {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.truncateLong {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v-dialog.v-dialog--active {
  overflow-y: hidden;
  overflow-x: hidden;
}

.nftDescription {
  text-align: justify;
  font-size: 13px;
  line-height: 14px;
  font-family: 'Barlow', serif;
  margin-top: 10px;
  white-space: break-spaces;
}

.chainLogo {
  opacity: 0.5;
  position: absolute;
  bottom: 16px;
  left: 9px;
}

.chainLogo:hover {
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .fullscreenImage {
    max-width: 500px;
    max-height: 500px;
  }
}

@media screen and (max-width: 768px) {
  .fullscreenImage {
    max-width: 350px;
    max-height: 350px;
  }
}
.closeButton {

}
@media screen and (min-width: 768px) {
  .closeButton {
    position: fixed !important;
    top: 50%;
    right: 30% ;
  }

  .overlayNftImage {
    max-width:600px
  }
}
@media screen and (max-width: 768px) {
  .closeButton {
    display: none;
  }
  .overlayNftImage {
    max-width:400px
  }
}

.click-pointer {
  cursor: pointer;
}
.click-pointer:hover {
background-color: #c0c0c0;
}

.blockchainSpan {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
</style>