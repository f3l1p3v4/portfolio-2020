import React from 'react';

import HTML5 from '../images/skills/html.png';
import CSS3 from '../images/skills/css.png';
import JavaScript from '../images/skills/javascript.png';
import ReactJS from '../images/skills/react.png';
import GatsbyJS from '../images/skills/gatsby.png';
import VueJS from '../images/skills/vue.png';
import Vuetify from '../images/skills/vuetify.png';
import Git from '../images/skills/git.png';
import Code from '../images/skills/code.png';
import Trello from '../images/skills/trello.png';
import Slack from '../images/skills/slack.png';
import Photoshop from '../images/skills/photoshop.png';
import NodeJS from '../images/skills/node.png';
import MongoDB from '../images/skills/mongodb.png';
import Ubuntu from '../images/skills/ubuntu.png';
import Windows from '../images/skills/windows.png';

const Skills = () => {
    const logos = [HTML5, CSS3, JavaScript, ReactJS, GatsbyJS, VueJS, Vuetify, Git, Code, Trello, Slack, Photoshop, NodeJS, MongoDB, Ubuntu, Windows];

    return (
        <section className="skills">
            <div className="skill-container">
                <div className="skill-title">
                    <h2>Ferramentas</h2>
                </div>
                {logos.map((value, index) => {
                    return <Skill key={index} skill={value} />
                })}
            </div>

            <div className="skill-img">
            </div>
        </section>
    )
}

const Skill = ({ skill }) => (
    <img
        className="skill-logo skill-transition"
        src={skill}
        alt=""
    />
)

export default Skills;