import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Web3Modal from "web3modal"
import {ethers} from "ethers"
import WalletConnectProvider from "@walletconnect/web3-provider"
import axios from "axios"
import VueAxios from "vue-axios"
import {xdaiRPC} from "./utils/constants"
import {getNetworks} from './utils/networks'
import Vuethereum from "vuethereum"
import VueClipboard from 'vue-clipboard2'
import VueConfetti from 'vue-confetti'
import WalletLink from '@coinbase/wallet-sdk'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(Vuethereum)
Vue.use(VueClipboard)
Vue.use(VueConfetti)

const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            rpc: {
                100: xdaiRPC,
            },
        },
    },
    'custom-coinbase': {
        display: {
            logo: '/projects/coinbase-wallet.png',
            name: 'Coinbase',
            description: 'Scan with WalletLink to connect',
        },
        options: {
            appName: 'Bored David', // Your app name
            networkUrl: `https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161`,
            chainId: 1,
        },
        package: WalletLink,
        connector: async (_, options) => {
            const {appName, networkUrl, chainId} = options
            const walletLink = new WalletLink({
                appName,
            })
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId)
            await provider.enable()
            return provider
        },
    },
}

const web3Modal = new Web3Modal({
    network: "xdai", // optional
    cacheProvider: true, // optional
    disableInjectedProvider: false,
    providerOptions, // required
})


Vue.prototype.$web3Modal = web3Modal

Vue.filter('fromWei', function (value) {
    if (!value) return '0'
    return ethers.utils.formatEther(value)
})

Vue.filter('networkName', function (value) {
    console.log('networknamevalue', value)

    let networks = getNetworks()

    let chain = networks[parseInt(value)]
    if (!chain) {
        return 'Wrong network'
    }
    return chain.name
})

Vue.filter('abbreviateAddress', (value) => {
    if (!value)
        return ''

    return value.slice(0, 6) + '...' + value.slice(value.length - 4, value.length)
})

Vue.filter('truncatePrice', (value) => {
    if (!value) {
        return ''
    }

    if (value === "-") {
        return value
    }

    let price = Number(value).toFixed(3)
    return parseFloat(price.slice(0, -1))
})

Vue.filter('numberWithCommas', (value) => {
    let parts = value.toString().split(",")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return parts.join(".")
})


new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
}).$mount('#app')

