import Section from "@/app/GUI/components/sectionWrap";
import ProjectsGrid from "@/app/GUI/components/projGrid";

function SkillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div style={styles.skillGroup}>
      <h3>{title}</h3>
      <ul style={styles.skillList}>
        {items.map((item, index) => (
          <li key={index} style={styles.skillItem}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsProjects() {
  return (
    <Section id="skills">
      <div style={styles.container}>
        <div style={styles.skillsSection}>
          <h2>Skills & Expertise</h2>
          <div style={styles.skillsGrid}>
            <SkillList
              title="Hard Skills"
              items={[
                "Python, Java, & C++",
                "MySQL & MongoDB",
                "React & Next.js",
                "TypeScript & JavaScript",
                "Tailwind CSS & Styled Components",
                "REST APIs & GraphQL",
              ]}
            />
            <SkillList
              title="Soft Skills"
              items={[
                "Problem Solving",
                "Creative Thinking",
                "Adaptability",
                "Team Collaboration",
                "Communication",
                "Project Management",
              ]}
            />
          </div>
        </div>

        <div style={styles.projectsSection}>
          <h2>Featured Projects</h2>
          <ProjectsGrid />
        </div>
      </div>
    </Section>
  );
}

const styles = {
  container: {
    width: "100%",
  },
  skillsSection: {
    marginBottom: "3rem",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem",
    marginTop: "1.5rem",
  },
  skillGroup: {
    padding: "1.5rem",
    background: "rgba(26, 26, 37, 0.5)",
    borderRadius: "12px",
    border: "1px solid rgba(124, 124, 255, 0.2)",
  },
  skillList: {
    marginTop: "1rem",
  },
  skillItem: {
    paddingLeft: "1.5rem",
    marginBottom: "0.75rem",
    position: "relative" as const,
  },
  projectsSection: {
    marginTop: "2rem",
  },
};
