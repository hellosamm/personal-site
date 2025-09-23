import React from "react";
import WaveText from "../components/WaveText";
import style from "../styles/Contact.module.css";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className={style.main}>
      <div className={style.contactContainer}>
        <div className={style.contactMessage}>
          <p className={style.text}>Got a question or just want to say hi?</p>
          <p className={style.title}> I’d love to hear from you!</p>
          {/* <p>LinkedIn</p> */}
          {/* <h2>CONTACT</h2> */}
        </div>
        {/* <WaveText text="contact" /> */}
        <div className={style.messageContainer}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
