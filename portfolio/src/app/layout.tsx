import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Providers } from './utils/provider';

export const metadata: Metadata = {
  title: 'Ahmad Al Ahmad - Full Stack Engineer Portfolio',
  description:
    'Explore the work and skills of Full Stack Engineer Ahmad Al Ahmad. Specialized in MERN and LAMP stacks.',
  keywords:
    'Full Stack Engineer, Web Developer, Frontend Developer, Backend Developer, MERN, LAMP, Nextjs, React, Nodejs, Express, MongoDB, MySQL, PHP, Laravel, TailwindCss, HTML, CSS, JavaScript, TypeScript, Web Development, Software Engineer, Portfolio, Ahmad Al Ahmad, Ahmad Al Ahmad Portfolio, Ahmad Al Ahmad Full Stack Engineer, Ahmad Al Ahmad Web Developer, Ahmad Al Ahmad Software Engineer, Ahmad Al Ahmad MERN, Ahmad Al Ahmad LAMP, Ahmad Al Ahmad Nextjs, Ahmad Al Ahmad React, Ahmad Al Ahmad Nodejs, Ahmad Al Ahmad Express, Ahmad Al Ahmad MongoDB, Ahmad Al Ahmad MySQL, Ahmad Al Ahmad PHP, Ahmad Al Ahmad Laravel, Ahmad Al Ahmad TailwindCss, Ahmad Al Ahmad HTML, Ahmad Al Ahmad CSS, Ahmad Al Ahmad JavaScript, Ahmad Al Ahmad TypeScript, Ahmad Al Ahmad Web Development, Ahmad Al Ahmad Software Engineer, Ahmad Al Ahmad Portfolio',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='scroll-pt-24 scroll-smooth'
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <div className='flex min-h-screen flex-col bg-light text-dark transition-colors duration-300 selection:bg-accent-400 selection:text-dark dark:bg-dark dark:text-light'>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
