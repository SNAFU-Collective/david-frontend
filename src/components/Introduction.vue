<template>
  <v-row class="allWidthOnMobile">
    <v-col class="pa-10" md="5">
      <v-row>
        <h3  class="pinkColor">A MULTICHAIN NFT COLLECTION</h3>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
          We think art shouldn't have barriers, so it's crazy to create artificial ones: this is why we decided to mint Bored David on the biggest blockchains out there: <b class="blueColor">Ethereum, Gnosis Chain, Avalanche, Polygon, Binance Smart Chain and Aurora</b>.
        </p>
      </v-row>

      <v-row class="mt-10">
        <h5>MINTED ON</h5>
      </v-row>
      <v-row>
        <v-avatar v-for="(blockchain, index) in blockchains" :key="index" size="50" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="blockchain.logo" @click="goTo(blockchain.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{blockchain.name}} - Click to see Smart Contract</span>
          </v-tooltip>

        </v-avatar>
      </v-row>

      <v-row class="mt-10">
        <h5>TRADED ON</h5>
      </v-row>
      <v-row>
        <v-avatar v-for="(marketplace, index) in marketplaces" :key="index" size="50" class="pointerOnHover ma-1">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-img :src="marketplace.logo" @click="goTo(marketplace.website)" v-bind="attrs" v-on="on"/>
            </template>
            <span>{{marketplace.name}}</span>
          </v-tooltip>

        </v-avatar>
      </v-row>

    </v-col>
    <v-col md="6" offset-md="1" sm="12" xs="12" class="pa-10">
      <v-row class="" >
        <h3  class="pinkColor">COMMUNITY AIRDROP</h3>
      </v-row>
      <v-row>
        <p class="mt-5" style="text-align: justify;">
          To celebrate the <b class="blueColor">1 year birthday of SNAFU</b> we decided to create the first ever multichain collection and <b class="blueColor">airdrop NFTs to projects, dev teams and communities</b> that helped us during this year, that provide support, useful resources and tools to the web3 community. All of this simultaneously on all chains.
        </p>
      </v-row>

      <v-row class="mt-10">
        <h5>WHITELISTED COMMUNITIES (SO FAR...)</h5>
      </v-row>
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
          Want to receive the airdrop? <a href="https://discord.gg/hWH9WFskXc" target="_blank" class="customLink">Get in touch with us</a>.
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
      if (url === "")
        return false

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
          website: 'https://etherscan.io/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C',
          logo: '/projects/ethereum.jpg',
        },
        {
          name: 'Polygon',
          website: 'https://polygonscan.com/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C',
          logo: '/projects/polygon.jpg',
        },
        {
          name: 'Gnosis Chain',
          website: 'https://blockscout.com/xdai/mainnet/address/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C',
          logo: '/projects/gnosis.jpg',
        },

        {
          name: 'Avalanche',
          website: 'https://snowtrace.io/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c',
          logo: '/projects/avalanche.jpg',
        },
        {
          name: 'Binance Smart Chain',
          website: 'https://bscscan.com/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c',
          logo: '/projects/binance.jpg',
        },
        {
          name: 'Aurora',
          website: 'https://aurorascan.dev/address/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c',
          logo: '/projects/aurora.svg',
        },
      ],
      marketplaces: [
        {
          name: 'Opensea - Ethereum',
          website: 'https://opensea.io/collection/bored-david',
          logo: '/projects/opensea.png',
        },
        {
          name: 'Opensea - Polygon',
          website: 'https://opensea.io/collection/bored-david-on-polygon',
          logo: '/projects/opensea-polygon.png',
        },
        {
          name: 'Eporio - Gnosis Chain',
          website: 'https://epor.io/browse?type=listings&network=xDai&collection=boreddavid',
          logo: '/projects/eporio.png',
        },
        {
          name: 'Kalao - Avalanche',
          website: 'https://marketplace.kalao.io/collection/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c',
          logo: '/projects/kalao.png',
        },
        {
          name: 'NFTrade - Binance Smart Chain',
          website: 'https://nftrade.com/assets/bsc/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c?traitIds=',
          logo: '/projects/nfttrade.png',
        },
        {
          name: 'Endemic - Aurora',
          website: 'https://endemic.app/collection/bored-david-on-aurora',
          logo: '/projects/endemic-logo.png',
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
        {
          name: 'Punk Domains',
          website: 'https://punk.domains/#/',
          logo: '/projects/punkdomains.png',
          blockchain: 'xdai'
        },
        {
          name: 'Endemic',
          website: 'https://endemic.app/',
          logo: '/projects/endemic-logo.png',
          blockchain: 'aurora'
        },
        {
          name: 'Lost In Metaverse',
          website: 'https://www.lostinmetaverse.club/',
          logo: '/projects/lostinmetaverse.png',
          blockchain: 'ethereum'
        },
        {
          name: 'Beauty Of Woman',
          website: 'https://www.beautyofwomennft.com/',
          logo: '/projects/bow.svg',
          blockchain: 'ethereum'
        },
        {
          name: 'Mifuto',
          website: 'http://www.mifuto.com/',
          logo: '/projects/mifuto.svg',
          blockchain: 'ethereum'
        },
        {
          name: 'NFT Italia News',
          website: 'https://twitter.com/NFTItalianews',
          logo: '/projects/nftitalianews.jpg',
          blockchain: 'ethereum'
        },
        {
          name: 'Many more!',
          website: 'https://discord.gg/hWH9WFskXc',
          logo: '/projects/more.png',
          blockchain: 'ethereum'
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