<template>
  <div>
    <v-row justify="center">
      <v-col cols="8">
        <v-text-field
          v-model="address"
          label="Address"
          dark
          prepend-icon="mdi-wallet"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <v-btn
          light
          :disabled="!validAddress"
          @click="checkButton"
        >
          Search
        </v-btn>
      </v-col>
    </v-row>

    <div v-if="loading">
      <v-row no-gutters justify="center" class="py-4 pt-16">
        <v-progress-circular
          :size="80"
          color="white"
          indeterminate
        ></v-progress-circular>
      </v-row>
    </div>
    <div v-else>
      <v-row no-gutters class="pt-16">
        <v-card
          v-for="(airdrop, index) in getAirdropInfo"
          :key="index"
          :class="screenWidth > 768 ? index > 0 ? 'ml-10' : 'ml-0' : 'mb-5 mx-2'"
          :width="screenWidth > 768 ? '11vw' : '100%'"
          dark
        >
          <v-card-title>
            <v-row no-gutters justify="center">
              {{ airdrop.network.name }}
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters justify="center">
              <v-img v-if="airdrop.airdropAvailable" src="/pfp/unveiling.gif" width="50px"
                     transition="slide-y-transition"></v-img>
            </v-row>
            <v-row no-gutters justify="center" style="text-align: center" class="pt-5">
              {{
                airdrop.airdropAvailable
                  ? "You can claim a free NFT on " + airdrop.network.name
                  : "Not eligible for airdrop"
              }}
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters justify="center">
              <v-btn dark v-if="airdrop.airdropAvailable" :to="`/airdrop/${airdrop.chainId}/${address}`"> Claim </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ethers } from "ethers";
import { getNetworks } from "@/utils/networks";

export default {
  data: function () {
    return {
      address: "",
      loading: false,
    };
  },
  mounted: function () {
    this.address = this.getUserAccount;
    if (this.validAddress) {
      this.checkButton();
    }
  },
  computed: {
    ...mapGetters("connectweb3", ["getUserAccount", "airdropState"]),
    validAddress() {
      return ethers.utils.isAddress(this.address);
    },
    getAirdropInfo() {
      let networks = getNetworks();
      let airdropInfo = [];
      for (let chainId in this.airdropState) {
        let network = networks[chainId];
        if (network) {
          airdropInfo.push({
            network: network,
            chainId: chainId,
            airdropAvailable: this.airdropState[chainId],
          });
        }
      }
      return airdropInfo;
    },
  },
  methods: {
    ...mapActions("connectweb3", ["checkAirdrop"]),
    checkButton() {
      this.loading = true;
      this.checkAirdrop(this.address).finally(() => {
        this.loading = false;
      });
    },
    screenWidth() {
      return window.innerWidth
    },
  },
};
</script>

<style>
</style>