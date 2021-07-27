function Footer() {
  return (
    <footer className="footer">

      <div className="contact">
        <div className="contact__container">
          <h3 className="contact__headline">Contact me</h3>
          <a className="contact__link" href="mailto:riethmueller@mail.com">riethmueller@mail.com</a>
        </div>
      </div>

      <div className="footer__navigation">
        <div className="navigation__menu footer__navigation-gap">
          <a className="navigation__menu-item" href="#home">Home</a>
          <a className="navigation__menu-item" href="#portfolio">Portfolio</a>
          <a className="navigation__menu-item" href="#skillset">Skillset</a>
        </div>
      </div>

      <div className="footer__bar">
        <p className="copyright">&copy; 2021 Tanja Riethm&uuml;ller</p>
        <div className="media-links">
          <a className="media-links__item" href="http://"><i className="fab fa-linkedin"></i></a>
          <a className="media-links__item" href="http://"><i className="fab fa-github-square"></i></a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;