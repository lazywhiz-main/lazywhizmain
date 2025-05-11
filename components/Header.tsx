'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // メニューが開いている時にスクロールを無効化
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container py-5 md:py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-text-high">
          <span className="text-brand-500">Lazy</span>Whiz
        </Link>
        
        {/* ハンバーガーメニューボタン（モバイル表示時のみ） */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded hover:bg-neutral-100 transition-colors"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <div className={`w-6 h-0.5 bg-text-high mb-1.5 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-text-high mb-1.5 transition-opacity ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
          <div className={`w-6 h-0.5 bg-text-high transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
        
        {/* デスクトップナビゲーション */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            <li><Link href="/about" className="hover:text-brand-500 transition-colors font-medium">About</Link></li>
            <li><Link href="/toolkit" className="hover:text-brand-500 transition-colors font-medium">Toolkit</Link></li>
            <li><Link href="/guild" className="hover:text-brand-500 transition-colors font-medium">Guild</Link></li>
            <li><Link href="/service" className="hover:text-brand-500 transition-colors font-medium">Service</Link></li>
            <li><Link href="/works" className="hover:text-brand-500 transition-colors font-medium">Works</Link></li>
            <li><Link href="/contact" className="bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg transition-colors font-medium">Contact</Link></li>
          </ul>
        </nav>
      </div>
      
      {/* モバイルナビゲーション（オーバーレイメニュー） */}
      <div 
        className={`
          fixed inset-0 bg-white z-40 transition-all duration-300 md:hidden
          ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
          pt-24 px-6 shadow-lg
        `}
      >
        <nav>
          <ul className="flex flex-col space-y-7 items-center text-lg">
            <li>
              <Link 
                href="/about" 
                className="hover:text-brand-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/toolkit" 
                className="hover:text-brand-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Toolkit
              </Link>
            </li>
            <li>
              <Link 
                href="/guild" 
                className="hover:text-brand-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Guild
              </Link>
            </li>
            <li>
              <Link 
                href="/service" 
                className="hover:text-brand-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </Link>
            </li>
            <li>
              <Link 
                href="/works" 
                className="hover:text-brand-500 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg transition-colors inline-block font-medium mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* オーバーレイ背景（メニュー外をクリックして閉じるため） */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
};

export default Header; 