import React from "react";

function Header() {
  return (
    <header className="header">

      <div className="header-container">

        <a href="#home" title="Tanja R. Front End Web Developer Logo">
        <img className="header-logo" src="./images/Tanja-R-Portfolio-Logo.svg" alt="Tanja R. Front End Web Developer Logo" />
        </a>

        <nav className="navigation">

          <a className="navigation-button" href="mailto:riethmueller@mail.com">Contact me</a>

          <div className="navigation-links">
            <a className="navigation-links-item" href="#portfolio">Portfolio</a>
            <a className="navigation-links-item" href="#skillset">Skillset</a>
          </div>

        </nav> 

      </div>
      <div className="header-gradient"> </div>

    </header>
  );
}

export default Header;