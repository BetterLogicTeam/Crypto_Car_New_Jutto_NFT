import React,{useState} from 'react'
import {contractAddress, contractAbi} from '../Utils/Constants'
import PreSaleMint from './PreSaleMint';
import PublicSaleMint from './PublicSaleMint';
import Web3 from 'web3'
const webSupply = new Web3('https://rinkeby-light.eth.linkpool.io/');

// const webSupply = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
// const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
function SuperMint() {
    let [isDisplay, setIsDisplay]=useState(true);
    const getSupply=async()=>{
        try{
            // let web3= window.web3;
            let contract = new webSupply.eth.Contract(contractAbi, contractAddress);
            let sply = await contract.methods.totalSupply().call(); 
            if(sply>=1000){
                setIsDisplay(false)
            }
            console.log(sply);
        }catch(e){
            console.log("error while supply", e);
        }
    }
    
    setInterval(() => {
        getSupply();
    }, 1000);
    return (
        <div id='mint'>
   
{
    isDisplay ?
    <PreSaleMint/>
    :
    <PublicSaleMint/>
}

       
        </div>
    )
}

export default SuperMint
