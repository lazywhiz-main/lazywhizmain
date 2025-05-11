'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // スクロール検出
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <header className={`bg-white shadow-md relative z-50 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-5 md:py-6'}`}>
      <div className="brand-shape-dot w-2 h-2 top-8 left-[10%] hidden md:block"></div>
      <div className="brand-shape-dot w-3 h-3 bottom-5 right-[15%] hidden md:block opacity-60"></div>
      
      <div className="container flex justify-between items-center relative">
        <Link href="/" className="text-2xl font-bold text-text-high transition-all duration-300 hover:text-brand-500">
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
            <li>
              <Link href="/about" className="hover:text-brand-500 transition-all duration-300 font-medium">
                About
              </Link>
            </li>
            <li>
              <Link href="/toolkit" className="hover:text-brand-500 transition-all duration-300 font-medium">
                Toolkit
              </Link>
            </li>
            <li>
              <Link href="/guild" className="hover:text-brand-500 transition-all duration-300 font-medium">
                Guild
              </Link>
            </li>
            <li>
              <Link href="/service" className="hover:text-brand-500 transition-all duration-300 font-medium">
                Service
              </Link>
            </li>
            <li>
              <Link href="/works" className="hover:text-brand-500 transition-all duration-300 font-medium">
                Works
              </Link>
            </li>
            <li>
              <Link href="/contact" className="btn-primary">
                Contact
              </Link>
            </li>
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
        <div className="brand-shape-dot w-3 h-3 top-[15%] left-[15%]"></div>
        <div className="brand-shape-dot w-4 h-4 bottom-[20%] right-[10%] opacity-60"></div>
        <div className="brand-shape-circle w-32 h-32 -bottom-10 -left-10"></div>
        
        <nav>
          <ul className="flex flex-col space-y-7 items-center text-lg">
            <li>
              <Link 
                href="/about" 
                className="hover:text-brand-500 transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/toolkit" 
                className="hover:text-brand-500 transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Toolkit
              </Link>
            </li>
            <li>
              <Link 
                href="/guild" 
                className="hover:text-brand-500 transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Guild
              </Link>
            </li>
            <li>
              <Link 
                href="/service" 
                className="hover:text-brand-500 transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Service
              </Link>
            </li>
            <li>
              <Link 
                href="/works" 
                className="hover:text-brand-500 transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Works
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="btn-primary mt-2"
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