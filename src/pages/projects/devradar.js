import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle, } from "react-icons/io";
import { DiReact, DiNodejsSmall } from "react-icons/di";
import { MdPhoneAndroid } from "react-icons/md";
import { FaDesktop, FaCode } from "react-icons/fa";
import { FiDownloadCloud } from 'react-icons/fi';



import Layout from "../../components/layout";
import SEO from "../../components/seo";

const DevRadar = () => (
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
              apk
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Project | DevRadar" />
        <section id="portfolio-projects">
          <div className="container">
            <div className="project-image">
              <Img
                fluid={
                  data.allProjectsJson.edges[1].node.image.childImageSharp.fluid
                }
                style={{ maxHeight: 450 }}
              />
            </div>
            <div className="projects-nav">
              <div className="projects-nav-link">
                <Link to="/projects/aircnc">
                  <IoIosArrowDropleftCircle /> Projeto Anterior
                </Link>
              </div>
              <div className="spacer" />
              <div className="projects-nav-link right">
                <Link to="/projects/bethehero">
                Próximo Projeto <IoIosArrowDroprightCircle />
                </Link>
              </div>
            </div>
            <h1>DevRadar</h1>
            <div className="info">
              <div className="buttons">
                <a
                  href={data.allProjectsJson.edges[1].node.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaDesktop /> Visitar Site
                </a>
                <a
                  href={data.allProjectsJson.edges[1].node.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCode /> Ver Código
                </a>
                <a
                  href={data.allProjectsJson.edges[0].node.apk}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiDownloadCloud /> Baixar APK
                </a>
              </div>
            </div>
            <p>{data.allProjectsJson.edges[1].node.description}</p>

            <div className="technologies">
              <h3>Construido com:</h3>

              <div className="icons">
                <div className="icon">
                  <DiReact />
                </div>
                <div className="icon">
                  <DiNodejsSmall />
                </div>
                <div className="icon">
                  <MdPhoneAndroid />
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default DevRadar
