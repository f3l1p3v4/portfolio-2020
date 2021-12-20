import { Link } from "gatsby";
import React, { Component } from "react";
import Headroom from "react-headroom";
import DrawerToggleButton from "./MenuOverlay/Drawertogglebutton";

class Header extends Component {
  render() {
    return (
      <Headroom calcHeightOnResize disableInlineStyles>
        <nav className="navbar">
            <div>
              <div>
                <a href="/" className="logo-main">
                  <img src="https://blog.felipevaldez.site/static/f8e248d75450d6d4e10a9830ef6441b8/9694d/profile.webp" alt="Logo DevLoad" className="logo" />
                </a>
              </div>
              <p>Felipe Valdez <span>BLOG</span></p>
           </div>
          <div className="spacer" />
          <div className="navbar-menu">
            <ul>
              <li>
                <Link to="/#about">Sobre</Link>
              </li>
              <li>
                <Link to="/#projects">Projetos</Link>
              </li>
              <li>
                <Link to="/#contact">Contato</Link>
              </li>
              <li>
                <a
                  className="navbar-link"
                  href="https://blog.felipevaldez.site" 
                  target="_blank" 
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
