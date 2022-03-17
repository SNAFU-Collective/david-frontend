<template>
  <v-row style="color: white; align-items: center; display: block" class="allWidthOnMobile">
      <v-row  class="px-10">
        <h3 class="pinkColor">THE ARTIST</h3>
      </v-row>
      <v-row class="mt-10 px-10" style="text-align: justify;">
        <p>
          <b class="blueColor">Andrea Marchetti</b>, aka KEZ, is an italian artist in constant contact with the socially engaged realities of the local areas, developing a growing sensitivity to those themes that will become fundamental in his work: denunciation, struggle, tradition and sharing.
        </p>
        <p>
          <a href="https://andreamarchettiart.it/" target="_blank" class="customLink">Visit portfolio</a>
        </p>
      </v-row>
      <video class="pa-10" controls loop muted autoplay src="https://s3.eu-central-1.amazonaws.com/david.prod/kez.mp4" style="width: 100%"  type="video/mp4"/>
  </v-row>
</template>

<script>

export default {
  components: {
  },
  methods: {
    goTo(url) {
      window.open(url, '_blank')
    },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>

<style>
.welcome {
  color: white;
}

@media screen and (max-width: 768px) {
  .onlyDesktop {
    display: none;
  }
}
</style>