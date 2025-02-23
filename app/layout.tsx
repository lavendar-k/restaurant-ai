import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "La Maison D'Or | Fine French Dining",
  description: 'Experience culinary excellence at La Maison D\'Or. Our award-winning French restaurant offers exquisite dining experiences with carefully curated menus, wine pairings, and impeccable service.',
  keywords: 'French restaurant, fine dining, culinary experience, wine pairing, gourmet food, French cuisine, luxury dining',
  openGraph: {
    title: "La Maison D'Or | Fine French Dining",
    description: 'Experience culinary excellence at La Maison D\'Or. Award-winning French cuisine in an elegant setting.',
    images: ['https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}