// Site content kept in one place so pages stay layout only.

export const home = {
  heading: 'We build open-source systems your organisation owns.',
  cta: 'see what we do',
};

export const whatWeDo = {
  heading: 'What we do',
  lead: 'We build and run the systems your organisation depends on, using open-source software and servers you control: private cloud, custom applications, automation, AI, and the underlying infrastructure.',
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
      text: 'Linux servers and VPS, VPN built on Tailscale and self-hosted Headscale, updates, monitoring and encrypted backups. When something breaks, a person answers.',
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
      { label: 'Privacy policy', href: '/privacy-policy' },
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

export const privacy = {
  heading: 'Privacy policy',
  lead: 'This website does not use cookies, analytics or tracking. Below is what happens to personal data when you write to us and when we run systems for our clients.',
  updated: 'Last updated: 4 October 2026',
  sections: [
    {
      title: 'Who we are',
      paragraphs: [
        'synchronicity.one sp. z o. o., M\u0119t\u00f3w 130, 20-388 Lublin, Poland, KRS 0000779014, NIP 7133102855, is the controller of the personal data described under "This website" and "When you write to us".',
        'For any question about your data, write to hello@synchronicity.one.',
      ],
    },
    {
      title: 'This website',
      paragraphs: [
        'The site sets no cookies and has no analytics, no tracking pixels and no forms.',
        'It is delivered by Cloudflare, which processes technical data such as your IP address and browser details to serve the pages and protect them against attacks. We do not use this data to identify you. Legal basis: our legitimate interest in running a secure website (Art. 6(1)(f) GDPR).',
      ],
    },
    {
      title: 'When you write to us',
      paragraphs: [
        'We use your email address and the content of your message to reply and, if we work together, to carry out the agreement. Our email runs on our own mail server in the European Union and on Google Workspace.',
        'We keep correspondence for as long as the conversation or the agreement needs it, and afterwards for as long as the law requires us to keep business records. Legal basis: Art. 6(1)(b) and (f) GDPR.',
      ],
    },
    {
      title: 'Systems we run for clients',
      paragraphs: [
        'We build and run systems for organisations, including WhatsApp bots and websites with forms. Personal data in those systems belongs to our client, who is its controller. We process it only on the client\'s documented instructions, under a data processing agreement (Art. 28 GDPR).',
        'WhatsApp messages pass through the WhatsApp Business Platform operated by Meta. The data itself is kept on servers we control, and we delete it when the client tells us to.',
        'If you have a question about such data, contact the organisation you dealt with, or write to us and we will pass it on.',
      ],
    },
    {
      title: 'Who else processes the data',
      paragraphs: [
        'The data centres in the European Union that host our servers, including our mail server, Google (email), Cloudflare (website delivery and security) and Meta (WhatsApp messaging).',
        'Some of them may transfer data outside the European Economic Area. Such transfers rely on the EU-US Data Privacy Framework or on the European Commission\'s standard contractual clauses.',
      ],
    },
    {
      title: 'Your rights',
      paragraphs: [
        'You have the right to access your data, to have it corrected or deleted, to restrict or object to its processing, and to data portability. Write to hello@synchronicity.one.',
        'You can also lodge a complaint with the President of the Personal Data Protection Office (Prezes Urz\u0119du Ochrony Danych Osobowych), ul. Stawki 2, 00-193 Warsaw, Poland.',
      ],
    },
    {
      title: 'Changes',
      paragraphs: [
        'When this policy changes, we update this page and the date at the top.',
      ],
    },
  ],
};
