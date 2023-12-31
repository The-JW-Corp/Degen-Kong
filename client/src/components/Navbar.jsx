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
  const buttonsName = ["home", "stake", "roadmap", "rarity", "connect wallet"];
  const pathname = usePathname();
  let pathnameString = pathname.replace("/", "");
  function handleConnectWalletClick(buttonName) {
    if (buttonName === "connect wallet") {
      setIsWalletConnected(!isWalletConnected);
      console.log("connect wallet clicked")
    }
  }
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    handleConnectWalletClick(buttonName);
  };
  return (
    <div className={styles.navbar_container}>
      <Image src={degenKongLogo} quality={100} alt="degen kong logo" />
      {buttonsName.map((buttonName, i) => (
        <Button
          key={i}
          text={buttonName}
          isWalletConnected={isWalletConnected}
          isSelected={buttonName === pathnameString}
          onClick={() => handleButtonClick(buttonName)}
        />
      ))}
    </div>
  );
}

export default Navbar;
