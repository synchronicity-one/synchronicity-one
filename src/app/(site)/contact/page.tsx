import type { Metadata } from 'next';
import BackToTop from '@/components/BackToTop';
import ButtonLink from '@/components/ButtonLink';
import PageShell from '@/components/PageShell';
import { Fox, Separator } from '@/components/FoxAnimation';
import { contact } from '@/lib/content';

export const metadata: Metadata = {
  title: 'synchronicity.one | contact',
  description: contact.lead,
  alternates: {
    canonical: 'https://synchronicity.one/contact',
  },
};

export default function Contact() {
  return (
    <PageShell>
      {/* One grid for both breakpoints. Mobile order comes from the order
          utilities, desktop placement from explicit row and column starts. */}
      <div className='grid grid-cols-1 lg:grid-cols-[1fr_60px_1fr] lg:gap-x-16 items-center'>
        {/* Fox - above the title on mobile, right column on desktop */}
        <div className='order-1 lg:order-none lg:col-start-3 lg:row-start-2 flex justify-center'>
          <Fox />
        </div>

        {/* Title and lead - full width on desktop */}
        <div className='order-2 lg:order-none lg:col-span-3 lg:row-start-1 mt-10 lg:mt-0'>
          <h1 className='text-4xl lg:text-5xl leading-tight'>{contact.heading}</h1>
          <p className='mt-6 max-w-2xl text-lg lg:text-xl leading-relaxed opacity-80'>
            {contact.lead}
          </p>
        </div>

        {/* Mail - right under the lead on mobile, under the fox on desktop */}
        <div className='order-3 lg:order-none lg:col-start-3 lg:row-start-3 mt-8 lg:mt-8 flex justify-center'>
          <ButtonLink href={`mailto:${contact.email}`} size='small'>
            {contact.email}
          </ButtonLink>
        </div>

        {/* Company and bank details - left column on desktop */}
        <div className='order-4 lg:order-none lg:col-start-1 lg:row-start-2 lg:row-span-3 mt-12 lg:mt-0'>
          <h2 className='text-2xl leading-tight'>{contact.company.label}</h2>
          <div className='mt-4 text-base lg:text-lg leading-relaxed opacity-80'>
            {contact.company.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className='mt-6 text-base lg:text-lg leading-relaxed opacity-80'>
            {contact.company.ids.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <h2 className='mt-10 text-2xl leading-tight'>{contact.bank.label}</h2>
          <div className='mt-4 text-base lg:text-lg leading-relaxed opacity-80'>
            {contact.bank.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        {/* Separator - desktop only, middle column */}
        <div className='hidden lg:flex lg:col-start-2 lg:row-start-2 lg:row-span-3 justify-center self-stretch'>
          <Separator />
        </div>

        {/* Social links */}
        <div className='order-5 lg:order-none lg:col-start-3 lg:row-start-4 mt-12 lg:mt-8 flex items-center justify-center gap-10'>
          <a
            href={contact.facebook}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Facebook'
            className='hover:opacity-70 transition-opacity'
          >
            <svg
              width='22'
              height='22'
              viewBox='0 0 24 24'
              fill='currentColor'
              aria-hidden='true'
            >
              <path d='M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z' />
            </svg>
          </a>
          <a
            href={contact.polishSite}
            target='_blank'
            rel='noopener noreferrer'
            className='text-xl hover:opacity-70 transition-opacity'
          >
            PL
          </a>
        </div>
      </div>

      <BackToTop />
    </PageShell>
  );
}
