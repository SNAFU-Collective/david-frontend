<template>
  <v-row style="color: white; align-items: center;" class="allWidthOnMobile">
    <v-col>
      <v-row>
        <h2 >TEAM</h2>
      </v-row>
      <v-row>
        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/133.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">kez | artist</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/133.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/18.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">agilulfo | dev</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/18.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/25.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">missingno | dev</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/25.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/30.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">shri | dev</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/30.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>

        <v-hover style="cursor: pointer">
          <v-img slot-scope="{ hover }" v-if="hover" src="../../public/pfp/248.png" width="50px" class="ma-1"
                 transition="slide-y-transition">
            <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
              <v-btn text style="width: 100%;height: 100%; color:#fff; ">fe | Social Media</v-btn>
            </div>
          </v-img>
          <v-img v-else src="../../public/pfp/248.png" width="50px" class="ma-1"
                 transition="slide-y-transition"></v-img>
        </v-hover>
      </v-row>
    </v-col>
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