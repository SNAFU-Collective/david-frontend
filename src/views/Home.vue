<template>
  <div>
    <HomeParallax/>

    <SaleView/>
    <v-container class="mt-16">
      <v-col class="pa-10" md="12">
        <v-row>
          <h3 class="pinkColor">BORED DAVID IS A MULTICHAIN NFT COLLECTION</h3>
        </v-row>
        <v-row class="mt-10" style="text-align: justify;">
          <p>
            We think art shouldn't have barriers, so it's crazy to create artificial ones. We decided to
            mint Bored David where our community is and where it can be accessible to all: <b class="blueColor">Ethereum, Gnosis Chain,
            Avalanche, Polygon, Binance Smart Chain and Aurora</b>.
          </p>
        </v-row>
        <v-row class="mt-10" style="text-align: justify;">
          <p>
            All NFTs are generated uniquely in the same generation batch, then distributed to the community separately through different chains.
            Each chain has its max supply of Bored Davids.
          </p>
        </v-row>
        <v-row class="mt-10" style="text-align: justify;">
          <p>
            The address of the smart contract of Bored David is the same across all the chains:
          </p>
        </v-row>
        <v-row class="mt-10" style="text-align: justify;">
          <ul>
            <li>Ethereum: <a href="https://etherscan.io/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
            <li>Polygon: <a href="https://polygonscan.com/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
            <li>Binance: <a href="https://bscscan.com/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
            <li>Avalanche: <a href="https://snowtrace.io/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
            <li>Aurora: <a href="https://aurorascan.dev/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a4" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
            <li>Gnosis: <a href="https://blockscout.com/xdai/mainnet/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C" target="_blank">0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C</a></li>
          </ul>
        </v-row>
        <v-row class="mt-10" style="text-align: justify;">
          <p>
            <b class="pinkColor">Only trust when interacting with this address.</b>
          </p>
        </v-row>
        <v-row class="mt-10" style="text-align: justify;">
          <p>
            Want to read more about the technical stuff? Read <a href="https://medium.com/@snafu-collective/bored-david-technical-paper-8c5163386ceb" target="_blank">this article</a>.
          </p>
        </v-row>
      </v-col>
    </v-container>

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
    SaleView,
  },

}
</script>

