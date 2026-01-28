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
    <div className="relative flex items-center justify-center">
      {/* Largest animated glow (subtle background) */}
      <div className="absolute w-[420px] h-[420px] md:w-[360px] md:h-[360px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-br from-primary-purple/40 via-primary-red/30 to-primary-teal/40 blur-2xl opacity-80 animate-pulse" />

      {/* Stronger animated glow (main atmosphere) */}
      <div className="absolute w-[420px] h-[420px] md:w-[360px] md:h-[360px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-br from-primary-purple/50 via-primary-teal/40 to-primary-red/50 blur-3xl opacity-80 animate-pulse" />

      {/* Gradient circular border ring */}
      <div className="absolute w-[400px] h-[400px] md:w-[340px] md:h-[340px] sm:w-[300px] sm:h-[300px] rounded-full p-[4px] bg-gradient-to-br from-primary-purple via-primary-teal to-primary-red opacity-100 animate-pulse">
        <div className="w-full h-full rounded-full bg-[#0f0f13]"></div>
      </div>

      {/* Main interactive circle */}
      <div
        className="relative rounded-full p-2 bg-gradient-to-br from-primary-purple via-primary-red to-primary-teal cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary-purple/40 hover:scale-105 w-[380px] h-[380px] md:w-[320px] md:h-[320px] sm:w-[280px] sm:h-[280px] z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <Image
          src={getImageSrc()}
          alt="Jhohn Bennidict Estrella"
          width={360}
          height={360}
          className="rounded-full object-cover border-[6px] border-[#0f0f13] shadow-xl shadow-primary-purple/30 transition-transform duration-300 w-full h-full"
          priority
        />
      </div>
    </div>
  );
}
