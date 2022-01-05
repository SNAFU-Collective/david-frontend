<template>
  <v-chip
      color="#e4e4e4"
      text-color="black"
      style="border: #A7A7A7; padding-left: 0"
  >
    <v-chip
        color="#00000017"
        pill
        style="font-weight: 500"
    >
      {{ balance | fromWei | truncatePrice }}
      <span class="pl-1"> SNAFU</span>
    </v-chip>
    <span style="padding-left: 5px; font-weight: 500">≅ {{ pair && balance ? snafuValue : '-' | truncatePrice | numberWithCommas }}$</span>
  </v-chip>
</template>

<script>
import {mapFields} from "vuex-map-fields"
import gql from "graphql-tag"
import {ethers} from "ethers"

export default {
  computed: {
    ...mapFields("connectweb3", {balance: "snafuBalance"}),
    snafuValue() {
        return parseFloat(this.pair.token1Price) * parseFloat(ethers.utils.formatEther(this.balance))
    }
  },
  apollo: {
    //WXDAI - SNAFU pair
    pair: gql`
      query {
        pair(id: "0xd6c8ad00302ca94952e7746d956e8b45b0ea90e3") {
          reserve0
          reserve1
          reserveUSD
          token0Price
          token1Price
          volumeUSD
        }
      }
    `,
  },
}
</script>

<style>

</style>