import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-logo">
          <img
            style={{ width: "auto", height: "120px " }}
            alt="uphill logo"
            src={"images/logo/logoW.png"}
          ></img>
        </div>

        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/about">Sobre nosotros</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/">Tu coach</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/plans">Planes</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/community">Comunidad</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/sign-up">Agendar</Link>
          </div>
        </div>

        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </Link>
          <Link
            className="social-icon-link instagram"
            to="https://instagram.com/uphill.coaching/"
            target="_blank"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </Link>
          <Link
            className="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube" />
          </Link>
        </div>
      </div>

      <div className="social-media-wrap">
        <small className="website-rights">Uphill Coaching © 2023</small>
      </div>
    </div>
  );
}

export default Footer;
