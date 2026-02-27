import { BookIcon, HeartIcon, GraduationCapIcon, TreeIcon, UsersIcon, LaptopIcon } from './icons';

const iconMap = {
  book: BookIcon,
  heart: HeartIcon,
  graduation: GraduationCapIcon,
  tree: TreeIcon,
  users: UsersIcon,
  laptop: LaptopIcon,
} as const;

interface PlaceholderImageProps {
  width?: string;
  height?: string;
  bgColor?: string;
  label?: string;
  icon?: keyof typeof iconMap;
  className?: string;
}

export default function PlaceholderImage({
  width = 'w-full',
  height = 'h-48',
  bgColor = 'bg-primary/20',
  label,
  icon,
  className = '',
}: PlaceholderImageProps) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div
      className={`${width} ${height} ${bgColor} rounded-lg flex flex-col items-center justify-center ${className}`}
      role="img"
      aria-label={label || 'Placeholder image'}
    >
      {IconComponent && (
        <IconComponent className="w-12 h-12 text-text-dark/30 dark:text-text-light/30" />
      )}
      {label && (
        <span className="mt-2 text-sm text-text-dark/50 dark:text-text-light/50 text-center px-2">
          {label}
        </span>
      )}
    </div>
  );
}
