import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import LandPage from "./LandPage/LandPage";
import Overview from "./Overview/Overview";
import NFT from "./NFT/NFT";
import Slides from "./Carousel/Carousel";
import Game from "./Game/Game";
import Tokenomics from "./Tokenomics/Tokenomics";
import Roadmap from "./Roadmap/Roadmap";
import Team from "./Team/Team";
import Partners from "./Partners/Partners";
import TermsServices from "./TERMSOFSERVICES/TermsServices";
import Footer from "./Footer/Footer";
import PrivacyPolicey from "./PRIVACY POLICY/PrivacyPolicey";
import Faq from "../components/Faq/Faq";
import Collections from "./Collections/Collections";
import { Routes, Route, Link } from "react-router-dom";
import SuperMint from "./Mint/SuperMint";
function Home() {
  let [isRouting, setIsRouting] = useState("all");
  const setAll = () => {
    setIsRouting("all");
  };
  const setPolicy = () => {
    setIsRouting("policy");
  };
  const setTerms = () => {
    setIsRouting("terms");
  };
  if (isRouting == "all") {
    return (
      <>
        <AllComponents
          setAll={setAll}
          setPolicy={setPolicy}
          setTerms={setTerms}
        />
      </>
    );
  } else if (isRouting == "policy") {
    return (
      <>
        <Privacy setAll={setAll} setPolicy={setPolicy} setTerms={setTerms} />
      </>
    );
  } else {
    return (
      <>
        <Terms setAll={setAll} setPolicy={setPolicy} setTerms={setTerms} />
      </>
    );
  }
}

export default Home;

const AllComponents = ({ setAll, setPolicy, setTerms }) => {
  return (
    <div>
      <Navbar setAll={setAll} />
      <LandPage />
      <SuperMint />
      <Overview />
      <NFT />
      <Slides />
      <Game />
      <Tokenomics />
      <Collections/>
      <Roadmap />
      {/* <Team/> */}
      <Faq />
      {/* <Partners/> */}
      <Footer setPolicy={setPolicy} setTerms={setTerms} />
    </div>
  );
};
const Privacy = ({ setAll, setPolicy, setTerms }) => {
  return (
    <>
      <Navbar setAll={setAll} />
      <PrivacyPolicey />
      <Footer setPolicy={setPolicy} setTerms={setTerms} />
    </>
  );
};
const Terms = ({ setAll, setPolicy, setTerms }) => {
  return (
    <>
      <Navbar setAll={setAll} />
      <TermsServices />
      <Footer setPolicy={setPolicy} setTerms={setTerms} />
    </>
  );
};
