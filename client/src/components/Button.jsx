"use client";
import React, { useState, useRef } from "react";
import styles from "../styles/button.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Link from "next/link";

function Button({ text, isSelected }) {
  const [showNextButton, setShowNextButton] = useState(false);
  const playerRef = useRef(null);
  const buttonAnimationURL =
    "https://lottie.host/d8cee625-f798-4df1-8582-f29be98c468b/gxwZrVrtQB.json";
  const buttonSuperiorHandURL =
    "https://lottie.host/f6468161-88cb-49c5-9865-b4ea43ad2e93/qDQIVRiM7o.json";
  const buttonInferiorHandURL =
    "https://lottie.host/52050add-59bc-4241-a702-5509d780ea80/DVKC0R61un.json";
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
    <Link href={text}>
      <button className={styles.button_container} onClick={handleClickButton}>
        <div
          className={styles.button_text}
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
        <Player
          autoplay
          // hover
          ref={playerRef}
          onClick
          keepLastFrame
          src={buttonAnimationURL}
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
    </Link>
  );
}

export default Button;
