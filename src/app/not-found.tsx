import type { Metadata } from 'next';
import ButtonLink from '@/components/ButtonLink';

export const metadata: Metadata = {
  title: 'Page not found - synchronicity.one',
};

export default function NotFound() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center text-center gap-[30px] px-6 pb-20 lg:pb-0'>
      <p className='text-[34px] font-thin'>404</p>
      <p className='text-[64px] lg:text-[100px] leading-none'>game over</p>
      <p className='text-[34px]'>play again?</p>
      <div className='flex flex-row flex-wrap items-center justify-center gap-10'>
        <ButtonLink href='/'>yes</ButtonLink>
        <ButtonLink href='https://www.youtube.com/watch?v=yzYAKH90-E8' external>
          no
        </ButtonLink>
      </div>
    </main>
  );
}
