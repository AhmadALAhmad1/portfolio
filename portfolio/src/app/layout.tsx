import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/provider';
import Navbar from './components/Navbar';
export const metadata: Metadata = {
  title: '',
  description: '',
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
          </div>
        </Providers>
      </body>
    </html>
  );
}
