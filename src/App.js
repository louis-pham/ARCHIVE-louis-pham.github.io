import React, { useState, useEffect } from 'react';
import Intro from './sections/Intro.js';
import Experience from './sections/Experience.js';
import SideProjects from './sections/SideProjects.js';
import Skills from './sections/Skills.js';
import AboutMe from './sections/AboutMe.js';
import ContactMe from './sections/ContactMe.js';
import Cookies from 'js-cookie';

function App() {
  const [nightModeOn, toggleNightMode] = useState(false);
  const [isLoading, toggleLoading] = useState(true);
  const loadingScreen = React.createRef();

  let setNightMode = () => {
    let newValue = !nightModeOn;
    toggleNightMode(newValue);
    Cookies.set("night-mode", newValue, {expires: 1});
  };

  useEffect(() => {
    if (!Cookies.get("night-mode")) {
      Cookies.set("night-mode", "false", {expires: 1});
    }

    if (Cookies.get("night-mode") === "false") {
      toggleNightMode(false);
    } else {
      toggleNightMode(true);
    }

    // hide the loading screen after animation ends
    loadingScreen.current.addEventListener('transitionend', (e) => {
      if (e.target.classList.contains("loading")) {
        e.target.classList.add("hidden");
      }
    });
    setTimeout(() => toggleLoading(false), 750);
  }, [loadingScreen]);

  return (
    <div className={"container" + (nightModeOn ? " night-mode" : "")}>
      <div ref={loadingScreen} className={"loading" + (!isLoading ? " loading--done" : "")}>
        <div className="loading__contents">
          <h1 className="loading__name animated fadeInUp"><span>Louis Pham</span></h1>
          <h2 className="loading__welcome animated">Hey there! <span role="img" aria-hidden="true">👋</span></h2>
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
