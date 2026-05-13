interface SectionHeadingProps {
  sectionLabel: string;
  title: string;
  description: string;
}

export function SectionHeading({ sectionLabel, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-label">{sectionLabel}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  );
}
