<template>
  <v-row class="allWidthOnMobile"  style=" align-items: center;">
    <v-col class="pa-10" md="5" style="display: flex;">
      <v-img src="/pfp/250.png" width="400px" height="400px"></v-img>
    </v-col>
    <v-col md="6" offset-md="1" sm="12" xs="12" class="pa-10">
      <v-row>
        <h3  class="pinkColor">Owning a Bored David means owning the art</h3>
      </v-row>
      <v-row class="mt-10" style="text-align: justify;">
        <p>
                We created a colorful and engaging platform (also called SNAFU) where artists can mint their work as NFTs and interact directly with patrons
                and collectors.
        </p>
        <p>
          COMMON<br/>
          - cambiare img pfp su snafu<br/>
          - contare nella dao<br/>
          RARE<br/>
          - selezionare le opere che gli artisti vogliono mintare<br/>
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