<template>
  <div>
    <v-dialog v-model="showModal" max-width="550px" scrollable persistent>
      <v-card color="#F5F5F5" v-if="!showTransactionModal">
        <v-card-title>
          <v-row no-gutters
          >
            <v-col offset="1" cols="10" class="text-center">
              Confirm Bored David Mint
            </v-col>
            <v-col cols="1">
              <v-icon class="pl-3 pb-2" @click="closeModal"> mdi-close</v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <div style="overflow-y: auto">
          <v-card-text class="pt-3">
            <v-row
                no-gutters
                class="ont-weight-bold pt-2 pb-0"
                justify="center"
                style="text-align: center"
            >
              You will receive {{mintNumber}} {{rareMint ? 'rare' : 'common'}} Bored David NFT!
            </v-row>
            <v-row
                no-gutters
                class="ont-weight-bold pt-2 pb-0"
                justify="center"
                style="text-align: center"
            >
            You will pay {{ totalCost | fromWei }} {{symbol}}!
            </v-row>
            <v-row no-gutters justify="center" class="mb-2">
              <v-btn :disabled="nftClaimed" dark large @click="confirmClaim" class="ma-5">Confirm</v-btn>
            </v-row>
          </v-card-text>
        </div>
      </v-card>
      <v-card color="#F5F5F5" v-if="showTransactionModal">
        <v-card-title>
          <v-row no-gutters
          >
            <v-col offset="1" cols="10" class="text-center">
              Confirm Airdrop Claim
            </v-col>
            <v-col cols="1">
              <v-icon class="pl-3 pb-2" @click="closeModal"> mdi-close</v-icon>
            </v-col>
          </v-row>
        </v-card-title>

        <div v-if="loading">
          <v-card-text class="pt-3">
            <v-row no-gutters justify="center" class="py-4">
              <v-progress-circular
                  :size="80"
                  color="black"
                  indeterminate
              ></v-progress-circular>
            </v-row>
            <v-row no-gutters justify="center" class="py-4 text-body-1">
              Transaction in progress
            </v-row>
          </v-card-text>
        </div>

        <div v-if="confirmed">
          <v-card-text class="pt-3">
            <v-row no-gutters justify="center" class="py-4">
              <v-icon size="100" color="success">mdi-check-circle</v-icon>
            </v-row>
            <v-row no-gutters justify="center" class="py-4 text-body-1">
              Transaction completed
            </v-row>
            <v-row no-gutters justify="center" class="mt-n3">
              <a :href="txUrl" target="_blank" style="color: black">
                View Details on Block Explorer
              </a>
            </v-row>
          </v-card-text>
        </div>

        <div v-if="error">
          <v-card-text class="pt-3">
            <v-row no-gutters justify="center" class="py-4">
              <v-icon size="100" color="error">mdi-alert</v-icon>
            </v-row>
            <v-row no-gutters justify="center" class="py-4 text-body-1">
              Transaction failed
            </v-row>
            <v-row
                no-gutters
                justify="center"
                class="mt-n3 red--text"
                v-if="errorMessage"
            >
              {{ errorMessage }}
            </v-row>
            <v-row no-gutters justify="center" class="mt-n3" v-if="txHash">
              <a :href="txUrl" target="_blank" style="color: black">
                View Details on Block Explorer
              </a>
            </v-row>
          </v-card-text>
        </div>
      </v-card>

    </v-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  data() {
    return {
      loading: false,
      confirmed: false,
      error: false,
      errorMessage: null,
      txHash: null,
      nftClaimed: false,
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    rareMint: {
      type: Boolean,
      default: false,
    },
    totalCost: {
      type: Object,
      required: true,
    },
    symbol: {
      type: String,
      required: true,
    },
    mintNumber: {
      type: Number,
      required: true,
    },
  },
  computed: {
    ...mapGetters("connectweb3", {network: "getNetwork", chainId:  "chainId"}),	
    showModal: {
      get() {
        return this.show
      },
      set(val) {
        this.resetModal()
        this.$emit("close", false)
      },
    },
    showTransactionModal() {
      return this.loading || this.confirmed || this.error
    },
    txUrl() {
      return this.network.explorer + this.txHash
    },
    enableRedeemButton() {
      if (this.nftClaimed) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    ...mapActions("connectweb3", ["updateData", "mintNfts"]),
    closeModal() {
      this.resetModal()
      this.$emit("close", false)
    },
    async confirmClaim() {
      this.loading = true
      try {
        let tx = await this.mintNfts({
          rareMint: this.rareMint,
          totalCost: this.totalCost,
          mintNumber: this.mintNumber,
        })
        tx.wait()
            .then((res) => {
              console.log(res.transactionHash);
              this.confirmed = true
              this.nftClaimed = true
              this.txHash = res.transactionHash
              this.updateData(this.chainId)
            })
            .catch((err) => {
              //console.log(err);
              this.error = true
              if (err.transactionHash) {
                this.txHash = err.transactionHash
              }
              if (err.message) {
                this.errorMessage = err.message
              }
            })
            .finally(() => {
              this.loading = false
            })
      } catch (err) {
        //console.log(err);
        this.error = true
        if (err.transactionHash) {
          this.txHash = err.transactionHash
        }
        if (err.message) {
          this.errorMessage = err.message
        }
        this.loading = false
      }
    },
    resetModal() {
      this.loading = false
      this.confirmed = false
      this.error = false
      this.errorMessage = null

      this.txHash = null
    },
  },
}
</script>

<style>
.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #5f5f5f1f !important;
}

.theme--dark.v-btn.v-btn--disabled {
  color: #0000004d !important;
}
</style>