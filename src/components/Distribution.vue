<template>
  <v-row style="align-items: center;">
    <v-col class="onlyDesktop pa-15" md="5">
      <v-row>
        <h5  class="pinkColor">AIRDROPPED PROJECTS (SO FAR...)</h5>
      </v-row>
      <v-row class="mt-10" >
        <h6 style="color: #3975af">ETHEREUM</h6>
      </v-row>
      <v-row class="mt-4">
        <v-avatar v-for="(project, index) in projects('eth')" :key="index" size="35" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-img :src="project.logo" @click="goTo(project.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{project.name}}</span>
          </v-tooltip>

        </v-avatar>
      </v-row>

      <v-row class="mt-6" >
        <h6 style="color: #147a5c">GNOSIS CHAIN</h6>
      </v-row>
      <v-row class="mt-4">
        <v-avatar v-for="(project, index) in projects('xdai')" :key="index" size="40" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="project.logo" @click="goTo(project.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{project.name}}</span>
          </v-tooltip>
        </v-avatar>
      </v-row>

      <v-row class="mt-6" >
        <h6 style="color: #e84142">AVALANCHE</h6>
      </v-row>
      <v-row class="mt-4">
        <v-avatar v-for="(project, index) in projects('avax')" :key="index" size="40" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="project.logo" @click="goTo(project.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{project.name}}</span>
          </v-tooltip>
        </v-avatar>
      </v-row>

      <v-row class="mt-6" >
        <h6 style="color: #7f45de">POLYGON</h6>
      </v-row>
      <v-row class="mt-4">
        <v-avatar v-for="(project, index) in projects('polygon')" :key="index" size="40" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="project.logo" @click="goTo(project.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{project.name}}</span>
          </v-tooltip>
        </v-avatar>
      </v-row>

      <v-row class="mt-6" >
        <h6 style="color: #ebb42e">BINANCE CHAIN</h6>
      </v-row>
      <v-row class="mt-4">
        <v-avatar v-for="(project, index) in projects('bnb')" :key="index" size="40" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="project.logo" @click="goTo(project.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{project.name}}</span>
          </v-tooltip>
        </v-avatar>
      </v-row>
    </v-col>
    <v-col md="6" offset-md="1" sm="12" xs="12" class="pa-15">
      <v-row>
        <h2  class="pinkColor">A MULTICHAIN NFT COLLECTION</h2>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
          We think art shouldn't have barries, so it's crazy to create artificial ones. This is why at SNAFU we decided to provide nft bridges to our users with the help of <a href="https://xp.network/" target="_blank">XP.Network</a>.
        </p>
        <p class="mt-5" style="text-align: justify;">
          To celebrate this achievement we decided to mint our unique Bored David NFTs on <b class="blueColor">Ethereum, Gnosis Chain, Avalanche, Polygon and Binance Smart Chain</b>.
        </p>
      </v-row>

      <v-row class="mt-10" >
        <h4  class="pinkColor">THE BIGGEST NFT AIRDROP EVER SEEN!</h4>
      </v-row>
      <v-row>
        <p class="mt-5" style="text-align: justify;">
          We are airdropping the majority of NFTs to projects, dev teams and communities that provide usefully resources, support and applications to the web3 community.
          Right now we are whitelisting all the addresses, when we will go live you will be able to mint the NFTs for free.
        </p>
        <p>
          Want to receive the airdrop? <a href="https://discord.gg/kvbxMfUyQD" target="_blank">Get in touch with us</a>.
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