<template>
  <div class="headerMain">
    <div id="desktopHeader">
      <v-col cols="2" id="pinnedLeftHeader">
          <router-link :to="{ name: 'Home'}"><img width="150px" src="logo.png"/></router-link>
      </v-col>

    <v-col cols="7" id="subtitle">
       <router-link class="backHome" :to="{ name: 'Airdrop'}">CHECK AIRDROP</router-link>
       <router-link class="backHome" :to="{ name: 'Wallet'}">MY PROFILE</router-link>
    </v-col> 

      <v-col cols="3">
        <wallet-status class="mt-5 pb-2 walletHeader"/>
      </v-col>

    </div>

    <div id="mobileHeader">
      <v-col cols="6" id="mobileLogoContainer">
          <router-link :to="{ name: 'Home'}"><v-img width="100px" src="logo.png"></v-img></router-link>
      </v-col>
      <v-col cols="6" style="text-align: right">
        <h2 style="color: white">MINTING 31 MAY!</h2>
      </v-col>
<!--      <v-col cols="1" id="menuMobile">-->
<!--        <Slide right :closeOnNavigation="true" @openMenu="handleOpenMenu" @closeMenu="handleCloseMenu"-->
<!--               :width=windowWidth>-->
<!--          <wallet-status class="mt-5 pb-2 walletHeader"/>-->
<!--          <router-link class="backHome" :to="{ name: 'Home'}">HOME</router-link>-->
<!--          <router-link class="backHome" :to="{ name: 'Wallet'}">MY PROFILE</router-link>-->
<!--        </Slide>-->
<!--      </v-col>-->

    </div>
  </div>
</template>

<script>
import {Slide} from 'vue-burger-menu'
import WalletStatus from '../Wallet/WalletStatus.vue'

export default {
  components: {
     WalletStatus,
    // Slide
  },
  methods: {
    handleOpenMenu() {
      document.querySelector(".bm-burger-button").style.display = 'none'
    },
    handleCloseMenu() {
      document.querySelector(".bm-burger-button").style.display = 'block'
    },
    openBuySnafuModal() {
      this.showBuySnafuModal = true
    },
    openVoteModal() {
      this.showVoteModal = true
    },
    openMarketModal() {
      this.showMarketModal = true
    },
    openLearnMoreModal() {
      this.showLearnMoreModal = true
    },
    closeModal() {
      this.showBuySnafuModal = false
      this.showVoteModal = false
      this.showMarketModal = false
      this.showLearnMoreModal = false
      this.$emit("updateDialog", false)
    },
    goTo(url) {
      window.open(url, '_blank')
    }
  },
  data() {
    return {
      showBuySnafuModal: false,
      showVoteModal: false,
      showMarketModal: false,
      showLearnMoreModal: false,
      windowWidth: window.innerWidth.toString(),
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.meta.headerSubtitle
    },
  },
}
</script>

<style>
.highlightOnHover:hover {
  background-color: #a7a7a752;
}

.headerMain {
  position: absolute;
  width: 100%;
  top: 0;
}
@media screen and (min-width: 769px) {
  #desktopHeader {
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.9556197478991597) 0%, rgba(0,0,0,0.7679446778711485) 49%, rgba(0,0,0,0) 100%);
    display: flex;
    align-content: center;
    align-items: center;
    padding: 0 20px;
  }

  #menuMobile {
    display: none;
  }

  #mobileHeader {
    display: none;
  }

  #pinnedLeftHeader {
    /*position: absolute;*/
    /*top: 20px;*/
    display: inline-table;
    z-index: 11111;
    left: 10px
  }

  #pinnedLeftHeader > #logo {
    width: 65px;
    height: 65px;
    position: absolute;
    top: 125px;
    left: 60px;
    cursor: pointer;
  }

  #desktopHeader > #subtitle {
    /*position: absolute;*/
    /*top: 50px;*/
    /*left: 250px;*/
    font-weight: bold;
    letter-spacing: 0.1em;
    font-size: 17px;
  }

  #menuDesktop {
    position: fixed;
    right: 3vw;
    top: 50px;
    display: grid;
  }

  .backHome {
    text-decoration: unset;
    color: #ffffff !important;
    font-size: 15px;
    font-weight: 600;
    padding: 0 5px;
    margin: 0 10px;
  }

  .backHome:hover {
    color: #b6b6b6 !important;
    /* position: absolute; */
    left: 0;
    bottom: 1px;
    border-width: 0 0 1px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    border-style: solid;
  }

  .v-application a {
    /*color: #303030 !important;*/
  }

  a.backHome.router-link-exact-active.router-link-active {
    color: #ffffff !important;
    /* position: absolute; */
    left: 0;
    bottom: 1px;
    border-width: 0 0 1px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    border-style: solid;
  }

  .arrowRedirect:before {
    font-size: 13px;
    padding-bottom: 7px;
  }
}

@media screen and (max-width: 768px) {
  #desktopHeader {
    display: none;
  }

  #mobileHeader {
    display: block;
  }

  #logoMobile {
    width: 33px;
    height: 33px;
    /*height: 25px;*/
    cursor: pointer;
    margin-top: 2px;
  }

  #snafuTextMobile {
    text-decoration: unset;
    font-size: 30px;
    font-weight: bold;
    color: #303030;
    letter-spacing: 0.05em;
    line-height: 1.2em;
  }

  #subtitleMobile {
    margin-top: 5px;
    font-weight: bold;
    letter-spacing: 0.2em;
    font-size: 16px;
  }

  #subtitleMobile > a {
    text-decoration: unset;
    color: #303030;
  }

  #mobileLogoContainer {
    display: flex;
    top: 10px;
    left: 10px;
  }

  #mobileHeader {
    display: flex;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 49%, rgba(0,0,0,0) 100%);
    align-content: center;
    align-items: center;
    padding: 0 20px;
  }

  .bm-burger-button {
    cursor: pointer;
    height: 30px;
    left: 36px;
    position: absolute;
    top: 30px;
    width: 30px;
  }

  .bm-burger-bars {
    background-color: white !important;
  }

  .line-style {
    height: 9% !important;
    left: 0;
    position: absolute;
    right: 0;
  }

  .bm-cross-button {
    height: 40px;
    width: 40px;
  }

  span.bm-cross-button.cross-style {
    right: 30px !important;
    margin-top: 15px;
  }

  span.bm-cross {
    height: 30px !important;
  }

  .bm-menu {
    background-color: #303030;
    height: 100%;
    left: 0;
    overflow-x: hidden;
    padding-top: 60px;
    position: fixed;
    top: 0;
    transition: .5s;
    z-index: 1000;
    opacity: 0.9;
  }

  .bm-item-list > * {
    display: flex;
    padding: .7em 1.5em !important;
    text-decoration: none;
    font-size: 27px;
    padding-top: 6px !important;
    justify-content: flex-end;
    font-weight: 500;
    letter-spacing: 2px;
  }

  .bm-item-list {
    margin-top: 25px;
  }

  #menuMobile > div > div > div.bm-menu > nav > a.backHome.router-link-exact-active.router-link-active {
    color: rgb(143, 143, 143) !important;
  }

  #menuMobile > div > div > div.bm-menu > nav > a {
    color: white;
  }

  .arrowRedirect:before {
    font-size: 18px;
    padding-bottom: 5px;
    color: white;
  }

}
</style>