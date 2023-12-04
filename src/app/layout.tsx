import Navbar from '@/components/Navbar';
import type { Metadata } from 'next';
import { Session } from 'next-auth';
import { Inter } from 'next/font/google';
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Intergalactic Fantastic',
  description: 'An app that provides information on intergalactic travel destinations.',
};

export default function RootLayout({
  children, session
}: {
  children: React.ReactNode;
  session: Session
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='mt-[100px]'>
          <Providers session={session}>
            {/* @ts-expect-error Server Component */}
            <Navbar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
