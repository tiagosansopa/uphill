import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Vive la experiencia!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/1.jpg"
              text="Conoce los lugares mas impresionantes para correr"
              label="Aventura"
              path="/services"
            />
            <CardItem
              src="images/2.jpg"
              text="Distruta los bonitos paisajes."
              label="Paisajes"
              path="/services"
            />
            <CardItem
              src="images/3.jpg"
              text="Corre con amigos"
              label="Amistad"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/4.jpeg"
              text="Pertenece la una comunidad amistosa de amistad con amigos amistosos."
              label="Comunidad"
              path="/products"
            />
            <CardItem
              src="images/5.jpg"
              text="Vale verga pero vive feliz con tus logros"
              label="Verga"
              path="/sign-up"
            />
            <CardItem
              src="images/6.jpg"
              text="Agua no hay pero esta foto esta bonita"
              label="Paz y Calma"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/7.jpg"
              text="Sientete realizado por primera vez en tu vida"
              label="Zangano"
              path="/products"
            />
            <CardItem
              src="images/8.jpg"
              text="Pero foto muy bonita"
              label="Esto tampoco"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
