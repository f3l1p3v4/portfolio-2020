import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Perfil from "../components/perfil"
import About from "../components/about"
import Skills from "../components/skills"
import Work from "../components/work"
import Contact from "../components/contact"

import "../components/styles/main.scss"

class IndexPage extends Component {
  render() {
    const { data } = this.props

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `web site`,
            `desenvolvedor mobile`,
            `desenvolvedor front-end`,
            `desenvolvedor back-end`,
            `site responsivo`,
          ]}
        />
        <Perfil />
        <About />
        <Skills />
        <Work projects={data.allProjectsJson.edges} />
        <Contact />
      </Layout>
    )
  }
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          page
          link
          github
        }
      }
    }
  }
`

export default IndexPage;