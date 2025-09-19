"use client";

import { useEffect, useRef } from "react";
import styles from "../styles/WaveText.module.css";
interface WaveTextProps {
  text: string;
  jsEffect?: boolean;
}

export default function WaveText({ text, jsEffect = false }: WaveTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wrap each letter in a span
    container.innerHTML = "";
    text.split("").forEach((char) => {
      const span = document.createElement("span");
      span.className = styles.letter;
      span.textContent = char;
      container.appendChild(span);
    });

    if (jsEffect) {
      const letters = container.querySelectorAll<HTMLSpanElement>(
        `.${styles.letter}`
      );
      letters.forEach((letter, index) => {
        letter.addEventListener("mouseenter", () => {
          letters.forEach((otherLetter, otherIndex) => {
            const distance = Math.abs(index - otherIndex);
            let translateY = 0,
              scale = 1;
            if (distance === 0) {
              translateY = -30;
              scale = 1.1;
            } else if (distance === 1) {
              translateY = -20;
              scale = 1.05;
            } else if (distance === 2) {
              translateY = -12;
              scale = 1.02;
            } else if (distance === 3) {
              translateY = -6;
              scale = 1.01;
            }
            otherLetter.style.transform = `translateY(${translateY}px) scale(${scale})`;
          });
        });

        letter.addEventListener("mouseleave", () => {
          setTimeout(() => {
            if (!container.matches(":hover")) {
              letters.forEach(
                (l) => (l.style.transform = "translateY(0px) scale(1)")
              );
            }
          }, 50);
        });
      });

      container.addEventListener("mouseleave", () => {
        letters.forEach(
          (letter) => (letter.style.transform = "translateY(0px) scale(1)")
        );
      });
    }
  }, [text, jsEffect]);

  return <div ref={containerRef} className={styles.waveText}></div>;
}
