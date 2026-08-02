// Site content kept in one place so pages stay layout only.

export const home = {
  heading: 'We build open-source systems your organisation owns.',
  cta: 'see what we do',
};

export const whatWeDo = {
  heading: 'What we do',
  lead: 'We build and run the systems your organisation depends on, using open-source software and servers you control: cloud platforms, custom applications, automation, AI, and the underlying infrastructure.',
  tagline: 'Own your systems',
  blocks: [
    {
      title: 'Your own private cloud',
      text: 'Email, files, calendars and chat, brought together in Nextcloud or another open-source platform that better suits your organisation. If no existing platform fits, we build the missing pieces.',
    },
    {
      title: 'Programming that fills the gaps',
      text: 'Scripts, API integrations, webhooks, plugins, calculators and forms. The pieces that connect your systems and take over work no one should be doing by hand.',
    },
    {
      title: 'Automation that removes manual work',
      text: 'Reports that write themselves, data that moves between systems on its own, processes that run at three in the morning with no one watching.',
    },
    {
      title: 'AI on your own data',
      text: 'LLMs that read your own documents and records, running on servers you control. When an answer has to be repeatable and explainable, we use symbolic AI instead, or combine the two.',
    },
    {
      title: 'Websites and online stores',
      text: 'From static sites to WP/Woo stores, built for speed and verified with real-user data, not lab scores.',
    },
    {
      title: 'Infrastructure that stays up',
      text: 'Linux servers, updates, monitoring and encrypted backups. When something breaks, a person answers.',
    },
  ],
};

export const contact = {
  heading: 'Contact',
  lead: 'If you have a question, write to us.',
  email: 'hello@synchronicity.one',
  links: {
    label: 'Links',
    items: [
      { label: 'Our Facebook page', href: 'https://www.facebook.com/www.synchronicity.one' },
      { label: 'Our website in Polish', href: 'https://41.pl/' },
      {
        label:
          'Lektos, our automation platform that connects company systems and answers questions about your business data in plain language',
        href: 'https://lektos.pl/',
      },
    ],
  },
  address: {
    label: 'Address',
    lines: [
      'synchronicity.one sp. z o. o.',
      'M\u0119t\u00f3w 130',
      '20-388 Lublin',
      'POLAND',
    ],
  },
  bank: {
    label: 'Bank account',
    lines: [
      'Nest Bank',
      'IBAN PL60 2530 0008 2052 1070 3516 0001',
      'BIC/SWIFT NESBPLPW',
    ],
  },
  registrations: [
    { label: 'Tax number (NIP)', value: '7133102855' },
    { label: 'Business registry (REGON)', value: '382928370' },
    { label: 'Court register (KRS)', value: '0000779014' },
  ],
};
