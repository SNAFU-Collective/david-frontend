<template>
  <v-app style="color: #fff" id="v-app-container">
    <Header />
    <router-view :key="$route.fullPath"> </router-view>

    <Footer class="homeMargin" />

    <v-img
      style="z-index: 1"
      src="/background/graffiti_4.png"
      id="graffiti4"
    ></v-img>
    <v-img
      style="z-index: 1"
      src="/background/graffiti_5.png"
      id="graffiti5"
    ></v-img>
    <v-img
      style="z-index: 1"
      src="/background/graffiti_2.png"
      id="graffiti2"
    ></v-img>
    <v-img
      style="z-index: 1"
      src="/background/graffiti_7.png"
      id="graffiti7"
    ></v-img>
    <v-img
      style="z-index: 1"
      src="/background/graffiti_8.png"
      id="graffiti8"
    ></v-img>
    
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },

  methods: {
    ...mapActions("connectweb3", ["startWeb3"]),
  },
  beforeMount() {
    this.startWeb3();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Barlow:200,400,600,800");

html,
body {
  font-family: "Barlow", sans-serif;
}

#app {
  font-family: "Barlow", sans-serif;
}

.filter {
  margin: 0;
  font-size: 12px !important;
  color: rgb(143, 143, 143);
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
  .allWidthOnMobile {
    display: block;
  }
  .homeMargin {
    margin-top: 50px !important;
  }
  #graffiti4 {
    position: absolute;
    opacity: 0.1;
    top: 1519px;
    transform: rotate(180deg);
  }
  #graffiti5 {
    position: absolute;
    display: none;
  }
  #graffiti2 {
    position: absolute;
    opacity: 0.05;
    top: 2572px;
    right: 0;
  }
  #graffiti6 {
    position: absolute;
    display: none;
  }
  #graffiti7 {
    position: absolute;
    display: none;
  }
  #graffiti8 {
    position: absolute;
    width: 300px;
    opacity: 0.1;
    top: 4416px;
    right: 0;
  }
  div#bonusesSection,
  div#distributionSection,
  div#welcomeSection,
  div#teamSection {
    margin-top: 100px;
  }
}
@media screen and (min-width: 768px) {
  .homeMargin {
    margin-top: 100px !important;
  }
  .allWidthOnMobile {
    display: flex;
  }
  #graffiti4 {
    position: absolute;
    opacity: 0.1;
    width: 900px;
    left: 50%;
    top: 1014px;
  }
  #graffiti5 {
    position: absolute;
    opacity: 0.03;
    bottom: 0px;
    transform: revert;
    right: 0;
  }
  #graffiti2 {
    position: absolute;
    opacity: 0.05;
    top: 2000px;
    transform: revert;
    left: 0;
  }
  /*#graffiti6 {*/
  /*  position: absolute;*/
  /*}*/
  #graffiti7 {
    position: absolute;
    opacity: 0.1;
    bottom: 1141px;
    transform: revert;
    left: 100px;
    width: 300px;
    z-index: 1;
  }
  #graffiti8 {
    position: absolute;
    opacity: 0.1;
    bottom: 2162px;
    transform: revert;
    right: 80px;
    width: 300px;
    z-index: 1;
  }

  div#bonusesSection,
  div#distributionSection,
  div#welcomeSection,
  div#teamSection {
    margin-top: 150px;
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
  color: rgb(51 215 241);
}

.pinkColor {
  color: rgb(230 75 182);
}

a.customLink {
  color: white !important;
  border-bottom: 2px solid white;
  text-decoration: none;
}
</style>