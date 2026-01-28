"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProfileImage() {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const getImageSrc = () => {
    if (clicked && hovered) return "/profile1.jpg";
    if (hovered) return "/profile2.jpg";
    return "/profile3.jpg";
  };

  const handleMouseEnter = () => setHovered(true);

  const handleMouseLeave = () => {
    setHovered(false);
    setClicked(false);
  };

  const handleClick = () => setClicked(true);

  return (
    <div
      className="rounded-full p-2 bg-gradient-to-br from-primary-purple via-primary-red to-primary-teal cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary-purple/40 hover:scale-105"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Image
        src={getImageSrc()}
        alt="Jhohn Bennidict Estrella"
        width={400}
        height={400}
        className="rounded-full object-cover border-[6px] border-[#0f0f13] shadow-xl shadow-primary-purple/30 transition-transform duration-300"
        priority
      />
    </div>
  );
}
