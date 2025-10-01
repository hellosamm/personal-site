import style from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className={style.footer}>
      © 2025 samm bakerr
      <div>
        <SocialIcons />
        {/* <Link
          href="https://www.pinterest.com/samm_bakerr/_saved/"
          target="_blank"
        >
          <Image
            src="/pinterest.svg"
            width={45}
            height={45}
            alt=""
            className={style.icon}
          />
        </Link>

        <Link href="https://github.com/hellosamm" target="_blank">
          <Image
            src="/github-original.svg"
            width={45}
            height={45}
            alt=""
            className={style.icon}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/samm-bakerr/" target="_blank">
          <Image
            src="/linkedin-original.svg"
            width={45}
            height={45}
            alt=""
            className={style.icon}
          />
        </Link> */}
      </div>
    </footer>
  );
};

export default Footer;
