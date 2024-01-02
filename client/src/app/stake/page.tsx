import React from "react";
import Image from "next/image";
import degenKongWatermark from "../../../public/Assets/image/degenkong-watermark.svg";
import styles from "../../styles/pages/page-stake.module.css";
import nftImage from "../../../public/Assets/image/degenKong-pfp.png";
import ButtonMedium from "../../components/buttons/ButtonMedium";
import Nft from "../../components/Nft";
function page() {
  // Fake data but need to fetch nft Meta data and ID from blockchain
  const nftsFromWallet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const nftsStaked = [0, 1, 2, 3, 4];
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
        <div className={styles.stake_page_first_section}>
          <div className={styles.stake_page_first_section_top_button_container}>
            <ButtonMedium text="WALLET" />
          </div>
          <div className={styles.stake_page_first_bloc}>
            <div className={styles.stake_page_first_bloc_wrap}>
              <Nft nfts={nftsFromWallet} nftImage={nftImage} />
            </div>
          </div>
          <div
            className={styles.stake_page_first_section_bottom_buttons_container}
          >
            <ButtonMedium text="SELECT ALL (0)" />
            <ButtonMedium text="STAKE (0)" />
          </div>
        </div>
        <div className={styles.stake_page_second_section}>
          <div
            className={styles.stake_page_second_section_buttons_top_container}
          >
            <ButtonMedium text="STAKED (3)" />
            <ButtonMedium text="CLAIM REWARD" />
          </div>
          <div className={styles.stake_page_second_bloc}>
            <div className={styles.stake_page_second_bloc_wrap}>
              <Nft nfts={nftsStaked} nftImage={nftImage} />
            </div>
          </div>
          <div
            className={styles.stake_page_second_bloc_bottom_buttons_container}
          >
            <ButtonMedium text="SELECT ALL (0)" />
            <ButtonMedium text="UNSTAKE(0)" />
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
