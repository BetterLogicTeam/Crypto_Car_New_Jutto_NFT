import React, { useState } from 'react'
import {loadAccountAddress, loadWeb3} from "../Api/Api"
import './Minnt.css'
import PublicMint from './PublicMint'

function Mint() {
    let [txt, setTxt]=useState("Connect to BSC")
    const [minthere, setminthere] = useState(false)


    const getAccount=async()=>{
        try{
            let acc = await loadWeb3();
        // console.log("ACC=",acc)
        if (acc == "No Wallet") {
            setTxt("No Wallet")
            setminthere(false)
        }
        else if (acc == "Wrong Network") {
            setTxt("Wrong Network")
            setminthere(false)
        } else {
            let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
            setTxt(myAcc);
            setminthere(true)
  
        }

        }catch(e){
            console.log("error while get account",e);
        }
    }

 
  
    return (
        <div>
            {
                minthere ?   <PublicMint/>     :   <>
                
                
                <div className="mainMintdiv">
                    <h1 className='main_heading_here'>Mint NFT</h1>

                <div className="innerMintdiv"><br /><br />
                    <h3 className="Firstdivheading">Pre - Sale is live</h3><br />
                    <h1 className='ConnectDiv'>Please Connect</h1>
                    <p className='ConnectdivPP'>Connect to the Binance Testnet Network (Accepted Wallet:Metamask).</p>
                    <p className='ConnectdivPP'>{txt}</p>
                    <div className="btnconnecthere">
                    
                        <button 
                        onClick={()=>getAccount()}
                        className='btn btn-sm Connectbtn'>CONNECT</button>
                    </div>
                    <div className="afterconnecttext">click mint to mint your NFT.</div>
                   <p className="Salepricetext"> Pre - Sale Price : 0.15 BNB (+ Gas fee)</p>


                </div>
            </div></>
                
            }
           


        </div>
    )
}

export default Mint
