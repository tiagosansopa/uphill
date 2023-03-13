import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-header cover-1">
        <h1>¿Quienes somos?</h1>
      </div>
      <div className="about-section">
        <h2>Misión</h2>
        <p>
          Somos una empresa guatemalteca que se especializa en la preparación
          física de atletas de Trail Running a través de programas
          personalizados, holísticos y efectivos. Somos una comunidad de
          corredores que se apoya colectivamente para cumplir metas.
        </p>
      </div>
      <div className="about-section">
        <h2>Visión</h2>
        <p>
          Ser una comunidad de atletas internacional que demuestre que todos los
          objetivos se pueden lograr siempre y cuando se trabaje con esfuerzo,
          disciplina y pasión. Manteniendo presente los pilares de compañerismo,
          ética y salud al igual que la mentalidad Uphill.
        </p>
      </div>

      <div className="about-section" style={{ marginBottom: "150px" }}>
        <h2>Nuestro Equipo</h2>
        <div className="photos-wrap">
          <div className="photo-individual">
            <img
              alt="gabriel bianchi"
              src={"images/about/team-gabriel.jpg"}
            ></img>
            <h3>Gabriel Bianchi</h3>
            <h4>Head Coach</h4>
          </div>
          <div className="photo-individual">
            <img
              alt="Maria Jose Sanchez"
              src={"images/about/team-majo.jpeg"}
            ></img>
            <h3>María José Sánchez</h3>
            <h4>Directora Creativa </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
