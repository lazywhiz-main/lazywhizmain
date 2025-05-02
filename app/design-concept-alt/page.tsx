'use client';

import React from 'react';
import Link from 'next/link';

export default function DesignConceptAlt() {
  // サンプル記事データ
  const articles = [
    {
      id: 'efficiency-tips',
      title: '会議の時間を半分に減らす5つのテクニック',
      category: '生産性向上',
      emoji: '⏱️',
    },
    {
      id: 'automation-basics',
      title: 'はじめての業務自動化入門',
      category: '自動化',
      emoji: '🤖',
    },
    {
      id: 'decision-making',
      title: '意思決定疲れを解消する「3秒ルール」',
      category: '思考法',
      emoji: '🧠',
    }
  ];

  // サンプルツールデータ
  const tools = [
    { id: 'pomodoro', name: 'LazyPomodoro', emoji: '🍅' },
    { id: 'notes', name: 'クイックメモ', emoji: '📝' },
    { id: 'timer', name: '会議タイマー', emoji: '⏲️' }
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#FFFBF5]">
      {/* ウェーブ背景 - トップ */}
      <div className="absolute top-0 left-0 right-0 h-36 overflow-hidden">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
          <path 
            d="M0.00,49.98 C103.28,149.33 277.23,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z" 
            className="fill-[#FFE4E1] opacity-70"
          ></path>
        </svg>
      </div>

      {/* ナビゲーションメニュー - 手書き風 */}
      <nav className="sticky top-0 z-50 py-3 px-8 backdrop-blur-md bg-white/60">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="group">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-bold text-brand-500 rotate-[-3deg] transform transition-all group-hover:rotate-[3deg]">Lazy</span>
              <span className="text-2xl font-bold text-text-high group-hover:text-brand-600 transition-all">Whiz</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              href="/design-concept" 
              className="text-text-medium hover:text-brand-500 transition-colors"
            >
              コンセプト1
            </Link>
            <Link 
              href="/design-concept-alt" 
              className="text-brand-500 border-b-2 border-brand-500 pb-1 font-medium"
            >
              コンセプト2
            </Link>
            <Link 
              href="/toolkit" 
              className="text-text-medium hover:text-brand-500 transition-colors"
            >
              ツールキット
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16 relative">
        {/* ヒーローセクション - 斜めレイアウト */}
        <section className="relative py-12 overflow-hidden transform -rotate-1 scale-110 mb-16">
          <div className="container max-w-6xl mx-auto px-6 md:px-10 rotate-1">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1.5 bg-[#FFD6D1] text-[#E2857B] rounded-full text-sm font-medium transform -rotate-2 mb-4">
                  シナプスティックデザイン
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="inline-block transform -rotate-2 text-brand-500">もっと</span> 
                  <span className="inline-block">自由に、</span><br />
                  <span className="inline-block transform rotate-1">もっと</span> 
                  <span className="inline-block transform rotate-[0.7deg] text-[#E2857B]">楽しく</span>
                </h1>
                
                <p className="text-lg text-text-medium leading-relaxed max-w-md mb-10 transform -rotate-[0.5deg]">
                  遊び心とリラックス感を最大限に引き出した「シナプスティック」なデザインコンセプト。
                  賢く怠けるためのインスピレーションがここにあります。
                </p>
                
                <div className="flex items-center gap-5">
                  <button className="px-8 py-4 bg-[#FFB4A2] hover:bg-[#E2857B] text-white rounded-xl font-medium transition-all hover:shadow-lg transform -rotate-1 hover:rotate-1 hover:-translate-y-1">
                    ワクワクする
                  </button>
                  <div className="text-xl">✨</div>
                </div>
              </div>
              
              <div className="md:w-1/2 max-w-sm relative">
                <div className="relative aspect-square">
                  {/* 装飾的な手書き風線 */}
                  <svg width="300" height="300" viewBox="0 0 300 300" className="absolute inset-0 w-full h-full">
                    <path
                      d="M50,150 C80,80 220,80 250,150 C280,220 150,250 50,150"
                      className="fill-none stroke-[#FFD6D1] stroke-[3] opacity-70"
                      strokeLinecap="round"
                      style={{strokeDasharray: "5,10"}}
                    />
                    <path
                      d="M70,100 C120,70 180,70 230,100 C280,130 230,200 150,200 C70,200 20,130 70,100"
                      className="fill-none stroke-brand-300 stroke-[2] opacity-50"
                      strokeLinecap="round"
                    />
                  </svg>
                  
                  {/* 中央のイラスト */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-9xl transform rotate-12">🧘‍♀️</div>
                  </div>
                  
                  {/* 装飾的な点々 */}
                  <div className="absolute top-10 right-10 w-5 h-5 rounded-full bg-brand-200"></div>
                  <div className="absolute bottom-20 left-10 w-3 h-3 rounded-full bg-[#FFD6D1]"></div>
                  <div className="absolute top-1/2 right-0 w-4 h-4 rounded-full bg-[#E2E0FF]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* コンテンツセクション - ペーパーカット風 */}
        <section className="relative py-16 mb-16">
          <div className="absolute inset-0 bg-[#F9F5FF] transform -skew-y-3 -z-10"></div>
          
          <div className="container max-w-6xl mx-auto px-6 md:px-10 py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative">
              <span className="relative inline-block">
                デザイン<span className="text-brand-500">特徴</span>
                <svg className="absolute -bottom-3 left-0 w-full" height="10" viewBox="0 0 100 10">
                  <path d="M0,3 C20,15 60,-10 100,3" fill="none" stroke="#FFB4A2" strokeWidth="3" />
                </svg>
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {/* 特徴カード1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg transform rotate-[-1deg] hover:rotate-[1deg] transition-all">
                <div className="w-16 h-16 bg-[#FFD6D1] rounded-xl flex items-center justify-center text-3xl transform -rotate-6 mb-6">
                  🌊
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#E2857B]">波形と曲線</h3>
                <p className="text-text-medium">
                  直線的な要素を避け、有機的な波形や曲線を取り入れることで、リラックスした感覚を生み出します。
                </p>
              </div>
              
              {/* 特徴カード2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg transform translate-y-4 rotate-[1deg] hover:rotate-[-1deg] transition-all">
                <div className="w-16 h-16 bg-[#E2E0FF] rounded-xl flex items-center justify-center text-3xl transform rotate-6 mb-6">
                  ✏️
                </div>
                <h3 className="text-xl font-bold mb-4 text-indigo-600">手書き風要素</h3>
                <p className="text-text-medium">
                  完璧すぎないラインや手描き風のアクセントで、親しみやすく温かみのある印象を与えます。
                </p>
              </div>
              
              {/* 特徴カード3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg transform rotate-[1.5deg] hover:rotate-[-1deg] transition-all">
                <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center text-3xl transform -rotate-3 mb-6">
                  🎨
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-600">遊び心あるレイアウト</h3>
                <p className="text-text-medium">
                  要素に微妙な角度をつけ、均等配置を避けることで、動きと遊び心のある視覚体験を創出します。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 記事カードセクション - ジグザグレイアウト */}
        <section className="py-16 relative mb-16">
          <div className="container max-w-6xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold mb-12 inline-block transform -rotate-1">
              <span className="text-brand-500">コンテンツ</span>カード
              <div className="h-1 w-full bg-[#FFD6D1] mt-2 transform rotate-1"></div>
            </h2>
            
            <div className="relative">
              {/* 装飾的な背景線 */}
              <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M0,30 Q25,50 50,30 T100,30" 
                  fill="none" 
                  stroke="#FFD6D1" 
                  strokeWidth="0.5"
                  strokeDasharray="2,4"
                  className="opacity-30"
                ></path>
                <path 
                  d="M0,70 Q25,50 50,70 T100,70" 
                  fill="none" 
                  stroke="#E2E0FF" 
                  strokeWidth="0.5"
                  strokeDasharray="2,4"
                  className="opacity-30"
                ></path>
              </svg>
              
              {/* 記事カード - ジグザグレイアウト */}
              <div className="space-y-12">
                {articles.map((article, index) => (
                  <div 
                    key={article.id}
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className={`md:w-1/3 aspect-square bg-white rounded-2xl p-4 flex items-center justify-center text-8xl shadow-lg transform ${
                      index % 2 === 0 ? 'rotate-[-2deg]' : 'rotate-[2deg]'
                    }`}>
                      {article.emoji}
                    </div>
                    
                    <div className={`md:w-2/3 bg-white p-8 rounded-xl shadow-lg transform ${
                      index % 2 === 0 ? 'rotate-[1deg]' : 'rotate-[-1deg]'
                    }`}>
                      <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
                        index === 0 ? 'bg-brand-200 text-brand-600' : 
                        index === 1 ? 'bg-[#FFD6D1] text-[#E2857B]' : 
                        'bg-[#E2E0FF] text-indigo-600'
                      }`}>
                        {article.category}
                      </span>
                      
                      <h3 className="text-2xl font-bold mb-4">{article.title}</h3>
                      
                      <Link 
                        href={`/toolkit/${article.id}`}
                        className="inline-flex items-center text-brand-500 font-medium group"
                      >
                        <span className="relative">
                          続きを読む
                          <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 100 5">
                            <path d="M0,2 C30,5 70,0 100,2" fill="none" stroke="currentColor" strokeWidth="1" className="group-hover:stroke-[2]" />
                          </svg>
                        </span>
                        <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ツールセクション - 手書き風ボーダー */}
        <section className="py-16 relative">
          <div className="container max-w-5xl mx-auto px-6">
            <div className="relative border-4 border-dashed border-[#FFD6D1] rounded-3xl p-8 md:p-12 bg-white">
              <h2 className="text-3xl font-bold mb-10 text-center">
                <span className="text-[#E2857B]">ミニ</span>ツール
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <Link 
                    key={tool.id}
                    href={`/toolkit/tools/${tool.id}`}
                    className={`flex flex-col items-center p-6 bg-[#FFFBF5] rounded-xl shadow-md hover:shadow-lg transition-all transform ${
                      index === 0 ? 'rotate-[-1deg] hover:rotate-[1deg]' : 
                      index === 1 ? 'rotate-[1.5deg] hover:rotate-[-1deg]' : 
                      'rotate-[0.5deg] hover:rotate-[2deg]'
                    } hover:-translate-y-1`}
                  >
                    <div className="text-5xl mb-4">{tool.emoji}</div>
                    <h3 className="text-lg font-bold">{tool.name}</h3>
                  </Link>
                ))}
              </div>
              
              {/* 手書き風の装飾 */}
              <div className="absolute -top-5 -right-5 w-10 h-10 bg-[#E2E0FF] rounded-full flex items-center justify-center text-xl">
                🎯
              </div>
              <div className="absolute -bottom-5 -left-5 w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-xl">
                🔍
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション - 波形背景 */}
        <section className="py-24 mt-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFB4A2] to-[#F5ADA8] z-0"></div>
          
          {/* 波形装飾 */}
          <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-[#FFFBF5] fill-current">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
          
          <div className="container max-w-4xl mx-auto px-6 relative z-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-6 transform -rotate-1">
              <span className="inline-block">もっと</span>
              <span className="inline-block ml-3 transform rotate-2 text-yellow-100">楽しく</span>
              <span className="inline-block ml-3">働こう！</span>
            </h2>
            
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              LazyWhizのサービスで、あなたの仕事をもっと楽しく、
              もっと効率的に。賢く怠けるための第一歩を踏み出しましょう。
            </p>
            
            <Link 
              href="/service" 
              className="inline-flex items-center bg-white text-[#E2857B] px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl transform -rotate-1 hover:rotate-1 hover:-translate-y-1"
            >
              <span>サービスを見る</span>
              <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>

            {/* 装飾要素 */}
            <div className="mt-12 flex justify-center space-x-6 text-3xl">
              <span className="transform rotate-12">🎈</span>
              <span className="transform -rotate-6">🎨</span>
              <span className="transform rotate-6">✨</span>
            </div>
          </div>
          
          {/* 下部の波形 */}
          <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden transform rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full text-[#FFFBF5] fill-current">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* フロートスクロールトップ */}
        <button 
          className="fixed bottom-8 right-8 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-brand-500 hover:text-brand-600 hover:shadow-xl transition-all transform hover:-translate-y-1 z-50"
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
          </svg>
        </button>
      </main>
    </div>
  );
} 