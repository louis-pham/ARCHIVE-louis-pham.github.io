import React from 'react';

function AboutMe(props) {
  return (
    <section className="about-me">
      <h2>About Me</h2>
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
      <div className="fightstick-holder" aria-hidden="true"></div>
    </section>
  );
}

export default AboutMe;
