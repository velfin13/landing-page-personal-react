import React from "react";

const Contactme = ({ contactos = [] }) => {
  return (
    <div className="contact__container container grid">
      {contactos.map((contact) => (
        <div key={contact.id ? contact.id : ""}>
          <div className="contact__information">
            <i
              className={`${contact.icon ? contact.icon : ""} contact__icon`}
            ></i>
            <div>
              <h3 className="contact__title">
                {contact.title ? contact.title : ""}
              </h3>
              <span className="contact__subtitle">
                {contact.subtitle ? contact.subtitle : ""}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contactme;
