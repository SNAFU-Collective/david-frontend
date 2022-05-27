<template>
  <v-row justify="center">
    <v-card :ripple="true" class="mx-auto nftCard" :max-width="cardSize || 250">
      <v-card-text style="white-space: pre; background-color: #F5F5F5">
        <v-row justify="center">
          <v-dialog
              v-model="fullscreen"
              width="600px"
          >
            <v-card style="text-align: center">
              <v-row style="text-align: left" class="pa-2">
                <v-col cols="10">
                  <v-card-title>
                    <span class="truncateLong">{{ nft.id }}</span>
                  </v-card-title>
                  <v-card-subtitle>
                    <pre class="nftDescription">{{ blockchain.name }}</pre>
                  </v-card-subtitle>
                </v-col>
                <v-col cols="2" style="margin-top: 15px; text-align: right; padding-right: 25px;">
                  <v-btn
                      icon
                      @click="fullscreen = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
              <img  :src="nft.metadata.image"  class="fullscreenImage"/>
            </v-card>
          </v-dialog>
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
<!--              <v-row class="px-2 subtext chainLogo">-->
<!--                <v-tooltip bottom>-->
<!--                  <template v-slot:activator="{ on, attrs }">-->
<!--                    <v-avatar v-bind="attrs" v-on="on" left class="mr-2" size="20"-->
<!--                              @click="goTo(`${chains[0].explorer_url}/token/${chains[0].address}/instance/${metadata.id}/token-transfers`)">-->
<!--                      <v-img :src="chains[0].logo"/>-->
<!--                    </v-avatar>-->
<!--                  </template>-->
<!--                  <span>on Gnosis Chain</span>-->
<!--                </v-tooltip>-->
<!--              </v-row>-->
            </v-img>
          </a>
        </v-row>

        <v-row style="display: flex; padding-top: 10px; padding-bottom: 5px" class="px-2">
          <span style="width: 60%; text-align: left" class="truncate"><strong>#{{ nft.id }}</strong></span>
          <span style="width: 60%; text-align: left" class="truncate"><strong>{{ blockchain.name }}</strong></span>
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


</style>