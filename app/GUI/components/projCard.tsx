export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-8 bg-gradient-to-br from-[#1a1a25]/80 to-[#1a1a25]/40 rounded-2xl border border-primary-purple/20 transition-all duration-300 hover:border-primary-purple/50 hover:shadow-xl hover:shadow-primary-purple/10 hover:-translate-y-1">
      <h4 className="text-2xl font-poppins font-semibold mb-3 text-white group-hover:text-primary-purple transition-colors">{title}</h4>
      <p className="text-base text-[#b3b3b3] leading-relaxed">{description}</p>
    </div>
  );
}