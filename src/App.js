import React, { useState, useEffect } from 'react';
import Intro from './sections/Intro.js';
import Experience from './sections/Experience.js';
import SideProjects from './sections/SideProjects.js';
import Skills from './sections/Skills.js';
import AboutMe from './sections/AboutMe.js';
import ContactMe from './sections/ContactMe.js';

const currentTime = new Date().getTime();
const EXPIRYDURATION = 60 * 60 * 24 * 1000; // 24 hours in milliseconds

function App() {
  const [nightModeOn, toggleNightMode] = useState(false);
  const [isLoading, toggleLoading] = useState(true);
  const loadingScreen = React.createRef();

  let setNightMode = () => {
    toggleNightMode(!nightModeOn);
    localStorage.setItem("night-mode", !nightModeOn);
  };

  useEffect(() => {
    if (!localStorage.getItem("expiry-time")) {
      localStorage.setItem("expiry-time", currentTime);
    }
    if (currentTime >= parseInt(localStorage.getItem("expiry-time")) + EXPIRYDURATION) {
      localStorage.clear();
      localStorage.setItem("expiry-time", currentTime);
    }

    if (!localStorage.getItem("night-mode")) {
      localStorage.setItem("night-mode", "false");
    }
    if (localStorage.getItem("night-mode") === "false") {
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
  }, []);

  return (
    <div className={"container" + (nightModeOn ? " night-mode" : "")}>
      <div ref={loadingScreen} className={"loading" + (!isLoading ? " loading--done" : "")}>
        <div className="loading__contents">
          <h1 className="loading__name animated fadeInUp"><span>Louis Pham</span></h1>
          <h2 className="loading__welcome animated">Hey there! 👋</h2>
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
