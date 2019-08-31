import React from 'react';

function Intro(props) {
  return (
    <section className="intro">
      <div className="intro__earth" aria-hidden="true"></div>
      <div className="intro__moon" aria-hidden="true"></div>
      <h1 className="intro__name animated fadeIn">Hey! I'm <span>Louis Pham</span>,</h1>
      <span className="intro__title animated fadeIn">and I'm a front end developer.</span>
    </section>
  );
}

export default Intro;
