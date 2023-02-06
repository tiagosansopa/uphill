import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [cart, setCart] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const handleCart = () => setCart(!cart);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              style={{ width: "auto", height: "80px " }}
              src={"images/logoB.png"}
            ></img>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/plans" className="nav-links" onClick={closeMobileMenu}>
                Plans
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/community"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Community
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Corp
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Merch
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Agenda tu entrevista
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={handleCart}>
                <i
                  className="fa fa-shopping-cart fa-bars "
                  aria-hidden="true"
                ></i>
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline">Agenda tu entrevista</Button>
          )}

          <ul className={cart ? "cart-menu active" : "cart-menu"}>
            <li className="cart-item">No tienes nada agregado.</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
