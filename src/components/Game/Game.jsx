import React from 'react'
import './Game.css'
function Game() {
    return (
      
        <div className='gameContainer' id='Game' >
            <div className='gameVideoContainer'>
                <video src='ccc-1_trim.mp4' loop muted autoPlay className='gamevideo' />

                <div className='bothdivbtnandtext'>
                    
                    <p className='GameText'>READY TO RACE</p>
                    <p className='GameText'></p>

                    <button className='btn  gameBtn'>LEARN MORE</button>
                </div>
            </div>
            <div className='gameBottomText'>
            <p >
            Earn your NFTs by playing the game and sell it on the marketplace to make real money
            </p>
            
        </div>
        {/* <p className='p2'>NFT CAR RACING ON BLOCKCHAIN</p> */}

        <div  id='Tokenoic'></div>
        </div>
    )
}

export default Game
