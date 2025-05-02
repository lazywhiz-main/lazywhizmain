'use client';

import React from 'react';
import Link from 'next/link';

export default function DesignConceptSimple() {
  // パステルカラーパレット
  const pastelColors = {
    pink: '#FFDDD2',    // ソフトピンク
    mint: '#DBECE5',    // ミントグリーン
    lavender: '#E6E6FA', // ラベンダー
    yellow: '#FFF4D2',  // パステルイエロー
    blue: '#D4F1F9'     // パステルブルー
  };

  // サンプル記事データ
  const articles = [
    {
      id: 'efficiency-tips',
      title: '会議の時間を半分に減らす5つのテクニック',
      category: '生産性向上',
      description: '無駄な会議に費やしている時間を取り戻しましょう。この記事では、会議時間を効率的に短縮するための実践的なテクニックを紹介します。',
      readTime: '8分',
    },
    {
      id: 'automation-basics',
      title: 'はじめての業務自動化入門',
      category: '自動化',
      description: 'プログラミングの知識がなくても始められる、シンプルな業務自動化の方法を解説。無料ツールを使った具体的な手順も紹介します。',
      readTime: '12分',
    },
    {
      id: 'decision-making',
      title: '意思決定疲れを解消する「3秒ルール」',
      category: '思考法',
      description: '日々の小さな決断に時間とエネルギーを浪費していませんか？シンプルな「3秒ルール」を活用して、意思決定の効率を劇的に向上させる方法。',
      readTime: '7分',
    }
  ];

  // サンプルツールデータ
  const tools = [
    { id: 'pomodoro', name: 'LazyPomodoro', icon: '⏱️' },
    { id: 'notes', name: 'クイックメモ', icon: '📝' },
    { id: 'timer', name: '会議タイマー', icon: '⏲️' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className="sticky top-0 z-50 py-4 bg-white shadow-sm">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-medium text-brand-500 flex items-center gap-1">
              <span>Lazy</span>
              <span className="text-text-high">Whiz</span>
            </Link>
            
            <div className="flex items-center gap-8 text-sm">
              <Link
                href="/design-concept"
                className="text-text-medium hover:text-brand-500 transition-colors"
              >
                コンセプト1
              </Link>
              <Link
                href="/design-concept-alt"
                className="text-text-medium hover:text-brand-500 transition-colors"
              >
                コンセプト2
              </Link>
              <Link
                href="/design-concept-simple"
                className="text-brand-500 border-b border-brand-500 pb-1"
              >
                コンセプト3
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* ヒーローセクション - シンプルで余白多め */}
        <section className="py-16 md:py-24 container mx-auto px-8">
          <div className="max-w-3xl mx-auto md:ml-24 lg:ml-32">
            <div className="mb-3">
              <span className="inline-block px-4 py-1 text-xs font-medium bg-[#FFDDD2] text-[#E2857B] rounded-full">
                シンプルデザイン
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-medium mb-8 leading-tight text-text-high">
              余白と小さな文字で<br />
              <span className="text-brand-500">読みやすさ</span>を追求した<br />
              デザインコンセプト
            </h1>
            
            <p className="text-sm text-text-medium leading-relaxed max-w-lg mb-10">
              画面いっぱいに情報を詰め込むのではなく、余白を大切にしたミニマルなデザイン。
              小さめのフォントサイズと優しいパステルカラーで、穏やかな印象を演出しています。
            </p>
            
            <div className="mt-12">
              <Link 
                href="/toolkit"
                className="inline-flex items-center px-5 py-2 text-sm bg-[#FFDDD2] text-[#E2857B] rounded-lg transition-all hover:bg-[#FFCDC0]"
              >
                <span>ツールキットへ</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* パステルカラーパレット */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl font-medium mb-12 text-center">パステルカラーパレット</h2>
              
              <div className="grid grid-cols-5 gap-6">
                {Object.entries(pastelColors).map(([name, color]) => (
                  <div key={name} className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full" style={{ backgroundColor: color }}></div>
                    <span className="mt-4 text-xs text-text-medium">{color}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* デザイン特徴セクション */}
        <section className="py-20 container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-medium mb-16 text-center">デザイン特徴</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#DBECE5] rounded-lg flex items-center justify-center text-xl mb-6">
                  ✨
                </div>
                <h3 className="text-base font-medium mb-3 text-text-high">豊かな余白</h3>
                <p className="text-xs text-text-medium leading-relaxed">
                  読みやすさと優雅さのために、十分な余白を確保。コンテンツの密度を下げ、ユーザーの目の疲れを軽減します。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#E6E6FA] rounded-lg flex items-center justify-center text-xl mb-6">
                  🔤
                </div>
                <h3 className="text-base font-medium mb-3 text-text-high">小さめの文字</h3>
                <p className="text-xs text-text-medium leading-relaxed">
                  必要以上に大きなフォントを避け、テキスト密度と可読性のバランスを追求。小さくても読みやすいタイポグラフィを実現します。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-[#FFF4D2] rounded-lg flex items-center justify-center text-xl mb-6">
                  🎨
                </div>
                <h3 className="text-base font-medium mb-3 text-text-high">パステルカラー</h3>
                <p className="text-xs text-text-medium leading-relaxed">
                  視覚的な刺激を抑えた優しいパステルカラーを活用。柔らかな印象を与えつつも、ブランドの一貫性を保ちます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 記事カードセクション */}
        <section className="py-20 bg-[#FAFAFA]">
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-xl font-medium mb-2">記事カードデザイン</h2>
              <p className="text-xs text-text-medium mb-12 max-w-md">余白と小さめのフォントを活かした、情報密度の低いカードデザイン。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {articles.map((article, index) => (
                  <div key={article.id} className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="mb-4">
                      <span 
                        className="inline-block px-3 py-1 text-[10px] font-medium rounded-full"
                        style={{ 
                          backgroundColor: index === 0 ? pastelColors.pink : 
                                          index === 1 ? pastelColors.mint : 
                                          pastelColors.lavender,
                          color: index === 0 ? '#E2857B' : 
                                 index === 1 ? '#3D8873' : 
                                 '#6B66A3'
                        }}
                      >
                        {article.category}
                      </span>
                    </div>
                    
                    <h3 className="text-base font-medium mb-3 text-text-high leading-snug">
                      {article.title}
                    </h3>
                    
                    <p className="text-xs text-text-medium mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-text-light">
                        {article.readTime}
                      </span>
                      
                      <Link 
                        href={`/toolkit/${article.id}`}
                        className="text-xs text-brand-500 hover:text-brand-600 font-medium"
                      >
                        続きを読む
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ツールカードセクション */}
        <section className="py-20">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-medium mb-16 text-center">ミニツール</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tools.map((tool, index) => (
                  <Link 
                    key={tool.id}
                    href={`/toolkit/tools/${tool.id}`}
                    className="p-6 bg-white border border-neutral-100 rounded-lg hover:shadow-sm transition-all text-center"
                    style={{ backgroundColor: index === 0 ? pastelColors.pink : 
                                           index === 1 ? pastelColors.mint : 
                                           pastelColors.blue,
                             opacity: 0.8 }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                      {tool.icon}
                    </div>
                    <h3 className="text-sm font-medium">{tool.name}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-24 bg-[#FFDDD2]/30">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-medium mb-4 text-[#E2857B]">
                もっと効率的に働きませんか？
              </h2>
              
              <p className="text-sm text-text-medium mb-8 max-w-md mx-auto">
                LazyWhizのサービスで、あなたの仕事をシンプルに。
                賢く怠けるための第一歩を踏み出しましょう。
              </p>
              
              <Link 
                href="/service" 
                className="inline-flex items-center bg-white text-[#E2857B] px-6 py-3 rounded-lg text-sm transition-all shadow-sm hover:shadow"
              >
                <span>サービスを見る</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* フィードバックセクション */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-base font-medium mb-3">このデザインコンセプトはいかがですか？</h2>
              <p className="text-xs text-text-medium mb-6">
                より「賢く怠ける」ためのデザインについてのフィードバックをお待ちしています。
              </p>
              
              <div className="flex justify-center space-x-4">
                <button className="text-xs px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:border-brand-300 transition-colors">
                  気に入った
                </button>
                <button className="text-xs px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:border-brand-300 transition-colors">
                  もう少し調整が必要
                </button>
                <button className="text-xs px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:border-brand-300 transition-colors">
                  別のアイデアを見たい
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="py-8 border-t border-neutral-100">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <p className="text-xs text-text-light">
              © {new Date().getFullYear()} LazyWhiz. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 