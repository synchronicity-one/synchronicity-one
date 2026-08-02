import type { Metadata } from 'next';
import BackToTop from '@/components/BackToTop';
import ButtonLink from '@/components/ButtonLink';
import PageShell from '@/components/PageShell';
import { Fox } from '@/components/FoxAnimation';
import MountainAnimation from '@/components/MountainAnimation';
import { contact } from '@/lib/content';

export const metadata: Metadata = {
  title: 'synchronicity.one | contact',
  description:
    'Contact synchronicity.one sp. z o. o., Lublin, Poland. Company details, bank details and email address.',
  alternates: {
    canonical: '/contact',
  },
};

const card =
  'border border-accent/30 rounded-lg p-6 lg:p-7 transition-colors hover:border-accent hover:bg-accent/5';

export default function Contact() {
  return (
    <PageShell active='/contact'>
      {/* Above the title on mobile, top right corner on desktop */}
      <div className='flex justify-center lg:block lg:absolute lg:top-32 lg:right-10'>
        <Fox />
      </div>

      <h1 className='mt-10 lg:mt-0 text-4xl lg:text-5xl leading-tight text-center lg:text-left'>
        {contact.heading}
      </h1>

      {/* Under the title on mobile, bottom right corner on desktop */}
      <div className='mt-8 flex flex-col items-center gap-4 lg:mt-0 lg:fixed lg:bottom-12 lg:right-8 lg:z-40 lg:items-end'>
        <p className='text-lg leading-relaxed opacity-80 text-center lg:hidden'>
          {contact.lead}
        </p>
        <ButtonLink href={`mailto:${contact.email}`} size='small' className='lg:bg-ink'>
          {contact.email}
        </ButtonLink>
      </div>

      <div className='mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6'>
        <div className={card}>
          <h2 className='text-xl leading-tight opacity-60'>{contact.address.label}</h2>
          <div className='mt-3 text-base lg:text-lg leading-relaxed'>
            {contact.address.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        <div className={card}>
          <h2 className='text-xl leading-tight opacity-60'>{contact.bank.label}</h2>
          <div className='mt-3 text-base lg:text-lg leading-relaxed'>
            {contact.bank.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>

      <div className='mt-5 lg:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-6'>
        {contact.registrations.map((item) => (
          <div key={item.label} className={card}>
            <h2 className='text-base leading-tight opacity-60'>{item.label}</h2>
            <p className='mt-2 text-lg lg:text-xl'>{item.value}</p>
          </div>
        ))}
      </div>

      <div className={`mt-5 lg:mt-6 ${card}`}>
        <h2 className='text-xl leading-tight opacity-60'>{contact.links.label}</h2>
        <div className='mt-4 flex flex-col gap-4 text-base lg:text-lg'>
          {contact.links.items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target='_blank'
              rel='noopener noreferrer'
              className='w-fit underline underline-offset-4 decoration-accent/40 hover:decoration-accent transition-colors'
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* In the flow on mobile, bottom left corner on desktop */}
      <div className='mt-12 flex justify-center lg:mt-0 lg:block lg:fixed lg:bottom-8 lg:left-8 lg:z-40'>
        <MountainAnimation />
      </div>

      <BackToTop />
    </PageShell>
  );
}
