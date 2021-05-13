import React from "react"

import { FaCode } from "react-icons/fa"

const About = () => (
  <section id="about">
    <div className="about-container">
      <div className="coder-img">
        <FaCode className="img" />
      </div>
      <div className="profile">
        <h1>Olá,</h1>
        <p>
          Tenho 23 anos, sou um dev desde de 2016 quando iniciei Ciência da
          Computação na faculdade Uniderp em Campo Grande-MS, foi quando conheci
          um pouco mais sobre programação e logo me apaixonei por códigos,
          quando completei aproximadamente 2 anos de estudo começei a procurar
          mais sobre codar, foi quando fiquei estagnado com tantas tecnologias,
          e não sabia qual era a ideal ou qual melhor me posicionaria no mercado
          de trabalho, então tranquei a faculdade para iniciar um curso
          profissionalizante de programação Web na High Tech e que finalizei em
          2019 e hoje tenho como referência de estudo a Rocktseat e Udemy.{" "}
          <a href="/#contact">Quer saber mais?</a>
        </p>
      </div>
    </div>
  </section>
)

export default About
