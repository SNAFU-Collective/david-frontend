<template>
  <div>
      You can mint a free Bored David Nft: {{isAirdropEligible}}
      

      <v-btn v-if="isAirdropEligible">
          Get airdrop!
       </v-btn>

  </div>   
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters("connectweb3", ["isAirdropEligible"])
    },

}
</script>

<style>

</style>