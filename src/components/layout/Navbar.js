
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Heading extends Component {
    render() {
      return (
<nav className="navbar navbar-default">
  <div className="container-fluid">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">JOBTRACKER</a>
    </div>

  
    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
  </div>
</nav>
      );
    }       
  }
  export default Heading;