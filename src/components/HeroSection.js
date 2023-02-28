import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/hero.mp4" autoPlay loop muted />
      <h1>Uphill Coaching</h1>
      <p>
        Caminando siempre hacia arriba sin importar que tan dificil sea el
        camino.
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--main"
          buttonSize="btn--large"
          route="/about"
        >
          Conócenos
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--main"
          buttonSize="btn--large"
          route="/plans"
        >
          Entrena con Nosotros
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--main"
          buttonSize="btn--large"
          route="/community"
        >
          Comunidad
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
