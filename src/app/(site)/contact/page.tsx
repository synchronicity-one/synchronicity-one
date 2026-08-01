import type { Metadata } from 'next';
import BackToTop from '@/components/BackToTop';
import { Fox, Separator } from '@/components/FoxAnimation';
import { contact } from '@/lib/content';

export const metadata: Metadata = {
  title: 'synchronicity.one | contact',
  description: contact.lead,
  alternates: {
    canonical: 'https://synchronicity.one/contact',
  },
};

function MailButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={`mailto:${contact.email}`}
      className={`border border-accent px-5 py-2 text-xl lg:text-2xl rounded hover:bg-accent hover:text-black transition-colors break-all text-center ${className}`}
    >
      {contact.email}
    </a>
  );
}

export default function Contact() {
  return (
    <main className='relative min-h-screen bg-black text-accent pt-40 lg:pt-32 px-6 lg:px-10 pb-16 lg:pb-48'>
      {/* Fox above the title on mobile, same placement as the square on what we do */}
      <div className='flex justify-center lg:hidden'>
        <Fox />
      </div>

      <div className='max-w-6xl mx-auto'>
        <h1 className='mt-10 lg:mt-0 text-4xl lg:text-5xl leading-tight'>
          {contact.heading}
        </h1>
        <p className='mt-6 max-w-2xl text-lg lg:text-xl leading-relaxed opacity-80'>
          {contact.lead}
        </p>

        {/* Mobile - the mail sits right under the lead */}
        <div className='mt-8 flex justify-center lg:hidden'>
          <MailButton />
        </div>

        <div className='mt-12 lg:mt-16 flex flex-col lg:flex-row lg:items-stretch gap-12 lg:gap-0'>
          <div className='lg:w-1/2 lg:pr-16'>
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

          <div className='hidden lg:flex justify-center'>
            <Separator />
          </div>

          <div className='lg:w-1/2 lg:pl-16 flex flex-col items-center justify-center gap-8'>
            <div className='hidden lg:block'>
              <Fox />
            </div>
            <MailButton className='hidden lg:block' />
            <div className='flex items-center gap-10'>
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
        </div>
      </div>

      <BackToTop />
    </main>
  );
}
