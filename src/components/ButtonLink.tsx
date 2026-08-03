import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  size?: 'compact' | 'small' | 'large';
  external?: boolean;
  className?: string;
};

// Single source of truth for the outlined accent button used across the site.
export default function ButtonLink({
  href,
  children,
  size = 'large',
  external = false,
  className = '',
}: Props) {
  const sizes = {
    compact: 'text-xl',
    small: 'text-xl lg:text-2xl',
    large: 'text-2xl lg:text-3xl',
  };

  const base = `inline-block border border-accent px-5 py-2 rounded text-center hover:bg-accent hover:text-ink transition-colors ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' className={base}>
        {children}
      </a>
    );
  }

  if (href.startsWith('mailto:')) {
    return (
      <a href={href} className={`${base} break-all`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}
