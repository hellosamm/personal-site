"use client";

import { use, useState } from "react";
import style from "../styles/ContactForm.module.css";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    console.log("button clicked");
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });
      if (res.ok) {
        setStatus("Message Sent!");
        setEmail("");
        setMessage("");
      } else {
        const { error } = await res.json();
        setStatus(`Failed: ${error}`);
      }
    } catch (err) {
      setStatus("Something went wrong");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={style.contactForm}>
      <input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button type="submit">Send</button>
      <p className={style.status}>{status}</p>
    </form>
  );
}
