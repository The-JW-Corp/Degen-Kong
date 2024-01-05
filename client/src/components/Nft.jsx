"use client";
import React, { useState } from "react";
import styles from "../styles/nft.module.css";
import Image from "next/image";
function Nft({ nfts, nftImage }) {
  const [selectedNfts, setSelectedNfts] = useState(new Set());

  function handleNftClick(index) {
    setSelectedNfts((prevSelectedNfts) => {
      const newSelectedNfts = new Set(prevSelectedNfts);
      if (newSelectedNfts.has(index)) {
        newSelectedNfts.delete(index);
      } else {
        newSelectedNfts.add(index);
      }
      return newSelectedNfts;
    });
    console.log(selectedNfts.size)
  }
  
  return (
    <>
      {nfts.map((index) => (
        <div
          key={index}
          className={
            selectedNfts.has(index)
              ? styles.nft_image_container_selected
              : styles.nft_image_container
          }
          onClick={() => handleNftClick(index)}
        >
          <Image
            src={nftImage}
            quality={100}
            alt="degen kong long background"
          />
        </div>
      ))}
    </>
  );
}

export default Nft;
