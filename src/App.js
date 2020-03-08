import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Application from "../src/components/application";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../src/components/home';



function App() {
  return (
  <Router>
    <div className="App">
      <div className="myContainer">
        {/* <Navbar />
        <SideNavbar />
        <LandingPage /> */}
      </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/application" component={Application} />
        </Switch>
    </div>
  </Router>
  );
}

export default App;
