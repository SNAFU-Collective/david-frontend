<template>
  <div style="min-height: 800px" class="darkBg">
    <v-container>

      <div v-if="!loading"  class="pt-16 mt-16">
        <v-row justify="center">
          <h3>There is a total of {{total}} minted NFTs</h3>
        </v-row>
        <v-row justify="center">
          <h6>*NFT list updated each 30 mins</h6>
        </v-row>
      </div>

      <v-row justify="center" class="pt-10">
        <NftCard  style="margin-top: 50px !important;" :cardSize=170 v-for="nft in nfts"
                  :key="nft.id"
                  :network_id="parseInt(nft.blockchain.id)"
                  :nft="nft" class="ma-1"/>
      </v-row>

      <div v-if="loading" class="mt-16">
        <v-row no-gutters justify="center" class="py-4">
          <v-progress-circular
              :size="80"
              color="light"
              indeterminate
          ></v-progress-circular>
        </v-row>
        <v-row no-gutters justify="center" class="py-4">
          <p>Loading</p>
        </v-row>
      </div>

      <v-row justify="center">
        <v-btn v-if="!loading && !isLastPage" @click="loadMore()" class="mt-10">Load more</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios"
import NftCard from "../components/Common/NftCard.vue"
require('dotenv').config()

export default {
  components: {
    NftCard
  },
  data () {
    return {
      page: 1,
      total: 1,
      loading: true,
      isLastPage: false,
      nfts: []
    }
  },
  async beforeMount() {
    let res = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/api/v1/nft?page="+this.page)
    this.nfts = res.data.data
    this.total = res.data.pagination.total
    this.page = res.data.pagination.page
    this.loading = false
  },
  methods: {
    async loadMore() {
      this.loading = true
      this.page++
      let res = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/api/v1/nft?page="+this.page)
      this.nfts = this.nfts.concat(res.data.data)
      this.total = res.data.pagination.total
      this.page = res.data.pagination.page
      this.isLastPage = res.data.pagination.lastPage === this.page
      this.loading = false
    }
  }
}
</script>

