"use client";
import React, { useState, useRef } from "react";
import styles from "../styles/button.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
// import { Player, Controls } from "";
function Button() {
  const playerRef = useRef(null);
  const animationURL =
    "https://lottie.host/d8cee625-f798-4df1-8582-f29be98c468b/gxwZrVrtQB.json";
  function handleClickButton() {
    if (playerRef.current) {
      playerRef.current.setSeeker(0); // Set the frame to the start
      playerRef.current.play();
    }
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
    // setIsClick(true);
  }

  return (
    <button className={styles.button_container} onClick={handleClickButton}>
      <div className={styles.button_text}>Button</div>
      {/* <img src={imaged} alt="" /> */}
      <Player
        autoplay
        // hover
        ref={playerRef}
        onClick
        keepLastFrame
        src={animationURL}
        style={{ height: "58.179px", width: "145.056px" }}
        speed={1}
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
