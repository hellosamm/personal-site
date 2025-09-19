import React from "react";
import WaveText from "../components/WaveText";
import style from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <WaveText text="CONTACT" jsEffect />
    </div>
  );
};

export default Contact;
