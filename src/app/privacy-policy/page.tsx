import type { Metadata } from 'next';
import BackToTop from '@/components/BackToTop';
import ButtonLink from '@/components/ButtonLink';
import PageShell from '@/components/PageShell';
import { Padlock, SafeDial } from '@/components/PrivacyAnimations';
import { privacy } from '@/lib/content';

export const metadata: Metadata = {
  title: 'synchronicity.one | privacy policy',
  description:
    'How synchronicity.one sp. z o. o. handles personal data: a website without cookies or tracking, email, and systems we run for clients, including WhatsApp bots.',
  alternates: {
    canonical: 'https://synchronicity.one/privacy-policy',
  },
};

const card =
  'border border-accent/30 rounded-lg p-6 lg:p-7 transition-colors hover:border-accent hover:bg-accent/5';

export default function PrivacyPolicy() {
  const last = privacy.sections.length - 1;

  return (
    <PageShell active='/privacy-policy'>
      {/* Above the title on mobile, top right corner on desktop */}
      <div className='flex justify-center lg:block lg:absolute lg:top-32 lg:right-10'>
        <Padlock />
      </div>

      <h1 className='mt-10 lg:mt-0 text-4xl lg:text-5xl leading-tight text-center lg:text-left'>
        {privacy.heading}
      </h1>
      <p className='mt-6 max-w-4xl text-lg lg:text-xl leading-relaxed opacity-80'>
        {privacy.lead}
      </p>
      <p className='mt-4 text-base opacity-60'>{privacy.updated}</p>

      <div className='mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6'>
        {privacy.sections.map((section, index) => (
          <div
            key={section.title}
            className={`${card} ${index === last ? 'lg:col-span-2' : ''}`}
          >
            <h2 className='text-2xl leading-tight'>{section.title}</h2>
            <div className='mt-3 flex flex-col gap-3 text-base lg:text-lg leading-relaxed opacity-80'>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* In the flow on mobile, pinned to the screen corners on desktop */}
      <div className='mt-12 flex justify-center lg:mt-0 lg:block lg:fixed lg:bottom-8 lg:left-8 lg:z-40'>
        <SafeDial />
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
