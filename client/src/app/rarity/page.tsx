import Button from "@/components/Button.jsx";
import React from "react";
import styles from "../../styles/page-rarity.module.css";
async function page() {
  return (
    <div className={styles.page_container}>
      Rarity
      {/* <Button text="home" />
      <Button text="stake" />
      <Button text="rarity" isSelected={true} /> */}
    </div>
  );
}

export default page;
