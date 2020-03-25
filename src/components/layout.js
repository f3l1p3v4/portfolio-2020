import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import MenuOverlay from "./MenuOverlay/menuoverlay";

import Header from "./header";
import Footer from "./footer";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOverlayOpen: false,
    }
    this.overlayToggleClickHandler = this.overlayToggleClickHandler.bind(this)
  }

  overlayToggleClickHandler = () => {
    this.setState(prevState => ({
      menuOverlayOpen: !prevState.menuOverlayOpen,
    }))
  }

  overlayCloseClickHandler = () => {
    this.setState({ menuOverlayOpen: false })
  }

  render() {
    const { children } = this.props
    // let menuOverlay

    // if (this.state.menuOverlayOpen) {
    //   menuOverlay = <MenuOverlay click={this.overlayCloseClickHandler} />
    // }
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <MenuOverlay
              click={this.overlayCloseClickHandler}
              show={this.state.menuOverlayOpen}
            />
            <Header
              siteTitle={data.site.siteMetadata.title}
              overlayClickHandler={this.overlayToggleClickHandler}
            />
            <main style={{ height: "100%" }}>{children}</main>
            <Footer />
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
