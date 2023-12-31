"use client";
import React, { useState } from "react";
import Button from "./Button.jsx";
import styles from "../styles/navbar.module.css";
import degenKongLogo from "../../public/Assets/image/degen-kong-logo.svg";
import Image from "next/image.js";
import { usePathname } from "next/navigation";
function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const buttonsName = ["home", "stake", "roadmap", "rarity"];
  const pathname = usePathname();
  let pathnameString = pathname.replace("/", "");
  function handleConnectWalletClick() {
    setIsWalletConnected(!isWalletConnected);
  }
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // handleConnectWalletClick(buttonName);
  };
  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_wrap}>
        <Image src={degenKongLogo} quality={100} alt="degen kong logo" />
        <div className={styles.navbar_buttons_navigate_container}>
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
        <div>
          <Button
            text="connect wallet"
            onClick={() => handleConnectWalletClick()}
            isWalletConnected={isWalletConnected}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
