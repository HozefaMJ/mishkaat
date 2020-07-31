import React, { useState } from "react";
import Navbar from "./common/navbar";

//import axios from "axios";

import "../styles/contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.id === "name") {
      setName(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setNumber(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      name: name,
      email: email,
      number: number,
    };

    console.log(dataToSubmit);

    //axios.post("/api/sendMail", dataToSubmit);
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="contact-details">
        <h1>Email Id : mishkaatenterprise@gmail.com</h1>
        <h1>Call : 8454936884</h1>
        <h1>Whatsapp : 8454936884</h1>
      </div>
      <div className="socialLinksContact">
        <h1>Follow us at: </h1>
        <a href="https://www.instagram.com/">
          <h1>In</h1>
        </a>
        <a href="https://www.youtube.com/">
          <h1>Yt</h1>
        </a>
      </div>
      <div className="form">
        <p>Want our executive to contact you?</p>
        <form onSubmit={handleSubmit} action="">
          <input
            type="text"
            id="name"
            placeholder="Please enter your Name"
            className="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            placeholder="Please enter your Email Id"
            className="email"
            value={email}
            onChange={handleChange}
          />
          <input
            type="number"
            name="number"
            id="number"
            placeholder="Please enter your Contact Number"
            className="password"
            value={number}
            onChange={handleChange}
          />

          <button className="button" onClick={handleSubmit}>
            Punch me
          </button>
          <p>Don't worry we'll spam you!</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
