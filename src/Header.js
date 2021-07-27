import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">

      <div className="header__container">

        <a href="#home" title="Tanja R. Front End Web Developer Logo">
          <Logo colour="#262626" />
        </a>

        <nav className="navigation">

          <a className="navigation__button" href="mailto:riethmueller@mail.com">Contact me</a>

          <div className="navigation__menu">
            <a className="navigation__menu-item" href="#portfolio">Portfolio</a>
            <a className="navigation__menu-item" href="#skillset">Skillset</a>
          </div>

        </nav> 

      </div>
      <div className="header__gradient"> </div>

    </header>
  );
}

export default Header;