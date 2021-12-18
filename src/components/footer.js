import React from "react"
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa"

const Footer = () => (
  <footer>
    <p>© {new Date().getFullYear()}, Felipe Valdez - Published with Netlify.</p>
    <div className="social-container">
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
  </footer>
)

export default Footer
