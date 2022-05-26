<template>
  <div class="saleViewDiv">
    <v-container style="z-index: 2" class="mt-16 pt-16 ">
      <CheckSale class="mt-16" v-if="!isConnecting"/>

      <v-row class="mt-16">
        <v-col class="pa-10" md="12">
          <v-row>
            <h3 class="pinkColor">BORED DAVID IS A MULTICHAIN NFT COLLECTION</h3>
          </v-row>
          <v-row class="mt-10" style="text-align: justify;">
            <p>
              We think art shouldn't have barriers, so it's crazy to create artificial ones. We decided to
              mint Bored David where our community is and where it can be accessible to all: <b class="blueColor">Ethereum, Gnosis Chain,
              Avalanche, Polygon, Binance Smart Chain and Aurora</b>.
            </p>
          </v-row>
          <v-row class="mt-10" style="text-align: justify;">
            <p>
              All NFTs are generated uniquely in the same generation batch, then distributed to the community separately through different chains.
              Each chain has its max supply of Bored Davids.
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<script>
import CheckSale from '../components/Mint/CheckSale.vue'
import {mapGetters} from 'vuex'

export default {
  components: {CheckSale},
  computed: {
    ...mapGetters("connectweb3", ["isConnecting"]),
  },
  data() {
    return {
    }
  },

}
</script>

<style>
.saleViewDiv {
  min-height: 800px;
  background-image: url("../../public/background/bg2.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
</style>