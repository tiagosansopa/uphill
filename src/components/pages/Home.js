import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Photos from "../Photos";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <Photos />
      <Cards />
    </>
  );
}

export default Home;
