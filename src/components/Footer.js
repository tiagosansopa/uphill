import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About</h2>
            <Link to="/sign-up">Uphill method</Link>
          </div>
          <div class="footer-link-items">
            <h2>Plans</h2>
            <Link to="/">Browse</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Community</h2>
            <Link to="/">Events</Link>
            <Link to="/">Merch</Link>
          </div>
          <div class="footer-link-items">
            <h2>Corp</h2>
            <Link to="/">Plans</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <img
              style={{ width: "auto", height: "80px " }}
              src={"images/logoW.png"}
            ></img>
          </div>
          <small class="website-rights">Uphill © 2023</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="instagram.com/uphill.coaching/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
