import React from "react";

const SocialsFooter = ({ socials=[] }) => {
  return (
    <div className="footer__socials">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          className="footer__social"
        >
          <i className={social.icon}></i>
        </a>
      ))}

    </div>
  );
};

export default SocialsFooter;
