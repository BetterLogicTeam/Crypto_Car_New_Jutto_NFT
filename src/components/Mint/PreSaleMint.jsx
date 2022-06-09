import React,{useState} from 'react'
import Mint from './Minnt'

import {loadWeb3} from '../Api/Api'

import PublicMint from './PublicMint';

function PreSaleMint() {
    let [isDisplay, setIsDisplay]=useState(false)
    let [txt, setTxt]=useState("")

    const getAccount=async()=>{
        try{
            let acc= await loadWeb3();
            if(acc== "No Wallet"){
                setTxt(acc);
                setIsDisplay(false)
            }else if(acc== "Connect to BSC"){
                setTxt(acc)
                setIsDisplay(true)
                // console.log("accc",acc);
            }else{
                setIsDisplay(true)
                setTxt(acc)

            }
            console.log(acc);

        }catch(e){
            console.log("error while get account",e);
        }
    }
    return (
        <div>
            {/* <Mint  getAccount={getAccount} txt={txt} /> */}
            {
                isDisplay ? <Mint  getAccount={getAccount} txt={txt} /> : <PublicMint/>
                
            }
            


        </div>
    )
}

export default PreSaleMint
