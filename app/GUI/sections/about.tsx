import Section from "@/app/GUI/components/sectionWrap";
import ProfileImage from "@/app/GUI/components/myImage";

export default function About() {
  return (
    <Section id="about">
      <div style={styles.wrapper}>
        <div style={styles.container}>
          <h1>Jhohn Bennidict Estrella</h1>
          <h2>Aspiring Software Developer</h2>
          <p style={styles.subtitle}>
            I'm a Computer Science student who enjoys building thoughtful, efficient, and scalable software solutions. I'm 
            particularly interested in backend development, systems, and how technology can be used responsibly to support 
            learning and real-world problem solving. As a student and creative problem solver, I value clean design, clear 
            logic, and continuous improvement. I enjoy collaborating with others, learning new tools, and turning ideas 
            into practical applications. My goal is to keep growing both technically and creatively as I prepare for a future 
            in the tech industry.
          </p>
          <div style={styles.cta}>
          </div>
        </div>
        <div style={styles.imageContainer}>
          <ProfileImage />
        </div>
      </div>
    </Section>
  );
}

const styles: any = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    gap: "4rem",
    width: "100%",
    maxWidth: "1200px",
    flexWrap: "wrap" as const,
  },
  container: {
    flex: "1 1 300px",
    maxWidth: "600px",
  },
  imageContainer: {
    flexShrink: 0,
    marginLeft: "8.5rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    lineHeight: "1.8",
    marginBottom: "2rem",
    color: "#b3b3b3",
    textAlign: "justify" as const,
  },
  cta: {
    display: "flex",
    gap: "1rem",
    marginTop: "2rem",
    flexWrap: "wrap" as const,
  },
  ctaButton: {
    padding: "0.875rem 2rem",
    fontSize: "1rem",
    fontFamily: "Poppins, sans-serif",
    fontWeight: "600",
    border: "2px solid #7c7cff",
    background: "#7c7cff",
    color: "#0f0f13",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  ctaButtonSecondary: {
    background: "transparent",
    color: "#7c7cff",
  },
  image: {
    borderRadius: "50%",
    objectFit: "cover" as const,
    border: "4px solid rgba(124, 124, 255, 0.3)",
    boxShadow: "0 8px 32px rgba(124, 124, 255, 0.2)",
  },
};

// Mobile responsive adjustments
if (typeof window !== "undefined" && window.innerWidth <= 768) {
  styles.wrapper = {
    ...styles.wrapper,
    flexDirection: "column" as const,
    gap: "2rem",
  };
  styles.imageContainer = {
    ...styles.imageContainer,
    marginLeft: "0",
  };
  styles.subtitle = {
    ...styles.subtitle,
    fontSize: "1rem",
  };
}
