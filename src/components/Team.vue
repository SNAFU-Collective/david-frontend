<template>
  <v-row style="color: white; align-items: center; display: block" class="allWidthOnMobile">
    <v-row class="px-10">
      <h3 class="pinkColor">TEAM</h3>
    </v-row>
    <v-row class="pa-10">
      <v-hover style="cursor: pointer" v-for="member of members" :key="member.nickname" class="teamImage">
        <v-img slot-scope="{ hover }" v-if="hover" :src="member.src" width="50px" class="ma-1"
               transition="slide-y-transition">
          <div style="background-color: rgba(0,0,0,0.47); width: 100%; height: 100%;">
            <v-btn text style="width: 100%;height: 100%; color:#fff; ">{{member.nickname}} | {{member.description}}</v-btn>
          </div>
        </v-img>
        <v-img v-else :src="member.src" width="50px" class="ma-1"
               transition="slide-y-transition"></v-img>
      </v-hover>
    </v-row>
  </v-row>
</template>

<script>
export default {
  components: {},
  methods: {
  },
  data() {
    return {
      members: [
        {
          src: '/pfp/311.png',
          nickname: 'kez',
          description: 'artist',
          socials: []
        },
        {
          src: '/pfp/277.png',
          nickname: 'agilulfo',
          description: 'dev',
          socials: []
        },
        {
          src: '/pfp/1805.png',
          nickname: 'missigno',
          description: 'dev',
          socials: []
        },
        {
          src: '/pfp/1543.png',
          nickname: 'fe',
          description: 'social media',
          socials: []
        },
        {
          src: '/pfp/1077.png',
          nickname: 'HAWK',
          description: 'dev',
          socials: []
        },
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
  .teamImage {
    width: 50px !important;
  }
}
@media screen and (max-width: 768px) {
  .closeButton {
    display: none;
  }
  /*.teamImage {*/
  /*  width: 45% !important;*/
  /*}*/
}
</style>