import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Latest News!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/landing/min_1.png"
              text="¿Cómo programar entrenos en mi Garmin? En menos de 5 min !!"
              label="Youtube"
              path="/"
            />
            <CardItem
              src="images/landing/min_2.png"
              text="Oso negro 70k! Experiencia de mi primer Ultra Maratón"
              label="Youtube"
              path="/"
            />
            <CardItem
              src="images/landing/min_3.png"
              text="No olvides llevar este equipo en una Ultra Maratón "
              label="Youtube"
              path="/"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/landing/min_4.jpeg"
              text="Gabriel Bianchi en CCC 100k vy UTMB! Septiembre 2023"
              label="Carrera"
              path="/"
            />
            <CardItem
              src="images/landing/mvmnt.jpg"
              text="Uphill + MVMNT bRUNch 18 de febrero "
              label="Evento"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
