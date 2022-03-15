<template>
  <v-app style="color: #fff" id="v-app-container">
    <HomeParallax/>

    <v-container>
      <v-img src="/background/graffiti_1.png" style="    position: absolute;
    opacity: 0.1;
    width: 100%;
    left: 50%;
    margin-top: 13px;"></v-img>
      <v-img src="/background/graffiti_2.png" style="    position: absolute;
    opacity: 0.1;
    width: 100%;
    right:50%;
    margin-top: 50%;"></v-img>
      <Welcome class="homeMargin"/>
      <Introduction class="homeMargin"/>
      <Distribution class="homeMargin"/>
    </v-container>

    <Footer class="homeMargin"/>
  </v-app>
</template>

<script>
import {mapActions} from "vuex"
import Introduction from "./components/Introduction"
import Distribution from "./components/Distribution"
import Welcome from "./components/Welcome"
import HomeParallax from "./components/HomeParallax"
import Footer from "./components/Footer/Footer"

export default {
  name: "App",

  components: {
    Welcome,
    HomeParallax,
    Footer,
    Introduction,
    Distribution
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
  .allWidthOnMobile{
    display: block;
  }
  .homeMargin{
    margin-top: 50px !important;
  }
}
@media screen and (min-width: 768px) {
  .homeMargin{
    margin-top: 100px !important;
  }
  .allWidthOnMobile{
    display: flex;
  }
}

#v-app-container {
  background: linear-gradient(300deg, #000000, #504a4a);
  background-size: 100% 100%;

  -webkit-animation: AnimationName 30s ease infinite;
  -moz-animation: AnimationName 30s ease infinite;
  animation: AnimationName 30s ease infinite;
}

.pointerOnHover {
  cursor: pointer;
}

.blueColor {
  color: rgb(51 215 241)
}

.pinkColor {
  color: rgb(230 75 182)
}

a.customLink {
  color: white !important;
  border-bottom: 2px solid white;
  text-decoration: none;
}
</style>