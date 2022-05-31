<template>
  <v-row class="allWidthOnMobile" style="align-items: center;">
    <v-col class="pa-10" md="5">
      <v-row>
        <h3  class="pinkColor">QUANTITY</h3>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
          There will be a maximum of <b class="blueColor">6666 unique Bored Davids</b>, minted proportionally across multiple blockchains.<br/>
          We will reserve the following percentages:<br/>
        </p>
          <ul style="text-align: start;">
            <li><b class="blueColor">3100 COMMON NFTs</b> airdropped to the community;</li>
            <li><b class="blueColor">3000 COMMON / RARE NFTs</b> reserved for sale;</li>
            <li><b class="blueColor">450 COMMON NFTs</b> reserved for the team;</li>
            <li><b class="blueColor">116 COMMON NFTs</b> reserved for Pool Together, Farming and Giveaways;</li>
          </ul>
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