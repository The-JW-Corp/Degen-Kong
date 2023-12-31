import React, { useRef } from "react";
import styles from "../../styles/lottie/kong-hand.module.css";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
function KongHand({ isWalletConnected }) {
  const playerRefKongHand = useRef(null);
  const buttonSuperiorHandURL =
    "https://lottie.host/f6468161-88cb-49c5-9865-b4ea43ad2e93/qDQIVRiM7o.json";
  const buttonInferiorHandURL =
    "https://lottie.host/52050add-59bc-4241-a702-5509d780ea80/DVKC0R61un.json";
  return (
    <>
      <div
        className={
          isWalletConnected
            ? styles.kong_hand_superior_wallet_connected
            : styles.kong_hand_superior
        }
      >
        <Player
          autoplay
          // hover
          ref={playerRefKongHand}
          onClick
          keepLastFrame
          src={buttonSuperiorHandURL}
          // onEvent={handleAnimationComplete}
          style={
            isWalletConnected
              ? { height: "28.000692px" }
              : { height: "23.000692px", width: "79.48137px" }
          }
          speed={1.5}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
      <div
        className={
          isWalletConnected
            ? styles.kong_hand_inferior_wallet_connected
            : styles.kong_hand_inferior
        }
      >
        <Player
          autoplay
          // hover
          ref={playerRefKongHand}
          onClick
          keepLastFrame
          src={buttonInferiorHandURL}
          // onEvent={handleAnimationComplete}
          style={isWalletConnected ? {height:"21.321px"}:{ height: "17.514px", width: "38.498px" }}
          speed={1.5}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    </>
  );
}

export default KongHand;
