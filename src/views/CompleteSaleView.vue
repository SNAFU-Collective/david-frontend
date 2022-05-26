<template>
  <v-container style="z-index: 2" class="mt-16 pt-16">
    <div v-if="isConnecting || !sale" || !sale.info>
      <v-row no-gutters justify="center" class="py-4">
        <v-progress-circular
          :size="80"
          color="black"
          indeterminate
        ></v-progress-circular>
      </v-row>
    </div>
    <div v-else>
      <div v-if="wrongChain">
        <v-alert type="error" class="mt-5 mb-5">
          <span class="body-1">
            You are not connected to the correct chain.
          </span>
          <v-btn
            dark
            small
            class="ml-10"
            @click="connectToChain(selectedChainId)"
            style="position: absolute; right: 25px"
          >
            Switch to {{ selectedChainId | networkName }}
          </v-btn>
        </v-alert>
      </div>

      <div class="mt-10">
        <v-card
          dark
          :class="screenWidth > 768 ? 'mt-5' : 'mb-5 mx-2 mt-5'"
          :width="screenWidth > 768 ? '20vw' : '100%'"
        >
          <v-card-title>
            <v-row no-gutters justify="center">
              Buy on {{ selectedChainId | networkName }}
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters justify="center">
              {{sale.info.totalSupply}} / {{sale.info.maxSupply}}
            </v-row>
            <v-row no-gutters justify="center" class="mt-2">
              <v-img
                src="/pfp/unveiling.gif"
                width="50px"
                transition="slide-y-transition"
              ></v-img>
            </v-row>
            <v-row
              no-gutters
              justify="center"
              style="text-align: center"
              class="pt-5"
            >
            </v-row>
          <v-row no-gutters justify="center">
            <v-switch v-model="buyRare" label="Buy Rare" color="blue" />
          </v-row>
          <v-row no-gutters justify="center">
            <v-btn @click="decrementMintNumber" icon small class="mx-5">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <h3> {{mintNumber}} </h3>
            <v-btn @click="incrementMintNumber" icon small class="mx-5">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-row>

          <v-row no-gutters justify="center" class="mt-3">
           <h3 class="mr-2"> Total: </h3>  <h3> {{ totalCost | fromWei }} {{symbol}} </h3>
          </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters justify="center">
              <v-btn
                dark
                @click="() => (showCompleteSaleModal = true)"
                :disabled="wrongChain"
              >
                Buy
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </div>
      <complete-sale-modal
        :show="showCompleteSaleModal"
        :rareMint="buyRare"
        :mintNumber="mintNumber"
        :symbol="symbol"
        :totalCost="totalCost"
        @close="handleCloseBuyModal"
      />
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { getNetworks } from "@/utils/networks";
import CompleteSaleModal from '../components/Mint/CompleteSaleModal.vue';
export default {
  components: { CompleteSaleModal },
  data: function () {
    return {
      showCompleteSaleModal: false,
      mintNumber: 1,
      buyRare: false,
    };
  },
  mounted: function () {
    if (!this.isConnecting) {
      this.updateBoredDavidState({ chainId: this.selectedChainId });
    }
  },

  computed: {
    ...mapGetters("connectweb3", [
      "isConnecting",
      "chainId",
      "boredDavidState",
    ]),
    selectedChainId: function () {
      return this.$route.params.chainId;
    },
    wrongChain: function () {
      return this.selectedChainId != this.chainId;
    },
    sale() {
      let networks = getNetworks();
      let chainId = this.selectedChainId;
      let network = networks[chainId];
      if (network && this.boredDavidState[chainId]) {
        let info = this.boredDavidState[chainId];
        let saleAvailable = info.totalSupply.lt(info.maxSupply);
        return {
          network: network,
          chainId: chainId,
          info,
          saleAvailable,
        };
      }
      return null;
    },
    maxMintNumber: function () {
      if (this.sale) {
        return this.sale.info.maxMintAmount;
      }
      return 1;
    },
    commonCost: function () {
      if (this.sale) {
        return this.sale.info.commonCost;
      }
      return 0;
    },
    rareCost: function () {
      if (this.sale) {
        return this.sale.info.rareCost;
      }
      return 0;
    },
    totalCost: function () {
      if (this.sale) {
        let cost = this.buyRare ? this.rareCost : this.commonCost;
        return cost.mul(this.mintNumber);
      }
      return 0;
    },
    symbol: function () {
      if (this.sale) {
        return this.sale.network.symbol;
      }
      return "";
    },
    screenWidth() {
      return window.innerWidth;
    },
  },
  methods: {
    ...mapActions("connectweb3", ["connectToChain", "updateBoredDavidState"]),
    handleCloseBuyModal: function () {
      this.showCompleteSaleModal = false;
      //this.$router.push({name: "Sale"})
    },
    decrementMintNumber: function () {
      if (this.mintNumber > 1) {
        this.mintNumber--;
      }
    },
    incrementMintNumber: function () {
      if (this.mintNumber < this.maxMintNumber) {
        this.mintNumber++;
      }
    },
  },
};
</script>

<style>
</style>