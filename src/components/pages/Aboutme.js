import React from 'react';
import "./AboutMe.css";
import profilePicture from './images/profile-picture.jpg';

export default function AboutMe() {
  return (
    <div className="contact">
      <h2 className="heading">ABOUT ME</h2>
      <img className='profile-picture' src={profilePicture} alt=""/>
      <p>
        I am Robinson, and I am 35 years old.
        I am currently a Web Development student with ambitious goals of starting a new career in IT.
        Previously, I pursued a Bachelor's degree in Information Systems and worked in the IT field as an IT Support Analyst for 3 years. However, I decided to interrupt my career to face the challenge of moving to Australia to improve my English skills.
        Since arriving in Australia, in addition to studying English, I have dedicated time to studying various subjects to enhance my soft skills, including leadership management and project management.
        Currently, I work as a team leader, operating and developing codes for CNC machines.
        I consider myself an unstoppable person, and my ultimate goal is to return to my initial plan of pursuing a career in IT. I believe it is the right time to invest in myself and develop the necessary skills to re-enter the IT field. After conducting extensive research, I realized that Web Development aligns with my aspirations as it combines coding with dynamic activities that truly captivate me.
      </p>
    </div>
  );
}
