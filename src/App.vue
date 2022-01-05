<template>
  <v-app>
    <v-main class="main">
      <Header style="padding-bottom: 60px" />
<!--      <router-view />-->
    </v-main>
    <Welcome/>
    <ScrollToTop/>
  </v-app>
</template>

<script>
import {mapActions} from "vuex"
import Header from "./components/Header/Header"
import ScrollToTop from "./components/ScrollToTop/Button"
import Welcome from "./components/Welcome"

export default {
  name: "App",

  components: {
    Header,
    ScrollToTop,
    Welcome
  },

  methods: {
    ...mapActions("connectweb3", ["startWeb3"]),
  },
  beforeMount(){
    this.startWeb3();
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Barlow:200,400,600,800');


.main {
  height: 100%;
  width: 100%;
  background-image: url("../public/background.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

html, body {
  font-family: 'Barlow', sans-serif;
}

#app {
  font-family: 'Barlow', sans-serif;
}

.filter {
  margin: 0;
  font-size: 12px !important;
  color:  rgb(143, 143, 143);
}

.currentTag {
  color: #303030;
  left: 0;
  bottom: 1px;
  border-radius: 0 !important;
  border-width: 0 0 1px;
  border-top-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
  border-left-width: 0px;
  border-style: solid;
  opacity: 1 !important;
}

@media screen and (max-width: 768px) {
  .filters-row {
    margin: 0 10%;
  }
}

</style>