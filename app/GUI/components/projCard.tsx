const styles = {
  card: {
    padding: "1.5rem",
    background: "#1a1a25",
    borderRadius: "12px",
    transition: "transform 0.3s",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: "0 0 0.75rem 0",
    color: "#fff",
  },
  description: {
    fontSize: "0.95rem",
    fontWeight: "400",
    margin: "0",
    color: "#ccc",
    lineHeight: "1.5",
  },
};

export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div style={styles.card}>
      <h4 style={styles.title}>{title}</h4>
      <p style={styles.description}>{description}</p>
    </div>
  );
}