import React from 'react';
import './Overview.css';
function Overview() {
    return (
        <div className='overViweContainer' id="overview">

            <div className='overViewInner'>

                
                <div className='overviewText'>
            <h1 className='overview_heading_maiin'>Overview</h1>

                    <p>
                    CST Car Club is an open car racing metaverse inspired by Fast and Furious and Need for Speed and using the Play to Earn mechanism where anyone can earn tokens. We strongly believe this is the way forward for the future of gaming and creating a social-economic ecosystem. Players can race, improve their vehicles, bet on races, acquire Most expensive super cars, and can earn CST car club membership. 
                    </p>
                    {/* <p>Use your NFT car in the game to play and earn tokens.</p>
                    <p>Choose from the four different car designs, Futuristic, Exotic, Sport, and Classic.</p>
                    <p>Own your dream super NFT car and become a VIP member Club.</p> */}
                </div>
                <div className='overviewImage'><img src='MclarenOverView.png' /></div>
            </div>

        </div>
    )
}

export default Overview
