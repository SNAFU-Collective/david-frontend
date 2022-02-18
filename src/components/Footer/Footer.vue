<template>
  <v-footer
      dark
      padless
  >
    <v-card
        flat
        tile
        class="text-center"
        style="background-color: #000; width: 100%"
    >
      <v-card-text class="mt-5">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="mx-4 white--text"
                icon
                v-bind="attrs"
                v-on="on"
                @click="goTo('https://twitter.com/nftsnafu')"
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

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="mx-4 white--text"
                icon
                @click="goTo('https://t.me/joinchat/8BfTPOsJZ8o3YjJk')"
                v-bind="attrs"
                v-on="on"
            >
              <v-icon size="24px">
                mdi-send
              </v-icon>
            </v-btn>
          </template>
          <span>Chat with us on SNAFU Telegram</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="mx-4 white--text"
                icon
                @click="goTo('https://github.com/SNAFU-Collective')"
                v-bind="attrs"
                v-on="on"
            >
              <v-icon size="24px">
                mdi-github
              </v-icon>
            </v-btn>
          </template>
          <span>Review our smart contracts</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                class="mx-4 white--text"
                icon
                @click="goTo('https://www.app.nftsnafu.org/')"
                v-bind="attrs"
                v-on="on"
            >
              <v-icon size="24px">
                mdi-web
              </v-icon>
            </v-btn>
          </template>
          <span>Go to SNAFU</span>
        </v-tooltip>
      </v-card-text>

      <v-card-text class="white--text footerText" style="width: 100%">
        <span>David is a masterpiece of Renaissance sculpture created by the Italian artist Michelangelo.</span>
        <br>
        <span>We, the SNAFU Collective, had no choice but to choose this masterpiece as the theme of our PFP Collection.</span>
        <br>
        <span>Follow us on social media to be updated about the collection, minting date, how this collection will be integrated into SNAFU and all the benefits Bored David will give you!</span>
        <br>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        <span>© 2022 by SNAFU Collective, Italia</span>
        <br>
        <a>hello@nftsnafu.org</a>
      </v-card-text>
    </v-card>
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