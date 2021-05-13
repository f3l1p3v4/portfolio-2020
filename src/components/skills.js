import React from "react"

import {
  DiReact,
  DiNodejsSmall,
  DiJavascript1,
  DiMongodb,
  DiPhotoshop,
} from "react-icons/di"
import { FaHtml5, FaCss3Alt, FaVuejs, FaTrello, FaSlack } from "react-icons/fa"
import { SiNotion } from "react-icons/si"

const Skills = () => {
  return (
    <section className="skills">
      <h1>Ferramentas</h1>
      <p>Algumas das Skills que mais utilizo nos meus projetos.</p>
      <div className="skills-container">
        <div className="skills-dev">
          <Skill />
        </div>
      </div>
    </section>
  )
}

const Skill = () => (
  <>
    <FaHtml5 className="skills-logo skills-transition" />
    <FaCss3Alt className="skills-logo skills-transition" />
    <DiJavascript1 className="skills-logo skills-transition" />
    <DiReact className="skills-logo skills-transition" />
    <FaVuejs className="skills-logo skills-transition" />
    <DiNodejsSmall className="skills-logo skills-transition" />
    <DiMongodb className="skills-logo skills-transition" />
    <DiPhotoshop className="skills-logo skills-transition" />
    <FaTrello className="skills-logo skills-transition" />
    <FaSlack className="skills-logo skills-transition" />
    <SiNotion className="skills-logo skills-transition" />
  </>
)

export default Skills
