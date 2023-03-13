import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Plans from "./pages/Plans";
import Community from "./pages/Community";
import Coach from "./pages/Coach";
import SignUp from "./pages/SignUp";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/coach" component={Coach} />
        <Route path="/plans" component={Plans} />
        <Route path="/community" component={Community} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
