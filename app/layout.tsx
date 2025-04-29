import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'LazyWhiz - 頑張りすぎず、賢く生きる',
  description: 'LazyWhiz - 頑張りすぎず、賢く生きるためのツールと知恵',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 