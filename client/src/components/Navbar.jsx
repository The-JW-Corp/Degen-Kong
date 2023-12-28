import React from "react";
import Button from "../components/Button.jsx";
import Link from "next/link.js";
function Navbar() {
  return (
    <div className="">
        <Button text="home" />
      <Button text="stake" />
      <Button text="roadmap" />
      <Button text="rarity" />
    </div>
  );
}

export default Navbar;
