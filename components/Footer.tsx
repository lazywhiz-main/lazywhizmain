import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-text-high text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">LazyWhiz</h3>
            <p className="text-sm opacity-80 leading-relaxed">頑張りすぎず、賢く生きるためのツールと知恵</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">メインページ</h4>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">トップページ</Link></li>
              <li><Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">ブランドストーリー</Link></li>
              <li><Link href="/toolkit" className="text-sm opacity-80 hover:opacity-100 transition-opacity">記事 & ミニツール集</Link></li>
              <li><Link href="/guild" className="text-sm opacity-80 hover:opacity-100 transition-opacity">共創コミュニティ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">サービス</h4>
            <ul className="space-y-2.5">
              <li><Link href="/service" className="text-sm opacity-80 hover:opacity-100 transition-opacity">受託案内</Link></li>
              <li><Link href="/works" className="text-sm opacity-80 hover:opacity-100 transition-opacity">実績・ポートフォリオ</Link></li>
              <li><Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">ひと声かける</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">その他</h4>
            <ul className="space-y-2.5">
              <li><Link href="/legal" className="text-sm opacity-80 hover:opacity-100 transition-opacity">法的情報</Link></li>
              <li><Link href="/privacy-policy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">プライバシーポリシー</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-8 text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} LazyWhiz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 