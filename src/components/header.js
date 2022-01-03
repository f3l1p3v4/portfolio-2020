import { Link } from "gatsby";
import React, { Component } from "react";
import Headroom from "react-headroom";
import DrawerToggleButton from "./MenuOverlay/Drawertogglebutton";
import logo from '../images/logo.png';

class Header extends Component {
  render() {
    return (
      <Headroom calcHeightOnResize disableInlineStyles>
        <nav className="navbar">
            <div className="content-logo">
              <img src={logo} alt="Logo DevLoad"></img>
           </div>
          <div className="spacer" />
          <div className="navbar-menu">
            <ul>
              <li>
                <Link className="navbar-route" to="/#about">Sobre</Link>
              </li>
              <li>
                <Link className="navbar-route" to="/#projects">Projetos</Link>
              </li>
              <li>
                <Link className="navbar-route" to="/#contact">Contato</Link>
              </li>
              <li>
                <a
                  className="navbar-link"
                  href="https://blog.felipevaldez.site" 
                  rel="noopener noreferrer"
                >
                  Blog
                </a>
            </li>
            </ul>
          </div>
          <div>
            <DrawerToggleButton click={this.props.overlayClickHandler} />
          </div>
        </nav>
      </Headroom>
    )
  }
}

export default Header;
