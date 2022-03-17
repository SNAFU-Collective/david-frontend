<template>
  <v-row style="color: white; align-items: center; display: block" class="allWidthOnMobile">
      <v-row  class="px-10">
        <h3 class="pinkColor">THE ARTIST</h3>
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