import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-up">Uphill method</Link>
          </div>
          <div className="footer-link-items">
            <h2>Plans</h2>
            <Link to="/">Browse</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Community</h2>
            <Link to="/">Events</Link>
            <Link to="/">Merch</Link>
          </div>
          <div className="footer-link-items">
            <h2>Corp</h2>
            <Link to="/">Plans</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <img
              style={{ width: "auto", height: "80px " }}
              src={"images/logo/logoW.png"}
            ></img>
          </div>
          <small className="website-rights">Uphill © 2023</small>
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
              to="instagram.com/uphill.coaching/"
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
      </section>
    </div>
  );
}

export default Footer;
