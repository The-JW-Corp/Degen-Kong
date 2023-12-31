"use client";
import React, { useRef, useState, useEffect } from "react";
import ButtonAnimation from "../../components/lottie/ButtonAnimation";
import styles from "../../styles/button-socials.module.css";
import Image from "next/image";
import twitterLogo from "../../../public/Assets/image/twitter-logo.svg";
import discordLogo from "../../../public/Assets/image/discord-logo.svg";
import hyperspaceLogo from "../../../public/Assets/image/hyperscape-logo.svg";
import { handleAnimationComplete as handleAnimationCompleteUtil } from "@/utils/lottieAnimationComplete";
import Link from "next/link";
function ButtonSocials() {
  const [showNextButton, setShowNextButton] = useState(false);
  const [isLogoRotating, setIsLogoRotating] = useState({
    twitter: false,
    discord: false,
    hyperspace: false,
  });
  const [refs, setRefs] = useState([]);
  const socialsButtonPlayerRef = useRef(null);
  const handleAnimationComplete =
    handleAnimationCompleteUtil(setShowNextButton);
  const socialsButtonURL =
    "https://lottie.host/eced15b8-a0bd-4e88-9f93-98909e267a82/CPGfoHv4cq.json";
  const socialMedia = [
    {
      name: "twitter",
      logo: twitterLogo,
    },
    {
      name: "discord",
      logo: discordLogo,
    },
    {
      name: "hyperspace",
      logo: hyperspaceLogo,
    },
  ];
  // function handleClickButton(i) {
  //   const ref = refs[i];
  //   if (ref && ref.current) {
  //     ref.current.setSeeker(0);
  //     ref.current.play();
  //   }
  // }
  const toggleLogoRotation = (socialName) => {
    setIsLogoRotating((prev) => ({
      ...prev,
      [socialName]: !prev[socialName],
    }));
  };
  function handleSocialsLinks(social) {
    if (social.name === "twitter") {
      return "https://twitter.com";
    } else if (social.name === "discord") {
      return "https://discord.com";
    } else if (social.name) {
      return "https://hyperspace.xyz";
    }
  }
  return (
    <>
      {socialMedia.map((social, i) => (
        <Link key={social.name} href={handleSocialsLinks(social)}>
          <div
            key={social.name}
            className={styles.button_socials_container}
            onClick={() => toggleLogoRotation(social.name)}
          >
            <ButtonAnimation
              buttonSocials={true}
              playerRef={socialsButtonPlayerRef}
              buttonAnimationURL={socialsButtonURL}
              handleAnimationComplete={handleAnimationComplete}
            />
            <div
              className={styles.button_socials_logo}
              style={{
                animation: isLogoRotating[social.name]
                  ? `${styles.rotate} 0.5s ease-out`
                  : "none",
                transform: social.name === "discord" ? "scale(1.4)" : "none",
              }}
            >
              <Image src={social.logo} alt={`${social.name} logo`} />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ButtonSocials;
