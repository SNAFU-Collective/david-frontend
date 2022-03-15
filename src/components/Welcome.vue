<template>
  <v-row style="color: white; align-items: center;" class="allWidthOnMobile">
    <v-col md="5" class="pa-10">
      <v-row>
        <h2 >WELCOME TO BORED DAVID</h2>
      </v-row>
      <v-row style="text-align: justify;">
        <p class="mt-10">
          <a href="https://en.wikipedia.org/wiki/David_(Michelangelo)" target="_blank" class="customLink">David</a> is a <b class="blueColor">masterpiece of Renaissance sculpture</b>, created by the Italian artist <b class="blueColor">Michelangelo</b>,
          that we decided to use as the SNAFU mascot.
        </p>
      </v-row>
      <v-row class="mt-10" >
        <h3 class="pinkColor">BY SNAFU COLLECTIVE</h3>
      </v-row>
      <v-row>
        <p class="mt-5" style="text-align: justify;">
          This NFT collection is created by SNAFU, an <b class="blueColor">Italian underground art collective</b> that established a platform
          that leverages the new power NFTs have brought to the art world to <b class="blueColor">provide a steadier revenue stream to the global and local art community.</b>
        </p>
<!--        TODO: mettere nella sezione del "cosa ti da in più"-->
<!--        We created a colorful and engaging platform (also called SNAFU) where artists can mint their work as NFTs and interact directly with patrons-->
<!--        and collectors.-->
        <a href="https://app.nftsnafu.org" target="_blank" class="customLink">Visit SNAFU</a>
      </v-row>
    </v-col>
    <v-col class="pa-10" md="6" offset-md="1" sm="12" xs="12">
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
        @click="fullscreen = false"
    >
      <v-btn
          icon
          style=""
          @click="fullscreen = false"
          class="closeButton"
      >
<!--        <h4 class="mr-10">Close</h4>-->
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
.closeButton {

}
@media screen and (min-width: 768px) {
  .closeButton {
    position: fixed !important;
    top: 50%;
    right: 30% ;
  }
}
@media screen and (max-width: 768px) {
  .closeButton {
    display: none;
  }
}
</style>