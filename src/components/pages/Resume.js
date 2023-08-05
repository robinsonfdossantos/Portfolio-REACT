import React from 'react';
import ResumePdf from "./assets/resume.pdf";
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
      

      <h3 className="skills-heading">Font-End Skills</h3>
      <ul className="front-end-skills-list">
        <li> HTML </li>
        <li> CSS </li>
        <li> JavaScript </li>
        <li> REACT </li>
      </ul>

      <h3 className="skills-heading">Back-End Skills</h3>
      <ul className="back-end-skills-list">
        <li> NodeJS </li>
        <li> MongoDB </li>
        <li> MySQL</li>
        <li> NoSQL</li>
      </ul>
      </div>
    </div>
  );
}