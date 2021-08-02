import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header className="header">

      <div className="header__container">
        <a href="#top">
          <span className="screen-reader-only">Top of page</span>
          <Logo colour="#202a2e" />
        </a>
        <nav className="navigation">
          <a className="navigation__button" href="mailto:riethmueller@mail.com">Contact me</a>
          <div className="navigation__menu">
            <a className="navigation__menu-item" href="#portfolio">Portfolio</a>
            <a className="navigation__menu-item" href="#skillset">Skillset</a>
          </div>
        </nav> 
      </div>
      <div className="header__background scrollFadeIn"> </div>

    </header>
  );
}

export default Header;