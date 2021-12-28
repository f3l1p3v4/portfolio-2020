import React from "react"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Perfil = () => (
  <section id="perfil">
    <div className="perfil-container">
      <div className="perfil-text">
        <h1>Front end</h1>
        <p>Ideias ganhando vida!</p>
        <div className="perfil-social">
          <a
            href="https://www.linkedin.com/in/felipe-valdez-a0462a142/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/f3l1p3v4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/lipe.valdez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Perfil
