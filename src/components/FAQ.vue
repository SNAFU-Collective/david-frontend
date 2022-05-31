<template>
  <v-row style="color: white; align-items: center; display: block" class="allWidthOnMobile" id="faqRow">
    <v-row  class="px-10">
      <h3 class="pinkColor">FAQs</h3>
    </v-row>
    <v-expansion-panels accordion class="px-1 mt-10" multiple v-model="panel">
      <v-expansion-panel
          v-model="panel"
          expand
          style="background-color: rgba(255,255,255,0); color: white;"
          v-for="(faq, index) of faqs"
          :key="index"
      >
        <v-expansion-panel-header style="font-size:18px"><b class="blueColor">{{faq.question}}</b></v-expansion-panel-header>
        <v-expansion-panel-content style="font-size:18px">
          {{faq.answer}}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
<script>
export default {
  components: {
  },
  methods: {
    goTo(url) {
      window.open(url, '_blank')
    },
  },
  data() {
    return {
      panel: [0],
      faqs: [
        {
          question: 'How many NFTs there are in total?',
          answer: 'There are a total of 6666 unique Bored David NFTs divided into 6 batches (randomly). Each blockchain will use its own batch of NFTs. We will support a total of 6 different blockchains: Ethereum, Gnosis Chain, Binance Smart Chain, Avalanche, Polygon, and Aurora.'
        },
        {
          question: 'Is there a time limit to claim my airdrop?',
          answer: 'The addresses of the users that participated in the giveaway quests are whitelisted to free mint the nft. BUT this won’t last forever. Since the supply is not high even if you are whitelisted to free mint if the collection goes sold out on that particular chain then you won’t be able to claim your NFT. This is why you should claim your NFTs immediately in order to not risk losing them.'
        },
        {
          question: 'What\'s the difference between common and rare NFTs?',
          answer: 'When minting the NFT you have two choices you need to make: the blockchain where you want to mint your NFT AND the rarity of the NFT.\n' +
              '\n' +
              'Bored David NFTs have two rarities: COMMON and RARE.\n' +
              '\n' +
              'COMMON NFTs will give you access to the SNAFU DAO.\n' +
              '\n' +
              'RARE NFTs will make you a curator of the SNAFU Collections + other benefits that we can define together with the community (eg: royalties, etc.).'
        },
        {
          question: 'Is there a difference in the attributes of RARE NFTs vs COMMON?',
          answer: 'No. The only difference will be an “R” banner at the bottom right of the image.'
        },
        {
          question: 'What\'s the currency to buy NFTs?',
          answer: 'The prices are the same across all the blockchains but you will need to pay in the native currency of the blockchain (ETH on Ethereum, xDAI on Gnosis Chain, MATIC on Polygon, BNB on Binance Smart Chain, ETH on Aurora).'
        },
        {
          question: 'What does it mean "Waiting for unveiling"?',
          answer: 'When you buy an NFT you will have a “waiting for unveiling” GIF. This means that the metadata of the NFT you bought isn’t updated yet so you still won’t know the attributes of your NFT.\n' +
              '\n' +
              'We will uneil NFTs each hour.\n' +
              '\n' +
              'On Ethereum network the unveiling could have some delay due to congestion or high gas fees.'
        },
        {
          question: 'How can I bridge money between the different blockchains?',
          answer: 'You can use several bridges to do this. We recomend Connext (https://bridge.connext.network/) and Rainbow Bridge for Aurora (https://rainbowbridge.app/transfer). '
        },
      ]
    }
  },
  computed: {},
}
</script>

<style>
#faqRow i.v-icon.notranslate.mdi.mdi-chevron-down.theme--light {
  color: rgb(51 215 241);
}
</style>