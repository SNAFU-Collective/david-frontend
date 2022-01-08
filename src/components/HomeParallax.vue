<template>
  <div class="main" :style="'height:'+screenHeight+'px'">
    <Header/>
    <!--      <router-view />-->
    <DavidFrame class="davidFrame"/>
    <v-row
        class="characterDiv"
        align="center"
        justify="center"
        style="z-index: 2;"
    >
      <v-img
          v-if="screenWidth > 768"
          src="../../public/background/desktop/Characters.png"
          transition="slide-y-transition"
      />
      <v-img
          v-else
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
  methods: {},
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
    margin-top: 300px;
  }

  .characterDiv {
    width: 40%;
    margin-left: 30%;
    z-index: 2;
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
    margin-top: 300px;
  }

  .characterDiv {
    width: 60%;
    margin-left: 40%;
    z-index: 2
  }
}
</style>