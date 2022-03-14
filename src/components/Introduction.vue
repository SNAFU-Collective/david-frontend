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

      <v-row class="mt-10">
        <h5>POWERED BY</h5>
      </v-row>
      <v-row>
        <v-avatar v-for="(blockchain, index) in blockchains" :key="index" size="50" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="blockchain.logo" @click="goTo(blockchain.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{blockchain.name}}</span>
          </v-tooltip>

        </v-avatar>
      </v-row>

    </v-col>
    <v-col md="6" offset-md="1" sm="12" xs="12" class="pa-10">
      <v-row class="" >
        <h3  class="pinkColor">THE BIGGEST NFT AIRDROP EVER SEEN!</h3>
      </v-row>
      <v-row>
        <p class="mt-5" style="text-align: justify;">
          To celebrate the <b class="blueColor">1 year birthday of SNAFU</b> we decided to <b class="blueColor">airdrop</b> the majority of <b class="blueColor">NFTs to projects, dev teams and communities</b> that helped us during this year, that provide support, usefully resources and tools to the web3 community.
        </p>
      </v-row>

      <v-row class="mt-10">
        <h5>WHITELISTED PROJECTS (SO FAR...)</h5>
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
      blockchains: [
        {
          name: 'Ethereum',
          website: 'https://ethereum.org/it/',
          logo: '/projects/ethereum.jpg',
        },
        {
          name: 'Gnosis Chain',
          website: 'https://gnosischain.world/',
          logo: '/projects/gnosis.jpg',
        },
        {
          name: 'Polygon',
          website: 'https://polygon.technology/',
          logo: '/projects/polygon.jpg',
        },
        {
          name: 'Avalanche',
          website: 'https://www.avax.network/',
          logo: '/projects/avalanche.jpg',
        },
        {
          name: 'Binance Smart Chain',
          website: 'https://www.bnbchain.world/en/smartChain',
          logo: '/projects/binance.jpg',
        },
      ],
      airdroppedProjects: [
        {
          name: 'Gnosis Chain Team',
          website: 'https://gnosischain.world/',
          logo: '/projects/gnosis.jpg',
          blockchain: 'xdai'
        },
        {
          name: 'NFBeez',
          website: 'https://www.nfbeez.xyz/',
          logo: '/projects/nfbeez.png',
          blockchain: 'xdai'
        },
        {
          name: 'NFTTrader',
          website: 'https://www.nfttrader.io/',
          logo: '/projects/nfttrader.jpg',
          blockchain: 'eth'
        },
        {
          name: '1Hive',
          website: 'https://1hive.io/',
          logo: '/projects/1hive.png',
          blockchain: 'xdai'
        },
        {
          name: 'SNAFU',
          website: 'https://app.nftsnafu.org',
          logo: '/projects/snafu.jpg',
          blockchain: 'xdai'
        },
        {
          name: 'XP Network',
          website: 'https://xp.network/',
          logo: '/projects/xpnetwork.jpg',
          blockchain: 'eth'
        },
        {
          name: 'Eporio',
          website: 'https://epor.io/',
          logo: '/projects/eporio.png',
          blockchain: 'xdai'
        },
        {
          name: 'Rarity Garden',
          website: 'https://rarity.garden',
          logo: '/projects/unifty.jpg',
          blockchain: 'eth'
        },
        {
          name: 'Safe xDai',
          website: 'https://mobile.twitter.com/safexdai',
          logo: '/projects/safexdai.jpg',
          blockchain: 'xdai'
        },
        {
          name: 'xDai Tigers',
          website: 'https://xdaitigers.com/',
          logo: '/projects/xdaitigers.jpg',
          blockchain: 'xdai'
        },
        {
          name: 'Culo Coin',
          website: 'https://theculocoin.com/',
          logo: '/projects/culocoin.jpg',
          blockchain: 'bnb'
        },
        {
          name: 'Paribu Punks',
          website: 'https://twitter.com/paribupunks',
          logo: '/projects/paribupunks.jpg',
          blockchain: 'paribu'
        },
        {
          name: 'Ether Board',
          website: 'https://etherboard.io/',
          logo: '/projects/etherboard.jpg',
          blockchain: 'xdai'
        },
        {
          name: 'Cardstack',
          website: 'https://cardstack.com/',
          logo: '/projects/cardstack.jpg',
          blockchain: 'eth'
        },
        {
          name: 'Avascan',
          website: 'https://avascan.info/',
          logo: '/projects/avascan.jpg',
          blockchain: 'avax'
        },
        {
          name: 'Blockscout',
          website: 'https://blockscout.com/xdai/mainnet/',
          logo: '/projects/blockscout.jpg',
          blockchain: 'xdai'
        },
        {
          name: 'Minerva',
          website: 'https://minerva.digital/',
          logo: '/projects/minerva.jpg',
          blockchain: 'xdai'
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