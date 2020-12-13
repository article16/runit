import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import "./App.css";
import Banner from "./components/banner";
import NavBar from "./components/navBar";
import About from "./components/about";
import Cards from "./components/cards";
import Experiences from "./components/experiences";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Banner />
          <About />
          <Cards />
          <Experiences />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
