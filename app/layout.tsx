import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lubiri Resort - Premier Resort in Busia, Kenya',
  description: 'Experience luxury and tranquility at Lubiri Resort, Busia. Featuring fully furnished cottages, swimming pool, restaurant, and exceptional hospitality in the heart of Western Kenya.',
  keywords: 'Lubiri Resort, Busia Resort, Kenya Hotels, Busia Accommodation, Resort Busia, Luxury Cottages Kenya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
