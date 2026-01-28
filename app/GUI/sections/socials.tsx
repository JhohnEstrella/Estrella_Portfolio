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
      <div className="w-full max-w-[700px] text-center mx-auto flex flex-col items-center justify-center section-content fade-in">
        <h2 className="font-poppins text-5xl md:text-4xl sm:text-3xl font-bold gradient-text-primary mb-4">Let's Connect</h2>
        <p className="text-lg md:text-base text-[#b3b3b3] mt-2 mb-12 leading-relaxed">
          I’d love to hear from you! Whether you have questions, want to collaborate on a project, or just want to say hi, 
          feel free to reach out. You can connect with me through any of the links below, and I’ll be happy to get in touch. 
          Don’t hesitate! Let’s start a conversation and explore opportunities together!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-gradient-to-br from-primary-purple/15 to-transparent border-2 border-primary-purple/30 rounded-2xl cursor-pointer transition-all duration-300 ease-in-out no-underline text-white hover:border-primary-purple/60 hover:bg-primary-purple/25 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary-purple/20"
            >
              <div className="text-5xl md:text-4xl mb-3 transform transition-transform duration-300 hover:scale-110">{social.icon}</div>
              <span className="font-poppins font-semibold text-base">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
