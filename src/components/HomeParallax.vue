<template>
  <v-main class="main">
    <v-img src="../../public/background/desktop/BG.jpg" style="z-index: 0">
      <DavidFrame/>

      <v-row
          align="center"
          justify="center"
          style="z-index: 3;"
      >
        <v-col
            class="text-center"
            cols="6"
            offset="1"
        >
          <v-img
              class="foreground"
              ref="foreground"
              width="40%"
              style="position: absolute;bottom: 20px;z-index: 3"
              src="../../public/background/desktop/Characters.png"
              transition="slide-y-transition"
          />
        </v-col>
      </v-row>
    </v-img>
    <Header/>
    <!--      <router-view />-->


  </v-main>
</template>

<script>
import Header from "../components/Header/Header"
import DavidFrame from "../components/Frame"

export default {
  components: {Header, DavidFrame},
  methods: {},
  data() {
    return {}
  },
  computed: {
    screenHeight() {
      return window.innerHeight
    },
  },
}
</script>

<style>
/*@media screen and (min-width: 768px) {*/
/*  .main {*/
/*    height: 100%;*/
/*    width: 100%;*/
/*    background-image: url("../../public/background/desktop/BG.jpg");*/
/*    background-position: center; !* Center the image *!*/
/*    background-repeat: no-repeat; !* Do not repeat the image *!*/
/*    background-size: cover; !* Resize the background image to cover the entire container *!*/
/*  }*/
/*}*/

/*@media screen and (max-width: 768px) {*/
/*  .main {*/
/*    height: 100%;*/
/*    width: 100%;*/
/*    background-image: url("../../public/background/mobile/BG.jpg");*/
/*    background-position: center; !* Center the image *!*/
/*    background-repeat: no-repeat; !* Do not repeat the image *!*/
/*    background-size: cover; !* Resize the background image to cover the entire container *!*/
/*  }*/
/*}*/
</style>