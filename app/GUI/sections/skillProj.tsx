import Section from "@/app/GUI/components/sectionWrap";
import ProjectsGrid from "@/app/GUI/components/projGrid";

function SkillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="p-8 bg-gradient-to-br from-primary-purple/10 to-primary-blue/5 rounded-2xl border-2 border-primary-purple/25 backdrop-blur-md transition-all duration-300 hover:border-primary-purple/50 hover:shadow-2xl hover:shadow-primary-purple/15 hover:bg-gradient-to-br hover:from-primary-purple/15 hover:to-primary-blue/10">
      <h3 className="font-poppins text-2xl font-bold gradient-text-secondary mb-6">
        {title}
      </h3>
      <ul className="space-y-4 list-none">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-start gap-4 text-[#b3b3b3] text-base transition-all duration-300 hover:text-primary-purple hover:translate-x-1 group"
          >
            <span className="text-primary-red font-bold text-xl flex-shrink-0 mt-1 group-hover:text-primary-teal transition-colors duration-300">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillsProjects() {
  return (
    <Section id="skills">
      <div className="w-full max-w-6xl">
        {/* Skills Section */}
        <div className="mb-20 md:mb-16 section-content fade-in">
          <div className="mb-14">
            <h2 className="font-poppins text-5xl md:text-4xl sm:text-3xl font-bold gradient-text-primary mb-3">
              Skills & Expertise
            </h2>
            <p className="text-[#b3b3b3] text-lg md:text-base font-inter">Proficient in modern technologies and methodologies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

        {/* Projects Section */}
        <div className="mt-20 md:mt-16 pt-16 border-t border-primary-purple/20 section-content fade-in" style={{animationDelay: '0.2s'}}>
          <div className="mb-14">
            <h2 className="font-poppins text-5xl md:text-4xl sm:text-3xl font-bold gradient-text-secondary mb-3">
              Featured Projects
            </h2>
            <p className="text-[#b3b3b3] text-lg md:text-base font-inter">Showcasing real-world applications and innovations</p>
          </div>
          <ProjectsGrid />
        </div>
      </div>
    </Section>
  );
}