import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => (
    <footer>
        <div className="social-container">
            <a href="https://www.linkedin.com/in/felipe-valdez-a0462a142/"
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
        <p>© {new Date().getFullYear()}, Copyright. Site desenvolvido por Felipe Valdez</p>
    </footer>
)

export default Footer;