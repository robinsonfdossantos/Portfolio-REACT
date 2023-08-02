import React from 'react';

export default function Portifolio() {
  return (
    <div id="work" className="work">
      <h3>Work</h3>
      <div className="content">
        <div className="surf-report">
          <a href="https://polar-ridge-73411-3a05ece12937.herokuapp.com/" alt="Project 1" className="surf-report-background">
            <img src="image1.jpg" alt="Virtual Adventures" />
          </a>
          <h4>Virtual Adventures</h4>
          <p>Project 1</p>
        </div>
        <div className="led-wall">
          <a href="https://robinsonfdossantos.github.io/Virtual_Adventures/" alt="Project 1" className="led-calc-puzzle-run-background">
            <img src="image2.jpg" alt="Led Wall" />
          </a>
          <h4>Led Wall</h4>
          <p>Node/ IoT</p>
        </div>
        <div className="calculator">
          <a href="https://robinsonfdossantos.github.io/Bootcamp-Challenge-02/" alt="My first challenge" className="led-calc-puzzle-run-background">
            <img src="image3.jpg" alt="Calculator" />
          </a>
          <h4>Calculator</h4>
          <p>React/ JavaScript/ CSS</p>
        </div>
        <div className="pastel-puzzles">
          <a href="https://robinsonfdossantos.github.io/Bootcamp-Challenge-02/" alt="My first challenge" className="led-calc-puzzle-run-background">
            <img src="image4.jpg" alt="Pastel Puzzles" />
          </a>
          <h4>Pastel Puzzles</h4>
          <p>Mern Stack</p>
        </div>
        <div className="run-boddy">
          <a href="https://robinsonfdossantos.github.io/Bootcamp-Challenge-02/" alt="My first challenge" className="led-calc-puzzle-run-background">
            <img src="image5.jpg" alt="Run Boddy" />
          </a>
          <h4>Run Boddy</h4>
          <p>HTML / CSS</p>
        </div>
      </div>
    </div>
  );
}

