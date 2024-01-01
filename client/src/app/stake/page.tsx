import React from "react";
import Image from "next/image";
import degenKongWatermark from "../../../public/Assets/image/degenkong-watermark.svg";
import styles from "../../styles/pages/page-stake.module.css";
import degenPfp from "../../../public/Assets/image/degenKong-pfp.png";
function page() {
  return (
    <>
      <div className={styles.stake_page_container}>
        <div className={styles.stake_page_watermark_container}>
          <Image
            src={degenKongWatermark}
            quality={100}
            alt="degen kong long background"
          />
        </div>
        <div className={styles.stake_page_first_bloc}>
          <div className={styles.stake_page_first_bloc_wrap}>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            
          </div>
        </div>
        <div className={styles.stake_page_second_bloc}>
          <div className={styles.stake_page_second_bloc_wrap}>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
            <div className={styles.stake_page_image_container}>
              <Image
                src={degenPfp}
                quality={100}
                alt="degen kong long background"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
