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
      <v-row no-gutters justify="center" class="py-4">
        <p>Loading</p>
      </v-row>
    </div>
    <div v-else>
      <div v-if="wrongChain">
        <v-alert type="error" class="mt-5 mb-5">
          <v-row>
            <v-col lg="9" md="12">
              <span class="body-1">
                You are not connected to the correct chain.
              </span>
            </v-col>
            <v-col lg="3" md="12">
              <v-btn
                  dark
                  small
                  class="ml-10"
                  @click="connectToChain(claimChainId)"
              >
                Switch to {{ claimChainId | networkName }}
              </v-btn>
            </v-col>
          </v-row>
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
        <v-row justify="center">
          <h3 style="text-align: center">Congratulations! <br> You are eligible to mint for free a <b class="blueColor">common</b>
            Bored David NFT on the <b class="blueColor">{{ claimChainId | networkName }}</b> blockchain.</h3>
        </v-row>
        <v-row justify="center">
          <v-card
              dark
              :class="screenWidth > 768 ? 'mt-5' : 'mb-5 mx-2 mt-5'"
              :width="screenWidth > 768 ? '14vw' : '100%'"
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
        </v-row>

      </div>
      <claim-airdrop-modal :show="showClaimAirdropModal" @close="handleCloseClaimModal"/>
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
      return window.innerWidth
    },
  },
  methods: {
    ...mapActions("connectweb3", ["connectToChain", "checkAirdropForChain"]),
    handleCloseClaimModal: function () {
      this.showClaimAirdropModal = false
      this.$router.push({name: "Airdrop"})
    },
  },
}
</script>

<style>
</style>