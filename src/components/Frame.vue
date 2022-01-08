<template>
  <div class="divCornice">
    <v-img
        class="inside"
        :width="screenWidth > 768 ? '390px' : '290px'"
        :height="screenWidth > 768 ? '390px' : '290px'"
        :src="require('../../public/gif/' + selectedGif + '.gif')"
    />
    <v-img
        class="inside"
        :width="screenWidth > 768 ? '390px' : '290px'"
        :height="screenWidth > 768 ? '390px' : '290px'"
        :src="require('../../public/background/frameShade.png')"
    />
    <v-img
        class="inside"
        :width="screenWidth > 768 ? '400px' : '300px'"
        :height="screenWidth > 768 ? '400px' : '300px'"
        src="../../public/background/desktop/cornice.png"
    />
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    getRandomInt(max) {
      let number = Math.floor(Math.random() * max)
      if (number === 0) number = 1
      return number
    },
  },
  data() {
    return {}
  },
  computed: {
    screenHeight() {
      return window.innerHeight
    },
    screenWidth() {
      return window.innerWidth
    },
    selectedGif() {
      return this.getRandomInt(4)
    },
  },
  mounted() {
  },
}
</script>

<style>
.divCornice {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 400px;
  height: 400px;
}
.inside {
  margin: auto;
  padding: 10px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>