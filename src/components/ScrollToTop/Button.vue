<template>
    <v-btn id="scrollToTopButton" @click="moveUp"> <v-icon size="25" color="white">mdi-arrow-up-bold</v-icon> </v-btn>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    }
  },
  methods: {
    // ...mapActions(),
    moveUp(){
      console.log('move up')
      window.scrollTo(0,0);
    }
  },
  mounted(){

  },
  computed: {
    // ...mapState(),
  },
}
</script>

<style>
#scrollToTopButton {
  display: inline-block;
  background-color: #30303057;
  width: 40px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

/* Styles for the content section */
@media (min-width: 500px) {
  #scrollToTopButton .content {
    width: 43%;
  }
  #scrollToTopButton {
    margin: 30px;
  }
}
</style>
