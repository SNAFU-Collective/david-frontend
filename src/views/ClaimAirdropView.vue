<template>
  <v-container style="z-index: 2" class="mt-16 pt-16">
    <div v-if="isConnecting">
      <v-row no-gutters justify="center" class="py-4">
        <v-progress-circular
            :size="80"
            color="black"
            indeterminate
        ></v-progress-circular>
      </v-row>
    </div>
    <div v-else>
      <div v-if="wrongChain">
        <v-alert type="error" class="mt-5 mb-5">
          <span class="body-1">
            You are not connected to the correct chain.
          </span>
          <v-btn dark small class="ml-10" @click="connectToChain(claimChainId)" style="position: absolute; right: 25px">
            Switch to {{ claimChainId | networkName }}
          </v-btn>
        </v-alert>
      </div>
      <div v-else-if="wrongAddress">
        <v-alert type="error" class="mt-n3">
          <span class="body-1">
            You are not connected to the correct address. <br/>
            Select {{ claimAddress }} to continue.
          </span>
        </v-alert>
      </div>

      <div v-if="isClaimable" class="mt-10">
        <h3>Congratulations!</h3>
        <h3>You are eligible to mint for free a <b class="blueColor">common Bored David NFT</b> on the <b class="blueColor">{{ claimChainId | networkName }}</b> blockchain.</h3>
{{screenWidth}}
        <v-card
            dark
            :class="screenWidth > 768 ? 'ml-10 mt-5' : 'mb-5 mx-2 mt-5'"
            :width="screenWidth > 768 ? '11vw' : '100%'"
        >
          <v-card-title>
            <v-row no-gutters justify="center">
              {{ claimChainId | networkName }}
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-row no-gutters justify="center">
              <v-img src="/pfp/unveiling.gif" width="50px"
                     transition="slide-y-transition"></v-img>
            </v-row>
            <v-row no-gutters justify="center" style="text-align: center" class="pt-5">
              You can claim a free NFT on {{ claimChainId | networkName }}
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row no-gutters justify="center">
              <v-btn dark v-if="isClaimable" @click="() => showClaimAirdropModal = true" :disabled="wrongChain">
                Mint
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-card>


        <claim-airdrop-modal :show="showClaimAirdropModal" @close="() => showClaimAirdropModal = false"/>
      </div>
    </div>
  </v-container>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import ClaimAirdropModal from '../components/Mint/ClaimAirdropModal.vue'

export default {
  components: {ClaimAirdropModal},
  data: function () {
    return {
      showClaimAirdropModal: false,
    }
  },
  mounted: function () {
    this.checkAirdropForChain({
      chainId: this.claimChainId,
      address: this.claimAddress,
    })
  },
  computed: {
    ...mapGetters("connectweb3", [
      "isConnecting",
      "getUserAccount",
      "chainId",
      "airdropState",
    ]),
    claimAddress: function () {
      return this.$route.params.address
    },
    claimChainId: function () {
      return this.$route.params.chainId
    },
    wrongChain: function () {
      return this.claimChainId != this.chainId
    },
    wrongAddress: function () {
      return this.claimAddress != this.getUserAccount
    },
    isClaimable: function () {
      return this.airdropState[this.claimChainId]
    },
    screenWidth() {
      console.log(window.innerWidth)
      return window.innerWidth
    },
  },
  methods: {
    ...mapActions("connectweb3", ["connectToChain", "checkAirdropForChain"]),
  },
}
</script>

<style>
</style>