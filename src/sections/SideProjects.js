import React from 'react';

function SideProjects(props) {
  return (
    <section className="side-projects">
      <h2>Side Projects</h2>
      <div className="project-item">
        <h3 className="project-item__title">Dance Events <a title="Go to my Dance Events demo page" href="https://dance-events.herokuapp.com/"><i className="fas fa-external-link-alt"></i></a></h3>
        <img className="project-item__image" alt="" src="images/side-projects/dance-events.png"/>
        <p className="project-item__description">
          Full-stack events application built with <b>Node.js</b>, <b>Express</b>, <b>MongoDB/Mongoose</b> and <b>Passport OAuth2</b>.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title">Battleship <a title="Go to my Battleship demo page" href="https://battleship.lcpham.now.sh/"><i className="fas fa-external-link-alt"></i></a></h3>
        <img className="project-item__image" alt="" src="images/side-projects/battleship.png"/>
        <p className="project-item__description">
          A web-based recreation of the popular game Battleship using DOM manipulation. Built with <b>HTML</b>,  <b>CSS</b>, and <b>JavaScript (ES6)</b>.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title">Weather Forecast <a title="Go to my Weather Forecast demo page" href="http://weather-forecast.louis-pham.surge.sh"><i className="fas fa-external-link-alt"></i></a></h3>
        <img className="project-item__image" alt="" src="images/side-projects/weather-forecast.png"/>
        <p className="project-item__description">
          A <b>React</b> app displaying the two-day weather forecast and current weather of Toronto and Yokohama. Fetches data from the OpenWeatherMap API.
        </p>
      </div>
      <div className="project-item">
        <h3 className="project-item__title">Calculator <a title="Go to my Calculator demo page" href="http://calculator.louis-pham.surge.sh"><i className="fas fa-external-link-alt"></i></a></h3>
        <img className="project-item__image" alt="" src="images/side-projects/calculator.png"/>
        <p className="project-item__description">
          A simple calculator created with <b>React</b>. Uses <b>CSS Grid</b> for the layout.
        </p>
      </div>
    </section>
  );
}

export default SideProjects;
