import React from "react";
import Image from "next/image";
import buttonMediumImage from "../../../public/Assets/image/button-medium.svg";
import styles from "../../styles/button-medium.module.css";
function ButtonMedium({ text }) {
  return (
    <>
      <div className={styles.button_medium_container}>
        <div className={styles.button_medium_image_container}>
          <Image src={buttonMediumImage} alt="button medium" />
        </div>
        <div className={styles.button_medium_text}>{text}</div>
      </div>
    </>
  );
}

export default ButtonMedium;
