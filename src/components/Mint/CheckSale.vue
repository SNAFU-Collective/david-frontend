<template>
  <div>
    <div v-if="loading">
      <v-row no-gutters justify="center" class="py-4 pt-16">
        <v-progress-circular
          :size="80"
          color="white"
          indeterminate
        ></v-progress-circular>
      </v-row>
      <v-row no-gutters justify="center" class="py-4">
        <p>Loading</p>
      </v-row>
    </div>
    <div v-else>
      <v-row>
        <v-col cols="12" class="text-center">
          <h2 class="pinkColor"> {{totalMintedSupply}} / {{ totalMaxSupply }} NFTs ALREADY MINTED</h2>
          <h4> Choose the blockchain where you want to mint Bored David NFTs.</h4>
        </v-col>
      </v-row>

      <v-row no-gutters class="pt-16">
        <v-card
            v-for="(sale, index) in getSaleInfo"
            :key="index"
            class="mx-auto mint-card"
            max-width="344"
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
                    :disabled="!sale.saleAvailable" :to="`/sale/${sale.chainId}`"> {{ sale.saleAvailable ? `Mint on ${sale.network.name}` : 'Soldout' }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getNetworks } from "@/utils/networks"

export default {
  mounted: function () {
    this.updateBoredDavidStateForAll()
  },
  computed: {
    ...mapGetters("connectweb3", ["getUserAccount", "boredDavidState"]),
    getSaleInfo() {
      let networks = getNetworks();
      let saleInfo = [];
      let saleFound = false
      for (let chainId in this.boredDavidState) {
        let network = networks[chainId];
        if (network) {
         let info = this.boredDavidState[chainId];
         let saleAvailable = info.totalSupply.lt(info.maxSupply);

          saleInfo.push({
            network: network,
            chainId: chainId,
            info,
            saleAvailable
          });
        }
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
      return this.getSaleInfo.length === 0;
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
};
</script>

<style>
@media screen and (max-width: 767px) {
  .mint-card {
   margin-top: 20px;
  }
}
</style>