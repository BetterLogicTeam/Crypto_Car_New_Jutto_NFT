import React from 'react'
import './Minnt.css'

function PublicSale({getAccount, txt}) {
    return (
        <div>
        <div className="mainMintdiv">
                <div className="innerMintdiv"><br /><br />
                    <h3 className="Firstdivheading">Public Sale is live</h3><br />
                    <h1 className='ConnectDiv'>Please Connect</h1>
                    <p className='ConnectdivPP'>Connect to the Ethereum Mainnet Network (Accepted Wallet:Metamask).</p>
                    <p className='ConnectdivPP'>{txt}.</p>

                    <div className="btnconnecthere">

                        <button className='btn btn-sm Connectbtn' onClick={getAccount}>CONNECT</button>
                    </div>
                    <div className="afterconnecttext">Public Sale Price : 0.20 ETH (+ Gas fee)</div>
                    <div className="afterconnecttext fs-5">Each transaction will be limited to 10 NFTs</div>


                </div>
            </div>

            
        </div>
    )
}

export default PublicSale
