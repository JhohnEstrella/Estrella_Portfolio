"use client";

import Section from "@/app/GUI/components/sectionWrap";

export default function Socials() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/JhohnEstrella", icon: "👨‍💻" },
    { name: "Vercel", url: "https://vercel.com/jhohn-bennidict-estrellas-projects", icon: "💼" },
    { name: "Email", url: "mailto:jboestre@addu.edu.ph", icon: "✉️" },
    { name: "Facebook", url: "https://www.facebook.com/jaybiestrey/", icon: "👥" },
  ];

  return (
    <Section id="socials">
      <div style={styles.container}>
        <h2>Let's Connect</h2>
        <p style={styles.subtitle}>
          I’d love to hear from you! Whether you have questions, want to collaborate on a project, or just want to say hi, 
          feel free to reach out. You can connect with me through any of the links below, and I’ll be happy to get in touch. 
          Don’t hesitate! Let’s start a conversation and explore opportunities together!
        </p>
        <div style={styles.socialGrid}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
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
    margin: "0 auto",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
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
    width: "100%",
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
