<template>
  <div style="min-height: 800px" class="darkBg">
    <v-container>


      <v-row justify="center" class="pt-16 mt-16">
        <v-form ref="form" class="mt-16">
          <v-container>
            <v-row>
              <v-col
                  cols="12"
                  md="4"
              >
                <v-select
                    v-model="filteredBlockchain"
                    :items="availableBlockchains"
                    label="Blockchain"
                    filled
                    dark
                    required
                ></v-select>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
              >
                <v-select
                    v-model="filteredRarity"
                    :items="availableRarities"
                    label="Rarity"
                    filled
                    dark
                    required
                ></v-select>
              </v-col>

              <v-col
                  cols="12"
                  md="4"
              >
                <v-text-field
                    hide-details="auto"
                    v-model="filteredId"
                    label="ID #"
                    filled
                    dark
                    required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-btn
                  type="submit"
                  color="white"
                  @click="filter"
              >
                Filter
              </v-btn>

            </v-row>
          </v-container>
        </v-form>
      </v-row>

      <div v-if="!loading" class=" mt-16">
        <v-row justify="center">
          <h3>There are {{ total }} NFTs minted <span v-if="searchedBlockchain">on <span
              class="blueColor">{{ searchedBlockchain }} </span></span>
            <span v-if="searchedRarity">with <span class="blueColor">{{ searchedRarity }}</span> rarity</span>
          </h3>
        </v-row>
        <v-row justify="center">
          <h6>*List updated each 30 minutes</h6>
        </v-row>
      </div>

      <v-row v-if="nfts.length > 0" justify="start" class="pt-10">
        <NftCard style="margin-top: 50px !important;" :cardSize="screenWidth > 768 ? 200 : 170" v-for="nft in nfts"
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
        <v-btn v-if="!loading && !isLastPage && total > 0 && !isLastPage" @click="loadMore()" class="mt-10" text dark
               style="background-color: #ffffff08;">Load more
        </v-btn>
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
    NftCard,
  },
  data() {
    return {
      page: 1,
      total: 1,
      loading: true,
      isLastPage: false,
      nfts: [],
      searchedBlockchain: null,
      searchedRarity: null,
      filteredBlockchain: '',
      filteredRarity: '',
      filteredId: null,
      availableBlockchains: [
        'All',
        'Ethereum',
        'Gnosis Chain',
        'Polygon',
        'Avalanche',
        'Aurora',
        'Binance Smart Chain',
        // 'Rinkeby',
        // 'Ropsten',
        // 'Goerli',
      ],
      availableRarities: [
        'All',
        'Common',
        'Rare',
      ],
      filters: '',
    }
  },
  async beforeMount() {
    let res = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/api/v1/nft?page=" + this.page)
    this.nfts = res.data.data
    this.total = res.data.pagination.total
    this.page = res.data.pagination.page
    this.loading = false
  },
  methods: {
    async loadMore() {
      this.loading = true
      this.page++
      let res = await axios.get(process.env.VUE_APP_API_ENDPOINT + "/api/v1/nft?page=" + this.page + this.filters)
      this.nfts = this.nfts.concat(res.data.data)
      this.total = res.data.pagination.total
      this.page = res.data.pagination.page
      this.isLastPage = res.data.pagination.lastPage === res.data.pagination.page
      this.loading = false
    },
    async filter(e) {
      e.preventDefault()
      this.nfts = []
      this.page = 0
      this.filters = ''
      this.searchedBlockchain = this.filteredBlockchain

      switch (this.filteredBlockchain) {
        case 'All':
          this.searchedBlockchain = null
          break
        case 'Ethereum':
          this.filters += '&blockchain_network_id=1'
          break
        case 'Gnosis Chain':
          this.filters += '&blockchain_network_id=100'
          break
        case 'Polygon':
          this.filters += '&blockchain_network_id=137'
          break
        case 'Avalanche':
          this.filters += '&blockchain_network_id=43114'
          break
        case 'Aurora':
          this.filters += '&blockchain_network_id=1313161554'
          break
        case 'Binance Smart Chain':
          this.filters += '&blockchain_network_id=56'
          break
        case 'Rinkeby':
          this.filters += '&blockchain_network_id=4'
          break
        case 'Ropsten':
          this.filters += '&blockchain_network_id=3'
          break
        case 'Goerli':
          this.filters += '&blockchain_network_id=5'
          break
        default:
          break
      }

      this.searchedRarity = this.filteredRarity
      switch (this.filteredRarity) {
        case 'All':
          this.searchedRarity = null
          break
        case 'Common':
          this.filters += '&rarity=0'
          break
        case 'Rare':
          this.filters += '&rarity=1'
          break
        default:
          break
      }

      if (this.filteredId) {
        this.filters += '&id=' + this.filteredId
      }

      await this.loadMore()
    },
  },
  computed: {
    screenWidth() {
      return window.innerWidth
    },
  },
}
</script>

