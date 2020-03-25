import React from "react";  
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => (
  <section id="contact">
    <div className="container">
      <div className="contact-text">
        <h1>Contate-me</h1>
        <h3>
        Você tem um projeto em mente ou está simplesmente interessado em bater um papo, entre em contato!
        </h3>
        <h3>E aí, vamos conversar?</h3>
      </div>
      <div className="contact-info">
        <div className="email">
          <FaEnvelope />
          <h3>Email</h3>
          <p>fvaldez018@gmail.com</p>
        </div>
        <div className="phone">
          <FaWhatsapp />
          <h3>Whatsapp</h3>
          <p>(67) 99265-6801</p>
        </div>
      </div>
    </div>
  </section>
)

export default Contact;