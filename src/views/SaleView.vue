<template>
  <div :class="$route.path === '/' ? '' : 'darkBg'">
    <v-container style="z-index: 2" class="mt-16 pt-16 ">
      <CheckSale class="mt-16" v-if="!isConnecting"/>

      <v-row class="mt-16" :style="$route.path === '/' ? 'display: none;' : 'display: block;'">
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
          <v-row class="mt-10" style="text-align: justify;">
            <p>
              The address of the smart contract of Bored David is the same across all the chains: <b class="blueColor">0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c</b>.
            </p>
          </v-row>
          <v-row class="mt-10" style="text-align: justify;">
            <ul>
              <li>Ethereum: <a href="https://etherscan.io/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
              <li>Polygon: <a href="https://polygonscan.com/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
              <li>Binance: <a href="https://bscscan.com/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
              <li>Avalanche: <a href="https://snowtrace.io/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
              <li>Aurora: <a href="https://aurorascan.dev/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a4" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
              <li>Gnosis: <a href="https://blockscout.com/xdai/mainnet/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
            </ul>
          </v-row>
          <v-row class="mt-10" style="text-align: justify;">
            <p>
             <b class="pinkColor">Only trust NFTs coming from this address.</b>
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

</style>