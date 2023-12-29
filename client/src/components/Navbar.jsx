"use client";
import React, { useState } from "react";
import Button from "./Button.jsx";
import { usePathname } from "next/navigation";

function Navbar() {
  const [activeButton, setActiveButton] = useState(null);
  const paths = ["home", "stake", "roadmap", "rarity"];
  const handleButtonClick = (path) => {
    setActiveButton(path);
  };
  return (
    <div className="">
      {paths.map((path, i) => (
        <Button
          key={i}
          text={path}
          isSelected={path === activeButton}
          onClick={() => handleButtonClick(path)}
        />
      ))}
    </div>
  );
}

export default Navbar;
