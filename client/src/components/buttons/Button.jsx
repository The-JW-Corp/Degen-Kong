"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/button.module.css";
import Link from "next/link";
import KongHand from "../lottie/KongHand";
import KongMouth from "../lottie/KongMouth";
import ButtonAnimation from "../../components/lottie/ButtonAnimation";
import {handleAnimationComplete as handleAnimationCompleteUtil } from "../../utils/lottieAnimationComplete"
function Button({ text, isSelected, onClick, isWalletConnected }) {
  const [showNextButton, setShowNextButton] = useState(false);
  const [displayConnectWalletButton, setDisplayConnectWalletButton] =
    useState(false);
  const playerRef = useRef(null);
  // const pathname = usePathname();
  const buttonAnimationURL =
    "https://lottie.host/d8cee625-f798-4df1-8582-f29be98c468b/gxwZrVrtQB.json";
  function handleClickButton() {
    onClick();
    if (isSelected && playerRef.current) {
      playerRef.current.setSeeker(0); // Set the frame to the start
      playerRef.current.play();
    }
  }
  
  const handleAnimationComplete = handleAnimationCompleteUtil(setShowNextButton);
  useEffect(() => {
    if (text === "connect wallet") {
      setDisplayConnectWalletButton(true);
    }
  }, [text]);
  return (
    <Link href={displayConnectWalletButton ? "" : text}>
      <button
        // handleClick={onClick}
        className={styles.button_container}
        onClick={handleClickButton}
      >
        <div
          className={
            displayConnectWalletButton
              ? styles.button_text_connect_wallet
              : styles.button_text
          }
          style={{ display: showNextButton ? "flex" : "none" }}
        >
          {text === "connect wallet" && isWalletConnected ? "7DXaA...CcY"  : text}
        </div>
        {isSelected && (
          <>
            <KongHand />
          </>
        )}
        {/* If connect wallet button and the wallet is not connected show the kong mouth */}
        {displayConnectWalletButton && !isWalletConnected && (
          <>
            <KongMouth />
          </>
        )}
        {displayConnectWalletButton && isWalletConnected && (
          <>
            <KongHand isWalletConnected={isWalletConnected} />
          </>
        )}
        <ButtonAnimation
          playerRef={playerRef}
          buttonAnimationURL={buttonAnimationURL}
          handleAnimationComplete={handleAnimationComplete}
          displayConnectWalletButton={displayConnectWalletButton}
        />
      </button>
    </Link>
  );
}

export default Button;
