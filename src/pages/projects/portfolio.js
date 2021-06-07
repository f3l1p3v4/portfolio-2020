import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"
import { DiHtml5, DiSass, DiReact, DiResponsive } from "react-icons/di"
import { FaDesktop, FaCode } from "react-icons/fa"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Portfolio = () => (
  <StaticQuery
    query={graphql`
      query {
        allProjectsJson {
          edges {
            node {
              id
              image {
                childImageSharp {
                  fluid(maxWidth: 1150) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              title
              description
              link
              github
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <SEO title="Project | Portfolio de Desenvolvedor" />
        <section id="portfolio-projects">
          <div className="container">
            <div className="project-image">
              <Img
                fluid={
                  data.allProjectsJson.edges[3].node.image.childImageSharp.fluid
                }
                style={{ maxHeight: 450 }}
              />
            </div>
            <div className="projects-nav">
              <div className="projects-nav-link">
                <Link to="/projects/bethehero">
                  <IoIosArrowDropleftCircle /> Projeto Anterior
                </Link>
              </div>
              <div className="spacer" />
              <div className="projects-nav-link right">
                <Link to="/projects/bilhetagem">
                  Próximo projeto <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
            <h1>Meu Portfolio de Dev</h1>
            <div className="info">
              <div className="buttons">
                <a href="/">
                  <FaDesktop /> Visitar Site
                </a>
                <a
                  href={data.allProjectsJson.edges[3].node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode /> Ver Código
                </a>
              </div>
            </div>
            <p>{data.allProjectsJson.edges[3].node.description}</p>

            <div className="technologies">
              <h3>Construido com:</h3>

              <div className="icons">
                <div className="icon">
                  <DiHtml5 />
                </div>
                <div className="icon">
                  <DiSass />
                </div>
                <div className="icon">
                  <DiReact />
                </div>
                <div className="icon">
                  <DiResponsive />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default Portfolio
