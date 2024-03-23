import CtaButton from "@/mircocomponents/CtaButton";
import Image from "next/image";
import { useState } from "react";

const NavItem = ({ name, navItem, setNavItem }) => (
  <li
    onClick={() => setNavItem(name)}
    className={`${
      navItem === name ? "font-bold" : "font-normal"
    } cursor-pointer`}
  >
    {name}
  </li>
);

const Header = () => {
  const [navItem, setNavItem] = useState("Home");

  return (
    <div className="flex items-center justify-between">
      <Image src="/images/logo.svg" width={100} height={100} alt="logo" />
      <ul className="flex items-center justify-between gap-8">
        {["Home", "Discover", "Special Deals", "Contact"].map((name) => (
          <NavItem
            key={name}
            name={name}
            navItem={navItem}
            setNavItem={setNavItem}
          />
        ))}
      </ul>
      <div className="flex items-center justify-between gap-8">
        <button>Log In</button>
        <CtaButton>Sign Up</CtaButton>
      </div>
    </div>
  );
};

export default Header;
