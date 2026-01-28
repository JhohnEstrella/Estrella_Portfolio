"use client";

import { useState, useEffect } from "react";

export default function TopNavBar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "socials"];
      const scrollContainer = document.querySelector(".scroll-container");
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport (considering the navbar height)
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    const scrollContainer = document.querySelector(".scroll-container");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "socials", label: "Socials" },
  ];

  return (
    <nav style={styles.nav}>
      <div style={styles.navContent}>
        <div style={styles.logo}>⚡JE </div>
        <div style={styles.navLinks}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                ...styles.navLink,
                ...(activeSection === item.id ? styles.navLinkActive : {}),
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(15, 15, 19, 0.9)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(124, 124, 255, 0.2)",
    zIndex: 1000,
    boxShadow: "0 4px 30px rgba(124, 124, 255, 0.1)",
  },
  navContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxWidth: "1200px",
    padding: "0 2rem",
  },
  logo: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1.5rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #7c7cff, #ff6b6b)",
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap" as const,
  },
  navLinks: {
    display: "flex",
    gap: "2.5rem",
  },
  navLink: {
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    color: "#b3b3b3",
    fontFamily: "Poppins, sans-serif",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    position: "relative" as const,
    padding: "0.5rem 0",
    transition: "color 0.3s ease, border-color 0.3s ease",
  },
  navLinkActive: {
    color: "#7c7cff",
    borderBottom: "2px solid #7c7cff",
  },
};

// Mobile responsive adjustments
if (typeof window !== "undefined" && window.innerWidth <= 768) {
  styles.nav = {
    ...styles.nav,
    height: "60px",
  };
  styles.navContent = {
    ...styles.navContent,
    padding: "0 1rem",
  };
  styles.logo = {
    ...styles.logo,
    fontSize: "1.2rem",
  };
  styles.navLinks = {
    ...styles.navLinks,
    gap: "1.5rem",
  };
  styles.navLink = {
    ...styles.navLink,
    fontSize: "0.85rem",
    padding: "0.25rem 0",
  };
}