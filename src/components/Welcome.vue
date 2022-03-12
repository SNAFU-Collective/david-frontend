<template>
  <v-row style="color: white">
    <v-col colls-md="5" colls-xs="12" colls-sm="12">
      <v-row>
        <h1>WELCOME TO BORED DAVID</h1>
      </v-row>
      <v-row>
        <h4 class="mt-10">
          David is a masterpiece of Renaissance sculpture created by the Italian artist Michelangelo.
          We, the SNAFU Collective, had no choice but to choose this masterpiece as the theme of our PFP Collection.
        </h4>
        <h4 class="mt-5">
          To celebrate this achievement we created a PFP collection called Bored David that we want to mint on as many
          chains as possible (Avalanche, Polygon, Gnosis, Fantom, and many more) and airdrop the majority of NFTs to
          projects and people that sustained us during this year and for our next friends. We basically want to make
          the biggest multichain airdrop in NFT history!
        </h4>
      </v-row>
    </v-col>
    <v-col cols-md="6" offset-md="1" cols-xs="12" colls-sm="12">
      <v-row>
        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/18.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; " @click="toggle(18)">Preview</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/18.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/25.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; " @click="toggle(25)">Preview</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/25.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/30.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; " @click="toggle(30)">Preview</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/30.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>
      </v-row>

      <v-row>
        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/133.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; " @click="toggle(133)">Preview</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/133.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/248.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; " @click="toggle(248)">Preview</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/248.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/594.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; " @click="toggle(594)">Preview</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/594.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>
      </v-row>
    </v-col>

    <v-overlay
        :value="fullscreen"
        :opacity="0.8"
        @click="toggle()"
    >
      <v-btn
          icon
          style="position: fixed;top: 50px;right: 150px;"
      >
        <h4 class="mr-10">Close</h4>
        <v-icon style="font-size: 50px">mdi-close</v-icon>
      </v-btn>
      <img :src="src"/>
    </v-overlay>
  </v-row>
</template>

<script>
export default {
  components: {},
  methods: {
    toggle(id = "") {
      this.fullscreen = !this.fullscreen
      this.src = "/pfp/"+id+".png"
    },
  },
  data() {
    return {
      fullscreen: false,
      src: "",
      previewIds: [
          18, 25, 33, 45, 96, 88
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