<template>
    <div>
    <HomeParallax/>

      <SaleView/>

    <v-container style="z-index: 2">
      <Welcome id="welcomeSection" class="welcomeSection"/>
      <Introduction class="homeMargin"/>
      <Distribution id="distributionSection"/>
      <Bonuses class="homeMargin"/>
      <Team id="teamSection"/>
      <VideoKez class="homeMargin"/>
      <FAQ class="homeMargin"/>
    </v-container>

    </div>
</template>

<script>
import Introduction from "@/components/Introduction"
import Distribution from "@/components/Distribution"
import SaleView from "@/views/SaleView"
import VideoKez from "@/components/VideoKez"
import Bonuses from "@/components/Bonuses"
import Welcome from "@/components/Welcome"
import FAQ from "@/components/FAQ"
import Team from "@/components/Team"
import HomeParallax from "@/components/HomeParallax"

export default {
  name: 'Home',
  components: {
    Welcome,
    HomeParallax,
    Introduction,
    Distribution,
    Bonuses,
    VideoKez,
    Team,
    FAQ,
    SaleView
  },

}
</script>

