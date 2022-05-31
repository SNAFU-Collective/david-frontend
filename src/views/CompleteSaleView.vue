<template>
  <div style="z-index: 2" class="darkBg pt-16">
    <div v-if="isConnecting || !sale || !sale.info" class="mt-16">
      <v-row no-gutters justify="center" class="py-4">
        <v-progress-circular
            :size="80"
            color="white"
            indeterminate
        ></v-progress-circular>
      </v-row>
      <v-row no-gutters justify="center" class="py-4">
        <p>Loading</p>
      </v-row>
    </div>
    <div v-else style="margin-top: 100px">
      <div v-if="wrongChain">
        <v-container>
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
                    @click="connectToChain(selectedChainId)"
                >
                  Switch to {{ selectedChainId | networkName }}
                </v-btn>
              </v-col>
            </v-row>
          </v-alert>
        </v-container>
      </div>

      <div class="mt-16 mx-16">
        <div class="mx-lg-16 " id="mint" style="">
          <div style="position: relative;" class="boredDavidPreviewImages">
            <v-img src="pfp_no_bg/3.png" width="200px" class="leftMintImage" id="preview1"
                   style="display: block !important;"/>
            <v-img src="pfp_no_bg/38.png" width="200px" class="rightMintImage" id="preview2"/>

            <v-img src="pfp_no_bg/4.png" width="200px" class="leftMintImage" id="preview3" style="margin-left: 80px "/>
            <v-img src="pfp_no_bg/43.png" width="200px" class="rightMintImage" id="preview4"
                   style="margin-right: 80px "/>

            <v-img src="pfp_no_bg/8.png" width="200px" class="leftMintImage" id="preview5" style="margin-left: 160px "/>
            <v-img src="pfp_no_bg/49.png" width="200px" class="rightMintImage" id="preview6"
                   style="margin-right: 160px "/>

            <v-img src="pfp_no_bg/42.png" width="200px" class="leftMintImage" id="preview7"
                   style="margin-left: 240px "/>
            <v-img src="pfp_no_bg/45.png" width="200px" class="rightMintImage" id="preview8"
                   style="margin-right: 240px "/>

            <v-img src="pfp_no_bg/21.png" width="200px" class="leftMintImage" id="preview9"
                   style="margin-left: 320px "/>
            <v-img src="pfp_no_bg/15.png" width="200px" class="rightMintImage" id="preview10"
                   style="margin-right: 320px "/>
          </div>

          <v-row justify="center">
            <h4><b class="blueColor">Mint on {{ blockchain.name }}</b></h4>
          </v-row>

          <v-row justify="center" class="mt-10" style="text-align: center">
            <h4>You don't want to miss out, join the party while you can</h4>
          </v-row>
          <v-row justify="center" class="mt-5">
            <h2> {{ sale.info.totalSupply }} / {{ sale.info.maxSupply }} <strong> ALREADY MINTED</strong></h2>
          </v-row>

          <div>
            <v-row no-gutters justify="center" class="mt-10">
              <v-switch class="raritySwitch" v-model="buyRare" label="Become an Art Curator (RARE NFT)"
                        color="blue"></v-switch>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" style="justify-content: center; display: contents">
                <v-btn @click="decrementMintNumber" icon x-large class="mx-5" color="white">
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <h1 class=""> {{ mintNumber }} </h1>
                <v-btn @click="incrementMintNumber" icon x-large class="mx-5" color="white">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
            <v-row justify="center" class="mt-10">
              <h3> Price: {{ totalCost | fromWei }} {{ symbol }}</h3>
            </v-row>

            <v-row v-if="!hasEnoughBalance" justify="center" class="mt-10">
              <h4 class="pinkColor" style="text-align: center"> You don't have enough money! <br> Your balance is
                {{ getBalance | fromWei | truncatePrice }} {{ symbol }}</h4>
            </v-row>

            <v-row justify="center" class="mt-15">
              <v-col cols="12" style="justify-content: center; display: contents">
                <v-btn
                    light
                    x-large
                    @click="() => (showCompleteSaleModal = true)"
                    :disabled="wrongChain || !hasEnoughBalance"
                >
                  Buy
                </v-btn>
              </v-col>
            </v-row>

          </div>
        </div>
      </div>

      <complete-sale-modal
          :show="showCompleteSaleModal"
          :rareMint="buyRare"
          :mintNumber="mintNumber"
          :symbol="symbol"
          :totalCost="totalCost"
          @close="handleCloseBuyModal"
      />
    </div>

    <v-container>
      <Bonuses class="homeMargin" style="margin-top: 200px !important;"/>
    </v-container>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
import {getNetworks} from "@/utils/networks"
import CompleteSaleModal from '../components/Mint/CompleteSaleModal.vue'
import Bonuses from "@/components/Bonuses"

export default {
  components: {CompleteSaleModal, Bonuses},
  data: function () {
    return {
      showCompleteSaleModal: false,
      mintNumber: 1,
      buyRare: true,
    }
  },
  mounted: function () {
    if (!this.isConnecting) {
      this.updateBoredDavidState({chainId: this.selectedChainId})
    }
  },

  computed: {
    ...mapGetters("connectweb3", [
      "isConnecting",
      "chainId",
      "boredDavidState",
      "getBalance",
    ]),
    selectedChainId: function () {
      return this.$route.params.chainId
    },
    wrongChain: function () {
      return this.selectedChainId != this.chainId
    },
    sale() {
      let networks = getNetworks()
      let chainId = this.selectedChainId
      let network = networks[chainId]
      if (network && this.boredDavidState[chainId]) {
        let info = this.boredDavidState[chainId]
        let saleAvailable = info.totalSupply.lt(info.maxSupply)
        return {
          network: network,
          chainId: chainId,
          info,
          saleAvailable,
        }
      }
      return null
    },
    blockchain: function () {
      let networks = getNetworks()
      return networks[this.selectedChainId]
    },
    maxMintNumber: function () {
      if (this.sale) {
        return this.sale.info.maxMintAmount
      }
      return 1
    },
    commonCost: function () {
      if (this.sale) {
        return this.sale.info.commonCost
      }
      return 0
    },
    rareCost: function () {
      if (this.sale) {
        return this.sale.info.rareCost
      }
      return 0
    },
    totalCost: function () {
      if (this.sale) {
        let cost = this.buyRare ? this.rareCost : this.commonCost
        return cost.mul(this.mintNumber)
      }
      return 0
    },
    hasEnoughBalance: function () {
      if (this.sale && this.getBalance) {
        return this.getBalance.gte(this.totalCost)
      }
      return false
    },
    symbol: function () {
      if (this.sale) {
        return this.sale.network.symbol
      }
      return ""
    },
    screenWidth() {
      return window.innerWidth
    },
  },
  methods: {
    ...mapActions("connectweb3", ["connectToChain", "updateBoredDavidState"]),
    handleCloseBuyModal: function () {
      this.showCompleteSaleModal = false
      //this.$router.push({name: "Sale"})
    },
    decrementMintNumber: function () {
      if (this.mintNumber > 1) {
        this.mintNumber--
        this.removeBoredDavidPreview()
      }
    },
    incrementMintNumber: function () {
      if (this.mintNumber < this.maxMintNumber) {
        this.mintNumber++
        this.addBoredDavidPreview()
      }
    },
    addBoredDavidPreview: function () {
      if (this.mintNumber < 11) {
        let styleTag = document.getElementById(`preview${this.mintNumber}`)
        styleTag.style.display = "block"
      }
    },
    removeBoredDavidPreview: function () {
      if (this.mintNumber < 10) {
        let styleTag = document.getElementById(`preview${this.mintNumber + 1}`)
        styleTag.style.display = "none"
      }
    },
  },
}
</script>

<style>
.leftMintImage {
  position: absolute;
  left: 0;
  top: 150px;
  display: none;
}

.rightMintImage {
  position: absolute;
  right: 0;
  top: 150px;
  display: none;
}

@media screen and (max-width: 768px) {
  .boredDavidPreviewImages {
    display: none;
  }
}

@media screen and (min-width: 769px) {
  .boredDavidPreviewImages {
    display: block;
  }
}


.raritySwitch label {
  color: #ffffff !important;
}
</style>