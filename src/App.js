import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Heading from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

function App() {
  return (
    <div className="App">
    <Router>
    <Heading/>
    <br/>
    <Landing/>
    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    </Router>
    </div>
  );
}

export default App;
