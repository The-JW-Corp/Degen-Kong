"use client";
import React, { useState } from "react";
import Button from "./Button.jsx";
import styles from "../styles/navbar.module.css";
import degenKongLogo from "../../public/Assets/image/degen-kong-logo.svg";
import Image from "next/image.js";
import { usePathname } from "next/navigation";
function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(true);
  const paths = ["home", "stake", "roadmap", "rarity", "connect wallet"];
  const pathname = usePathname();
  let pathnameString = pathname.replace("/", "");
  const handleButtonClick = (path) => {
    setActiveButton(path);
  };
  return (
    <div className={styles.navbar_container}>
      <Image src={degenKongLogo} quality={100} alt="degen kong logo" />
      {paths.map((path, i) => (
        <Button
          key={i}
          text={path}
          isWalletConnected={isWalletConnected}
          isSelected={path === pathnameString}
          onClick={() => handleButtonClick(path)}
        />
      ))}
    </div>
  );
}

export default Navbar;
