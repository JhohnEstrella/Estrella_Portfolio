"use client";

import { useState, useEffect } from "react";

export default function TopNavBar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "socials"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
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
    <nav className="fixed top-0 left-0 w-full h-[70px] flex justify-center items-center bg-[rgba(15,15,19,0.9)] backdrop-blur-[10px] border-b border-[rgba(124,124,255,0.2)] z-[1000] shadow-[0_4px_30px_rgba(124,124,255,0.1)]">
      <div className="flex justify-between items-center w-full max-w-7xl px-8 md:px-4">
        <div className="font-['Poppins',sans-serif] text-2xl md:text-xl font-bold bg-gradient-to-br from-[#7c7cff] to-[#ff6b6b] bg-clip-text text-transparent whitespace-nowrap">
          ⚡JE
        </div>
        <div className="flex gap-10 md:gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`
                bg-none border-0 border-b-2 
                font-['Poppins',sans-serif] text-base md:text-[0.85rem] font-semibold
                cursor-pointer relative py-2 md:py-1 px-0
                transition-all duration-300 ease-in-out
                ${
                  activeSection === item.id
                    ? "text-[#7c7cff] border-b-[#7c7cff]"
                    : "text-[#b3b3b3] border-b-transparent hover:text-[#7c7cff]"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}