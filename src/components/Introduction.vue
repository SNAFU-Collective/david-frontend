<template>
  <v-row class="allWidthOnMobile">
    <v-col class="pa-10" md="5">
      <v-row>
        <h3  class="pinkColor">A MULTICHAIN NFT COLLECTION</h3>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
          We think art shouldn't have barriers, so it's crazy to create artificial ones: this is why at we decided to mint the NFTs on <b class="blueColor">Ethereum, Gnosis Chain, Avalanche, Polygon and Binance Smart Chain</b>.
        </p>
      </v-row>

    </v-col>
    <v-col md="6" offset-md="1" sm="12" xs="12" class="pa-10">
      <v-row class="" >
        <h3  class="pinkColor">THE BIGGEST NFT AIRDROP EVER SEEN!</h3>
      </v-row>
      <v-row>
        <p class="mt-5" style="text-align: justify;">
          To celebrate the <b class="blueColor">1 year birthday of SNAFU</b> we decided to <b class="blueColor">airdrop</b> the majority of <b class="blueColor">NFTs to projects, dev teams and communities</b> that helped us during this year, that provide usefully resources and tools to the web3 community.
        </p>
      </v-row>

      <v-row class="mt-10">
        <h5 class="blueColor">PROJECTS AIRDROPPED (SO FAR...)</h5>
      </v-row>
      <!--      <v-row class="mt-10" >-->
      <!--        <h6>ETHEREUM</h6>-->
      <!--      </v-row>-->
      <v-row class="mt-4">
        <v-avatar v-for="(project, index) in airdroppedProjects" :key="index" size="35" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="project.logo" @click="goTo(project.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{project.name}}</span>
          </v-tooltip>

        </v-avatar>

        <p class="mt-5">
          Want to receive the airdrop? <a href="https://discord.gg/kvbxMfUyQD" target="_blank" class="customLink">Get in touch with us</a>.
        </p>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import {filter} from 'lodash'
export default {
  components: {

  },
  methods: {
    goTo(url) {
      window.open(url, '_blank')
    },
    projects(blockchainCode) {
      return filter(this.airdroppedProjects, {blockchain: blockchainCode})
    }
  },
  data() {
    return {
      airdroppedProjects: [
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'eth'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'eth'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'avax'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'avax'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'bnb'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png',
          blockchain: 'polygon'
        },
      ]
    }
  },
  computed: {},
}
</script>

<style>
.welcome {
  color: white;
}

@media screen and (max-width: 768px) {
  .onlyDesktop {
    display: none;
  }
}
</style>