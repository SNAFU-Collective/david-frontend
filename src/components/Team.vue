<template>
  <v-row style="color: white; align-items: center; display: block" class="allWidthOnMobile">
    <v-row class="px-10">
      <h3 class="pinkColor">TEAM</h3>
    </v-row>
    <v-row class="pa-10">
        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/147.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">kez | artist</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/147.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/1276.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">agilulfo | dev</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/1276.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/795.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">missigno | dev</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/795.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/1183.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">fe | Social Media</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/1183.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/691.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">shri | dev</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/691.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>
      </v-row>
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