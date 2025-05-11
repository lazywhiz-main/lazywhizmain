import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from '@/components/CookieConsent';
import localFont from 'next/font/local';
import { Public_Sans } from 'next/font/google';

// 英語用フォント
const publicSans = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600'],
  variable: '--font-public-sans',
  preload: true,
});

// BIZ UDGothicのlocalFont設定は削除

export const metadata: Metadata = {
  title: 'LazyWhiz - 頑張りすぎず、賢く生きる',
  description: 'LazyWhizは頑張りすぎず、賢く生きるためのツールと知恵を提供するプラットフォームです。効率的な働き方、共創的な価値創造、本質に集中するアプローチでビジネスと生活をサポートします。',
  keywords: ['LazyWhiz', '賢く生きる', '頑張りすぎない', '共創開発', '本質', '効率化', '共創', '創造的な挑戦'],
  creator: 'LazyWhiz',
  publisher: 'LazyWhiz',
  metadataBase: new URL('https://lazywhiz.io'),
  openGraph: {
    title: 'LazyWhiz - 頑張りすぎず、賢く生きる',
    description: 'LazyWhizは頑張りすぎず、賢く生きるためのツールと知恵を提供するプラットフォームです。',
    url: 'https://lazywhiz.io',
    siteName: 'LazyWhiz',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: 'https://lazywhiz.io/og-image.jpg', // 実際のOGP画像のURLに置き換えてください
        width: 1200,
        height: 630,
        alt: 'LazyWhiz - 頑張りすぎず、賢く生きる',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LazyWhiz - 頑張りすぎず、賢く生きる',
    description: 'LazyWhizは頑張りすぎず、賢く生きるためのツールと知恵を提供するプラットフォームです。',
    creator: '@lazywhiz_jp', // 実際のTwitterアカウントに変更してください
    images: ['https://lazywhiz.io/twitter-image.jpg'], // 実際のTwitterカード画像のURLに置き換えてください
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${publicSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <GoogleAnalytics gaId="G-4CF7M2YVM1" />
      </body>
    </html>
  );
} 