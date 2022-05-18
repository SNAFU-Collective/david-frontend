<template>
    <v-app style="color: #fff" id="v-app-container">

    <Header/>

    <HomeParallax/>

    <v-container style="z-index: 2">
      <Giveaway/>
      <Welcome id="welcomeSection" class="welcomeSection"/>
      <Introduction class="homeMargin"/>
      <Distribution id="distributionSection"/>
      <Bonuses class="homeMargin"/>
      <Team id="teamSection"/>
      <VideoKez class="homeMargin"/>
      <FAQ class="homeMargin"/>
    </v-container>

    <Footer class="homeMargin"/>

    <v-img style="z-index: 1" src="/background/graffiti_4.png" id="graffiti4"></v-img>
    <v-img style="z-index: 1" src="/background/graffiti_5.png" id="graffiti5"></v-img>
    <v-img style="z-index: 1" src="/background/graffiti_2.png" id="graffiti2"></v-img>
    <v-img style="z-index: 1" src="/background/graffiti_7.png" id="graffiti7"></v-img>
    <v-img style="z-index: 1" src="/background/graffiti_8.png" id="graffiti8"></v-img>
</v-app>
</template>

<script>
import Introduction from "@/components/Introduction"
import Distribution from "@/components/Distribution"
import Giveaway from "@/components/Giveaway"
import VideoKez from "@/components/VideoKez"
import Bonuses from "@/components/Bonuses"
import Welcome from "@/components/Welcome"
import FAQ from "@/components/FAQ"
import Team from "@/components/Team"
import HomeParallax from "@/components/HomeParallax"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"

export default {
  name: 'Home',
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
    FAQ,
    Giveaway
  },

}
</script>

