import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const Project = ({ project }) => (
  <Link to={`${project.page}`}>
    <div className="project" key={project}>
      <div className="project-image">
        <Img fluid={project.image.childImageSharp.fluid} />
      </div>
      <div className="project-info">
        <div className="project-info-wrap">
          <h2 className="project-title">{project.title}</h2>
        </div>
      </div>
    </div>
  </Link>
)

export default Project;

