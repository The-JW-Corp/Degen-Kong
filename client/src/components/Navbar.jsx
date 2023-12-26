import React, { useState } from "react";
import Button from "../components/Button.jsx";
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
