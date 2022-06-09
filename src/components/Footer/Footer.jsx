import React from 'react'
import './Footer.css'
function Footer({setPolicy, setTerms}) {
    return (
        <div className='footerContainer'>
            <div className="footerInner">
                <div className='footerInners'> 
                    <span>Copyright ©️ <a href='#'>coinstake (CST)</a> 2022 All Rights Reserved</span>
                </div>
                <br/>
                <div className='footertext'>
                    <div className='links'>
                   
                        <a class="dropdown-item" href="https://twitter.com/Coin__Stake" target="_blank">
                            <i class="fab fa-twitter me-2 "></i>
                            <span>Twitter</span>
                            </a>
                        <a class="dropdown-item" href="https://www.instagram.com/coinstake01/" target="_blank">
                            <i class="fab fa-instagram me-2 "></i><span>Instagram</span>
                            </a>
                        <a class="dropdown-item" href="https://t.me/coinstake01" target="_blank">
                            <i class="fab fa-telegram me-2 "></i><span>Telegram</span>
                            </a>
                        <a class="dropdown-item" href="https://www.facebook.com/Coin-Stake-102162452390259/" target="_blank">
                            <i class="fab fa-facebook me-2 "></i><span>Facebook</span>
                            </a>
                        <a class="dropdown-item" href="https://www.youtube.com/channel/UCuMyPsrFiQwaXrO-nmgGd1w" target="_blank">
                            <i class="fab fa-youtube me-2 "></i><span>Youtube</span>
                            </a>
                        
                    </div>
                    {/* <span onClick={()=>setPolicy()}>Privacy policy</span> */}
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                    {/* <span onClick={()=>setTerms()}>Term of services</span> */}
                </div>
            </div>
        </div>
    )
}

export default Footer
