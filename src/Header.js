function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <a href="#home"><img className="header-logo" src="./images/portfolio-logo.gif" alt="Tanja R. Front End Web Developer Logo" /></a>

        <nav className="navigation">

          <a className="navigation-button" href="mailto:riethmueller@mail.com">Contact me</a>

          <div className="navigation-links">
            <a className="navigation-links-item" href="#projects">Projects</a>
            <a className="navigation-links-item" href="#about">About</a>
          </div>

        </nav> 

      </div>
      <div className="header-gradient"> </div>

    </header>
  );
}

export default Header;