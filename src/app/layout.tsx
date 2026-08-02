import type { Metadata } from 'next';
import './globals.css';

const description =
  'synchronicity.one builds and runs open-source systems that organisations own: private cloud, custom software, automation, AI and infrastructure.';

export const metadata: Metadata = {
  metadataBase: new URL('https://synchronicity.one'),
  title: 'synchronicity.one',
  description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'synchronicity.one',
    url: '/',
    title: 'synchronicity.one',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'synchronicity.one',
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='preload'
          href='/russo-one.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
      </head>
      <body className='bg-black text-accent font-display antialiased'>
        {children}
      </body>
    </html>
  );
}
