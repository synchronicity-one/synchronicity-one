import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found - synchronicity.one',
};

export default function NotFound() {
  return (
    <main className='min-h-screen bg-black text-accent flex flex-col items-center justify-center text-center gap-[30px] px-6'>
      <p className='text-[34px] font-thin'>404</p>
      <p className='text-[64px] lg:text-[100px] leading-none'>game over</p>
      <p className='text-[34px]'>play again?</p>
      <div className='flex flex-row flex-wrap items-center justify-center gap-10'>
        <Link
          href='/'
          className='border border-accent px-5 py-2 text-3xl rounded hover:bg-accent hover:text-black transition-colors'
        >
          yes
        </Link>
        <a
          href='https://www.youtube.com/watch?v=yzYAKH90-E8'
          target='_blank'
          rel='noopener noreferrer'
          className='border border-accent px-5 py-2 text-3xl rounded hover:bg-accent hover:text-black transition-colors'
        >
          no
        </a>
      </div>
    </main>
  );
}
