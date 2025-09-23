import SamBakerLogo from "./SamBakerLogo";
import style from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={style.fullContainer}>
      <SamBakerLogo />
      <div className={style.menu}>
        <Link href="/coding-projects">CODING</Link>
        <Link href="/on-my-mind">ON MY MIND</Link>
        <Link href="/contact">CONTACT </Link>
      </div>
    </div>
  );
};

export default Header;
