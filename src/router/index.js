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
        path: '/mint',
        name: "Mint",
        meta: {
            title: "Bored David - Mint"
        },
        component: () => import('../views/Mint.vue')
    },
    {
        path: '/wallet',
        name: "Wallet",
        meta: {
            title: "Bored David - Wallet"
        },
        component: () => import('../views/Wallet.vue')
    }
]

const router = new VueRouter({
    routes,
})

export default router
