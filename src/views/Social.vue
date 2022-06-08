<template>
  <div style="min-height: 800px" class="darkBg">
    <v-container class="pt-16">
      <v-row class="pt-16 mt-16" justify="center" >
        <a class="pt-16 twitter-timeline"
           href="https://twitter.com/bored_david_nft"
           data-chrome="nofooter noborders">
          Tweets by @bored_david_nft
        </a>
      </v-row>

    </v-container>
  </div>
</template>

<script>
require('dotenv').config()

export default {
  components: {

  },
  data() {
    return {

    }
  },
  async beforeMount() {

  },
  methods: {

  },
  created() {
    let ckeditor = document.createElement('script');    ckeditor.setAttribute('src',"https://platform.twitter.com/widgets.js");
    document.head.appendChild(ckeditor);
  },
  computed: {
    screenWidth() {
      return window.innerWidth
    },
  },
}
</script>
<style>
.twitter-timeline {
  max-width: 500px !important;
}
</style>

