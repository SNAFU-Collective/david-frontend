import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {
            title: 'Bored David',
            headerSubtitle: '',
        },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/airdrop',
        name: "Airdrop",
        meta: {
            title: "Bored David - Check Airdrop"
        },
        component: () => import('../views/CheckAirdropView.vue')
    },
    {
        path: '/airdrop/:chainId/:address',
        name: "Claim Airdrop",
        meta: {
            title: "Bored David - Claim Airdrop"
        },
        component: () => import('../views/ClaimAirdropView.vue')
    },
    {
        path: '/sale',
        name: "Sale",
        meta: {
            title: "Bored David - Sale"
        },
        component: () => import('../views/SaleView.vue')
    },
    {
        path: '/sale/:chainId',
        name: "Complete Sale",
        meta: {
            title: "Bored David - Complete Sale"
        },
        component: () => import('../views/CompleteSaleView.vue')
    },
    {
        path: '/wallet',
        name: "Wallet",
        meta: {
            title: "Bored David - Wallet"
        },
        component: () => import('../views/Wallet.vue')
    },
    {
        path: '/explore',
        name: "Explore",
        meta: {
            title: "Bored David - NFTs"
        },
        component: () => import('../views/Explore.vue')
    }
]

const router = new VueRouter({
    routes,
})

export default router
