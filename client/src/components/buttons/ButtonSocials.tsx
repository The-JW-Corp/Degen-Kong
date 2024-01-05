"use client";
import React, { useRef, useState } from "react";
import ButtonAnimation from "../../components/lottie/ButtonAnimation";
import styles from "../../styles/button-socials.module.css";
import Image from "next/image";
import { StaticImageData } from 'next/image';
import twitterLogo from "../../../public/Assets/image/twitter-logo.svg";
import discordLogo from "../../../public/Assets/image/discord-logo.svg";
import hyperspaceLogo from "../../../public/Assets/image/hyperscape-logo.svg";
import { handleAnimationComplete as handleAnimationCompleteUtil } from "@/utils/lottieAnimationComplete";
import Link from "next/link";

interface SocialMedia {
  name: string;
  logo: StaticImageData;
}

interface LogoRotating {
  twitter: boolean;
  discord: boolean;
  hyperspace: boolean;
}

function ButtonSocials() {
  const [showNextButton, setShowNextButton] = useState(false);
  const [isLogoRotating, setIsLogoRotating] = useState<LogoRotating>({
    twitter: false,
    discord: false,
    hyperspace: false,
  });

  const socialsButtonPlayerRef = useRef<any>(null);
  const handleAnimationComplete =
    handleAnimationCompleteUtil(setShowNextButton);
  const socialsButtonURL =
    "https://lottie.host/eced15b8-a0bd-4e88-9f93-98909e267a82/CPGfoHv4cq.json";

  const socialMedia: SocialMedia[] = [
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

  // const toggleLogoRotation = (socialName: string) => {
  //   setIsLogoRotating((prev) => ({
  //     ...prev,
  //     [socialName]: !prev[socialName],
  //   }));
  // };
  const toggleLogoRotation = (socialName: keyof LogoRotating) => {
    setIsLogoRotating((prev) => ({
      ...prev,
      [socialName]: !prev[socialName],
    }));
  };
  const handleSocialsLinks = (social: SocialMedia): string => {
    switch (social.name) {
      case "twitter":
        return "https://twitter.com";
      case "discord":
        return "https://discord.com";
      default:
        return "https://hyperspace.xyz";
    }
  };
  function isKeyOfLogoRotating(key: any): key is keyof LogoRotating {
    return key === "twitter" || key === "discord" || key === "hyperspace";
  }
  return (
    <>
      {socialMedia.map((social) => (
        <Link
          className={styles.button_socials_section}
          key={social.name}
          href={handleSocialsLinks(social)}
        >
          <div
            className={styles.button_socials_container}
            // onClick={() => toggleLogoRotation(social.name)}
            onClick={() => toggleLogoRotation(social.name as keyof LogoRotating)}

          >
            <ButtonAnimation
              buttonSocials={true}
              playerRef={socialsButtonPlayerRef.current}
              buttonAnimationURL={socialsButtonURL}
              handleAnimationComplete={handleAnimationComplete}
              displayConnectWalletButton={undefined}
            />
            {/* <div
              className={styles.button_socials_logo}
              style={{
                animation: isLogoRotating[social.name]
                  ? `${styles.rotate} 0.5s ease-out`
                  : "none",
                transform: social.name === "discord" ? "scale(1.4)" : "none",
              }}
            >
              <Image src={social.logo} alt={`${social.name} logo`} />
            </div> */}
            <div
              className={styles.button_socials_logo}
              style={{
                animation:
                  isKeyOfLogoRotating(social.name) &&
                  isLogoRotating[social.name]
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
