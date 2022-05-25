<template>
  <div>
    <v-row no-gutters> <h3>Check Airdrop</h3></v-row>
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
          dark
          :disabled="!validAddress"
          @click="checkButton"
        >
          Check
        </v-btn>
      </v-col>
    </v-row>

    <div v-if="loading">
      <v-row no-gutters justify="center" class="py-4">
        <v-progress-circular
          :size="80"
          color="black"
          indeterminate
        ></v-progress-circular>
      </v-row>
    </div>
    <div v-else>
      <v-row no-gutters justify="center" class="py-4">
        <v-card
          v-for="(airdrop, index) in getAirdropInfo"
          :key="index"
          class="mx-10"
          width="10vw"
          dark
        >
          <v-card-title>
            <v-row no-gutters justify="center">
              {{ airdrop.network.name }}
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters justify="center">
              {{
                airdrop.airdropAvailable
                  ? "You can claim a free NFT!"
                  : "Not Available"
              }}
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters justify="center">
              <v-btn dark v-if="airdrop.airdropAvailable"> Claim </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
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
  },
};
</script>

<style>
</style>