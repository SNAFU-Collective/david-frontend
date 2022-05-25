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
        <v-alert type="error" class="mt-n3">
          <span class="body-1">
            You are not connected to the correct chain.
          </span>
          <v-btn dark small class="ml-10" @click="connectToChain(claimChainId)">
            Switch to {{ claimChainId | networkName }}
          </v-btn>
        </v-alert>
      </div>
      <div v-else-if="wrongAddress">
        <v-alert type="error" class="mt-n3">
          <span class="body-1">
            You are not connected to the correct address. <br />
            Select {{ claimAddress }} to continue.
          </span>
        </v-alert>
      </div>
      <div v-if="isClaimable">
        You are eligible to mint a free Bored David NFT!

        <v-btn dark  v-if="isClaimable" @click="() => showClaimAirdropModal = true" class="ml-5">
          Claim
        </v-btn>
        <claim-airdrop-modal :show="showClaimAirdropModal"  @close="() => showClaimAirdropModal = false" />
      </div>
    </div>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ClaimAirdropModal from '../components/Mint/ClaimAirdropModal.vue';
export default {
  components: { ClaimAirdropModal },
  data: function () {
      return {
      showClaimAirdropModal: false
    };
  },
  mounted: function () {
    this.checkAirdropForChain({
      chainId: this.claimChainId,
      address: this.claimAddress,
    });
  },
  computed: {
    ...mapGetters("connectweb3", [
      "isConnecting",
      "getUserAccount",
      "chainId",
      "airdropState",
    ]),
    claimAddress: function () {
      return this.$route.params.address;
    },
    claimChainId: function () {
      return this.$route.params.chainId;
    },
    wrongChain: function () {
      return this.claimChainId != this.chainId;
    },
    wrongAddress: function () {
      return this.claimAddress != this.getUserAccount;
    },
    isClaimable: function () {
      return this.airdropState[this.claimChainId];
    },
  },
  methods: {
    ...mapActions("connectweb3", ["connectToChain", "checkAirdropForChain"]),
  },
};
</script>

<style>
</style>