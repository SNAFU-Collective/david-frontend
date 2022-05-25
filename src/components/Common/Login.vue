<template>
  <div>
    <v-row class="mt-15">
      <v-col cols-md="12" colls-xs="12" class="topTextPool px-15" style="text-align: center; color: #fff">
        <b class="h2 mt-15">Welcome! <br> Connect your wallet to access your NFTs.</b>
        <br/>
        <span class="h3 mt-15">Connecting your wallet is like “logging in” to Web3. Select your wallet from the options to get started.</span>
        <wallet-status class="mt-15 pb-2 walletHeader" style="justify-content: center"/>
      </v-col>
    </v-row>
    <v-row style="margin-top: 100px" class="boxRow">
      <v-col class="claimBox">
        <v-row justify="center">
          <h3>Desktop</h3>
        </v-row>
<!--        <v-row>-->
<!--          <v-hover>-->
<!--            <v-img-->
<!--                slot-scope="{ hover }"-->
<!--                v-if="hover"-->
<!--                src="login/metamask.gif"-->
<!--            >-->
<!--            </v-img>-->
<!--            <v-img-->
<!--                v-else-->
<!--                src="login/metamask.jpg"-->
<!--            >-->
<!--            </v-img>-->
<!--          </v-hover>-->
<!--        </v-row>-->
        <v-row justify="center">
          <div class="text-body-2 my-50 mt-10 mb-10" style="text-align: center">
               <span style="font-size: 13px; text-align: center">
                  <b>Metamask</b> is a crypto wallet & your gateway to blockchain apps.<br/>
                  <a href="https://metamask.io/" target="_blank">Install Metamask</a> extension on your browser.
               </span>
          </div>
        </v-row>
      </v-col>
      <v-col class="ml-1">
        <v-row justify="center">
          <h3 align="center">Mobile <br/>
            <span style="font-size: 15px">(Wallet Connect)</span></h3>
        </v-row>
<!--        <v-row  justify="center">-->
<!--          <v-img src="login/minerva.png"  style="max-height: 450px;max-width: 450px; margin-top: 25px"></v-img>-->
<!--        </v-row>-->
        <v-row justify="center">
          <div class="text-body-2 my-50  mb-10" style="text-align: center">
               <span style="font-size: 13px; text-align: center">
                  <b>Minerva Wallet</b> is a user friendly app for sovereign identities, data and money.<br/>
                 <a href="https://minerva.digital/" target="_blank">Install Minerva</a> app on your phone. <br/> Click <a href="https://www.youtube.com/watch?v=URFPQKpdjFc&t" target="_blank">here</a> to see a 30 seconds <b>tutorial</b>  on how to connect Minerva from your phone.
               </span>
          </div>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import WalletStatus from "../Wallet/WalletStatus"
import {mapFields} from "vuex-map-fields"

export default {
  components: {
    WalletStatus,
  },
  data() {
    return {

    }
  },
  methods: {
  },
  computed: {
    ...mapFields("connectweb3", ["account", "isConnected"]),
  },
}
</script>