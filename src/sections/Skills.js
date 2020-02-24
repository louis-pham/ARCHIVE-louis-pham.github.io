import React from 'react';

function Skills(props) {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="radargraph-holder" aria-hidden="true"></div>
      <div>
        <div className="skill-level">
          <h3>Strong</h3>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/javascript.svg" alt=""/>
            <span className="skill__label">JavaScript</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/react.svg" alt=""/>
            <span className="skill__label">React</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/html5.svg" alt=""/>
            <span className="skill__label">HTML 5</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/css3.svg" alt=""/>
            <span className="skill__label">CSS 3</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/nodejs-seeklogo.com.svg" alt=""/>
            <span className="skill__label">Node.js</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/python.svg" alt=""/>
            <span className="skill__label">Python</span>
          </div>
        </div>
        <div className="skill-level">
          <h3>Working Knowledge</h3>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/mongodb-icon.svg" alt=""/>
            <span className="skill__label">MongoDB</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/PostgreSQL_logo.3colors.svg" alt=""/>
            <span className="skill__label">PostgreSQL</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/django-logo-positive.svg" alt=""/>
            <span className="skill__label">Django</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/java.svg" alt=""/>
            <span className="skill__label">Java</span>
          </div>
          <div className="skill">
            <img className="skill__icon" src="images/language-icons-svg/jquery.svg" alt=""/>
            <span className="skill__label">jQuery</span>
          </div>
          <div className="skill">
            <img className="skill__icon skill__icon--medium" src="images/language-icons-svg/bootstrap.svg" alt=""/>
            <span className="skill__label">Bootstrap</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
