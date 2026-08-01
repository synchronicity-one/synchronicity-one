import UniverseAnimation from '@/components/UniverseAnimation';
import ButtonLink from '@/components/ButtonLink';

export default function Home() {
  return (
    <main className='min-h-screen relative overflow-hidden'>
      <div className='hidden lg:block'>
        <UniverseAnimation mobile={false} />
        <div className='absolute bottom-12 left-8 max-w-lg'>
          <h1 className='text-3xl leading-tight'>
            We provide comprehensive on-line development services to your enterprise.
          </h1>
        </div>
        <div className='absolute bottom-12 right-8'>
          <ButtonLink href='/what-we-do'>see what we do</ButtonLink>
        </div>
      </div>
      <div className='flex lg:hidden flex-col items-center pt-52 px-6 pb-12 gap-8'>
        <UniverseAnimation mobile={true} />
        <h1 className='text-2xl leading-tight w-full text-center'>
          We provide comprehensive on-line<br />development services to your enterprise.
        </h1>
        <ButtonLink href='/what-we-do' size='small'>
          see what we do
        </ButtonLink>
      </div>
    </main>
  );
}
