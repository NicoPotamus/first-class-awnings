import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'First Class Awnings',
  description: 'Premium awning solutions for your home or business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={`light ${inter.variable} font-sans`}>
        <Navbar />
        {children}
      </body>
      <link rel="icon" href="favicon.ico?v=2" />
    </html>
  );
}
