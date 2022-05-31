<template>
  <v-row class="allWidthOnMobile"  style=" align-items: center;">
    <v-col class="pa-10" md="5">
      <v-img src="/pfp/si1rare.png" ></v-img>
    </v-col>
    <v-col md="6" offset-md="1" sm="12" xs="12" class="pa-10">
      <v-row>
        <h3  class="pinkColor">BECOME AN ART CURATOR</h3>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
          Become a SNAFU CURATOR: decide if an NFT is worth to be minted and sold on the SNAFU platform. Own a  <b class="blueColor">RARE Bored David NFT</b> and drive your passion for art even further!
          <br/>
          Validate artist's artworks, give feedbacks and preview the NFTs before the other collectors.
        </p>
        <p>
          <b class="blueColor">All Bored David NFTs</b> will also <b class="blueColor">give you access</b> to the  <a href="https://vote.nftsnafu.org/" target="_blank" class="customLink">SNAFU DAO</a>.
        </p>
        <p>
          <b class="blueColor">Do you have some interesting ideas on how we could use Bored Davids?</b><br/> Join our <a href="https://discord.gg/hWH9WFskXc" target="_blank" class="customLink">discord</a> and share it with us, we are always listening to our community for doing cool stuff!
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