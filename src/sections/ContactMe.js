import React from 'react';

function ContactMe(props) {
  return (
    <section className="contact-me">
      <h2>Let's get in touch!</h2>
      <form id="contact-form" className="contact-form" action="https://formspree.io/l.c.pham@hotmail.com" method="POST">
        <fieldset>
          <input placeholder="Your Name" type="text" name="name" id="name-input" required />
          <input placeholder="Your Email" type="email" name="email" id="email-input" required />
          <textarea rows="7" placeholder="Your Message" type="text" name="message" id="message"></textarea>
        </fieldset>
        <input className="button contact-form__submit" type="submit" id="submit" value="Submit" />
      </form>
      <ul className="social-media">
        <li className="resume-link animated bounceInDown">
          <a href="files/Louis Pham - Resume.pdf"><i className="fas fa-file-pdf"></i> Resume</a>
        </li>
        <li className="github-link animated bounceInDown">
          <a title="Go to my GitHub" href="https://github.com/louis-pham"><i className="fab fa-github fa-lg"></i></a>
        </li>
        <li className="linkedin-link animated bounceInDown">
          <a title="Go to my LinkedIn" href="https://www.linkedin.com/in/louispham/"><i className="fab fa-linkedin-in fa-lg"></i></a>
        </li>
      </ul>
    </section>
  );
}

export default ContactMe;
