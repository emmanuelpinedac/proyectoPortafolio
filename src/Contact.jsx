import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div id="contactTitle">
        <h2>
          <strong>contactMe.</strong>
        </h2>
       
      </div>
      <div
        className="container-fluid row justify-content-center"
        id="contactContainer"
      >
        <div id="contact" className="col-xl-4 col-lg-6  col-md-6">
          <a href="">
            <i className="fa-regular fa-envelope"></i> emmanuelpinedac@outlook.com
          </a>
        </div>

        <div id="contact" className="col-xl col-gl-6 col-md-6">
          <a target="blank" href="https://github.com/emmanuelpinedac">
            <i className="fa-brands fa-github"></i> emmanuelpinedac
          </a>
        </div>

        <div id="contact" className="col-xl col-gl col-md-6">
          <a target="blank" href="https://www.instagram.com/emmanuelpc07/">
            <i className="fa-brands fa-instagram"></i> emmanuelpc07
          </a>
        </div>
        <div id="contact" className="col-xl col-lg col-md-6">
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=50686348952"
          >
            <i className="fa-brands fa-whatsapp"></i> +(506)86358952
          </a>
        </div>
      </div>
    </div>
  );
}
