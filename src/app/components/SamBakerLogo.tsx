"use client";

import { useState } from "react";
import styles from "../styles/SambakerLogo.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SamBakerLogo: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div className={styles.fullContainer}>
      <div
        className={styles.logoContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push("/")}
      >
        <div className={styles.logoContent}>
          <img
            src="/spin-star.svg"
            alt="star"
            className={`${styles.star} ${styles.spinStar} ${
              isHovered ? styles.rotate : ""
            }`}
            width="40"
            height="40"
          />
          <img
            src="/right-star.svg"
            alt="star"
            className={`${styles.fourPointStar} ${styles.rightStar}`}
            width="28"
            height="28"
          />
          <h1 className={styles.logoText}>
            SAM
            <br />
            BAKER
          </h1>
          <img
            src="/bottom-left-star.svg"
            alt="star"
            className={`${styles.fourPointStar} ${styles.bottomLeftStar}`}
            width="24"
            height="24"
          />
        </div>
      </div>
      <div className={styles.menu}>
        <Link href="/coding-projects">coding</Link>
        <Link href="/on-my-mind">on my mind</Link>
        <Link href="/contact">contact</Link>
      </div>
    </div>
  );
};

export default SamBakerLogo;
