import React from "react";
import "../../App.css";
import { Button } from "../Button";

export default function SignUp() {
  return (
    <div className="sign-up">
      <div>
        <h1>Like & Subscribe</h1>

        <p>
          Nos queremos mucho. somos lo macsimo. Corremos y nos divertimos mucho
          entre amigos y familia. Ven y diviertete.
        </p>

        <div>
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
