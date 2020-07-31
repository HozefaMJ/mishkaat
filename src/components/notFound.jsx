import React, { Component } from "react";
import Navbar from "./common/navbar";
import "../styles/notFound.css";

class NotFound extends Component {
  state = {};
  render() {
    return (
      <div className="notFound">
        <Navbar />
        <h1>Seems like you're lost</h1>
      </div>
    );
  }
}

export default NotFound;
