"use client";
import React, { useState, useRef } from "react";
import styles from "../styles/button.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
function Button() {
  const [showNextButton, setShowNextButton] = useState(false);
  const playerRef = useRef(null);
  const animationURL =
    "https://lottie.host/d8cee625-f798-4df1-8582-f29be98c468b/gxwZrVrtQB.json";
  function handleClickButton() {
    if (playerRef.current) {
      playerRef.current.setSeeker(0); // Set the frame to the start
      playerRef.current.play();
    }
  }
  function handleAnimationComplete(e) {
    if (e === "complete") {
      setShowNextButton(true);
    }
  }
  return (
    <button className={styles.button_container} onClick={handleClickButton}>
      <div
        className={styles.button_text}
        style={{ display: showNextButton ? "flex" : "none" }}
      >
        Button
      </div>
      <Player
        autoplay
        // hover
        ref={playerRef}
        onClick
        keepLastFrame
        src={animationURL}
        onEvent={handleAnimationComplete}
        style={{ height: "58.179px", width: "145.056px" }}
        speed={1.5}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </button>
  );
}

export default Button;
