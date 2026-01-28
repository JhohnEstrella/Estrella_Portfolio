import Section from "@/app/GUI/components/sectionWrap";
import ProfileImage from "@/app/GUI/components/myImage";

export default function About() {
  return (
    <Section id="about">
      <div className="flex items-center gap-20 w-full max-w-7xl flex-wrap lg:flex-nowrap md:flex-col md:gap-12">
        <div className="flex items-center justify-center flex-shrink-0 w-[400px] h-[400px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px] section-content fade-in" style={{animationDelay: '0.3s'}}>
          <ProfileImage />
        </div>
        <div className="flex-1 min-w-[300px] max-w-2xl md:max-w-full section-content fade-in">
          <h1 className="font-poppins text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold gradient-text-primary mb-4 leading-tight">
            Jhohn Bennidict Estrella
          </h1>
          <h2 className="font-poppins text-4xl lg:text-3xl md:text-2xl sm:text-xl font-bold gradient-text-secondary mb-8 md:mb-6">
            Aspiring Software Developer
          </h2>
          <h3 className="font-poppins text-2xl font-semibold gradient-text-primary mb-4">
            2nd Year Computer Science Student at Ateneo de Davao University
          </h3>
          <p className="text-lg md:text-base sm:text-sm text-[#e0e0e0] leading-relaxed mb-8 text-justify">
            I'm a Computer Science student who enjoys building thoughtful, efficient, and scalable software solutions. I'm 
            particularly interested in backend development, systems, and how technology can be used responsibly to support 
            learning and real-world problem solving. As a student and creative problem solver, I value clean design, clear 
            logic, and continuous improvement. I enjoy collaborating with others, learning new tools, and turning ideas 
            into practical applications. My goal is to keep growing both technically and creatively as I prepare for a future 
            in the tech industry.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap">
          </div>
        </div>
      </div>
    </Section>
  );
}
