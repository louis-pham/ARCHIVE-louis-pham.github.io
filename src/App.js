import React, { useState, useEffect } from 'react';
import Intro from './sections/Intro.js';
import Experience from './sections/Experience.js';
import SideProjects from './sections/SideProjects.js';
import Skills from './sections/Skills.js';
import AboutMe from './sections/AboutMe.js';
import ContactMe from './sections/ContactMe.js';
import Cookies from 'js-cookie';
import "core-js/stable";
import "regenerator-runtime/runtime";

function App() {
  const [nightModeOn, toggleNightMode] = useState(false);
  const [isLoading, toggleLoading] = useState(true);

  let setNightMode = () => {
    let newValue = !nightModeOn;
    toggleNightMode(newValue);
    Cookies.set("night-mode", newValue, {expires: 1});
  };

  let hideElement = (e) => {
    e.target.classList.add("hidden");
  }

  let imagesLoaded = () => {
    let allImages = document.querySelectorAll('img');
    for (const IMG of allImages) {
      if (!IMG.complete) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    if (!Cookies.get("night-mode")) {
      Cookies.set("night-mode", "false", {expires: 1});
    }

    if (Cookies.get("night-mode") === "false") {
      toggleNightMode(false);
    } else {
      toggleNightMode(true);
    }

    let checkImagesLoaded = () => {
      if (imagesLoaded()) {
        toggleLoading(false);
      } else {
        setTimeout(checkImagesLoaded, 1000);
      }
    }
    checkImagesLoaded();

  }, []);

  return (
    <div className={"container" + (nightModeOn ? " night-mode" : "")}>
      <div className={"loading" + (!isLoading ? " loading--done" : "")} onTransitionEnd={hideElement}>
        <div className="loading__contents">
          <h1 className="loading__name animated fadeInUp"><span>Louis Pham</span></h1>
          <h2 className="loading__welcome animated">Thanks for waiting! <span role="img" aria-hidden="true">👋</span></h2>
        </div>
        <div className="loading__bottom-border"></div>
      </div>
      <span className="animated fadeInRight night-mode-toggle" onClick={() => setNightMode()}><i className="fas fa-lightbulb fa-3x"></i></span>
      <Intro isLoading={isLoading} />
      <Experience />
      <SideProjects />
      <Skills />
      <AboutMe />
      <ContactMe />
      <footer className=""><span id="copyright">©<span id="copyright-year">2019</span> Louis Pham</span></footer>
    </div>
  );
}

export default App;
