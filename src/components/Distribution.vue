<template>
  <v-row class="allWidthOnMobile">
    <v-col class="pa-10" md="5">
      <v-row>
        <h3  class="pinkColor">25K UNIQUE NFTs</h3>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
          There will be a maximum of 25000 unique Bored Davids, minted across 5 different Blockchains.
        </p>
      </v-row>


    </v-col>
    <v-col md="6" offset-md="1" sm="12" xs="12" class="pa-10">
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