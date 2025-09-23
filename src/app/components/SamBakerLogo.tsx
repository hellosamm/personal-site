"use client";

import { useState } from "react";
import style from "../styles/SambakerLogo.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SamBakerLogo: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  return (
    <div>
      <div
        className={style.logoContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => router.push("/")}
      >
        <div className={style.logoContent}>
          <img
            src="/spin-star.svg"
            alt="star"
            className={`${style.star} ${style.spinStar} ${
              isHovered ? style.rotate : ""
            }`}
            width="40"
            height="40"
          />
          <img
            src="/right-star.svg"
            alt="star"
            className={`${style.fourPointStar} ${style.rightStar}`}
            width="28"
            height="28"
          />
          <h1 className={style.logoText}>
            SAM
            <br />
            BAKER
          </h1>
          <img
            src="/bottom-left-star.svg"
            alt="star"
            className={`${style.fourPointStar} ${style.bottomLeftStar}`}
            width="24"
            height="24"
          />
        </div>
      </div>
    </div>
  );
};

export default SamBakerLogo;
