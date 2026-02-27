interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-text-dark dark:text-text-light">
        {title}
      </h2>
      <div className="w-16 h-1 bg-primary mx-auto mt-3" />
      {subtitle && (
        <p className="mt-4 text-lg text-text-dark/70 dark:text-text-light/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
