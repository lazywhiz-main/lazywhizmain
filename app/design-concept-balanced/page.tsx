'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function DesignConceptBalanced() {
  // State for tracking feedback (if needed later)
  const [feedback, setFeedback] = useState<string | null>(null);

  // パステルカラーパレット（オレンジ色とコーラルをアクセントとして）
  const pastelColors = {
    pink: '#FFDDD2',    // ソフトピンク
    mint: '#DBECE5',    // ミントグリーン
    lavender: '#E6E6FA', // ラベンダー
    yellow: '#FFF4D2',  // パステルイエロー
    blue: '#D4F1F9',    // パステルブルー
  };

  // サンプル記事データ
  const articles = [
    {
      id: 'efficiency-tips',
      title: '会議の時間を半分に減らす5つのテクニック',
      category: '生産性向上',
      description: '無駄な会議に費やしている時間を取り戻しましょう。この記事では、会議時間を効率的に短縮するための実践的なテクニックを紹介します。',
      readTime: '8分',
      isRecommended: true
    },
    {
      id: 'automation-basics',
      title: 'はじめての業務自動化入門',
      category: '自動化',
      description: 'プログラミングの知識がなくても始められる、シンプルな業務自動化の方法を解説。無料ツールを使った具体的な手順も紹介します。',
      readTime: '12分',
      isNew: true
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
    { id: 'pomodoro', name: 'LazyPomodoro', icon: '⏱️', isPopular: true },
    { id: 'notes', name: 'クイックメモ', icon: '📝' },
    { id: 'timer', name: '会議タイマー', icon: '⏲️', isNew: true }
  ];

  // フィードバック処理関数
  const handleFeedback = (type: string) => {
    setFeedback(type);
    // ここに実際のフィードバック処理を追加できます
    console.log(`フィードバック: ${type}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ナビゲーション */}
      <nav className="sticky top-0 z-50 py-4 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-ui logo flex items-center gap-1">
              <span className="text-brand-500">Lazy</span>
              <span className="text-text-high">Whiz</span>
            </Link>
            
            <div className="flex items-center gap-6 text-sm ui-element">
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
                className="text-text-medium hover:text-brand-500 transition-colors"
              >
                コンセプト3
              </Link>
              <Link
                href="/design-concept-balanced"
                className="text-brand-500 border-b border-brand-500 pb-1"
              >
                コンセプト4
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-12">
        {/* ヒーローセクション - バランスの取れたデザイン */}
        <section className="py-16 md:py-20 container mx-auto px-8">
          <div className="max-w-3xl mx-auto md:ml-20">
            <div className="mb-3">
              <span className="inline-block px-4 py-1 text-sm font-ui bg-brand-200 text-brand-600 rounded-full">
                バランスデザイン
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-heading mb-6 leading-tight text-text-high">
              余白と<span className="text-brand-500">読みやすさ</span>のバランスを<br />
              追求したデザインコンセプト
            </h1>
            
            <p className="text-base font-body text-text-medium leading-relaxed max-w-lg mb-8">
              適切な余白と読みやすいフォントサイズを組み合わせた、バランスの取れたデザイン。
              特別な要素には<span className="text-orange-200">オレンジ色</span>と<span className="text-coral-200">コーラル</span>をアクセントとして使い分けています。
            </p>
            
            <div className="mt-10 flex items-center gap-4">
              <Link 
                href="/toolkit"
                className="inline-flex items-center px-6 py-2.5 text-sm bg-brand-500 text-white rounded-lg transition-all border border-brand-500 hover:bg-brand-600 ui-element"
              >
                <span>ツールキットへ</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link 
                href="/design-concept-simple"
                className="text-sm text-text-medium hover:text-text-high transition-colors ui-element"
              >
                他のコンセプトを見る
              </Link>
            </div>
          </div>
        </section>

        {/* カラーパレット - オレンジ色とコーラルの使い分け説明 */}
        <section className="py-12 bg-neutral-50 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-coral-200 via-brand-200 to-orange-200"></div>
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-heading mb-3 text-center">アクセントカラーパレット</h2>
              <p className="text-base font-body text-text-medium text-center max-w-xl mx-auto mb-10">
                メインブランドカラーに加え、<span className="text-orange-200 font-medium">オレンジ色</span>と<span className="text-coral-200 font-medium">コーラル</span>を特別なアクセントカラーとして使い分けています。
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-brand-500 border border-neutral-200"></div>
                  <span className="mt-3 text-sm text-text-medium">ブランドカラー</span>
                  <span className="text-xs text-brand-600 font-space">#2A9D83</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-brand-200 border border-neutral-200"></div>
                  <span className="mt-3 text-sm text-text-medium">ライトブランド</span>
                  <span className="text-xs text-brand-600 font-space">#BFEADF</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-orange-200 border-2 border-dashed border-orange-300"></div>
                  <span className="mt-3 text-sm text-orange-600">オレンジアクセント</span>
                  <span className="text-xs text-orange-600 font-space">#F9C06A</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-coral-200 border-2 border-dashed border-coral-500"></div>
                  <span className="mt-3 text-sm text-coral-500">コーラルアクセント</span>
                  <span className="text-xs text-coral-500 font-space">#F5ADA8</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* デザイン特徴セクション */}
        <section className="py-16 container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-heading mb-12 text-center">デザイン特徴</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <div className="w-14 h-14 bg-[#DBECE5] rounded-lg flex items-center justify-center text-2xl mb-5">
                  ✨
                </div>
                <h3 className="text-lg font-heading mb-3 text-text-high">バランスの取れた余白</h3>
                <p className="text-base font-body text-text-medium leading-relaxed">
                  情報量と空白のバランスを最適化し、読みやすさと視覚的な余裕を両立。コンテンツが息苦しく感じないレイアウトです。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <div className="w-14 h-14 bg-brand-200 rounded-lg flex items-center justify-center text-2xl mb-5">
                  🔤
                </div>
                <h3 className="text-lg font-heading mb-3 text-text-high">読みやすいフォント</h3>
                <p className="text-base font-body text-text-medium leading-relaxed">
                  <span className="font-space text-en">Space Grotesk</span>と<span className="font-biz">BIZ UDGothic</span>のフォント組み合わせ。読みやすさとエレガントさのバランスを追求しています。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-neutral-200">
                <div className="w-14 h-14 bg-[#E6E6FA] rounded-lg flex items-center justify-center text-2xl mb-5">
                  🎨
                </div>
                <h3 className="text-lg font-heading mb-3 text-text-high">輪郭を活かしたデザイン</h3>
                <p className="text-base font-body text-text-medium leading-relaxed">
                  重たい影ではなく繊細な境界線を使用し、軽やかで明瞭な視覚的区切りを提供。クリーンで整理された印象を与えます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* アクセントカラーの活用セクション */}
        <section className="py-12 bg-brand-50 border-y border-brand-100">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-heading mb-3 text-center text-brand-600">アクセントカラーの使い分け</h2>
              <p className="text-base font-body text-text-medium text-center max-w-xl mx-auto mb-8">
                <span className="text-orange-200 font-medium">オレンジ色</span>と<span className="text-coral-200 font-medium">コーラル</span>を目的に応じて適切に使い分けます。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-heading mb-3 text-orange-600 flex items-center">
                    <span className="w-6 h-6 mr-2 rounded-full bg-orange-200/50 flex items-center justify-center text-sm ui-element">O</span>
                    オレンジの活用方法
                  </h3>
                  <p className="text-base font-body text-text-medium mb-4">
                    <span className="text-orange-200 font-medium">オレンジ色</span>は重要な情報やおすすめコンテンツを示すために使用します。目立つ色味で視線を集めるのに最適です。
                  </p>
                  <ul className="text-sm font-body text-text-medium space-y-2">
                    <li className="flex items-center">
                      <span className="w-4 h-4 mr-2 rounded-full bg-orange-200/30 flex-shrink-0"></span>
                      おすすめ記事のラベル
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 mr-2 rounded-full bg-orange-200/30 flex-shrink-0"></span>
                      重要キーワードのハイライト
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-neutral-200">
                  <h3 className="text-lg font-heading mb-3 text-coral-500 flex items-center">
                    <span className="w-6 h-6 mr-2 rounded-full bg-coral-200/50 flex items-center justify-center text-sm ui-element">C</span>
                    コーラルの活用方法
                  </h3>
                  <p className="text-base font-body text-text-medium mb-4">
                    <span className="text-coral-200 font-medium">コーラル</span>は新着情報やアクション要素のアクセントとして使用。温かみのある印象を与えます。
                  </p>
                  <ul className="text-sm font-body text-text-medium space-y-2">
                    <li className="flex items-center">
                      <span className="w-4 h-4 mr-2 rounded-full bg-coral-200/30 flex-shrink-0"></span>
                      新着コンテンツのラベル
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 mr-2 rounded-full bg-coral-200/30 flex-shrink-0"></span>
                      重要なCTAボタン
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 記事カードセクション - 輪郭を活かしたデザイン */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-heading mb-3">記事カードデザイン</h2>
              <p className="text-base font-body text-text-medium mb-10 max-w-md">輪郭線を活かし、影を控えめにした軽やかなカードデザイン。</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <div 
                    key={article.id} 
                    className={`bg-white p-6 rounded-lg transition-all ${
                      article.isRecommended
                        ? 'border-2 border-brand-300' 
                        : 'border border-neutral-200 hover:border-brand-200'
                    }`}
                  >
                    <div className="mb-4 flex items-center">
                      <span 
                        className="inline-block px-3 py-1 text-sm font-ui rounded-full"
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
                      {article.isRecommended && (
                        <span className="ml-2 inline-block px-2 py-0.5 bg-orange-200/20 text-orange-600 text-xs rounded-full ui-element">
                          おすすめ
                        </span>
                      )}
                      {article.isNew && (
                        <span className="ml-2 inline-block px-2 py-0.5 bg-coral-200/20 text-coral-500 text-xs rounded-full ui-element">
                          NEW
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg font-heading mb-3 text-text-high leading-snug">
                      {article.title}
                    </h3>
                    
                    <p className="text-base font-body text-text-medium mb-6 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-body text-text-light">
                        {article.readTime}
                      </span>
                      
                      <Link 
                        href={`/toolkit/${article.id}`}
                        className={`text-sm font-ui ${
                          article.isRecommended ? 'text-orange-300 hover:text-orange-600' : 
                          article.isNew ? 'text-coral-500 hover:text-coral-600' :
                          'text-brand-500 hover:text-brand-600'
                        }`}
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

        {/* ツールカードセクション - オレンジとコーラルのアクセント活用 */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-heading mb-12 text-center">ミニツール</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {tools.map((tool) => (
                  <Link 
                    key={tool.id}
                    href={`/toolkit/tools/${tool.id}`}
                    className={`p-6 bg-white rounded-lg transition-all text-center ${
                      tool.isPopular 
                        ? 'border border-orange-300' 
                        : tool.isNew
                        ? 'border border-coral-200'
                        : 'border border-neutral-200 hover:border-brand-200'
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 ${
                      tool.isPopular ? 'bg-orange-200/30' : 
                      tool.isNew ? 'bg-coral-200/30' :
                      'bg-white border border-neutral-100'
                    }`}>
                      {tool.icon}
                    </div>
                    <h3 className="text-lg font-heading">{tool.name}</h3>
                    {tool.isPopular && (
                      <span className="mt-2 inline-block px-3 py-0.5 bg-orange-200/20 text-orange-600 text-xs rounded-full ui-element">
                        人気
                      </span>
                    )}
                    {tool.isNew && (
                      <span className="mt-2 inline-block px-3 py-0.5 bg-coral-200/20 text-coral-500 text-xs rounded-full ui-element">
                        新着
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTAセクション - アクセントカラー活用 */}
        <section className="py-20 bg-gradient-to-r from-brand-100/80 to-brand-50/50">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-heading mb-4 text-brand-600">
                もっと効率的に働きませんか？
              </h2>
              
              <p className="text-base font-body text-text-medium mb-8 max-w-md mx-auto">
                LazyWhizのサービスで、あなたの仕事をシンプルに。
                賢く怠けるための第一歩を踏み出しましょう。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/service" 
                  className="inline-flex items-center justify-center bg-brand-500 text-white px-6 py-3 rounded-lg text-base transition-all hover:bg-brand-600 border border-brand-500 ui-element"
                >
                  <span>サービスを見る</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-coral-200 text-white px-6 py-3 rounded-lg text-base transition-all hover:bg-coral-500 border border-coral-200 ui-element"
                >
                  <span>お問い合わせ</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l4 4-4 4m8-10v12"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="mt-6">
                <span className="text-sm text-orange-300 ui-element">＼ サービス内容を詳しく知りたい方へ ／</span>
              </div>
            </div>
          </div>
        </section>

        {/* フィードバックセクション */}
        <section className="py-16">
          <div className="container mx-auto px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-lg font-heading mb-3">このデザインコンセプトはいかがですか？</h2>
              <p className="text-base font-body text-text-medium mb-6">
                より「賢く怠ける」ためのデザインについてのフィードバックをお待ちしています。
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div 
                  onClick={() => handleFeedback('like')}
                  className="text-sm px-5 py-2 border border-brand-300 text-brand-600 rounded-lg hover:bg-brand-50 transition-colors ui-element cursor-pointer"
                >
                  気に入った
                </div>
                <div 
                  onClick={() => handleFeedback('adjust')}
                  className="text-sm px-5 py-2 border border-neutral-200 rounded-lg hover:border-orange-300 hover:text-orange-600 transition-colors ui-element cursor-pointer"
                >
                  もう少し調整が必要
                </div>
                <div 
                  onClick={() => handleFeedback('new')}
                  className="text-sm px-5 py-2 border border-neutral-200 rounded-lg hover:border-coral-500 hover:text-coral-500 transition-colors group relative ui-element cursor-pointer"
                >
                  別のアイデアを見たい
                  <span className="absolute top-[-8px] right-[-8px] w-4 h-4 bg-coral-500 rounded-full text-[10px] text-white flex items-center justify-center group-hover:animate-pulse">!</span>
                </div>
              </div>
              
              {feedback && (
                <div className="mt-6 text-sm text-brand-600">
                  フィードバックありがとうございます！
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="py-8 border-t border-neutral-100">
        <div className="container mx-auto px-8">
          <div className="text-center">
            <p className="text-sm font-body text-text-light">
              © {new Date().getFullYear()} <span className="logo">LazyWhiz</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
} 