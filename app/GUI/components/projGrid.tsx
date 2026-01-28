import ProjectCard from "./projCard";

export default function ProjectsGrid() {
  const projects = [
    { id: 1, title: "Student Information System", description: "Tools: MySQL and Java. A system to manage student data efficiently." },
    { id: 2, title: "Para! A Jeepney Route Tracker App", description: "Tools: MySQL and Java. An app to track jeepney routes effectively." },
    { id: 3, title: "Task Manager", description: "Tools: Next.js and MongoDB. An app to organize and track tasks effectively." },
  ];

  return (
    <div style={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} title={project.title} description={project.description} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem",
    marginTop: "1rem",
  },
};