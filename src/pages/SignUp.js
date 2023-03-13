import React from "react";
import "./SignUp.css";
import { Button } from "../ui/Button";

export default function SignUp() {
  return (
    <div className="sign-up-container">
      <div className="sign-up-form">
        <h1>Agenda tu Entrevista</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px auto 10px 0",
          }}
        >
          <p>Nombre Completo</p>
          <input name="email" type="email" placeholder="" />

          <p>Correo Electronico</p>
          <input name="email" type="email" placeholder="" />
        </div>{" "}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "10px auto 10px 0",
          }}
        >
          <p>Fecha de Nacimiento</p>
          <input name="email" type="email" placeholder="" />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            margin: "auto",
            margin: "10px auto",
          }}
        >
          <p>Como te enteraste de Uphill Coaching?</p>
          <input name="email" type="text" placeholder="" />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            margin: "auto",
            margin: "10px auto",
          }}
        >
          <p>Cual es tu proxima meta deportiva?</p>
          <input name="email" type="text" placeholder="" />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            margin: "auto",
            margin: "10px auto",
          }}
        >
          <p>Eligue tu fecha: </p>
          <input name="date" type="date" placeholder="" />
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            margin: "auto",
            margin: "10px auto",
          }}
        >
          <p>Eligue tu Horario: </p>
          <select name="cars" id="cars" form="carform">
            <option value="volvo">6:00 pm</option>
            <option value="saab">7:00 pm</option>
            <option value="opel">8:00 pm</option>
            <option value="audi">9:00 pm</option>
          </select>
        </div>
      </div>
    </div>
  );
}
