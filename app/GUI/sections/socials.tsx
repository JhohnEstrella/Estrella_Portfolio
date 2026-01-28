"use client";

import Section from "@/app/GUI/components/sectionWrap";

export default function Socials() {
  const socialLinks = [
    { name: "GitHub", url: "#", icon: "👨‍💻" },
    { name: "LinkedIn", url: "#", icon: "💼" },
    { name: "Email", url: "#", icon: "✉️" },
    { name: "Twitter", url: "#", icon: "🐦" },
  ];

  return (
    <Section id="socials">
      <div style={styles.container}>
        <h2>Let's Connect</h2>
        <p style={styles.subtitle}>
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        <div style={styles.socialGrid}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              style={styles.socialLink}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(124, 124, 255, 0.2)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "rgba(124, 124, 255, 0.1)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div style={styles.socialIcon}>{social.icon}</div>
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}

const styles: any = {
  container: {
    width: "100%",
    maxWidth: "600px",
    textAlign: "center" as const,
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#b3b3b3",
    marginTop: "1rem",
    marginBottom: "2.5rem",
  },
  socialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  socialLink: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    padding: "2rem",
    background: "rgba(124, 124, 255, 0.1)",
    border: "2px solid rgba(124, 124, 255, 0.3)",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textDecoration: "none",
    color: "#ffffff",
  },
  socialIcon: {
    fontSize: "2.5rem",
    marginBottom: "0.75rem",
  },
};

// Mobile responsive adjustments
if (typeof window !== "undefined" && window.innerWidth <= 768) {
  styles.socialGrid = {
    ...styles.socialGrid,
    gridTemplateColumns: "1fr",
    gap: "1rem",
  };
  styles.socialLink = {
    ...styles.socialLink,
    padding: "1.5rem",
  };
  styles.socialIcon = {
    ...styles.socialIcon,
    fontSize: "2rem",
    marginBottom: "0.5rem",
  };
}
