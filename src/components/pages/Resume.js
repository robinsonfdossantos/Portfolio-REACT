import React from 'react';
import ResumePdf from "./assets/Robinson-resume.pdf";
import "./Resume.css";

export default function Resume() {
  return (
    <div>

      <h1 className="heading"> RESUME</h1>

      <div className="resume">
        <a
          href={ResumePdf}
          className="resume-link"
          download="Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="resume-icon">&#x1f4CE;</span> Download resume
        </a>
      
    <div className="skill-technologies">

      <div className='skills'>
      <h3 className="skills-heading">Skills</h3>
      <ul className="skills-list">
        <li> Web Development </li>
        <li> Web Design </li>
        <li> Programming</li>
        <li> SQL </li>
        <li> MERN </li>
        <li> React </li>
        <li> MongoDB </li>
        <li> Mongoose </li>
        <li> Quality Assurance </li>
      </ul>
      </div>

      <div className='technologies'>
      <h3 className="skills-heading">Technologies</h3>
      <ul className="technologies-list">
        <li> HTML5 </li>
        <li> CSS3 </li>
        <li> JavaScript ES6+</li>
        <li> Heroku</li>
        <li> Bootstrap</li>
        <li> GitHub</li>
        <li> GraphQl</li>
        <li> MVC</li>
        <li> OOP</li>
        <li> Express.js</li>
        <li> Node.js</li>
        <li> React.js</li>
      </ul>
      </div>
      </div>

      </div>
    </div>
  );
}