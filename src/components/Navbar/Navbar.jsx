import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navbar.css";
import { BsMedium } from "react-icons/bs";
import { Routes, Route, Link } from "react-router-dom";

function NavbarCrypto({ setAll }) {

  return (
   
    <div>
      
      <Navbar
        collapseOnSelect
        expand="xl"
        variant="dark"
        className="navContainer"
        // fixed="top"
      >
        <Navbar.Brand href="#home" className="">
          <img src="logo_car.png" height="50px" width="180px" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="Navbuttonres"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="navLink">
          <Nav>
            {/* <a
              href="#overview"
              className="me-3 text-white  navText"
              onClick={setAll}
            >
              OVERVIEW
            </a> */}
            <a
              href="#mint"
              className="me-3 text-white  navText btn btn-outline-light joinBtn2 me-2 "
              onClick={setAll}
            >
              MINT
            </a>
            <a
              href="#nft"
              className="me-3 text-white  navText btn btn-outline-light joinBtn2 me-2 "
              onClick={setAll}
            >
              MY NFT
            </a>
            {/* <a
              href="#Game"
              className="me-3 text-white  navText"
              onClick={setAll}
            >
              GAME
            </a> */}
            <a
              href="#Tokenoic"
              className="me-3 text-white  navText btn btn-outline-light joinBtn2 me-2"
              onClick={setAll}
            >
              TOKENOMICS
            </a>

            <a
             href="#Collections"
             className="me-3 text-white  navText btn btn-outline-light joinBtn2 me-2"
             onClick={setAll}
             >
             Collection
             </a>

              <a
              href="#Roadmap"
              className="me-3 text-white  navText btn btn-outline-light joinBtn2 me-2"
              onClick={setAll}
              >
               RoadMap
               </a>
            {/* <a
              href="#Roadmap"
              className="me-3 text-white  navText"
              onClick={setAll}
            >
              ROADMAP
            </a>
            <a
              href="#Team"
              className="me-3 text-white  navText"
              onClick={setAll}
            >
              TEAM
            </a>
            <a
              href="#Partners"
              className="me-3 text-white  navText"
              onClick={setAll}
            >
              PARTNERSHIP
            </a>
            <a
              href="#Faq"
              className="me-3 text-white  navText"
              onClick={setAll}
            >
              FAQ
            </a> */}
          </Nav>
        </Navbar.Collapse>
        <div className="me-3 maindivnavnav">
          <div className="navLinks ">
            {/* <button className="btn btn-outline-light joinBtn2 me-2 ">
              Join Our Discord
            </button> */}
            <div class="dropdown show">
              <a
                class=" btn btn-outline-light joinBtn me-2 dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>

              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                  class="dropdown-item"
                  href="https://twitter.com/Coin__Stake"
                  target="_blank"
                >
                  <i class="fab fa-twitter me-2 "></i><span>Twitter</span>
                  
                </a>
                <a
                  class="dropdown-item"
                  href="https://www.instagram.com/coinstake01/"
                  target="_blank"
                >
                  <i class="fab fa-instagram me-2 "></i><span>Instagram</span>
                  
                </a>
                <a
                  class="dropdown-item"
                  href="https://t.me/coinstake01"
                  target="_blank"
                >
                  <i class="fab fa-telegram me-2 "></i><span>Telegram</span>
                  
                </a>
                <a
                  class="dropdown-item"
                  href="https://www.facebook.com/Coin-Stake-102162452390259/"
                  target="_blank"
                >
                  <i class="fab fa-facebook me-2 "></i><span>Facebook</span>
                  
                </a>
                <a
                  class="dropdown-item"
                  href="https://www.youtube.com/channel/UCuMyPsrFiQwaXrO-nmgGd1w"
                  target="_blank"
                >
                  <i class="fab fa-youtube me-2 "></i><span>Youtube</span>
                  
                </a>
              </div>
            </div>
            {/* <span>
              <a >
                
              </a>
            </span>
            <span>
               <a href="" target="_blank"> <i
                class="fab fa- me-2"
              ></i></a>
            </span>
            <span>
               <a href="" target="_blank"> <i
                class="fab fa-telegram me-2"
              ></i></a>
            </span>
            <span>
               <a href="" target="_blank"> <i
                class="fab fa-facebook me-2"
              ></i></a>
            </span>
            <span>
               <a href="" target="_blank"> <i
                class="fab fa-youtube me-2"
              ></i></a>
            </span> */}
            {/* <span><BsMedium className='fa-instagram me-3 ' /></span> */}
           
          </div>
        </div>
      </Navbar>
    </div>
  );
}

export default NavbarCrypto;
