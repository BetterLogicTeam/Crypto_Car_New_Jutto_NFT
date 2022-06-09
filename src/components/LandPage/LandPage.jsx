import React from 'react'
import './LandPage.css'
function LandPage() {
    // <script type='text/javascript'>
    //             window.addEventListner("scroll",function () {
    //                 var header = document.querySelector("header");
    //                 header.classList.toggle("sticky", window.scrollY > 0);
    //             })
    //         </script>
    return (
        <div className='landPagevideo mt-0'>
            <video className='vdo' src='Langingpage.mp4' loop muted autoPlay/>
            
            <div className='landPageText'>
                <p className=''>
                About CST car Club – “WHERE FUN & EARN NEVER STOPS”
                </p>
                <span className='text-white'>CST car Club is a play-to-earn NFT car racing metaverse where you can participate in car racing, built NFT cars with unique characteristics, build your own NFT hippodrome and make profit while doing it. We are building a future where there are no community boarders. <br />
                The NFT Cars collection will be available in limited quantities and editions, with rarity increasing with level. Besides the Play to Earn element, the game also offers a pleasant gaming experience with high-end visuals, creative and competitive system.</span>
            </div>
        </div>
    )
}

export default LandPage
