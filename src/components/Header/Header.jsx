import React, { useState } from "react";

import "./Header.scss";
import { Language } from "./Language/Language";

const Header = () => {
  const [collapse, setCollapse] = useState(false);

  /* boton collapzar */
  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href className="nav__logo">
          Velfin Velásquez
        </a>

        <div className={collapse ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file nav__icon"></i> Skills
              </a>
            </li>
            
            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>

            {/* <li className="nav__item">
              <Language className="nav__link"/>
            </li> */}
            
          </ul>

          <i className="uil uil-times nav__close" onClick={handleCollapse}></i>
        </div>

        <div className="nav__btns">
          {!collapse && (
            <>
            {/* Theme change button */}
            {/* <i class="uil uil-moon change-theme"></i> */}
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps" onClick={handleCollapse}></i>
            </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
