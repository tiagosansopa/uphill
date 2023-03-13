import React from "react";
import "./Coach.css";

export default function Coach() {
  return (
    <div className="coach-container">
      <div className="coach-header cover-2">
        <h1>¿Quién es tu coach?</h1>
      </div>

      <div className="coach-card">
        <h2>Gabriel Bianchi</h2>
        <div
          style={{ display: "flex", alignItems: "center", color: "#16222e" }}
        >
          <img
            alt="gabriel bianchi"
            src={"images/about/team-gabriel.jpg"}
            style={{ width: "40%", height: "auto", color: "#16222e" }}
          ></img>
          <p>
            Un atleta y emprendedor dedicando su vida al deporte y en ese
            proceso, ayudando a otras personas a superarse por el mismo medio.
          </p>
        </div>
      </div>

      <div style={{ margin: "100px 0" }}>
        <h2>Educación</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "auto", height: "60px " }}
            alt="ueasca logo"
            src={"images/coach/uesca.png"}
          ></img>
          <p>
            Ultra Running Certified Coach 2021 United Endurance Sports Academy
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "auto", height: "60px " }}
            alt="ufm logo"
            src={"images/coach/ufm.png"}
          ></img>
          <p>
            Licenciatura en Emprendimiento 2016 - 2020 Universidad Francisco
            Marroquin
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "auto", height: "60px " }}
            alt="WCO logo"
            src={"images/coach/wco.png"}
          ></img>
          <p>
            Calisthenics Certified Coach 2016 World Calisthenics Organization
          </p>
        </div>
      </div>

      <h2>--Trayectoria Deportiva</h2>

      <div style={{ margin: "100px 0" }}>
        <h2>Moto Enduro 2002 - 2019</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "400px", height: "auto" }}
            alt="ueasca logo"
            src={"images/coach/coach-moto.png"}
          ></img>
          <div>
            <ul>
              <li>
                Campeón Nacional de Enduro en categoría Pre-Expertos (2014),
                Expertos (2015)
              </li>
              <li>
                4to Lugar Ranking Nacional de Enduro en Categoría Super-Expertos
                (2017)
              </li>
              <li>
                Campeón Nacional de Cross-Country en categoría Pre-Expertos
                (2014), Expertos (2015)
              </li>
              <li>
                Sub-Campeón de Cross-Country en Categoría Super-Expertos (2016,
                2017)
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{ margin: "100px 0" }}>
        <h2>Calistenia 2015 - 2019</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ width: "400px", height: "auto" }}
            alt="ueasca logo"
            src={"images/coach/coach-calist.png"}
          ></img>
          <div>
            <ul>
              <li>
                CalistBarzz 2015-2019 Co-Fundador y Coach en CalistBarzz
                Guatemala
              </li>
              <li>+1,000 horas de experiencia en clases grupales</li>
              <li>Campeón Light Weight en categoría Freestyle 2017</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>--Trail y Ultra Running</h2>

      <div className="race-sum">
        <div className="race-fact">
          <h2>15</h2>
          <p>Carreras</p>
        </div>
        <div className="race-fact">
          <h2>755</h2>
          <p>Km Recorridos</p>
        </div>
        <div className="race-fact">
          <h2>31,470</h2>
          <p>Mts de Desnivel</p>
        </div>
        <div className="race-fact">
          <h2>8</h2>
          <p>Primeros Lugares</p>
        </div>
        <div className="race-fact">
          <h2>14,000</h2>
          <p>Km de Entreno</p>
        </div>
      </div>
      <h2>-2019</h2>
      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Acatenango Escuela La Soledad</h1>
            <p>Ubicacion</p>
            <p>9k </p>
            <p>1,400m</p>
            <p>1:51</p>
            <p>6to Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/Acatenango-Escuela-La-Soledad.jpg"}
            ></img>
          </div>
        </div>
        <div className="race-row">
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/UTG-42k-2019.jpg"}
            ></img>
          </div>
          <div className="race-data">
            <h1>Ultra Trail Guatemala (UTG)</h1>
            <p>Ubicacion</p>
            <p>42k</p>
            <p>2,600m</p>
            <p>5:55</p>
            <p>4to Lugar</p>
            <p>Observaciones</p>
          </div>
        </div>
      </div>

      <h2>-2020</h2>
      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Volcano Race</h1>
            <p>Ubicacion</p>
            <p>22k </p>
            <p>2,200m</p>
            <p>3:35 horas</p>
            <p>1er Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/Volcano-Race.jpg"}
            ></img>
          </div>
        </div>
      </div>

      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Ultra Maratón Xocomil</h1>
            <p>Ubicacion</p>
            <p> 50k</p>
            <p>4,500m</p>
            <p>10:56 horas</p>
            <p>1er lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/UTX-50k.jpg"}
            ></img>
          </div>
        </div>
      </div>

      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Ascenso a Laguna Seca</h1>
            <p>Ubicacion</p>
            <p>8.5k</p>
            <p>620m</p>
            <p>0:47</p>
            <p>Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/Ascenso-a-Laguna-Seca.jpg"}
            ></img>
          </div>
        </div>
      </div>

      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>San Sil Trail</h1>
            <p>Ubicacion</p>
            <p>13k</p>
            <p>650m</p>
            <p>1:07</p>
            <p>Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/San-Sil-Trail.jpg"}
            ></img>
          </div>
        </div>
      </div>

      <h2>-2021</h2>
      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>La Escondida</h1>
            <p>Ubicacion</p>
            <p>15k</p>
            <p>650m</p>
            <p>1:14 horas</p>
            <p>Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/La-Escondida-Trail.jpg"}
            ></img>
          </div>
        </div>
      </div>

      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>The Coastal Challenge</h1>
            <p>Ubicacion</p>
            <p>250k (6 etapas) </p>
            <p>Elevacion</p>
            <p>Tiempo</p>
            <p>DNF</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/The-Coastal-Challenge-1.jpeg"}
            ></img>
          </div>
        </div>
        <div className="race-row">
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/Skyrunning-42k.jpg"}
            ></img>
          </div>
          <div className="race-data">
            <h1>Skyrunning World Championship</h1>
            <p>Ubicacion</p>
            <p>42k</p>
            <p>3,000m</p>
            <p>5:10 horas</p>
            <p>21vo Lugar </p>
            <p>Observaciones</p>
          </div>
        </div>
      </div>

      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Ultra Trail Guatemala (UTG)</h1>
            <p>Ubicacion</p>
            <p>42k </p>
            <p>2,600m</p>
            <p>5:56 horas</p>
            <p>1er Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/UTG-42k-2021.JPG"}
            ></img>
          </div>
        </div>
      </div>

      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Ruta de los Dioses</h1>
            <p>Ubicacion</p>
            <p>50k</p>
            <p>1,200m</p>
            <p>4:25 horas</p>
            <p>Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/Ruta-de-los-Dioses.jpg"}
            ></img>
          </div>
        </div>
      </div>

      <h2>-2022</h2>
      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Ultra Trail Oso Negro </h1>
            <p>(México)</p>
            <p>70k</p>
            <p> 4,100m</p>
            <p>Tiempo</p>
            <p>10:58</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/Ultra-Trail-Oso-Negro.jpg"}
            ></img>
          </div>
        </div>
      </div>

      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Ultra Dolomites</h1>
            <p>Italia</p>
            <p>80k</p>
            <p>4,600m</p>
            <p>9:48 (9no Age Group)</p>
            <p>21vo Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/Ultra-Dolomites-80k.jpg"}
            ></img>
          </div>
        </div>
        <div className="race-row">
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/Cruce-al-Cerro.jpg"}
            ></img>
          </div>
          <div className="race-data">
            <h1>Cruce al Cerro Tecpán</h1>
            <p>Ubicacion</p>
            <p>40k</p>
            <p>2,150m</p>
            <p>4:00 horas (2 etapas)</p>
            <p>2do Lugar</p>
            <p>Observaciones</p>
          </div>
        </div>
      </div>

      <div className="race-slide">
        <div className="race-row">
          <div className="race-data">
            <h1>Ultra Trail Guatemala</h1>
            <p>(Guatemala)</p>
            <p>21k</p>
            <p>1,200m</p>
            <p>1:43 horas</p>
            <p>1er Lugar</p>
            <p>Observaciones</p>
          </div>
          <div className="race-img">
            <img
              style={{ width: "400px", height: "auto" }}
              alt="ueasca logo"
              src={"images/coach/carreras/UTG-21k.jpg"}
            ></img>
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <p>
          Uphill Coaching 2020 – Fundador y Head Coach de Uphill Coaching
          Servicio de entrenamiento virtual y presencial para atletas de
          resistencia. Trabajamos programas personalizados, holísticos y
          efectivos para atletas de todos los niveles y hacia cualquier objetivo
          que rete tus capacidades físicas y mentales. +50 alumnos activos en
          Centro América Talleres, experiencias y organización de eventos para
          los Uphill Athletes.
        </p>
        <p>
          Comunidad de Runners Moonlight Runners Febrero 2022 – Project Manager
          para Plaza Fontabella Grupo de corredores dentro de Fontabella.
          Entrenamos todos los miércoles 6:30pm, saliendo de la Plaza, un sábado
          de fondo y un taller al mes. 5 micro eventos mensuales, enfocados en
          educación, comunidad y desarrollo del corredor +80 participantes en el
          grupo Uphill x Sporta Febrero 2023 – Project Manager Comunidad de
          Running dentro de las instalaciones de Sporta. Entrenamos el tercer
          jueves y el segundo domingo de cada mes. 3 micro eventos mensuales,
          enfocados en comunidad, corrección de técnica y errores comunes, y
          competencias internas. +20 participantes en el grupo
        </p>
      </div>
    </div>
  );
}
