<template>
  <div class="main" :style="'height:'+screenHeight+'px'">
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
    <v-row style="justify-content: center;">
      <button class="scrollDownButton" style="z-index: 3;" @click="goToSection('welcomeSection')">
        <v-icon
            style="font-size: xxx-large;
            animation-name: backgroundColorPalette;
            animation-duration: 1s;
            animation-iteration-count: infinite;
            animation-direction: alternate;">mdi-chevron-double-down</v-icon>
      </button>
    </v-row>
  </div>
</template>

<script>
import DavidFrame from "../components/Frame"

export default {
  components: {
    DavidFrame,
  },
  methods: {
    getRandomInt(max) {
      let number = Math.floor(Math.random() * max)
      if (number === 0) number = 1
      return number
    },
    goToSection(refName) {
      let el = document.getElementById(refName)
      let offset = this.getOffset(el);

      window.scrollTo({
        left: 0,
        top: offset.top,
        behavior: 'smooth',
      })
    },
    getOffset(el) {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
    }
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
    max-width: 100%;
    background-image: url("../../public/background/desktop/BG.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }

  .davidFrame {
    top: 100px;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .characterDiv {
    width: 40%;
    margin-left: 30%;
    z-index: 2;
    display: flex;
    align-items: flex-end !important;
    height: 100%;
  }

  .scrollDownButton{
    margin-top: -50px;
  }
}

@media screen and (max-width: 768px) {
  .main {
    height: 900px !important;
    max-width: 100%;
    background-image: url("../../public/background/mobile/BG.jpg");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
  }

  .davidFrame {
    top: 150px;
    width: 100%;
  }

  .characterDiv {
    z-index: 2;
    width: 60%;
    margin-left: 40%;
    display: flex;
    align-items: flex-end !important;
    height: 100%;
  }

  .scrollDownButton{
    margin-top: -200px;
  }
}

/* Standard syntax */
@keyframes backgroundColorPalette {
  0% {
    color: #ffffff;
  }
  25% {
    color: rgba(255, 255, 255, 0.91);
  }
  50% {
    color: rgba(255, 255, 255, 0.66);
  }
  75% {
    color: rgba(255, 255, 255, 0.4);
  }
  100% {
    color: rgba(255, 255, 255, 0.25);
  }
}
</style>