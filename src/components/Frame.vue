<template>
  <div class="divCornice">
    <v-img
        style="position:absolute;z-index: 2"
        width="400px"
        src="../../public/background/desktop/cornice.png"
    />
    <v-img
        style="position:absolute;z-index: 1"
        width="390px"
        class="test"
        :src="require('../../public/pfp/' + currentItem + '.png')"
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
      currentItem: 1,
    }
  },
  computed: {
  },
  mounted() {
    setInterval(() => {
      this.currentItem = this.getRandomInt(60)
    }, 1000)
  },
}
</script>

<style>
.divCornice {
  margin-top: 250px;
  display: flex;
  align-items: center; /*horizontal centering*/
  justify-content: center; /*vertical centering*/
  flex-direction: column; /*keep the h3 above the textbox*/
}
</style>