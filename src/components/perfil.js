import React from "react"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Perfil = () => (
  <section id="perfil">
    <div className="perfil-container">
      <div className="perfil-text">
        <h1>Felipe Valdez</h1>
        <p>Front-end Developer</p>
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
      <div className="perfil-avatar">
        <img src="https://avatars.githubusercontent.com/u/47610639?s=400&u=c090c9bf0cc27ea7c51190e77c7e94e5bb4515b6&v=4" alt="Felipe Valdez Avatar" />
      </div>
    </div>
  </section>
)

export default Perfil
