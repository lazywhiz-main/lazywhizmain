import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-200/40 to-neutral-50 z-0"></div>
        
        {/* 装飾要素 */}
        <div className="absolute right-0 top-10 w-1/3 h-1/2 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-64 h-64 bg-[#E57373] rounded-full opacity-5"></div>
        <div className="absolute right-1/4 bottom-10 w-32 h-32 bg-brand-200 rounded-full opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block mb-4 px-4 py-2 bg-brand-200 text-brand-600 rounded-full text-sm font-medium">LazyWhiz コンセプト</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              頑張りすぎず、<br />
              <span className="text-brand-500">賢く生きる未来へ</span>
            </h1>
            <p className="text-xl text-text-medium mb-10 max-w-xl">
              LazyWhizは、最小限の労力で最大限の成果を生み出すための知恵とツールを提供します。頑張りすぎず賢く生きることで、本当に大切なことに集中できる世界を目指しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about" className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>ブランドストーリー</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all">
                <span>ひと声かける</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">サービス</span>
            <h2 className="text-4xl font-bold text-text-high">LazyWhizの提供サービス</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
              <div className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-high">受託開発</h3>
              <p className="text-text-medium mb-6 flex-grow">あなたのビジネスに最適な技術ソリューションを提供します。本質に集中し、意味ある価値創出を共に目指します。</p>
              <Link href="/service" className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium mt-auto">
                <span>詳しく見る</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
              <div className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-high">ツールキット</h3>
              <p className="text-text-medium mb-6 flex-grow">日々の作業を本質化するためのミニツールと、賢く怠けるためのアイデアを集めたコンテンツライブラリ。</p>
              <Link href="/toolkit" className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium mt-auto">
                <span>詳しく見る</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg transform transition hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
              <div className="w-16 h-16 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-text-high">共創コミュニティ</h3>
              <p className="text-text-medium mb-6 flex-grow">同じ志を持つ仲間と共に、意味ある挑戦と創造的な対話を通じて成長し合う場所。価値観を共有し、共に学び合います。</p>
              <Link href="/guild" className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium mt-auto">
                <span>詳しく見る</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-neutral-50 relative overflow-hidden">
        {/* 装飾要素 */}
        <div className="absolute left-0 top-0 w-64 h-64 bg-brand-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-500 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">共創の取り組み</span>
            <h2 className="text-4xl font-bold text-text-high">価値ある挑戦</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56 w-full bg-gradient-to-br from-brand-200 to-brand-500 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="relative z-10 px-6 py-3 bg-white bg-opacity-90 rounded-lg">
                  <span className="text-brand-500 font-medium">Webアプリケーション</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-text-high">プロジェクト事例 1</h3>
                <p className="text-text-medium mb-6">共創的なアプローチで開発したダッシュボードアプリケーション。本質的な課題に集中し、ユーザー体験を重視した意味ある機能設計を実現。</p>
                <Link href="/works/1" className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium">
                  <span>詳細を見る</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg transform transition hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-56 w-full bg-gradient-to-br from-[#E57373] to-[#D32F2F] flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="relative z-10 px-6 py-3 bg-white bg-opacity-90 rounded-lg">
                  <span className="text-[#E57373] font-medium">モバイルアプリ</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-text-high">プロジェクト事例 2</h3>
                <p className="text-text-medium mb-6">時間管理の本質を見つめ直したモバイルアプリケーション。直感的な操作性と、ユーザーの真のニーズに応える創造的な機能を提供。</p>
                <Link href="/works/2" className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium">
                  <span>詳細を見る</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/works" className="inline-flex items-center justify-center bg-white border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>すべての実績を見る</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 bg-brand-500 z-0"></div>
        
        {/* 装飾要素 */}
        <div className="absolute left-0 top-0 w-full h-full bg-brand-600 opacity-30 skew-y-6 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-200 rounded-full opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">意味ある挑戦を<br />一緒に始めませんか？</h2>
            <p className="text-xl mb-12 opacity-90">
              LazyWhizは、あなたの課題の本質を見極め、真に価値あるソリューションを共に創造します。探求と発見の対話から始めましょう。
            </p>
            <Link href="/contact" className="inline-flex items-center bg-white text-brand-500 hover:bg-neutral-50 px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>お問い合わせ</span>
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 