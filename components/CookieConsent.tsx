'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // クッキーの同意状態を確認
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 shadow-lg z-50">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-text-medium flex-1">
          <p>
            当サイトではGoogle Analyticsを使用しています。
            引き続き閲覧する場合は、Cookieの使用に同意したものとみなされます。
            詳しくは
            <Link href="/privacy-policy" className="text-brand-500 hover:text-brand-600 mx-1">
              プライバシーポリシー
            </Link>
            をご確認ください。
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="/privacy-policy"
            className="text-sm text-text-medium hover:text-text-high"
          >
            詳細を見る
          </Link>
          <button
            onClick={acceptCookies}
            className="bg-brand-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-brand-600 transition-colors"
          >
            同意する
          </button>
        </div>
      </div>
    </div>
  );
} 