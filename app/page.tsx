import About from "@/app/GUI/sections/about";
import SkillsProjects from "@/app/GUI/sections/skillProj";
import Socials from "@/app/GUI/sections/socials";

export default function HomePage() {
  return (
    <main className="scroll-container">
      {/* Section 1 */}
      <About />

      {/* Section 2 */}
      <SkillsProjects />

      {/* Section 3 */}
      <Socials />
    </main>
  );
}
