import React from "react";

const SocialsFooter = ({ socials }) => {
  return (
    <div className="home__social">
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          className="home__social-icon"
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialsFooter;
