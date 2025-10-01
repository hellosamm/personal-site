import SamBakerLogo from "./SamBakerLogo";
import style from "../styles/Header.module.css";
import Link from "next/link";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <div className={style.fullContainer}>
      <SamBakerLogo />

      <div className={style.menuDesktop}>
        <Link href="/coding-projects">CODING</Link>
        <Link href="/on-my-mind">ON MY MIND</Link>
        <Link href="/contact">CONTACT </Link>
      </div>
      <Hamburger />
    </div>
  );
};

export default Header;
