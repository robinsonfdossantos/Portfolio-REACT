import React from 'react';
import "./Portfolio.css";

import FancyCandles from './images/fancy-candles.png';
import VirtualAdventures from './images/virtual-adventures.png';
import Fishing from './images/fishing.gif';
import TextEditor from './images/text-editor.png';
import NoSql from './images/no-sql.png';
import Ecommerce from './images/e-commerce.png';
import Business from './images/business.gif';
import NoteTaker from './images/note-taker.gif';
import WeatherDash from './images/weather.gif';
import DailyCalendar from './images/daily-calendar.gif';
import Quiz from './images/quiz-javascript.png';

export default function Portifolio() {
  return (

    <div className="portfolio">
      <h2 className="heading">PORTFOLIO</h2>

      <div className="content">

      <div className="fishing-fanatics">
          <h4>Fancy Candles - Project 3</h4>
          <a href="https://tranquil-springs-18915-4201a64f92ba.herokuapp.com/" alt="Project 3">
            <img src={FancyCandles} alt="" />
          </a>
        </div>

        <div className="fishing-fanatics">
          <h4>Fishing Fanatics - Project 2</h4>
          <a href="https://polar-ridge-73411-3a05ece12937.herokuapp.com/" alt="Project 2">
            <img src={Fishing} alt="" />
          </a>
        </div>

        <div className="virtual-adventures">
          <h4>Virtual Adventures - Project 1</h4>
          <a href="https://robinsonfdossantos.github.io/Virtual_Adventures/" alt="Project 1">
            <img src={VirtualAdventures} alt="" />
          </a>
        </div>

        <div className="text-editor">
          <h4>Text Editor - PWA</h4>
          <a href="https://github.com/robinsonfdossantos/Text-Editor-PWA" alt="Text Editor PWA">
            <img src={TextEditor} alt="" />
          </a>
        </div>

        <div className="no-sql">
          <h4>Social Media - NoSql</h4>
          <a href="https://github.com/robinsonfdossantos/Social-Network-NoSql" alt="Simulate a Social Media with NoSql">
            <img src={NoSql} alt="" />
          </a>
        </div>

        <div className="e-commerce">
          <h4>E-commerce - MySql</h4>
          <a href="https://github.com/robinsonfdossantos/E-Commerce" alt="Simulate an E-commerce with MySql">
            <img src={Ecommerce} alt="" />
          </a>
        </div>

        <div className="business-management">
          <h4>Business Management - MySql</h4>
          <a href="https://github.com/robinsonfdossantos/Business-Management" alt="Simulate a Business Management with MySql">
            <img src={Business} alt="" />
          </a>
        </div>

        <div className="note-taker">
          <h4>Note Taker</h4>
          <a href="https://blooming-citadel-39669.herokuapp.com/notes" alt="Deployed Note Taker Application">
            <img src={NoteTaker} alt="" />
          </a>
        </div>

        <div className="weather-dashboard">
          <h4>Weather Dashboard - API</h4>
          <a href="https://robinsonfdossantos.github.io/Weather_Dashboard/" alt="Deployed App using API to create a weather dashboard">
            <img src={WeatherDash} alt="" />
          </a>
        </div>

        <div className="daily-calendar">
          <h4>Daily Calendar -  Day.js</h4>
          <a href="https://robinsonfdossantos.github.io/Daily-Calendar/" alt="Deployed App using API to create a weather dashboard">
            <img src={DailyCalendar} alt="" />
          </a>
        </div>

        <div className="quiz-javascript">
          <h4>Quiz - Web API Javascript</h4>
          <a href="https://robinsonfdossantos.github.io/JavaScript_Quiz/" alt="Web API Quiz in Javascript">
            <img src={Quiz} alt="" />
          </a>
        </div>

      </div>
    </div>

  );
}

