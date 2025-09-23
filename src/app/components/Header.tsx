import SamBakerLogo from "./SamBakerLogo";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div>
        <SamBakerLogo />

        <div>
          {/* <Link href="/coding-projects">coding</Link>
          <Link href="/on-my-mind">on my mind</Link>
          <Link href="/contact">contact</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
