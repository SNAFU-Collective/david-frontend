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
          question: 'Where can I buy Bored David?',
          answer: 'You will be able to mint Bored David NFTs on this website when the minting will start.'
        },
        {
          question: 'When can I buy Bored David?',
          answer: 'COMMON NFTs will be available to claim and mint at the end of May 2022.'
        },
        {
          question: 'When can I buy RARE NFTs?',
          answer: 'Mint date of RARE NFTs will be defined, but it will for sure be after all the common NFTs will be claimed/minted.'
        },
        {
          question: 'Can I buy with credit card?',
          answer: 'No. You will need to use the default currency of the blockchain where you want to mint the NFT on (eg: ETH on Ethereum, xDAI on Gnosis Chain, AVAX on Avalanche, etc. If you want to buy with credit card you will need to first use other services to onboard, eg: https://ramp.network/'
        },
        {
          question: 'How can I claim airdropped NFT?',
          answer: 'We will add a section to this webapp where you will be able to see the airdrops you can claim and mint the NFT. Remember: the NFT won\'t be sent to you, you will need to manually mint it for free.'
        },
        {
          question: 'What\'s the roadmap?',
          answer: 'First thing is to integrate the pfp collection inside the SNAFU Dapp to allow users set Bored David profile images; Then we will create a discord channel where collectors with rare NFTs will be able to vote for artworks to mint. In the meanwhile we will do tons of giveaways, raffles, meme contests, etc.'
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