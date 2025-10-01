"use client";
import { useState, useEffect } from "react";
import style from "../styles/Hamburger.module.css";
import Link from "next/link";

const Hamburger = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={style.hamburgerContainer}>
      <button
        className={style.hamburgerButton}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      <div className={`${style.overlay} ${open ? style.open : ""}`}>
        <nav className={style.menuOverlay}>
          <Link
            href="/coding-projects"
            onClick={() => setOpen(false)}
            className={style.link1}
          >
            CODING
          </Link>
          <Link
            href="/on-my-mind"
            onClick={() => setOpen(false)}
            className={style.link2}
          >
            ON MY MIND
          </Link>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className={style.link3}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </div>

    //     <div className={style.hamburgerContainer}>
    //   <button
    //     className={style.hamburgerButton}
    //     onClick={() => setOpen(!open)}
    //     aria-label="Toggle menu"
    //   >
    //     {open ? "✕" : "☰"}
    //   </button>

    //   <nav className={`${style.menuMobile} ${open ? style.open : ""}`}>
    //     <Link href="/coding-projects">CODING</Link>
    //     <Link href="/on-my-mind">ON MY MIND</Link>
    //     <Link href="/contact">CONTACT</Link>
    //   </nav>
    // </div>
  );
};

export default Hamburger;
