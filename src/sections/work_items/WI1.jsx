import React from 'react';

const WI1 = {
  company: "Canadian Institute for Theoretical Astrophysics",
  jobTitle: "Researcher",
  jobDuration: "October 2016 - August 2017",
  jobSummary: "As part of the Summer Undergraduate Research Program, it was my responsibility to develop the software and tools for the rest of the team to investigate weak gravitational lensing in the Cosmic Infrared Background.",
  jobDescription:
  <ul>
    <li>
      <b>Responsibilities</b>
      <ul>
        <li>
          Modified LensPix to read and write external simulation map files
        </li>
        <li>
          Created Python wrappers and scripts to analyze maps, along with writing documentation
        </li>
        <li>
          Created presentations and reports for fellow researchers and colleagues within the department
        </li>
      </ul>
    </li>
    <li>
      <b>Team Size:</b> 5
    </li>
  </ul>,
  jobTechnologies:
  <div className="technologies-used">
    <div className="skill">
      <img className="skill__icon skill__icon--xsmall" src="images/language-icons-svg/fortran90.svg" alt=""/>
      <span className="skill__label">Fortran 90</span>
    </div>
    <div className="skill">
      <img className="skill__icon skill__icon--xsmall" src="images/language-icons-svg/python.svg" alt=""/>
      <span className="skill__label">Python</span>
    </div>
  </div>,
};

export default WI1;
