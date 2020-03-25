import React from "react";
import { Link } from "gatsby";

import '../../components/styles/menuoverlay.scss';

const MenuOverlay = props => {
  let overlayClasses = "menu-overlay"
  if (props.show) {
    overlayClasses = "menu-overlay open"
  }
  return (
    <nav className={overlayClasses}>
      <ul>
        <li onClick={props.click}>
          <Link to="/#about">Sobre</Link>
        </li>
        <li onClick={props.click}>
          <Link to="/#projects">Projetos</Link>
        </li>
        <li onClick={props.click}>
          <Link to="/#contact">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuOverlay;