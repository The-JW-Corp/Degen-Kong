import Image from "next/image";
import WatermarkTitle from "../../../public/Assets/image/degen-kong-watermark-title.svg";
import degenKongLogo from "../../../public/Assets/image/degen-kong-logo.svg"
import styles from "../../styles/pages/page-home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.page_container}>
        <Image src={degenKongLogo} quality={100} width={450} height={450} alt="watermark logo"/>
        <Image src={WatermarkTitle} quality={100} alt="watermark title"/>
      </div>
    </>
  );
}
