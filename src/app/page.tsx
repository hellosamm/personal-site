import { Knewave } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import style from "./styles/Homepage.module.css";
import CodingBtn from "./components/CodingBtn";
import OnMyMindBtn from "./components/OnMyMindBtn";
import ContactBtn from "./components/ContactBtn";

export default function Home() {
  return (
    <div>
      <main className={style.main}>
        <div className={style.about}>
          <h1>
            I believe we are all born to create. Whether it&apos;s drawing,
            cooking, coding or simply the way we move through the world, making
            things keeps us <u>curious</u> and <em>alive</em>.
          </h1>
          <div className={style.tagline}>
            I am energized by starting new projects and love to share what I
            know with others. Let&apos;s make some magic!
          </div>

          {/* <img src="/zigzag.svg" alt="" className={style.drawnLine} /> */}
          {/* <div className={style.dottedLine}></div> */}

          <div className={style.allTopics}>
            <div className={`${style.topic} ${style.mostRecent}`}>
              <h2>MOST RECENT</h2>
              <p className={style.details}>
                {/* my latest{" "} */}
                {/* <Link href="/coding-projects" className={style.link}>
                  coding projects
                </Link> */}
                <Link href="/coding-projects">
                  <button className={style.tag}>Coding Projects</button>
                </Link>
              </p>
            </div>

            <div className={`${style.topic} ${style.thinkingAbout}`}>
              <h2>THINKING ABOUT</h2>
              <p className={style.details}>
                {/* random things{" "}
                <Link href="/on-my-mind" className={style.link}>
                  on my mind
                </Link> */}
                <Link href="/on-my-mind">
                  <button className={style.tag}>On My Mind</button>
                </Link>
              </p>
            </div>

            <div className={`${style.topic} ${style.whatImDoing}`}>
              <h2>WHAT I&apos;M DOING</h2>
              <div className={style.details}>
                <ul>OUTDOORS → training for a marathon</ul>
                <ul>MAKING → a quilt</ul>
                <ul>COOKING → homemade pizza on the grill</ul>
              </div>
            </div>
          </div>
          {/* <img src="/zigzag.svg" alt="" className={style.drawnLine} /> */}
          {/* <div className={style.playlist}>
            <p>marathon playlist</p>
          </div> */}
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
