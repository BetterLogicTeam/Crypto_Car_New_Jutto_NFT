import React, { useState } from 'react'
import {loadAccountAddress} from "../Api/Api"
import './Minnt.css'

function Mint({getAccount,txt}) {
  
    return (
        <div>
            <div className="mainMintdiv">
                <div className="innerMintdiv"><br /><br />
                    <h3 className="Firstdivheading">Pre - Sale is live</h3><br />
                    <h1 className='ConnectDiv'>Please Connect</h1>
                    <p className='ConnectdivPP'>Connect to the Ethereum Mainnet Network (Accepted Wallet:Metamask).</p>
                    <p className='ConnectdivPP'>{txt}</p>
                    <div className="btnconnecthere">
                    
                        <button 
                        onClick={getAccount}
                        className='btn btn-sm Connectbtn'>CONNECT</button>
                    </div>
                    <div className="afterconnecttext">click mint to mint your NFT.</div>
                   <p className="Salepricetext"> Pre - Sale Price : 0.15 ETH (+ Gas fee)</p>


                </div>
            </div>


        </div>
    )
}

export default Mint
