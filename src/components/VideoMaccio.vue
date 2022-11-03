<template>
  <v-row style="color: white; align-items: center; display: block" class="allWidthOnMobile">
      <v-row  class="px-10">
        <h3 class="pinkColor">AIRED ON MACCIOVERSE</h3>
      </v-row>
      <v-row class="mt-10 px-10" style="text-align: justify;">
        <p>
          Bored David NFTs were used on "Maccioverse", a TV Series of Maccio Capatonda, aired on Elimobile and quickly become one of the most viewed content on the Metaverse.
        </p>
      </v-row>
      <video onloadstart="this.volume=0.5"  class="pt-10 pb-10 px-7" controls loop muted autoplay src="https://s3.eu-central-1.amazonaws.com/david.prod/bd-maccio.mp4" style="width: 100%"  type="video/mp4"/>
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
    return {
    }
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