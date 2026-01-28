export default function Section({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="section fade">
      <div className="section-content">{children}</div>
    </section>
  );
}
