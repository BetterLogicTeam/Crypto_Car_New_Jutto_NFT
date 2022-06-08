import React,{useState} from 'react';
import './Secondmint.css';
import Web3 from 'web3';
import { toast } from 'react-toastify';

import {contractAddress,contractAbi} from "../Utils/Constants";
import { loadAccountAddress } from '../Api/Api';
const webSupply = new Web3('https://rinkeby-light.eth.linkpool.io/');

function SecondMinnt() {
let [count, setCount]=useState(1);
let [supply, setSupply]=useState();
let priceMint =150000000000000000
   
  const minus=()=>{
      if (count>=2){
    setCount(count-1)
    
      }
  }
  const plus=()=>{
      setCount(count+1)
      
}
const mint = async() =>{
    try{
    const web3 = window.web3;
    let myacc=await loadAccountAddress();
    let finalPrice= parseInt(finalPrice)*parseInt(count);
    
    console.log("FNL = ",finalPrice);
    
    //  =parseInt(count);
    let contractOf = new web3.eth.Contract(contractAbi, contractAddress);
    await contractOf.methods.whitelistMint(count).send({
        from: myacc,
        value: priceMint*count
    })
    toast.success("Minting Successed 👍")
}catch(e){
    toast.error("Minting Rejected 👎")
}
}

const getSupply=async()=>{
    try{
        // let web3= window.web3;
        let contract = new webSupply.eth.Contract(contractAbi, contractAddress);
        let sply = await contract.methods.totalSupply().call(); 
        setSupply(sply)
    }catch(e){
        console.log("error while supply", e);
    }
}
setInterval(() => {
    getSupply()
}, 1000);
    return (
        <div>
        <div className="mainMintdiv">
                <div className="innerMintdiv"><br /><br />
                    <h3 className="Firstdivheading">Pre - Sale is live</h3><br />
                    <h1 className='ConnectDiv'>{supply}/1000</h1>
                    <p className='ConnectdivPP'>Click mint to mint your NFT.</p>
                    <div className="afterconnecttext fs-4">
                    <button onClick={minus} className='btn btn-sm smbtnplus'><i class="far fa-minus"></i></button>
                    
                  {count}

                    <button onClick={plus} className='btn btn-sm smbtnplus'><i class="far fa-plus"></i></button>
                    
                    </div>
                    <div className="btnconnecthere">

                        <button 
                        onClick={()=>mint()}
                        className='btn btn-sm Connectbtn mt-3'>Mint</button>
                    </div>
                  
                   <p className="Salepricetext"> Pre - Sale Price : 0.15 ETH (+ Gas fee)</p>


                </div>
            </div>

            
        </div>
    )
}

export default SecondMinnt
