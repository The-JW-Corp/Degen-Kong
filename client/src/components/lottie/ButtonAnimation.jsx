"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

function ButtonAnimation({
  playerRef,
  buttonAnimationURL,
  displayConnectWalletButton,
  handleAnimationComplete,
  buttonSocials,
}) {
  return (
    <>
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
            : buttonSocials
            ? {}
            : { height: "58.179px", width: "145.056px" }
        }
        speed={1.5}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </>
  );
}

export default ButtonAnimation;
