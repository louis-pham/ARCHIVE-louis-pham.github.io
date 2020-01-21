import React from 'react';

function AboutMe(props) {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      {/* downloads image on initial page load rather than waiting for hover pseudo-class (only works on Firefox) */}
      <img src="images/fightstick_active.svg" hidden alt="" />
      <div className="fightstick-holder" aria-hidden="true"></div>
      <p>
        Born in Toronto, Canada, I graduated from the University of Toronto with an Honours Bachelor of Science degree in <b>Computer Science</b> and <b>Astronomy & Astrophysics</b>.
      </p>
      <p>
        The main focus of my work has been in <b>front-end development</b>, with some experience in the back end.
      </p>
      <p>
        I love <b>creating</b>. I enjoy working on all sorts of projects to expand my knowledge, using my development skills together with an interest in web design and drive to learn new things.
      </p>
      <p>
        I've recently come back after 2 years of teaching English in Japan, so I'm excited to make an impact in the software development world!
      </p>
      <p>
        Outside of work and studying, my spare time is taken up with dancing, video games, and going down YouTube rabbit holes.
      </p>
      <h3>Education</h3>
      <div className="education">
        <img className="education__logo" src="images/education/PinClipart.com_assembly-clip-art_3859728.png" alt="General Assembly logo" />
        <p className="education__description"><b>Software Engineering Immersive</b>, General Assembly</p>
      </div>
      <div className="education">
        <img className="education__logo" src="images/education/Utoronto_coa.svg" alt="University of Toronto logo" />
        <p className="education__description"><b>B.Sc. with Honours in Computer Science and Astrophysics</b>, University of Toronto</p>
      </div>
    </section>
  );
}

export default AboutMe;
