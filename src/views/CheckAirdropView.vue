<template class="">
  <div class="darkBg">
    <v-container style="z-index: 2" class="mt-16 pt-16">
      <v-img class="mt-6" src="/banners/community.png"></v-img>

      <CheckAirdrop class="mt-16" v-if="!isConnecting"/>
      <FAQ style="margin-top: 250px"/>
    </v-container>
  </div>
</template>

<script>
import CheckAirdrop from '../components/Mint/CheckAirdrop.vue'
import {mapGetters} from 'vuex'
import FAQ from "@/components/FAQ"

export default {
  components: {CheckAirdrop, FAQ},
  computed: {
    ...mapGetters("connectweb3", ["isConnecting"]),
  },
}
</script>

<style>
#confetti-canvas {
  z-index: 5;
}
</style>