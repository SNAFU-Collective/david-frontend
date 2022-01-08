<template>
  <div class="main" :style="'height:'+screenHeight+'px'">
    <Header/>
    <!--      <router-view />-->
    <DavidFrame class="davidFrame"/>
    <v-row
        class="characterDiv"
        style="z-index: 2;"
    >
      <img
          v-if="screenWidth > 768"
          style="width: 100%; vertical-align: bottom !important; z-index: 2"
          src="../../public/background/desktop/Characters.png"
          transition="slide-y-transition"
      />
      <img
          v-else
          style="width: 100%; vertical-align: bottom !important; z-index: 2"
          src="../../public/background/mobile/Characters.png"
          transition="slide-y-transition"
      />
    </v-row>
  </div>
</template>

<script>
import Header from "../components/Header/Header"
import DavidFrame from "../components/Frame"

export default {
  components: {
    Header,
    DavidFrame,
  },
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
    }
  },
}
</script>

<style>
@media screen and (min-width: 769px) {
  .main {
    width: 100%;
    background-image: url("../../public/background/desktop/BG.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }

  .davidFrame {
    top: 100px;
  }

  .characterDiv {
    width: 40%;
    margin-left: 30%;
    z-index: 2;
    display: flex;
    align-items: flex-end !important;
    height: 100%;
  }
}

@media screen and (max-width: 768px) {
  .main {
    height: 900px !important;
    width: 100%;
    background-image: url("../../public/background/mobile/BG.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }

  .davidFrame {
    top: 150px;
  }

  .characterDiv {
    z-index: 2;
    width: 60%;
    margin-left: 40%;
    display: flex;
    align-items: flex-end !important;
    height: 100%;
  }
}
</style>