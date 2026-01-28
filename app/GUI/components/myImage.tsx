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

  const styles = {
    wrapper: {
      borderRadius: "50%",
      padding: "6px",
      background: "linear-gradient(135deg, #7c7cff, #ff6b6b)",
      cursor: "pointer",
      transition: "transform 0.3s ease",
    },
    image: {
      borderRadius: "50%",
      objectFit: "cover" as const,
      border: "4px solid rgba(124, 124, 255, 0.3)",
      boxShadow: "0 8px 32px rgba(124, 124, 255, 0.2)",
    },
  };

  return (
    <div
      style={styles.wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <Image
        src={getImageSrc()}
        alt="Jhohn Bennidict Estrella"
        width={400}
        height={400}
        style={styles.image}
        priority
      />
    </div>
  );
}
