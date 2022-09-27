<template>
  <div>
    <HomeParallax/>

    <v-container style="z-index: 2">
      <Welcome id="welcomeSection" class="welcomeSection"/>


          <div v-if="!loading && getSaleInfo" class="mt-12">
            <v-row>
              <v-col cols="12" class="text-center">
                <h2 class="pinkColor"> {{totalMintedSupply}} / {{ totalMaxSupply }} NFTs ALREADY MINTED ON ETHEREUM</h2>
                <h4> Mint your Bored David on Ethereum right now!</h4>
              </v-col>
            </v-row>
            <v-row style="align-items: center">
              <v-col class="pa-10" md="6">
                <v-img src="/gif/bd-gif.gif"></v-img>
              </v-col>
              <v-col md="6">
                <v-card
                    v-for="(sale, index) in getSaleInfo"
                    :key="index"
                    class="mx-auto mint-card"
                    max-width="400"
                    outlined
                    style="margin-top: 20px"
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <div class="text-overline mb-4">
                        {{ sale.network.name }}
                      </div>
                      <v-list-item-title class="text-h5 mb-1">
                        Minted: {{sale.info.totalSupply}} / {{sale.info.maxSupply}}
                      </v-list-item-title>
                      <v-list-item-subtitle>There are still {{sale.info.maxSupply - sale.info.totalSupply}} NFTs left to be minted on  {{ sale.network.name }}</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-avatar
                        tile
                        size="80"
                        color="grey"
                    > <v-img :src="sale.network.logo" width="50px" style="background-color: white;"
                             transition="slide-y-transition"></v-img></v-list-item-avatar>
                  </v-list-item>

                  <v-card-actions>
                    <v-btn outlined
                           rounded
                           class="mt-3"
                           :disabled="!sale.saleAvailable" :to="`/sale/${sale.chainId}`"> {{ sale.saleAvailable ? `Mint now` : 'Soldout' }} </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </div>

      <Introduction class="homeMargin"/>
      <Distribution id="distributionSection"/>
      <Team id="teamSection"/>
      <VideoKez class="homeMargin"/>
      <FAQ class="homeMargin"/>
    </v-container>

  </div>
</template>

<script>
import Introduction from "@/components/Introduction"
import Distribution from "@/components/Distribution"
import SaleView from "@/views/SaleView"
import VideoKez from "@/components/VideoKez"
import Bonuses from "@/components/Bonuses"
import Welcome from "@/components/Welcome"
import FAQ from "@/components/FAQ"
import Team from "@/components/Team"
import HomeParallax from "@/components/HomeParallax"
import {mapActions, mapGetters} from "vuex"
import { getNetworks } from "@/utils/networks"

export default {
  name: 'Home',
  components: {
    Welcome,
    HomeParallax,
    Introduction,
    Distribution,
    // Bonuses,
    VideoKez,
    Team,
    FAQ,
    // SaleView,
  },
  mounted: function () {
    this.updateBoredDavidStateForAll()
  },
  computed: {
    ...mapGetters("connectweb3", ["getUserAccount", "boredDavidState"]),
    getSaleInfo() {
      let networks = getNetworks();
      let saleInfo = [];
      let saleFound = false
      // force only ethereum
      let network = networks[1];
      if (network) {
        let info = this.boredDavidState[1];
        if (!info)
          return

        let saleAvailable = info.totalSupply.lt(info.maxSupply);

        saleInfo.push({
          network: network,
          chainId: 1,
          info,
          saleAvailable
        });
      }

      return saleInfo;
    },
    totalMaxSupply() {
      let totalMaxSupply = 0;
      this.getSaleInfo.forEach(sale => {
        totalMaxSupply += parseInt(sale.info.maxSupply);
      });

      return totalMaxSupply;
    },
    totalMintedSupply() {
      let totalMintedSupply = 0;
      this.getSaleInfo.forEach(sale => {
        totalMintedSupply += parseInt(sale.info.totalSupply);
      });

      return totalMintedSupply;
    },
    loading() {
      return !this.getSaleInfo || this.getSaleInfo.length === 0;
    },
    screenWidth() {
      return window.innerWidth
    },
  },

  methods: {
    ...mapActions("connectweb3", ["updateBoredDavidStateForAll"]),
    checkButton() {
      this.loading = true;
      this.checkAirdrop(this.address).finally(() => {
        this.loading = false;
      });
    },

  },
}
</script>

