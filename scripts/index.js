import { createRequire } from 'module';
const require = createRequire(import.meta.url);

require('dotenv').config()

import Web3 from "web3";
const HDWalletProvider = require("@truffle/hdwallet-provider");

const snafuNftAddress = "0xED1eFC6EFCEAAB9F6d609feC89c9E675Bf1efB0a";
const snafu20Address = "0x27B9C2Bd4BaEa18ABdF49169054c1C1c12af9862";
const xdaiRPC = "https://rpc.xdaichain.com/oe-only";

import ERC1155ABI from "../src/assets/abis/ERC1155.json";
import SNAFU20 from "../src/assets/abis/SNAFU20Pair.json";

import fs from 'fs';
import path from 'path';
import axios from 'axios';

const minBlock = 14958798;
const minNftId = process.env.MIN_NFT;

async function getMintedNFTS(erc1155){
    let events = await erc1155.getPastEvents('TransferSingle', {
        filter: {
            _from: "0x0000000000000000000000000000000000000000"
        },
        fromBlock: minBlock,
        toBlock: 'latest'
    });

    let nfts = [];

    if (Array.isArray(events)) {

        events = events.reverse();

        for (let i = 0; i < events.length; i++) {

            if (typeof events[i] == 'object') {
                let nftIndex = nfts.findIndex(n => n.id === events[i].returnValues._id);
                if (nftIndex === -1) {
                    nfts.push({ id: events[i].returnValues._id, editions: events[i].returnValues._value });
                } else {
                    nfts[nftIndex].editions += events[i].returnValues._value;
                }
            }
        }
    }

    events = await erc1155.getPastEvents('TransferBatch', {
        filter: {
            _from: "0x0000000000000000000000000000000000000000"
        },
        fromBlock: minBlock,
        toBlock: 'latest'
    });

    if (Array.isArray(events)) {
        events = events.reverse();
        for (let i = 0; i < events.length; i++) {
            if (typeof events[i] == 'object') {
                for (let j = 0; j < events[i].returnValues[3].length; j++) {
                    let nftIndex = nfts.find(n => n.id === events[i].returnValues[3][j])
                    if (nftIndex === -1) {
                        nfts.push({ id: events[i].returnValues[3][j], editions: events[i].returnValues[4][j] });
                    } else {
                        nfts[nftIndex].editions += events[i].returnValues[4][j];
                    }
                }
            }
        }
    }
    return nfts;
}

async function fetchUri(uri){
    let res = await axios.get(uri);
    return res.data;
}

async function downloadImage (url, path) {  
    const writer = fs.createWriteStream(path)
  
    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream'
    })
  
    response.data.pipe(writer)
  
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve)
      writer.on('error', reject)
    })
  }

async function generateAssets(){

    let provider = new HDWalletProvider({
        mnemonic: {
          phrase: process.env.MNEMONIC
        },
        providerOrUrl: xdaiRPC
      });

    let web3 = new Web3(provider);

    let erc1155 = await new web3.eth.Contract(ERC1155ABI, snafuNftAddress);
    let snafu20 = await new web3.eth.Contract(SNAFU20, snafu20Address);

    
    let nfts = await getMintedNFTS(erc1155)

    let __dirname = path.resolve(path.dirname(''));

    let tokenIds = [];
    let editions = [];
    //Set Editions
    for(let nft of nfts){
        if(+nft.id < +minNftId){
            continue;
        }
        tokenIds.push(nft.id);
        editions.push(nft.editions);
    }

    console.log("TokenIds:", tokenIds);
    console.log("Editions:", editions);
    console.log("Total tokenIds that will be set: ", tokenIds.length)

    console.log("Starting setTokenEditions transaction...") 
    const accounts = await web3.eth.getAccounts();
    // //
    // let tx = await snafu20.methods.setTokenEditions(tokenIds, editions).send({from: accounts[0]});
    // console.log("success:", tx)



    for(let nft of nfts){
        if(+nft.id < +minNftId){
            continue;
        }
        console.log("Fetching tokenInfo for token: ", nft.id)
        let tokenInfo = await snafu20.methods.getTokenInfo(nft.id, 1).call();
        if(tokenInfo['1'] !== nft.editions){
            console.warn(`Token ${nft.id} have unmatching edition number! (${tokenInfo['1']} != ${nft.editions})`)
        }
        console.log("Fetching uri for token: ", nft.id)
        let ipfsJson = await fetchUri(tokenInfo['0'])
        let dir = path.join(__dirname, `out/${nft.id}`);

        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }

        let json = {id: nft.id, editions: nft.editions, price: Web3.utils.fromWei(tokenInfo['2']), fee: Web3.utils.fromWei(tokenInfo['3']) }
        let metadata = Object.assign(ipfsJson, json);

        console.log("Saving metadata.json for token: ", nft.id)
        fs.writeFileSync(path.join(__dirname, `out/${nft.id}/metadata.json`), JSON.stringify(metadata, null, 2));

        console.log("Fetching image for token: ", nft.id)
        await downloadImage(ipfsJson.image, path.join(__dirname, `out/${nft.id}/image`));
    }

    process.exit();
}


if(!process.env.MIN_NFT){
    console.log("Missing Parameter MIN_NFT")
}else if(!process.env.MNEMONIC){
    console.log("Missing Parameter MNEMONIC")
}else{
    console.log("Generating nft assets / editions starting from ", process.env.MIN_NFT      )
    setTimeout(generateAssets, 3000);
}



