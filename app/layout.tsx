import type {Metadata} from 'next';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Flying Movements Foundation',
  description: 'Empowering Mumbai\'s middle-class housing societies with seamless access to government welfare schemes.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans bg-neutral-950 text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
