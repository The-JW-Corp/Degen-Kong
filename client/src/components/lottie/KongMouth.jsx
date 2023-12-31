import React, { useRef } from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import styles from "../../styles/lottie/kong-mouth.module.css";
function KongMouth() {
  const playerRefKongMouth = useRef(null);
  const mouthKongURL =
    "https://lottie.host/10b35cf8-df27-4904-a0b6-7f28ea5ba4f5/ALRDNyO0QH.json";
  return (
    <div className={styles.kong_mouth}>
      <Player
        autoplay
        // hover
        ref={playerRefKongMouth}
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
  );
}

export default KongMouth;
