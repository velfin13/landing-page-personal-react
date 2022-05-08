/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { getSocials, getNavBar } from "../../api/user";
import Socials from "../core/Socials/SocialsFooter";
import "./Footer.scss";

const Footer = ({ lng }) => {
  const [socials, setSocials] = useState([]);
  const [footerLinks, setFooterLinks] = useState([]);

  useEffect(() => {
    getSocials().then((res) => setSocials(res.data));
  }, []);

  useEffect(() => {
    getNavBar(lng).then((res) => setFooterLinks(res.data ?? []));
  }, [lng]);

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
              {footerLinks.map((footerLinksState) => (
                <li key={footerLinksState.id}>
                  <a
                    href={footerLinksState.url ? footerLinksState.url : ""}
                    className="footer__link"
                  >
                    {footerLinksState.label ? footerLinksState.label : ""}
                  </a>
                </li>
              ))}
            </ul>

            <Socials socials={socials} />
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
