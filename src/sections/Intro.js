import React from 'react';

function Intro(props) {
  return (
    <section className="intro">
      <div className="intro__heatpipe" aria-hidden="true"></div>
      <div className="intro__moon" aria-hidden="true"></div>
      <h1 className="intro__name animated fadeIn"><span>Louis<br />Pham</span></h1>
      <div className="intro__title animated fadeIn">Front-end developer.</div>
    </section>
  );
}

export default Intro;
