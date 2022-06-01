const networks = {
    // //Rinkeby
    // 4: {
    //     address: "0xD53AccD487180EBcB568CaC5622E64050E9d5197",
    //     name: "Rinkeby",
    //     symbol: "rETH",
    //     explorer: "https://rinkeby.etherscan.io/tx/",
    //     nft_explorer_url: "https://rinkeby.etherscan.io/tx/",
    //     rpc: "https://rinkeby.infura.io/v3/86ba5916ce4349e09b223f0185ca3723",
    //     logo: "projects/ethereum.jpg",
    //     marketplace_url: "https://testnets.opensea.io/assets/rinkeby/0xD53AccD487180EBcB568CaC5622E64050E9d5197/",
    //     testnet: true
    // },
    // //Ropsten
    // 3: {
    //     address: "0xfd56CE073CEbf7bd0D0206D66B3a53ED93BFa9E2",
    //     name: "Ropsten",
    //     symbol: "rETH",
    //     explorer: "https://ropsten.etherscan.io/tx/",
    //     nft_explorer_url: "https://ropsten.etherscan.io/tx/",
    //     rpc: "https://ropsten.infura.io/v3/86ba5916ce4349e09b223f0185ca3723",
    //     logo: "projects/ethereum.jpg",
    //     marketplace_url: "https://testnets.opensea.io/assets/ropsten/0xfd56CE073CEbf7bd0D0206D66B3a53ED93BFa9E2/",
    //     testnet: true
    // },
    // //Goerli
    // 5: {
    //     address: "0x477352e3c8F3B77c4cB1f1dc4235Ce13Ae5E60be",
    //     name: "Goerli",
    //     symbol: "gETH",
    //     explorer: "https://goerli.etherscan.io/tx/",
    //     nft_explorer_url: "https://goerli.etherscan.io/tx/",
    //     rpc: "https://goerli.infura.io/v3/86ba5916ce4349e09b223f0185ca3723",
    //     marketplace_url: "https://testnets.opensea.io/assets/goerli/0x477352e3c8F3B77c4cB1f1dc4235Ce13Ae5E60be/",
    //     logo: "projects/ethereum.jpg",
    //     testnet: true
    // },
    1: {
        address: "0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C",
        name: "Ethereum",
        symbol: "ETH",
        explorer: "https://etherscan.io/tx/",
        nft_explorer_url: "https://etherscan.io/token/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C?a=",
        rpc: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
        marketplace_url: "https://opensea.io/assets/ethereum/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C/",
        logo: "projects/ethereum.jpg",
        starting_block: 14874092,
        testnet: false
    },
    100: {
        address: "0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C",
        name: "Gnosis Chain",
        symbol: "xDAI",
        explorer: "https://blockscout.com/xdai/mainnet/tx/",
        nft_explorer_url: "https://blockscout.com/xdai/mainnet/token/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C/instance/",
        rpc: "https://rpc.nftsnafu.org/",
        marketplace_url: "https://epor.io/tokens/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C/",
        logo: "projects/gnosis.jpg",
        starting_block: 22412483,
        testnet: false
    },
    56: {
        address: "0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C",
        name: "Binance Smart Chain",
        symbol: "BNB",
        explorer: "https://bscscan.com/tx/",
        nft_explorer_url: "https://bscscan.com/token/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C?a=",
        rpc: "https://bsc-dataseed.binance.org/",
        marketplace_url: "https://nftrade.com/assets/bsc/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C/",
        logo: "projects/binance.jpg",
        starting_block: 18259155,
        testnet: false
    },
    43114: {
        address: "0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C",
        name: "Avalanche",
        symbol: "AVAX",
        explorer: "https://snowtrace.io/tx/",
        nft_explorer_url: "https://snowtrace.io/token/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C?a=",
        rpc: "https://api.avax.network/ext/bc/C/rpc",
        marketplace_url: "https://nftrade.com/assets/avalanche/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C/",
        logo: "projects/avalanche.jpg",
        starting_block: 15384298,
        testnet: false
    },
    137: {
        address: "0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C",
        name: "Polygon",
        symbol: "MATIC",
        explorer: "https://polygonscan.com/tx/",
        nft_explorer_url: "https://polygonscan.com/token/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C",
        rpc: "https://polygon-rpc.com/",
        marketplace_url: "https://opensea.io/assets/matic/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C/",
        logo: "projects/polygon.jpg",
        starting_block: 28961978,
        testnet: false
    },
    1313161554: {
        address: "0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C",
        name: "Aurora",
        symbol: "ETH",
        explorer: "https://aurorascan.dev/tx/",
        nft_explorer_url: "https://aurorascan.dev/token/0x8B8AF1072e8cf40CF75ad6EFDf9Fe999a47E285C?a=",
        rpc: "https://mainnet.aurora.dev",
        marketplace_url: "https://endemic.app/token/0x8b8af1072e8cf40cf75ad6efdf9fe999a47e285c-",
        logo: "projects/aurora.svg",
        starting_block: 66699925,
        testnet: false
    }
}

export const getNetworks = () => { 
    let testnet = !!process.env.VUE_APP_TESTNETS;

    let networksObj = {};
    for (let key in networks) {
        // if (networks[key].testnet === testnet) {
        networksObj[key] = networks[key];
        // }
    }
    return networksObj
}

 
