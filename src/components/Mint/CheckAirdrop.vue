<template>
  <div>
<!--    <v-row>-->
<!--      <v-col cols="12" class="text-left">-->
<!--        <h3>Check if you are eligible for the airdrop</h3>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--    <v-row justify="center">-->
<!--      <v-col cols="8">-->
<!--        <v-text-field-->
<!--          v-model="address"-->
<!--          label="Address"-->
<!--          dark-->
<!--          prepend-icon="mdi-wallet"-->
<!--        ></v-text-field>-->
<!--      </v-col>-->
<!--      <v-col cols="4">-->
<!--        <v-btn-->
<!--          light-->
<!--          :disabled="!validAddress"-->
<!--          @click="checkButton"-->
<!--        >-->
<!--          Search-->
<!--        </v-btn>-->
<!--      </v-col>-->
<!--    </v-row>-->

    <div v-if="!validAddress">
      <v-row justify="center">
        <p>Connect your wallet to search available airdrops.</p>
      </v-row>
      <v-row justify="center">
        <v-btn @click="connectWallet" style="margin-bottom: 10px">
          Connect wallet
        </v-btn>
      </v-row>
    </div>

    <div v-if="loading">
      <v-row no-gutters justify="center" class="py-4 pt-16">
        <v-progress-circular
          :size="80"
          color="white"
          indeterminate
        ></v-progress-circular>
      </v-row>
      <v-row no-gutters justify="center" class="py-4 pt-16">
        <p>Searching airdrops</p>
      </v-row>
    </div>
    <div v-else-if="!loading && validAddress">
      <v-row justify="center" ><h2>You are elegible to claim {{totalAirdrops}} NFTs</h2></v-row>
      <v-row no-gutters class="pt-5" justify="center">

        <v-card
          v-for="(airdrop, index) in getAirdropInfo"
          :key="index"
          class='mb-5 mx-2'
          :style="airdrop.airdropAvailable ? '' : 'display: none;'"
          :width="screenWidth > 768 ? '14vw' : '100%'"
          style="margin-top: 20px"
          dark
        >
          <v-card-title>
            <v-row no-gutters justify="center" style="font-size: 12px;  text-transform: uppercase;" class="blueColor">
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
                  : "Not eligible"
              }}
            </v-row>
          </v-card-text>
          <v-card-actions>
            <!-- Disabled -->
<!--            <v-row no-gutters justify="center">-->
<!--              <v-btn dark v-if="airdrop.airdropAvailable" :to="`/airdrop/${airdrop.chainId}/${address}`"> Claim </v-btn>-->
<!--            </v-row>-->
          </v-card-actions>
        </v-card>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { ethers } from "ethers";
import { getNetworks } from "@/utils/networks"

export default {
  data: function () {
    return {
      address: "",
      loading: false
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
      let airdropFound = false
      for (let chainId in this.airdropState) {
        let network = networks[chainId];
        if (network) {
          airdropFound = airdropFound || this.airdropState[chainId];
          airdropInfo.push({
            network: network,
            chainId: chainId,
            airdropAvailable: this.airdropState[chainId],
          });
        }
      }

      if (airdropFound){
        this.startConfettiEffects()
      }
      return airdropInfo;
    },
    totalAirdrops() {
      let networks = this.getAirdropInfo
      let total = 0
      networks.forEach((network) => {
        if (network.airdropAvailable) {
          total++
        }
      });

      return total
    },
    screenWidth() {
      return window.innerWidth
    },
  },
  methods: {
    ...mapActions("connectweb3", ["checkAirdrop", "connectWallet"]),
    checkButton() {
      this.loading = true;
      this.checkAirdrop(this.address).finally(() => {
        this.loading = false;
      });
    },
    startConfettiEffects() {
      this.$confetti.start();
      setTimeout(() => {
        this.$confetti.stop();
      }, 3000);
    },
  },
};
</script>

<style>
</style>