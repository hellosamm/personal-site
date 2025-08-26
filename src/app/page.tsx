import { Knewave } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import style from "./styles/Homepage.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar"></div>
      <main className="main">
        <div className={style.about}>
          <p>hi, I'm sam</p>
          <p>
            I believe we are all born to create. Whether it’s drawing, cooking,
            coding or simply the way we move through the world, making things
            keeps us curious and alive.
          </p>
          <p>
            I am energized by starting new projects and love to share what I
            know with others. Let’s make some magic!
          </p>
        </div>
        <div className={style.section}>
          <h3>CURRENTLY MAKING</h3>
          <p>
            <Link href="/this-week-I-made" className={style.link}>
              this week I made
            </Link>
          </p>
        </div>

        <div className={style.section}>
          <h3>THINKING ABOUT</h3>
          <p>
            random things{" "}
            <Link href="/on-my-mind" className={style.link}>
              on my mind
            </Link>
          </p>
        </div>

        <div className={style.section}>
          <h3>THINGS I'VE MADE</h3>
          <p>
            a mix of side projects, creative experiments and things I do after
            work
          </p>
        </div>

        <div>
          <h3>CONTACT</h3>
          <p>
            here's where you can{" "}
            <a
              href="https://www.linkedin.com/in/samm-bakerr/"
              target="_blank"
              className={style.link}
            >
              find me
            </a>
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
