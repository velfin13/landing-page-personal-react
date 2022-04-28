/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Velfin</h1>
              <span className="footer__subtitle">Full stack developer</span>
            </div>

            <ul className="footer__links">
              <li>
                <a href="#home" className="footer__link">
                  Home
                </a>
              </li>

              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer__socials">
              <a href="https://www.facebook.com/velfinvelasquez" target="_blank" className="footer__social">
                <i className="uil uil-facebook"></i>
              </a>
              <a href="https://www.instagram.com/velkin13/" target="_blank" className="footer__social">
                <i className="uil uil-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/velfin-velasquez/" target="_blank" className="footer__social">
                <i className="uil uil-linkedin"></i>
              </a>
            </div>
          </div>

          <p className="footer__copy">&#169; Velkin derechos reservados</p>
        </div>

        {/* <a className="scrollup" href="#">
          <i class="uil uil-arrow-up scrollup__icon"></i>
        </a> */}
      </footer>
    </>
  );
};

export default Footer;
