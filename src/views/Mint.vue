<template>
    <v-container style="z-index: 2" class="mt-16 pt-16">
        <airdrop />
        <sale />
    </v-container>
</template>

<script>
import Airdrop from '../components/Mint/Airdrop.vue'
import Sale from '../components/Mint/Sale.vue'
export default {
  components: { Airdrop, Sale },
    name: 'Mint'

}
</script>

<style>

</style>