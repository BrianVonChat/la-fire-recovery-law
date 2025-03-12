import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';

// Define the heading font (Montserrat - modern, professional, balanced)
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

// Define the body font (Inter - contemporary, professional sans-serif)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'LA Fire Recovery Law | Fire Insurance Claims & Personal Injury',
  description: 'LA Fire Recovery Law helps victims of recent Los Angeles fires with insurance claims, loss of income, and personal injury cases. Get the compensation you deserve.',
  keywords: 'fire insurance claims, loss of income, personal injury, LA fire recovery, Eaton fire, Alta Dena fire, Palisades fire',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white font-sans">
        {children}
      </body>
    </html>
  );
} 