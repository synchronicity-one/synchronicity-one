import type { Metadata } from 'next';
import BackToTop from '@/components/BackToTop';
import ButtonLink from '@/components/ButtonLink';
import PageShell from '@/components/PageShell';
import { MorphShape, RotateShape } from '@/components/ShapeAnimations';
import { whatWeDo } from '@/lib/content';

export const metadata: Metadata = {
  title: 'synchronicity.one | what we do',
  description: whatWeDo.lead,
  alternates: {
    canonical: 'https://synchronicity.one/what-we-do',
  },
};

export default function WhatWeDo() {
  return (
    <PageShell active='/what-we-do'>
      {/* Above the title on mobile, pinned to the right margin on desktop */}
      <div className='flex justify-center lg:block lg:absolute lg:top-36 lg:right-10'>
        <MorphShape />
      </div>

      <h1 className='mt-10 lg:mt-0 text-4xl lg:text-5xl leading-tight text-center lg:text-left'>
        {whatWeDo.heading}
      </h1>
      <p className='mt-6 max-w-4xl text-lg lg:text-xl leading-relaxed opacity-80'>
        {whatWeDo.lead}
      </p>

      <h2 className='mt-14 lg:mt-16 text-3xl lg:text-4xl leading-tight text-center lg:text-left'>
        {whatWeDo.tagline}
      </h2>

      <div className='mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6'>
        {whatWeDo.blocks.map((block) => (
          <div
            key={block.title}
            className='border border-accent/30 rounded-lg p-6 lg:p-7 transition-colors hover:border-accent hover:bg-accent/5'
          >
            <h3 className='text-2xl leading-tight'>{block.title}</h3>
            <p className='mt-3 text-base lg:text-lg leading-relaxed opacity-80'>
              {block.text}
            </p>
          </div>
        ))}
      </div>

      {/* In the flow on mobile, pinned to the screen corners on desktop */}
      <div className='mt-12 flex justify-center lg:mt-0 lg:block lg:fixed lg:bottom-12 lg:left-8 lg:z-40'>
        <RotateShape />
      </div>
      <div className='mt-12 flex justify-center lg:mt-0 lg:block lg:fixed lg:bottom-12 lg:right-8 lg:z-40'>
        <ButtonLink href='/contact' className='lg:bg-ink'>
          contact us
        </ButtonLink>
      </div>

      <BackToTop />
    </PageShell>
  );
}
