import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">

      <div className="contact">
        <div className="contact__container">
          <h2 className="contact__headline">Contact me</h2>
          <a className="contact__link" href="mailto:riethmueller@mail.com">riethmueller@mail.com</a>
        </div>
      </div>

      <div className="footer__navigation">
        <div className="navigation__menu footer__navigation-gap">
          <a className="navigation__menu-item" href="#top">Home<span className="screen-reader-only"> section at top of page</span></a>
          <a className="navigation__menu-item" href="#portfolio">Portfolio<span className="screen-reader-only"> section on this page</span></a>
          <a className="navigation__menu-item" href="#skillset">Skillset<span className="screen-reader-only"> section on this page</span></a>
        </div>
      </div>

      <div className="footer__bar">
        <p className="copyright">&copy; 2021 Tanja Riethm&uuml;ller</p>
        <div className="media-links">
          <a className="media-links__item" href="https://www.linkedin.com/in/tanja-riethmueller/"><FontAwesomeIcon icon={faLinkedin} /><span className="screen-reader-only">Tanja's LinkedIn page</span></a>
          <a className="media-links__item" href="https://github.com/tanjanita"><FontAwesomeIcon icon={faGithubSquare} /><span className="screen-reader-only">Tanja's GitHub space</span></a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;