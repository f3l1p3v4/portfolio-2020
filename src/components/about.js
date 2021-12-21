import React from "react"

import Me from "../images/me.png";

const About = () => (
  <section id="about">
    <div className="about-container">
      <div className="coder-img">
         <img src={Me} alt="Eu" className="img"/>
      </div>
      <div className="profile">
        <h1>Olá,</h1>
        <p>
          Tenho 24 anos, estudo programação desde 2018 e logo me apaixonei por
          códigos. Atualmente estou trabalhando como freelancer e sou criador da{" "}
          <a
            href="https://devload.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Devload
          </a>
          , a idéia é ajudar pessoas que estão querendo começar na área de
          desenvolvimento com conteúdos nas redes sociais, em blogs e cursos. <a href="/#contact">Quer saber mais?</a>
        </p>
      </div>
    </div>
  </section>
)

export default About
