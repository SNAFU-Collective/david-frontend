const networks = {
    //Rinkeby
    4: {
        address: "0x088dd6c3feDEACDE068e12DD427c2E90F83c6141",
        name: "Rinkeby",
        symbol: "rETH",
        explorer: "https://rinkeby.etherscan.io/tx/",
        rpc: "https://rinkeby.infura.io/v3/86ba5916ce4349e09b223f0185ca3723",
        testnet: true
    },
    //Ropsten
    3: {
        address: "0xfd56CE073CEbf7bd0D0206D66B3a53ED93BFa9E2",
        name: "Ropsten",
        symbol: "rETH",
        explorer: "https://ropsten.etherscan.io/tx/",
        rpc: "https://ropsten.infura.io/v3/86ba5916ce4349e09b223f0185ca3723",
        testnet: true
    },
    //Goerli
    5: {
        address: "0xfd56CE073CEbf7bd0D0206D66B3a53ED93BFa9E2",
        name: "Goerli",
        symbol: "gETH",
        explorer: "https://goerli.etherscan.io/tx/",
        rpc: "https://goerli.infura.io/v3/86ba5916ce4349e09b223f0185ca3723",
        testnet: true
    }
}

export const getNetworks = () => { 
    let testnet = !!process.env.VUE_APP_TESTNETS;

    let networksObj = {};
    for (let key in networks) {
        if (networks[key].testnet === testnet) {
        networksObj[key] = networks[key];
        }
    }
    return networksObj
}

 
