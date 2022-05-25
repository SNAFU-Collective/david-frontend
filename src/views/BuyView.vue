<template>
    <v-container style="z-index: 2" class="mt-16 pt-16">
        <v-img class="mt-6" src="/banners/community-giveaway.png"></v-img>
        <CheckSale class="mt-16" v-if="!isConnecting"/>
    </v-container>
</template>

<script>
import CheckSale from '../components/Mint/CheckSale.vue'
import {mapGetters} from 'vuex'
export default {
    components: {CheckSale},
    computed: {
        ...mapGetters("connectweb3", ["isConnecting"]),
    },

}
</script>

<style>

</style>