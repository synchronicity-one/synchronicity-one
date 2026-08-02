import ButtonLink from '@/components/ButtonLink';
import Navbar from '@/components/Navbar';
import UniverseAnimation from '@/components/UniverseAnimation';
import { home } from '@/lib/content';

export default function Home() {
  return (
    <>
      <Navbar active='/' />
      <main className='relative min-h-screen overflow-hidden flex flex-col items-center pt-56 px-6 pb-12 gap-8 lg:block lg:pt-0 lg:px-0 lg:pb-0'>
        {/* Centred on the screen from lg up, in the flow below it */}
        <div className='lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2'>
          <UniverseAnimation />
        </div>

        <h1 className='text-2xl text-center leading-tight lg:absolute lg:bottom-12 lg:left-8 lg:max-w-lg lg:text-left lg:text-3xl'>
          {home.heading}
        </h1>

        <div className='lg:absolute lg:bottom-12 lg:right-8'>
          <ButtonLink href='/what-we-do' size='small' className='lg:text-3xl'>
            {home.cta}
          </ButtonLink>
        </div>
      </main>
    </>
  );
}
