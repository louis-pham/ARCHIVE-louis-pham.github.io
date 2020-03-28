import React from 'react';

function Intro(props) {
  let isLoading = props.isLoading;
  return (
    <section id="intro" className={`intro ${!isLoading ? " intro--loading-done": "intro--loading"}`}>
      <div className="intro__heatpipe" aria-hidden="true"></div>
      <div className="intro__moon" aria-hidden="true"></div>
      <div className="intro__tag" aria-hidden="true"></div>
      <h1 className="intro__name animated"><span>Louis<br />Pham</span></h1>
      <div className="intro__title animated"><b>Full-stack developer.</b> Space enthusiast. Artist.</div>
    </section>
  );
}

export default Intro;
