import React from "react"
import Project from "./work/project"

const Work = ({ projects }) => (
    <section id="projects">
        <div className="projects-container">
            <h1>Projetos</h1>
            <p className="lead">
                Abaixo estão listados alguns dos meus melhores projetos
      </p>
            <div className="projects">
                {projects.map(project => (
                    <Project key={project.node.title} project={project.node} />
                ))}
            </div>
        </div>
    </section>
)

export default Work;

