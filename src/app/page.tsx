import { Knewave } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import style from "./styles/Homepage.module.css";
import CodingBtn from "./components/CodingBtn";
import OnMyMindBtn from "./components/OnMyMindBtn";
import ContactBtn from "./components/ContactBtn";

export default function Home() {
  return (
    <div className="container">
      <div className="sidebar"></div>
      <main className={style.main}>
        <div className={style.about}>
          <h1>{`hi, I'm sam`}</h1>
          <p>
            {`I believe we are all born to create. Whether it’s drawing, cooking,
            coding or simply the way we move through the world, making things
            keeps us curious and alive.`}
          </p>
          <p>
            {`I am energized by starting new projects and love to share what I
            know with others. Let’s make some magic!`}
          </p>

          <div>
            <h2>Most Recent</h2>
            <p>
              my latest{" "}
              <Link href="/coding-projects" className={style.link}>
                coding projects
              </Link>
            </p>

            <h2>Thinking About</h2>
            <p>
              random things{" "}
              <Link href="/on-my-mind" className={style.link}>
                on my mind
              </Link>
            </p>

            <h2>{`What I'm Doing`}</h2>
            <ul>OUTDOORS → training for a marathon</ul>
            <ul>MAKING → a quilt</ul>
            <ul>COOKING → homemade ice cream & pizza on the grill</ul>
          </div>
          <img src="/zigzag.svg" alt="" className={style.drawnLine} />
        </div>
        <div className={style.btnContainer}>
          {/* <div className={style.codingBtn}>
            <CodingBtn />
          </div> */}
          {/* <div className={style.ommBtn}>
            <OnMyMindBtn />
          </div> */}
          {/* <div className={style.contactBtn}>
            <ContactBtn />
          </div> */}
          {/* <div className={style.section}>
            <h3>THINGS I'VE MADE</h3>
            <img src="./red-flower.svg" alt="" />
          </div> */}
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
