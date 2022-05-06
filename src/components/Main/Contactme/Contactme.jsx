/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ContactmeCore from "../../core/Contactme";
import { getContacts } from "../../../api/user";

import "./Contactme.scss";

const Contactme = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    getContacts().then((res) => setContacts(res.data));
  }, []);

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <ContactmeCore contactos={contacts} />
    </section>
  );
};

export default Contactme;
