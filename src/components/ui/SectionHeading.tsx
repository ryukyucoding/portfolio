interface SectionHeadingProps {
  readonly number: string;
  readonly children: React.ReactNode;
  readonly id: string;
}

export function SectionHeading({ number, children, id }: SectionHeadingProps) {
  return (
    <h2 className="section-title" id={id}>
      <span className="section-number">{number}.</span>
      {children}
    </h2>
  );
}
