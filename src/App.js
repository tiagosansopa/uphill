import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Plans from "./components/pages/Plans";
import About from "./components/pages/About";
import SignUp from "./components/pages/SignUp";
import Community from "./components/pages/Community";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/plans" component={Plans} />
          <Route path="/community" component={Community} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
