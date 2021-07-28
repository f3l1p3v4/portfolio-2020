import React from "react"
import Img from "gatsby-image"
import { Link, StaticQuery, graphql } from "gatsby"
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io"
import { FaDesktop, FaCss3Alt } from "react-icons/fa"
import { DiReact } from "react-icons/di"
import { SiNetlify } from "react-icons/si"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Bilhetagem = () => (
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
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <SEO title="Project | DevLoad" />
        <section id="portfolio-projects">
          <div className="container">
            <div className="project-image">
              <Img
                fluid={
                  data.allProjectsJson.edges[4].node.image.childImageSharp.fluid
                }
                style={{ maxHeight: 450 }}
              />
            </div>
            <div className="projects-nav">
              <div className="projects-nav-link">
                <Link to="/projects/bilhetagem">
                  <IoIosArrowDropleftCircle /> Projeto anterior
                </Link>
              </div>
              <div className="spacer" />
              <div className="projects-nav-link right">
                <Link to="/#porjects">
                  Voltar ao portfólio <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
            <h1>ReiTec Engenharia</h1>
            <div className="info">
              <div className="buttons">
                <a
                  href={data.allProjectsJson.edges[4].node.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDesktop /> Visitar Site
                </a>
              </div>
            </div>
            <p>{data.allProjectsJson.edges[4].node.description}</p>

            <div className="technologies">
              <h3>Construido com:</h3>

              <div className="icons">
                <div className="icon">
                  <DiReact />
                </div>
                <div className="icon">
                  <FaCss3Alt />
                </div>
                <div className="icon">
                  <SiNetlify />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default Bilhetagem
