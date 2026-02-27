import { Link } from '@/i18n/navigation';
import { HeartIcon, GraduationCapIcon, SproutIcon, ScaleIcon } from './icons';

const iconMap = {
  medical: HeartIcon,
  education: GraduationCapIcon,
  agriculture: SproutIcon,
  government: ScaleIcon,
} as const;

const colorMap = {
  medical: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
  education: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  agriculture: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  government: 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400',
} as const;

interface ProgramCardProps {
  programKey: keyof typeof iconMap;
  title: string;
  description: string;
  learnMore: string;
}

export default function ProgramCard({ programKey, title, description, learnMore }: ProgramCardProps) {
  const IconComponent = iconMap[programKey];
  const colorClass = colorMap[programKey];

  return (
    <article className="bg-surface-card dark:bg-surface-dark-card rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClass}`}>
        <IconComponent className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-semibold text-text-dark dark:text-text-light mb-2">
        {title}
      </h3>
      <p className="text-text-dark/70 dark:text-text-light/70 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <Link
        href="/programs"
        className="inline-flex items-center text-primary dark:text-primary-light font-medium text-sm hover:underline min-h-[44px]"
      >
        {learnMore} →
      </Link>
    </article>
  );
}
