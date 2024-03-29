import React from 'react';

function AboutMe(props) {
  return (
    <section id="about-me" className="about-me">
      <h2>About Me</h2>
      {/* downloads image on initial page load rather than waiting for hover pseudo-class (only works on Firefox) */}
      <img src="images/fightstick_active.svg" hidden alt="" />
      <div className="fightstick-holder" aria-hidden="true"></div>
      <p>
        Born in Toronto, Canada, I graduated from the University of Toronto in 2017 with an Honours Bachelor of Science degree in <b>Computer Science</b> and <b>Astronomy & Astrophysics</b>. I've also graduated from the <b>Software Engineering Immersive</b> program at General Assembly.
      </p>
      <p>
        I'm a full-stack developer who loves <b>creating</b>. I enjoy working on all sorts of projects to expand my knowledge, using my development skills together with a drive to learn new things, empathy towards user experience, and some creative muscle honed through art.
      </p>
      <p>
        I have around <b>2 years of software development experience</b> where I've built products both large and small, and for just a few users to hundreds. After graduation, I spent <b>2 years teaching English in Japan</b> exploring and learning about new cultures, languages, places, people, and even myself.
      </p>
      <p>
        Outside of work and studying, my spare time is taken up with <b>dancing</b>, video games, and going down YouTube rabbit holes.
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
