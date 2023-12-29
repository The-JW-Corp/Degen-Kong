import React from "react";
import Image from "next/image";
import degenKongWatermark from "../../../public/Assets/image/degenkong-watermark.svg";
function page() {
  return (
    <>
      Stake
      <Image
        src={degenKongWatermark}
        quality={100}
        alt="degen kong long background"
      />
    </>
  );
}

export default page;
