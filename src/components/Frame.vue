<template>
  <div class="divCornice">
    <v-img
        style="position:absolute;"
        :width="screenWidth > 768 ? '390px' : '290px'"
        class="test"
        :src="require('../../public/gif/' + selectedGif + '.gif')"
    />
    <v-img
        style="position:absolute;"
        :width="screenWidth > 768 ? '400px' : '300px'"
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
    return {
    }
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
    }
  },
  mounted() {
  },
}
</script>

<style>
.divCornice {
  display: flex;
  align-items: center; /*horizontal centering*/
  justify-content: center; /*vertical centering*/
  flex-direction: column; /*keep the h3 above the textbox*/
}
</style>