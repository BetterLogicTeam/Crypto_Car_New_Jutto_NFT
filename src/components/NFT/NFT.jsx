import React from 'react'
import "./NFT.css"
function NFT() {
    return (
        <div className='NFTcontainer' id='nft'>
            <div className='NFTinner'>
                <div className='NFTtext'>
                    <p>Choose your “BIG BOY TOY”</p>
                <span>PLAY-TO-EARN</span>
                <h1></h1>
                    <p className='mt-5'>We give all users the ability to claim and use a simple & generic NFT car with the same basic stats, The NFT cars are unique in special collections, and they have distinct features and designs. CST car club offers some of the most exotic futuristic NFT cars the world has ever seen. All cars in our game universe are built for racing and can be traded in real-world NFT marketplaces. The designs are inspired by different eras, The value of any car can be gauged by its rarity - Common, Uncommon, Rare, Special, and Legendary. Players can customize their cars for the race conditions with different components to influence the outcome of the computer-simulated races.</p>
                    {/* <p>Members’ contribution to the ecosystem will add
                     a flexible royalties governance portal and additional trade for every NFT Holder. </p>
                     <p>A rarity list For each car and limited amount car will be featured as ONLY One
                     and will be listed on the Honorary Board Member List.</p>
                     <p>Crypto car club PASS For High Valued NFT Holders grant
                    them access to private lounges, private car clubs, and private events worldwide.</p> */}
                </div>
                <div className='NFTimage'>
                    {/* <img src='Car.gif' /> */}
            <video className='nft_mp4' src='NFT.mp4' loop muted autoPlay/>

                </div>

            </div>
        </div>
    )
}

export default NFT
