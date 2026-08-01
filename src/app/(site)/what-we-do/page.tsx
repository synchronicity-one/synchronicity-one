import type { Metadata } from 'next';
import Link from 'next/link';
import BackToTop from '@/components/BackToTop';
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
    <main className='relative min-h-screen bg-black text-accent pt-40 lg:pt-32 px-6 lg:px-10 pb-16 lg:pb-48'>
      {/* Morphing square - in the flow on mobile, pinned to the right margin on desktop */}
      <div className='flex justify-center lg:hidden'>
        <MorphShape />
      </div>
      <div className='hidden lg:block absolute top-36 right-10'>
        <MorphShape />
      </div>

      <div className='max-w-6xl mx-auto'>
        <h1 className='mt-10 lg:mt-0 text-4xl lg:text-5xl leading-tight'>
          {whatWeDo.heading}
        </h1>
        <p className='mt-6 max-w-2xl text-lg lg:text-xl leading-relaxed opacity-80'>
          {whatWeDo.lead}
        </p>

        <h2 className='mt-14 lg:mt-16 text-3xl lg:text-4xl leading-tight'>
          {whatWeDo.tagline}
        </h2>

        <div className='mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10'>
          {whatWeDo.blocks.map((block) => (
            <div key={block.title}>
              <h3 className='text-2xl leading-tight'>{block.title}</h3>
              <p className='mt-3 text-base lg:text-lg leading-relaxed opacity-80'>
                {block.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile - rotating square and the call to action stay in the flow */}
        <div className='mt-12 flex justify-center lg:hidden'>
          <RotateShape />
        </div>
        <div className='mt-12 flex justify-center lg:hidden'>
          <Link
            href='/contact'
            className='border border-accent px-5 py-2 text-2xl rounded hover:bg-accent hover:text-black transition-colors'
          >
            contact us
          </Link>
        </div>
      </div>

      <BackToTop />

      {/* Desktop - pinned to the screen corners, same as the home page */}
      <div className='hidden lg:block fixed bottom-12 left-8 z-40'>
        <RotateShape />
      </div>
      <Link
        href='/contact'
        className='hidden lg:block fixed bottom-12 right-8 z-40 border border-accent px-5 py-2 text-3xl rounded bg-black hover:bg-accent hover:text-black transition-colors'
      >
        contact us
      </Link>
    </main>
  );
}
