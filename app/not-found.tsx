import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 py-16">
      <div className="container max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-text-high mb-6">404</h1>
        <div className="bg-brand-200 rounded-full h-1 w-16 mx-auto mb-8"></div>
        
        <h2 className="text-3xl font-bold mb-4 text-brand-500">ページが見つかりません</h2>
        <p className="text-lg mb-10">
          お探しのページは存在しないか、移動した可能性があります。
        </p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link href="/" className="btn-primary">
            トップページに戻る
          </Link>
          <Link href="/contact" className="border border-brand-500 text-brand-500 hover:bg-brand-200 px-4 py-2 rounded transition-colors">
            問題を報告する
          </Link>
        </div>
        
        <div className="mt-16">
          <h3 className="font-bold mb-4 text-text-high">お探しのものは以下にありますか？</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="text-brand-500 hover:text-brand-600">ブランドストーリー</Link></li>
            <li><Link href="/toolkit" className="text-brand-500 hover:text-brand-600">ツールキット</Link></li>
            <li><Link href="/service" className="text-brand-500 hover:text-brand-600">サービス</Link></li>
            <li><Link href="/guild" className="text-brand-500 hover:text-brand-600">ギルド（コミュニティ）</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
} 