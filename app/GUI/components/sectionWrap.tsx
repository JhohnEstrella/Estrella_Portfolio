"use client";

import { useEffect, useRef, useState } from "react";

export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id={id} className="section">
      <div
        ref={contentRef}
        className={`section-content ${isVisible ? "fade-in" : "fade-out"}`}
      >
        {children}
      </div>
    </section>
  );
}
