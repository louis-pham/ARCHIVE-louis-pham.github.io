import React from 'react';

function ContactMe(props) {
  return (
    <section id="contact-me" className="contact-me">
      <h2>Let's get in touch!</h2>
      <form id="contact-form" className="contact-form" action="https://formspree.io/mnqplqqy" method="POST">
        <fieldset>
          <input placeholder="Your Name" type="text" name="name" id="name-input" required />
          <input placeholder="Your Email" type="email" name="email" id="email-input" required />
          <textarea rows="7" placeholder="Your Message" type="text" name="message" id="message"></textarea>
        </fieldset>
        <input className="button contact-form__submit" type="submit" id="submit" value="Submit" />
      </form>
      <ul className="social-media">
        <li className="resume-link animated bounceInDown">
          <a href="files/Louis Pham - Resume.pdf" target="_blank" rel="noopener noreferrer"><i className="fas fa-file-pdf"></i> Resumé</a>
        </li>
        <li className="github-link animated bounceInDown">
          <a title="Go to my GitHub" href="https://github.com/louis-pham" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a>
        </li>
        <li className="linkedin-link animated bounceInDown">
          <a title="Go to my LinkedIn" href="https://www.linkedin.com/in/louispham/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></a>
        </li>
      </ul>
    </section>
  );
}

export default ContactMe;
