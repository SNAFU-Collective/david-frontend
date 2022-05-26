<template class="">
  <div class="checkAirdropDiv">
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
.checkAirdropDiv {
  min-height: 800px;
  background-image: url("../../public/background/bg2.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}
#confetti-canvas {
  z-index: 5;
}
</style>