<template>
  <v-row class="allWidthOnMobile">
    <v-col class="pa-10" md="5">
      <v-row>
        <h3  class="pinkColor">25K UNIQUE NFTs</h3>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
          There will be a maximum of <b class="blueColor">25000 unique Bored Davids</b>, minted across 5 different Blockchains.<br/>
          <b class="blueColor">Each chain will have 5000 unique Bored David NFTs.</b><br/><br/>
          Of those 5000 per chain we will reserve the following percentages:<br/>
          - <b class="blueColor">1000 RARE NFTs</b> reserved for sale<br/>
          - <b class="blueColor">2500 COMMON NFTs</b> airdropped to the community (if we will be unable to airdrop all of them then will leave the remaining for sale)<br/>
          - <b class="blueColor">1000 COMMON NFTs</b> reserved for Pool Together, Farming and Giveaways<br/>
          - <b class="blueColor">500 COMMON NFTs</b> reserved for the team<br/>
        </p>
      </v-row>


    </v-col>
    <v-col md="6" offset-md="1" sm="12" xs="12" class="pa-10">
      <v-img src="/piechart.png"></v-img>
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
    },
  },
  data() {
    return {}
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