import React, { useState } from "react";
import ImageSlider from "./ImageSlider";

const Photos = () => {
  const slides = [
    { url: "images/about/cover_1.jpg", title: "Sobre Nosotros" },
    { url: "images/plans/plans-cover.jpeg", title: "Entrenamiento" },
    { url: "images/landing/4.jpeg", title: "Comunidad y Eventos" },
    { url: "images/landing/mvmnt.jpg", title: "Merch" },
    { url: "images/landing/5.jpg", title: "Agenda Tu Entrevista" },
  ];
  const containerStyles = {
    height: "500px",
    maxWidth: "850px",
    margin: "50px auto",
  };

  const photosStyle = {
    padding: "25px",
    backgroundColor: "#16222e",
    boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)",
  };

  return (
    <div style={photosStyle}>
      <h1></h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <h1></h1>
    </div>
  );
};

export default Photos;
