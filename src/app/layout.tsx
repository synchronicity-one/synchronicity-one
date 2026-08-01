import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'synchronicity.one',
  description: 'We provide comprehensive on-line development services to your enterprise.',
  alternates: {
    canonical: 'https://synchronicity.one',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-black text-accent font-display antialiased'>
        {children}
      </body>
    </html>
  );
}
