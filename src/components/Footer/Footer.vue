<template>
  <v-footer
      dark
      padless
  >
    <v-card
        flat
        tile
        class="text-center"
        style=" width: 100%"
    >
      <v-card-text class="mt-5 mb-10">
        <v-row justify="center" class="mb-5 mt-10">
          <h3>FOLLOW US</h3>
        </v-row>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="mx-4 white--text"
                icon
                v-bind="attrs"
                v-on="on"
                @click="goTo('https://twitter.com/bored_david_nft')"
            >
              <v-icon size="24px">
                mdi-twitter
              </v-icon>
            </v-btn>
          </template>
          <span>Follow us on Twitter</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="mx-4 white--text"
                icon
                @click="goTo('https://discord.gg/kvbxMfUyQD')"
                v-bind="attrs"
                v-on="on"
            >
              <v-icon size="24px">
                mdi-discord
              </v-icon>
            </v-btn>
          </template>
          <span>Chat with us on SNAFU Discord</span>
        </v-tooltip>
      </v-card-text>

<!--      <v-card-text class="white&#45;&#45;text footerText" style="width: 100%">-->
<!--        <span>Don't miss the drop, whitelist your wallet!</span>-->
<!--        <br>-->
<!--        <v-btn text class="white&#45;&#45;text" style="color: white" @click="goTo('https://forms.gle/P3YE3NAJ5kbNHvYV8')">-->
<!--          Add to Whitelist-->
<!--        </v-btn>-->
<!--      </v-card-text>-->

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <span>© 2022 by SNAFU Collective, Italia</span>
        <br>
        <a>hello@nftsnafu.org</a>
      </v-card-text>
    </v-card>
    <v-img style="position: absolute;
    opacity: 0.1;
    width: 250px;
    top: 0;" src="/background/graffiti_3.png" />
  </v-footer>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    goTo(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style>
@media screen and (min-width: 768px) {
  .footerText {
    padding: 40px;
    line-height: 1.2;
  }
}

@media screen and (max-width: 768px) {
  .footerText {
    margin: 0;
    line-height: 1.4;
  }
}
</style>