import React,{useState} from 'react'
import Mint from './Minnt'
import SecondMinnt from './SecondMinnt';
import {loadAccountAddress} from '../Api/Api'
function PreSaleMint() {
    let [isDisplay, setIsDisplay]=useState(true)
    let [txt, setTxt]=useState("")

    const getAccount=async()=>{
        try{
            let acc= await loadAccountAddress();
            if(acc== "No Wallet"){
                setTxt(acc);
                setIsDisplay(true)
            }else if(acc== "Connect to Rinkeby"){
                setTxt(acc)
                setIsDisplay(true)
            }else{
                setIsDisplay(false)
            }
            console.log(acc);

        }catch(e){
            console.log("error while get account",e);
        }
    }
    return (
        <div>
            {
isDisplay ? 
<Mint  getAccount={getAccount} txt={txt} />
:
<SecondMinnt/>
            }
        </div>
    )
}

export default PreSaleMint
