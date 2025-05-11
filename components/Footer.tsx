import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-text-high text-white py-12 md:py-16 relative overflow-hidden">
      {/* ブランド装飾要素 */}
      <div className="brand-shape-circle w-64 h-64 -top-32 -right-32 opacity-5"></div>
      <div className="brand-shape-circle w-48 h-48 bottom-0 left-0 opacity-5"></div>
      <div className="brand-shape-dot w-2 h-2 top-12 left-[10%] opacity-20"></div>
      <div className="brand-shape-dot w-3 h-3 bottom-16 right-[15%] opacity-20"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          <div>
            <h3 className="text-xl font-bold mb-5 text-white">
              LazyWhiz
            </h3>
            <p className="text-sm opacity-80 leading-relaxed">頑張りすぎず、賢く生きるためのツールと知恵</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">
              メインページ
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  トップページ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  ブランドストーリー
                </Link>
              </li>
              <li>
                <Link href="/toolkit" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  記事 & ミニツール集
                </Link>
              </li>
              <li>
                <Link href="/guild" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  共創コミュニティ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">
              サービス
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/service" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  受託案内
                </Link>
              </li>
              <li>
                <Link href="/works" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  実績・ポートフォリオ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  ひと声かける
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">
              その他
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/legal" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  法的情報
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-sm opacity-80 hover:opacity-100 transition-all duration-300">
                  プライバシーポリシー
                </Link>
              </li>
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