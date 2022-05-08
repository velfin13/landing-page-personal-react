/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import ContactmeCore from "../../core/Contactme";
import { getContacts, getContactHeader } from "../../../api/user";

import "./Contactme.scss";

const Contactme = ({ lng }) => {
  const [contacts, setContacts] = useState([]);
  const [contactHeader, setContactHeader] = useState({});

  useEffect(() => {
    getContacts(lng).then((res) => setContacts(res.data ?? []));
  }, [lng]);

  useEffect(() => {
    getContactHeader(lng).then((res) => setContactHeader(res.data[0] ?? {}));
  }, [lng]);

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">
        {contactHeader.title ? contactHeader.title : ""}
      </h2>
      <span className="section__subtitle">
        {contactHeader.subtitle ? contactHeader.subtitle : ""}
      </span>
      <ContactmeCore contactos={contacts} />
    </section>
  );
};

export default Contactme;
