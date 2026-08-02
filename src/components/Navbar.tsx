import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/what-we-do', label: 'What we do' },
  { href: '/contact', label: 'Contact' },
];

// Server component. The active page is passed in by the page that renders it,
// so no client side routing hook is needed and nothing hydrates.
export default function Navbar({ active }: { active: string }) {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-black ${styles.header}`}>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-4 gap-2 lg:gap-0 items-center'>
        <Link
          href='/'
          className='text-accent text-[32px] font-bold tracking-[1px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'
        >
          synchronicity.one
        </Link>
        <nav className='flex gap-4 sm:gap-6'>
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-[16px] lg:text-[18px] px-3 lg:px-4 py-1 border rounded transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  isActive
                    ? 'border-accent bg-accent text-ink'
                    : 'border-transparent text-accent hover:border-accent hover:bg-accent hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
