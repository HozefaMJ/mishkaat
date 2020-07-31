import React, { Component } from "react";
import "../../styles/footer.css";
import semicolon from "../../img/semicolon.png";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="crossfit">
          <a href="https://semicolon-inc.herokuapp.com">
            <h2>© Mishkaat Enterprises 2020 All rights reserved</h2>
          </a>
        </div>
        <div className="socialLinks">
          <h1>Follow us at: </h1>
          <a href="https://www.instagram.com/">
            <h1>In</h1>
          </a>
          <a href="https://www.youtube.com/">
            <h1>Yt</h1>
          </a>
        </div>
        <div className="semicolon">
          <a href="https://semicolon-inc.herokuapp.com">
            <h2>Designed & Developed By Semicolon INC</h2>
          </a>
          <a href="https://semicolon-inc.herokuapp.com">
            <img
              className="footerSemicolon"
              src={semicolon}
              alt="semicolon footer logo"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
