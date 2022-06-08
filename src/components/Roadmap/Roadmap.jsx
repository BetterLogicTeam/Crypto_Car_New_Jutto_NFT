import React from 'react'
import './Roadmap.css';
function Roadmap() {
    return (
        <div className='roadMapContainer' id='Roadmap'>
            <h1 className='roadMapHeading'>ROADMAP</h1>
            <div className='roadMapInner'>
                <div className='roadMapItem roadMapItem1'>
                    <div className='roadMapImage'>
                        <img src='roadmap-image1.png' className='no1roadmap' />
                        <div className="line"></div>
                    </div>
                    <div className='roadMapItemText'>
                        <h4>Q1 2022</h4>
                        <p>Discuss drafting content, come up with ideas</p>
                        <p>Refer and experience similar products</p>
                        <p>Sift through multiple ideas to select a few that work best</p>
                        <p>Concept development and testing</p>
                        <p>Financial plan analysis</p>

                    </div>
                </div>
                <div className='roadMapItem roadMapItem2'>
                    <div className='roadMapImage'> <img src='roadmap-image2.png' className='no1roadmap' />
                        <div className="line2"></div>
                    </div>
                    <div className='roadMapItemText'>
                        <h4>Q2 2022</h4>
                        <p>Design UI Game and create content game</p>
                        <p>Issue logo for game</p>
                        <p>Issue CST Token</p>
                        <p>Create and Launch Social media channels</p>
                        <p>Website launching</p>
                        <p>Open private round</p>
                        <p>Release demo app game version</p>
                        <p>Issue guide to play</p>
                        <p>Start Whitelist</p>
                        <p>Open Test-net version register</p>
                    </div>
                </div>
                <div className='roadMapItem roadMapItem3'>
                    <div className='roadMapImage'><img src='roadmap-image3.png' className='no1roadmap' />
                        <div className="line3"></div>
                    </div>
                    <div className='roadMapItemText'>
                        <h4>Q3 2022</h4>
                        <p>Airdrop for early player</p>
                        <p>Release game on test-net</p>
                        <p>Release beta game</p>
                        <p>NFT Marketplace launching</p>
                        <p>Sale NFT Cars</p>
                    </div>
                </div>
                <div className='roadMapItem roadMapItem4'>
                    <div className='roadMapImage'><img src='roadmap-image4.png'  className='no1roadmap' />
                        <div className="line4"></div>
                    </div>
                    <div className='roadMapItemText'>
                        <h4 className=''>Q4 2022</h4>
                        <p>NFT Staking</p>
                        <p>Listing on Coinmartketcap and Coingecko</p>
                        <p>Listing on CEX</p>
                    </div>
                </div>
                <div className='roadMapItem roadMapItem4'>
                    <div className='roadMapImage'>
                        <img src='05.png' className='no1roadmap' />
                        <div className="line5"></div>
                    </div>
                    <div className='roadMapItemText'>
                        <h4>Q1 2023</h4>
                        <p>Multichain launching</p>
                        <p>Announce game partnership</p>
                        <p>Update new features in game</p>
                    </div>
                </div>
                <div className='roadMapItem roadMapItem4'>
                    <div className='roadMapImage'> <img src='06.png' className='no1roadmap' />
                        <div className="line6"></div>
                    </div>
                    <div className='roadMapItemText'>
                        <h4>Q2 2023</h4>
                        <p>Implement Metaverse</p>
                        <p>Release demo game in Virtual Reality (VR)</p>
                    </div>
                </div>
            </div>

            <div id='Team'></div>
        </div>
    )
}

export default Roadmap
