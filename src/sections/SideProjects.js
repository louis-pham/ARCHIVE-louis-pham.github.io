import React from 'react';

function SideProjects(props) {
  return (
    <section id="side-projects" className="side-projects">
      <h2>Projects</h2>
      <div className="main-projects">
        <article className="project-item">
          <h3 className="project-item__title">Ursa <a title="Go to my Ursa demo page" href="https://lp-ursa.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></h3>
          <img className="project-item__image" alt="" src="images/side-projects/ursa.png"/>
          <p className="project-item__description">
            <b>MERN stack</b> polling/voting application utilizing <b>Socket.IO</b> and <b>JWT authentication</b>.
          </p>
        </article>
        <article className="project-item">
          <h3 className="project-item__title">IoU2 <a title="Go to my IoU2 demo page" href="https://iou2.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></h3>
          <img className="project-item__image" alt="" src="images/side-projects/iou2.png"/>
          <p className="project-item__description">
            Full-stack budgeting tracker developed in a collaborative environment. Built with <b>Python</b>, <b>Django</b>, <b>PostgreSQL</b>, <b>Materialize</b>, <b>JavaScript</b>, <b>jQuery</b> and <b>Amazon S3</b>.
          </p>
        </article>
        <article className="project-item">
          <h3 className="project-item__title">Dance Events <a title="Go to my Dance Events demo page" href="https://dance-events.herokuapp.com/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></h3>
          <img className="project-item__image" alt="" src="images/side-projects/dance-events.png"/>
          <p className="project-item__description">
            Full-stack events application built with <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>Mongoose</b> and <b>Passport OAuth2</b>.
          </p>
        </article>
      </div>
      <hr className="striped-border" />
      <div className="small-projects">
        <article className="project-item">
          <h3 className="project-item__title">Battleship <a title="Go to my Battleship demo page" href="https://battleship.lcpham.now.sh/" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></h3>
          <img className="project-item__image" alt="" src="images/side-projects/battleship.png"/>
          <p className="project-item__description">
            A web-based recreation of the popular game Battleship using DOM manipulation. Built with <b>HTML</b>,  <b>CSS</b>, and <b>JavaScript (ES6)</b>.
          </p>
        </article>
        <article className="project-item">
          <h3 className="project-item__title">Weather Forecast <a title="Go to my Weather Forecast demo page" href="http://weather-forecast.louis-pham.surge.sh" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></h3>
          <img className="project-item__image" alt="" src="images/side-projects/weather-forecast.png"/>
          <p className="project-item__description">
            A <b>React</b> app displaying the two-day weather forecast and current weather of Toronto and Yokohama. Fetches data from the OpenWeatherMap API.
          </p>
        </article>
        <article className="project-item">
          <h3 className="project-item__title">Calculator <a title="Go to my Calculator demo page" href="http://calculator.louis-pham.surge.sh" target="_blank" rel="noopener noreferrer"><i className="fas fa-external-link-alt"></i></a></h3>
          <img className="project-item__image" alt="" src="images/side-projects/calculator.png"/>
          <p className="project-item__description">
            A simple calculator created with <b>React</b>. Uses <b>CSS Grid</b> for the layout.
          </p>
        </article>
      </div>
    </section>
  );
}

export default SideProjects;
