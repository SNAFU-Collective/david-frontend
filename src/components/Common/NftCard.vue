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
              <img :src="nft.metadata.image" style="max-width:600px"/>
            </v-row>
            <v-row class="mt-10 pl-1">
              <span class="truncateLong"><b>ID: {{ nft.id }}</b></span>
              <span >Minted on {{ blockchain.name }}</span>
            </v-row>

          </v-overlay>

          <a @click="toggle">
            <v-img  :src="nft.metadata.image" :height="cardSize || 250" :width="cardSize || 250">
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

        <v-row style="display: flex; padding-top: 10px; padding-bottom: 5px" class="px-2">
          <span style="width: 60%; text-align: left" class="truncate blueColor"><strong>#{{ nft.id }}</strong></span>
          <span style="width: 60%; text-align: left" class="truncate pinkColor"><strong>{{ blockchain.name }}</strong></span>
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
      return networks[this.nft.network_id]
    },
  },
  watch: {
  },
  methods: {
    goTo(url) {
      console.log(url)
      window.open(url, '_blank')
    },
    toggle() {
      this.fullscreen = !this.fullscreen
    },
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
}
@media screen and (max-width: 768px) {
  .closeButton {
    display: none;
  }
}

</style>