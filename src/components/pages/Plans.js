import React from "react";
import "../../App.css";
import "./Plans.css";
import { Button } from "../Button";

export default function Plans() {
  return (
    <div>
      <div className="plans-container">
        <h1>Planes de entrenamiento</h1>
      </div>
      <div className="plans">
        <div className="plans-wrap">
          <div className="plan-single">
            <h2>Plan Uphill</h2>
            <h3>Programación Running</h3>
            <p>Detalle diario de entreno adaptado a tu horario y espacio</p>
            <p>Periodización efectiva </p>
            <h3>Fuerza balance y agilidad</h3>
            <p>Contenido audiovisual</p>
            <p>Rutinas guiadas y detalladas </p>
            <p>Hipervínculos dentro del programa </p>
            <h3>Sesiones de estiramiento</h3>
            <p>Sesiones de yoga guiadas específicas para corredores</p>
            <h3>Seguimiento del coach</h3>
            <p>Follow up semanal</p>
            <p>Análisis diario de métricas</p>
            <p>Planificación de metas</p>
            <Button
              className="btns"
              buttonStyle="btn--plans"
              buttonSize="btn--small"
            >
              Q 450.00
            </Button>
            <h2></h2>
          </div>

          <div className="plan-single">
            <h2>Plan pro</h2>
            <h3>Programación running</h3>
            <h3>Fuerza balance y agilidad</h3>
            <h3>Sesiones de estiramiento</h3>
            <h3>Seguimiento del coach</h3>
            <h3>Training Peaks</h3>
            <h4>Entrenos personalizados</h4>
            <h4>Aplicación sincronizada con tu reloj</h4>
            <h4>Data fácil de obtener para tu coach</h4>
            <Button
              className="btns"
              buttonStyle="btn--plans"
              buttonSize="btn--small"
            >
              Q 600.00
            </Button>
          </div>

          <div className="plan-single">
            <h2>Add Ons</h2>
            <h3>Personal Training</h3>
            <Button
              className="btns"
              buttonStyle="btn--plans"
              buttonSize="btn--small"
            >
              Q 250.00
            </Button>
            <h3>Masterclass Mensual</h3>
            <Button
              className="btns"
              buttonStyle="btn--plans"
              buttonSize="btn--small"
            >
              Q 200.00
            </Button>
            <h3>eBook recetas para deportistas</h3>
            <Button
              className="btns"
              buttonStyle="btn--plans"
              buttonSize="btn--small"
            >
              Q 200.00
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
