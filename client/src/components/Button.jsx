"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/button.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

function Button({ text, isSelected, onClick }) {
  const [showNextButton, setShowNextButton] = useState(false);
  const [displayConnectWalletButton, setDisplayConnectWalletButton] =
    useState(false);
  const playerRef = useRef(null);
  // const pathname = usePathname();
  const buttonAnimationURL =
    "https://lottie.host/d8cee625-f798-4df1-8582-f29be98c468b/gxwZrVrtQB.json";
  const buttonSuperiorHandURL =
    "https://lottie.host/f6468161-88cb-49c5-9865-b4ea43ad2e93/qDQIVRiM7o.json";
  const buttonInferiorHandURL =
    "https://lottie.host/52050add-59bc-4241-a702-5509d780ea80/DVKC0R61un.json";
  const mouthKongURL =
    "https://lottie.host/10b35cf8-df27-4904-a0b6-7f28ea5ba4f5/ALRDNyO0QH.json";
  function handleClickButton() {
    onClick();
    if (isSelected && playerRef.current) {
      playerRef.current.setSeeker(0); // Set the frame to the start
      playerRef.current.play();
    }
  }
  function handleAnimationComplete(e) {
    if (e === "complete") {
      setShowNextButton(true);
    }
  }
  useEffect(() => {
    if (text === "connect wallet") {
      setDisplayConnectWalletButton(true);
    }
  }, []);
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
          {text}
        </div>
        {isSelected && (
          <>
            <div className={styles.button_superior_hand}>
              <Player
                autoplay
                // hover
                ref={playerRef}
                onClick
                keepLastFrame
                src={buttonSuperiorHandURL}
                // onEvent={handleAnimationComplete}
                style={{ height: "23.000692px", width: "79.48137px" }}
                speed={1.5}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
            <div className={styles.button_inferior_hand}>
              <Player
                autoplay
                // hover
                ref={playerRef}
                onClick
                keepLastFrame
                src={buttonInferiorHandURL}
                // onEvent={handleAnimationComplete}
                style={{ height: "17.514px", width: "38.498px" }}
                speed={1.5}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
          </>
        )}
        {displayConnectWalletButton && (
          <>
            <div className={styles.button_mouth_kong}>
              <Player
                autoplay
                // hover
                ref={playerRef}
                onClick
                keepLastFrame
                src={mouthKongURL}
                // onEvent={handleAnimationComplete}
                style={{ height: "133px", width: "135px" }}
                speed={1.5}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </div>
          </>
        )}
        <Player
          autoplay
          // hover
          ref={playerRef}
          onClick
          keepLastFrame
          src={buttonAnimationURL}
          onEvent={handleAnimationComplete}
          style={
            displayConnectWalletButton
              ? { height: "69.764px", width: "170.196px" }
              : { height: "58.179px", width: "145.056px" }
          }
          speed={1.5}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </button>
    </Link>
  );
}

export default Button;
