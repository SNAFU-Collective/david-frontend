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
    </div>
    <div v-else>
      <v-row no-gutters class="pt-16">
        <v-card
          v-for="(sale, index) in getSaleInfo"
          :key="index"
          :class="screenWidth > 768 ? index > 0 ? 'ml-10' : 'ml-0' : 'mb-5 mx-2'"
          :width="screenWidth > 768 ? '11vw' : '100%'"
          dark
        >
          <v-card-title>
            <v-row no-gutters justify="center">
              {{ sale.network.name }}
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters justify="center">
              <v-img src="/pfp/unveiling.gif" width="50px"
                     transition="slide-y-transition"></v-img>
            </v-row>
            <v-row no-gutters justify="center" style="text-align: center" class="pt-5">
              {{sale.info.totalSupply}} / {{sale.info.maxSupply}}
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters justify="center">
              <v-btn dark :disabled="!sale.saleAvailable" :to="`/sale/${sale.chainId}`"> {{ sale.saleAvailable ? 'Buy' : 'Soldout' }} </v-btn>
            </v-row>
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
         saleFound = saleFound || saleAvailable
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
</style>