import React from "react";
import "../App.css";
import Cards from "../ui/Cards";
import HeroSection from "../pages/HeroSection";
import Photos from "../ui/Photos";

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Photos />
      <Cards />
    </React.Fragment>
  );
}

export default Home;
