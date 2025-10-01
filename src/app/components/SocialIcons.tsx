"use client";

import style from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const SocialIcons = () => {
  return (
    <div className={style.allIcons}>
      <Link
        href="https://www.pinterest.com/samm_bakerr/_saved/"
        target="_blank"
        className={style.iconWrapper}
      >
        <Image
          src="/pinterest.svg"
          width={45}
          height={45}
          alt=""
          className={style.icon}
        />
      </Link>

      <Link
        href="https://github.com/hellosamm"
        target="_blank"
        className={style.iconWrapper}
      >
        <Image
          src="/github-original.svg"
          width={45}
          height={45}
          alt=""
          className={style.icon}
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/samm-bakerr/"
        target="_blank"
        className={style.iconWrapper}
      >
        <Image
          src="/linkedin-original.svg"
          width={45}
          height={45}
          alt=""
          className={style.icon}
        />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          viewBox="0 0 256 256"
        >
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
              d="M 1.48 29.91 h 18.657 v 60.01 H 1.48 V 29.91 z M 10.809 0.08 c 5.963 0 10.809 4.846 10.809 10.819 c 0 5.967 -4.846 10.813 -10.809 10.813 C 4.832 21.712 0 16.866 0 10.899 C 0 4.926 4.832 0.08 10.809 0.08"
              className={style.iconPath}
            />
            <path
              d="M 31.835 29.91 h 17.89 v 8.206 h 0.255 c 2.49 -4.72 8.576 -9.692 17.647 -9.692 C 86.514 28.424 90 40.849 90 57.007 V 89.92 H 71.357 V 60.737 c 0 -6.961 -0.121 -15.912 -9.692 -15.912 c -9.706 0 -11.187 7.587 -11.187 15.412 V 89.92 H 31.835 V 29.91 z"
              className={style.iconPath}
            />
          </g>
        </svg> */}
      </Link>
    </div>
  );
};

export default SocialIcons;
