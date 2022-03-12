<template>
  <v-row style="align-items: center;">
    <v-col cols-md="5" cols-xs="12" colls-sm="12">
      <v-row>
        <h5>AIRDROPPED PROJECTS (SO FAR...)</h5>
      </v-row>
      <v-row class="mt-15">
        <v-avatar v-for="(project, index) in airdroppedProjects" :key="index" style="" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
                <v-img :src="project.logo" @click="goTo(project.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{project.name}}</span>
          </v-tooltip>

        </v-avatar>
      </v-row>
    </v-col>
    <v-col colls-md="6"  colls-md-offset="1" colls-xs="12" colls-sm="12" >
      <v-row>
        <h2>BIGGEST CROSS-CHAIN AIRDROP IN NFT HISTORY!</h2>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
          We think art shouldn't have barries, so it's crazy to create artificial ones. This is why at SNAFU we decided to provide nft bridges to our users with the help of XP.Network.
        </p>
      </v-row>

      <v-row class="mt-10" >
        <h4>MULTICHAIN COLLECTION</h4>
      </v-row>
      <v-row>
        <p class="mt-5" style="text-align: justify;">
          To celebrate this achievement we decided to mint our unique Bored David NFTs on <b>Ethereum, Gnosis, Avalanche, Polygon and Binance Smart Chain</b>.
        </p>
      </v-row>

      <v-row class="mt-10" >
        <h4>AIRDROP</h4>
      </v-row>
      <v-row>
        <p class="mt-5" style="text-align: justify;">
          We are airdropping the majority of NFTs to projects, dev teams and communities that provide usefully resources, support and applications to the web3 community.
          Right now we are whitelisting all the addresses, when we will go live you will be able to mint the NFTs for free.
        </p>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {

  },
  methods: {
    goTo(url) {
      window.open(url, '_blank')
    }
  },
  data() {
    return {
      airdroppedProjects: [
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png'
        },
        {
          name: 'NFBeez',
          website: '',
          logo: '/projects/twitter.png'
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
</style>