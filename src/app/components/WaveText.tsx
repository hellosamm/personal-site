"use client";

import { useRef } from "react";
import styles from "../styles/WaveText.module.css";

interface WaveTextProps {
  text: string;
}

export default function WaveText({ text }: WaveTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const letters = text.split("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left; // X relative to container
    const containerWidth = rect.width;

    const letterSpans = containerRef.current.querySelectorAll<HTMLSpanElement>(
      `.${styles.letter}`
    );

    letterSpans.forEach((letter, index) => {
      const letterCenter = (index + 0.5) * (containerWidth / letters.length);
      const distance = Math.abs(mouseX - letterCenter);
      const maxTranslate = 25;
      const translateY = Math.max(maxTranslate - distance / 5, 0); // closer = bigger
      const scale = 1 + translateY / 100; // subtle scaling
      letter.style.transform = `translateY(-${translateY}px) scale(${scale})`;
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const letterSpans = containerRef.current.querySelectorAll<HTMLSpanElement>(
      `.${styles.letter}`
    );
    letterSpans.forEach((letter) => {
      letter.style.transform = `translateY(0px) scale(1)`;
    });
  };

  return (
    <div
      ref={containerRef}
      className={styles.waveText}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {letters.map((char, index) => (
        <span key={index} className={styles.letter}>
          {char}
        </span>
      ))}
    </div>
  );
}
