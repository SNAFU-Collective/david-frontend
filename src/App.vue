<template>
  <v-app style="color: #fff" id="v-app-container">
    <Header/>

    <HomeParallax/>

    <v-container>
      <v-img src="/background/graffiti_4.png" id="graffiti4"></v-img>
      <v-img src="/background/graffiti_5.png" id="graffiti5"></v-img>
      <v-img src="/background/graffiti_2.png" id="graffiti2"></v-img>
      <Welcome id="welcomeSection" class="welcomeSection"/>
      <Introduction class="homeMargin"/>
      <Distribution id="distributionSection"/>
      <Bonuses id="bonusesSection"/>
      <Team id="teamSection"/>
      <VideoKez class="homeMargin"/>
      <FAQ class="homeMargin"/>
    </v-container>

    <Footer class="homeMargin"/>
  </v-app>
</template>

<script>
import {mapActions} from "vuex"
import Introduction from "./components/Introduction"
import Distribution from "./components/Distribution"
import VideoKez from "./components/VideoKez"
import Bonuses from "./components/Bonuses"
import Welcome from "./components/Welcome"
import FAQ from "./components/FAQ"
import Team from "./components/Team"
import HomeParallax from "./components/HomeParallax"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

export default {
  name: "App",

  components: {
    Welcome,
    HomeParallax,
    Footer,
    Introduction,
    Distribution,
    Bonuses,
    VideoKez,
    Team,
    Header,
    FAQ
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
  #graffiti4 {
    position: absolute;
    opacity: 0.1;
    margin-top: 596px;
    transform: rotate(180deg);
  }
  #graffiti5 {
    position: absolute;
    display: none;
  }
  #graffiti2 {
    position: absolute;
    opacity: 0.05;
    top: 46%;
    right: 0;
  }
  div#bonusesSection, div#distributionSection, div#welcomeSection, div#teamSection {
    margin-top: 100px;
  }
}
@media screen and (min-width: 768px) {
  .homeMargin{
    margin-top: 100px !important;
  }
  .allWidthOnMobile{
    display: flex;
  }
  #graffiti4 {
    position: absolute;
    opacity: 0.1;
    width: 900px;
    left: 50%;
    margin-top: 70px;
  }
  #graffiti5 {
    position: absolute;
    opacity: 0.1;
    bottom: 269px;
    transform: revert;
    right: 0;
  }
  #graffiti2 {
    position: absolute;
    opacity: 0.05;
    top:2000px;
    transform: revert;
    left: 0;
  }
  div#bonusesSection, div#distributionSection, div#welcomeSection, div#teamSection {
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