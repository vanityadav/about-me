import React from "react";
import Map from "./Map";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="section-title">
        <h1>
          Get In Touch<div className="center-line"></div>
        </h1>
        <p>I am not hard to find</p>
        <p>I’d love to hear from you!</p>
      </div>
      <div className="project-container">
        <div className="contact-form">
          <form method="submit">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Message"></input>
            <button type="submit">Shoot</button>
          </form>
        </div>
        <div className="contact-info">
          <div>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
