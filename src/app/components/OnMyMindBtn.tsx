import React from "react";
import Link from "next/link";

const OnMyMindBtn = () => {
  return (
    <div>
      <Link href="/on-my-mind" className="group">
        <svg
          width="422"
          height="219"
          viewBox="0 0 422 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 hover:rotate-3"
        >
          <ellipse
            cx="211"
            cy="109.5"
            rx="109.5"
            ry="211"
            transform="rotate(-90 211 109.5)"
            fill="#ED92FB"
          />
          <text
            x="211"
            y="109.5"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="black"
            fontSize="25"
            fontWeight="600"
          >
            ON MY MIND
          </text>
        </svg>
      </Link>
    </div>
  );
};

export default OnMyMindBtn;
