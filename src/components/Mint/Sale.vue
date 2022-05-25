<template>
  <div>
      Mint a Bored David Nft for {{cost | fromWei }} {{symbol}} each!

        <v-btn>
            Mint
         </v-btn>
  </div>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {

    computed: {
        ...mapGetters("connectweb3", {symbol: 'getSymbol', cost: 'getCommonCost'})
    },

}
</script>

<style>

</style>