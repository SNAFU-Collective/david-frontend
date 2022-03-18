<template>
  <v-row style="color: white; align-items: center; display: block" class="allWidthOnMobile" id="faqRow">
    <v-row  class="px-10">
      <h3 class="pinkColor">FAQs</h3>
    </v-row>
    <v-expansion-panels accordion class="px-1 mt-10" multiple  v-model="panel">
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
          question: 'How can I claim airdropped NFT?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          question: 'Where can I buy Bored David?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          question: 'When can I buy Bored David?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          question: 'When can I buy RARE NFTs?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          question: 'How can I claim airdropped NFT?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
          question: 'What\'s the roadmap?',
          answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
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