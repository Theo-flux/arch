import './global.css';
import { Footer, Nav } from '@/components';
import StyledComponentsRegistry from '../lib/registry';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const spartans = localFont({
  src: [
    {
      path: '../../public/fonts/LeagueSpartan-Thin.ttf',
      weight: '100',
    },
    {
      path: '../../public/fonts/LeagueSpartan-ExtraLight.ttf',
      weight: '200',
    },
    {
      path: '../../public/fonts/LeagueSpartan-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/fonts/LeagueSpartan-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/LeagueSpartan-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/LeagueSpartan-SemiBold.ttf',
      weight: '600',
    },
    {
      path: '../../public/fonts/LeagueSpartan-Bold.ttf',
      weight: '700',
    },
    {
      path: '../../public/fonts/LeagueSpartan-ExtraBold.ttf',
      weight: '800',
    },
    {
      path: '../../public/fonts/LeagueSpartan-Black.ttf',
      weight: '900',
    },
  ],
  variable: '--font-league-spartans',
});

export const metadata: Metadata = {
  title: 'Arch Studio',
  description: 'Arch studio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spartans.variable} font-sans`}>
      <head>
        <link rel="icon" href="/arch-favicon.svg" sizes="any" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Nav />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
