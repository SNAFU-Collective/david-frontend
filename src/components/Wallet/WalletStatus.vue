<template>
  <div style="display: flex">
    <div v-if="!isConnected" cols="1" >
      <v-btn @click="connectWallet" style="margin-bottom: 10px" class="connectWalletBtn">
        Connect wallet
      </v-btn>
    </div>
    <div cols="9" no-gutters v-else>

      <v-chip
          :color="isCorrectNetwork ? '#5fb43f' : '#bc423e'"
          :text-color="isCorrectNetwork ? '#fff' : '#fff'"
          style="margin-bottom: 10px; padding-left: 0"
      >
        <router-link class="accountLinkHeader" :to="{ name: 'Wallet'}">
        <v-chip
            style="border: #A7A7A7; cursor: pointer; background-color: #f3f3f3;"
        >
          <span style="color: #303030; font-weight: 500">{{ account | abbreviateAddress }}</span>
        </v-chip>
        </router-link>
        <span style="padding-left: 15px;padding-right: 15px; font-weight: 500">{{ chainId | networkName }}</span>
      </v-chip>

    </div>

    <div cols="1" v-if="isConnected" style="margin-left: 10px;margin-top: 2.5px">
      <v-tooltip bottom color="rgb(0 0 0 / 89%)">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              color="#303030"
              dark
              v-bind="attrs"
              v-on="on"
              class="text-h6"
              icon
              style="background-color: whitesmoke;margin-bottom: 10px;"
              small
              @click="disconnectWallet"
          >
            <v-icon size="25px">mdi-exit-to-app</v-icon>
          </v-btn>
        </template>
        <span>Logout</span>
      </v-tooltip>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
import {mapFields} from 'vuex-map-fields'

export default {
  components: {},
  data() {
    return {
      dialog: false,
      showConfirmSwap: false,
    }
  },
  methods: {
    ...mapActions("connectweb3", ["connectWallet", "disconnectWallet"]),
  },
  computed: {
    ...mapFields("connectweb3", ["isConnected", "account", 'chainId']),
    ...mapGetters("connectweb3", ["isMetamask", "isCorrectNetwork"]),
  },

}
</script>

<style>
.accountLinkHeader {
  text-decoration: none;
}

.headline {
  justify-content: center;
  font-weight: bold !important;
}

.modalSocials {
  font-weight: bold;
  font-size: 17px;
  text-decoration: unset;
}

a.modalSocials:hover {
  color: #000000a3 !important;
}

.modalBody {
  margin: 30px 30px;
  border: #00000045;
  border-style: solid;
  border-width: 1px;
  border-radius: 5px;
  padding: 40px;
}

.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
  border-bottom: #30303047;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

.bodyLink {
  font-weight: bold
}

.bodyLink:hover {
  text-decoration: underline !important;
  text-underline-offset: 2px;
}

@media screen and (max-width: 768px) {
  .modalBody {
    height: auto;
    margin: 5px 5px;
    border: #00000045;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding: 20px;
  }

  .bodyLink {
    color: #303030 !important;
    font-weight: bold
  }

  .connectWalletBtn {
    height: 64px !important;
    min-width: 400px !important;
  }
}
</style>