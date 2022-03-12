<template>
  <v-row >
    <v-col cols-md="6" cols-xs="12" colls-sm="12">
      <v-row>
        <h3>AIRDROPPED PROJECTS (SO FAR...)</h3>
      </v-row>
      <v-row class="mt-15">
        <v-avatar v-for="(project, index) in airdroppedProjects" :key="index" style="" class="pointerOnHover ma-1">
          <v-img :src="project.logo"/>
        </v-avatar>
      </v-row>
    </v-col>
    <v-col colls-md="6" colls-xs="12" colls-sm="12">
      <v-row>
        <h1>BIGGEST CROSS-CHAIN AIRDROP IN NFT HISTORY!</h1>
      </v-row>
      <v-row class="mt-10">
        <h4 >
          For those who don’t know us, SNAFU (https://nftsnafu.org 9) is an Italian underground art collective that established a platform that leverages the new power NFTs have brought to the art world to provide a steadier revenue stream to the global and local art community. The collective created a colorful and engaging platform (also called SNAFU) where artists can mint their work as NFTs and interact directly with patrons and collectors. SNAFU also issued a token with the same name, dedicated to creating a DAO that will decide how to sustain the artistic collective’s initiatives, financing projects, and young artists. This independent sustainability-oriented thinking positions SNAFU in the first line with other art world pioneers to genuinely utilize and maximize the relatively young NFT market to reinvent how we deal and consume art.
        </h4>
      </v-row>
      <v-row class="mt-10">
        <h3>HOW TO GET THE AIRDROP</h3>
      </v-row>
      <v-row>
        <h4 class="mt-5">
          Just leave here your address in the comment, we will whitelist it, and when we will go live you will be able to mint it for free.
        </h4>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {

  },
  methods: {},
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
        }
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