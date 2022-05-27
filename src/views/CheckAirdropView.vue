<template class="">
  <div class="darkBg">
    <v-container style="z-index: 2" class="mt-16 pt-16">
      <v-img class="mt-6" src="/banners/community-giveaway.png"></v-img>

      <CheckAirdrop class="mt-16" v-if="!isConnecting"/>
    </v-container>
  </div>
</template>

<script>
import CheckAirdrop from '../components/Mint/CheckAirdrop.vue'
import {mapGetters} from 'vuex'

export default {
  components: {CheckAirdrop},
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