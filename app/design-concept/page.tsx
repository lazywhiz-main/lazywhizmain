import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DesignConcept() {
  // サンプル記事データ
  const articles = [
    {
      id: 'efficiency-tips',
      title: '【実践】会議の時間を半分に減らす5つのテクニック',
      category: '生産性向上',
      description: '無駄な会議に費やしている時間を取り戻しましょう。この記事では、会議時間を効率的に短縮するための実践的なテクニックを紹介します。',
      readTime: '8分',
    },
    {
      id: 'automation-basics',
      title: 'はじめての業務自動化：ノンプログラマーでもできる自動化入門',
      category: '自動化',
      description: 'プログラミングの知識がなくても始められる、シンプルな業務自動化の方法を解説。無料ツールを使った具体的な手順も紹介します。',
      readTime: '12分',
    },
    {
      id: 'decision-making',
      title: '意思決定疲れを解消する「3秒ルール」とは？',
      category: '思考法',
      description: '日々の小さな決断に時間とエネルギーを浪費していませんか？シンプルな「3秒ルール」を活用して、意思決定の効率を劇的に向上させる方法。',
      readTime: '7分',
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-neutral-50">
      {/* 背景装飾要素 - 全体に散りばめる */}
      <div className="fixed top-20 left-10 w-64 h-64 rounded-full bg-[#F5ADA8] opacity-10 blur-3xl"></div>
      <div className="fixed bottom-20 right-10 w-96 h-96 rounded-full bg-brand-500 opacity-5 blur-3xl"></div>
      <div className="fixed top-1/3 right-1/4 w-32 h-32 rounded-full bg-brand-200 opacity-20 blur-xl"></div>
      <div className="fixed bottom-1/4 left-1/3 w-48 h-48 rounded-full bg-[#E2E0FF] opacity-15 blur-2xl"></div>
      
      {/* ハンバーガーメニュー - 閉じた状態 */}
      <div className="fixed top-8 right-8 z-50 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
        <div className="w-5 h-5 flex flex-col justify-between">
          <span className="block w-5 h-0.5 bg-brand-500 rounded-full"></span>
          <span className="block w-3.5 h-0.5 bg-brand-500 rounded-full ml-1.5"></span>
          <span className="block w-5 h-0.5 bg-brand-500 rounded-full"></span>
        </div>
      </div>

      {/* ヘッダー - シンプルなロゴのみ */}
      <header className="py-8 px-10">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-block group">
            <div className="flex items-end">
              <span className="text-2xl font-bold text-brand-500 mr-1 rotate-[-2deg] transition-transform group-hover:rotate-0">Lazy</span>
              <span className="text-2xl font-bold text-text-high group-hover:text-brand-600 transition-colors">Whiz</span>
            </div>
            <p className="text-xs text-text-medium mt-0.5 ml-0.5 italic">賢く怠けるライフハック</p>
          </Link>
        </div>
      </header>

      <main>
        {/* ヒーローセクション - 非対称デザイン */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row items-start">
              {/* 左側コンテンツ - 余白多め */}
              <div className="md:w-3/5 md:pr-16 pt-10 relative z-10">
                <div className="transform rotate-[-1deg] mb-6">
                  <span className="inline-block px-4 py-1.5 bg-brand-200 text-brand-600 rounded-full text-sm font-medium">
                    新しいデザインコンセプト
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  余白と<span className="text-brand-500">遊び心</span>が<br />
                  共存する空間
                </h1>
                
                <p className="text-lg text-text-medium mb-10 leading-relaxed max-w-xl">
                  「賢く怠ける」というコンセプトを視覚的に表現した、
                  リラックス感のあるデザイン。整理された余白の中に、
                  遊び心のあるアクセントを効果的に配置しています。
                </p>
                
                <div className="flex flex-wrap gap-5 items-center">
                  <Link 
                    href="/toolkit"
                    className="inline-flex items-center px-7 py-3.5 bg-brand-500 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:translate-y-[-2px] transform rotate-[-0.5deg]"
                  >
                    <span>ツールキットへ</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                  
                  <button className="text-brand-500 font-medium flex items-center group">
                    <span className="group-hover:underline">詳しく見る</span>
                    <svg className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* 右側の装飾 - デザイン性のある図形 */}
              <div className="md:w-2/5 mt-12 md:mt-0 relative">
                <div className="relative w-full aspect-square">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5ADA8] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] rotate-12"></div>
                  <div className="absolute top-10 right-10 w-64 h-64 border-2 border-dashed border-brand-300 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] rotate-6"></div>
                  <div className="absolute bottom-5 left-5 w-32 h-32 bg-[#E2E0FF] rounded-full opacity-70"></div>
                  
                  {/* リラックスしたイラストを配置する場所 */}
                  <div className="absolute inset-0 flex items-center justify-center text-7xl">
                    🌴
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 特徴セクション - 非対称グリッド */}
        <section className="py-16 md:py-28 relative">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16 relative">
              <div className="inline-block transform rotate-[-1deg]">
                <span className="inline-block px-4 py-1.5 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">
                  デザイン特徴
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-high">
                新しいデザインの<br className="md:hidden" />ポイント
              </h2>
              
              {/* 手書き風の下線 */}
              <div className="h-1 w-24 bg-brand-300 rounded-full mx-auto mt-6 transform rotate-[0.5deg]"></div>
            </div>
            
            {/* 特徴カード - 角度をつけて配置 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {/* カード1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform rotate-[-0.5deg] hover:rotate-0 hover:translate-y-[-5px]">
                <div className="w-16 h-16 bg-brand-100 rounded-xl flex items-center justify-center mb-6 transform rotate-[5deg]">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-high">遊び心のある視覚要素</h3>
                <p className="text-text-medium leading-relaxed">
                  直線的で無機質なデザインではなく、有機的な形や手書き風のアクセントを取り入れることで温かみを演出しています。
                </p>
              </div>
              
              {/* カード2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform rotate-[0.5deg] hover:rotate-0 hover:translate-y-[-5px] md:translate-y-5">
                <div className="w-16 h-16 bg-[#F5ADA8]/30 rounded-xl flex items-center justify-center mb-6 transform rotate-[-5deg]">
                  <span className="text-3xl">🌈</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-high">リラックス感のある色調</h3>
                <p className="text-text-medium leading-relaxed">
                  シャープな原色ではなく、柔らかなパステルカラーとグラデーションで、目に優しく落ち着いた雰囲気を作り出しています。
                </p>
              </div>
              
              {/* カード3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform rotate-[-0.7deg] hover:rotate-0 hover:translate-y-[-5px]">
                <div className="w-16 h-16 bg-[#E2E0FF]/50 rounded-xl flex items-center justify-center mb-6 transform rotate-[7deg]">
                  <span className="text-3xl">🍃</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-text-high">余白を活かしたレイアウト</h3>
                <p className="text-text-medium leading-relaxed">
                  コンテンツを詰め込みすぎず、意図的な余白を設けることで、情報の消化しやすさと視覚的な心地よさを両立させています。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* コンテンツセクション - 記事カード */}
        <section className="py-16 md:py-24 relative">
          <div className="max-w-6xl mx-auto px-6 md:px-10">
            <div className="md:flex items-start justify-between md:mb-16">
              <div className="md:w-1/3 mb-10 md:mb-0">
                <div className="transform rotate-[-0.5deg]">
                  <span className="inline-block px-4 py-1.5 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">
                    コンテンツ表示
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-text-high mb-6">
                  記事カード<br />デザイン
                </h2>
                <p className="text-text-medium leading-relaxed">
                  コンテンツカードも直角的なデザインから脱却し、微妙な角度と余白のバランスを調整することで、親しみやすさと読みやすさを向上させています。
                </p>
              </div>
              
              {/* 記事カード - 不規則な配置 */}
              <div className="md:w-2/3 grid gap-8">
                {articles.map((article, index) => (
                  <div 
                    key={article.id} 
                    className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform 
                      ${index % 2 === 0 ? 'rotate-[-0.5deg] hover:rotate-0' : 'rotate-[0.7deg] hover:rotate-0'} 
                      hover:translate-y-[-5px] ${index === 1 ? 'md:translate-x-8' : index === 2 ? 'md:translate-x-4' : ''}`}
                  >
                    <div className="p-8">
                      <div className="flex flex-wrap items-center justify-between mb-5">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-medium
                          ${index === 0 ? 'bg-brand-200 text-brand-600' : 
                            index === 1 ? 'bg-[#F5ADA8]/30 text-[#E2857B]' : 
                            'bg-[#E2E0FF]/50 text-indigo-600'}`}
                        >
                          {article.category}
                        </span>
                        <span className="text-xs text-text-medium flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          {article.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-text-high leading-snug">{article.title}</h3>
                      <p className="mb-6 text-text-medium">{article.description}</p>
                      <Link 
                        href={`/toolkit/${article.id}`}
                        className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium group"
                      >
                        <span className="group-hover:underline">続きを読む</span>
                        <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

        {/* CTAセクション - 有機的な形状と余白 */}
        <section className="py-24 md:py-32 relative overflow-hidden">
          {/* 背景グラデーション - 有機的な形状 */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5ADA8] to-[#F5C0BB] z-0"></div>
          
          {/* 装飾要素 - 手書き風の波形 */}
          <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-20 text-neutral-50 fill-current">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden transform rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-20 text-neutral-50 fill-current">
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
            </svg>
          </div>
          
          <div className="container relative z-10 px-6 md:px-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                もっと<span className="italic">リラックス</span>して<br />
                効率的に働きませんか？
              </h2>
              <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
                LazyWhizの受託サービスでは、あなたのビジネスに合わせた
                カスタム効率化ソリューションを提供しています。
              </p>
              <Link 
                href="/service" 
                className="inline-flex items-center bg-white text-[#E2857B] hover:bg-neutral-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 rotate-[-0.5deg] hover:rotate-0"
              >
                <span>サービスを見る</span>
                <svg className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
              
              {/* リラックスした装飾 */}
              <div className="mt-16 opacity-80 text-4xl">
                🏖️
              </div>
            </div>
          </div>
        </section>
        
        {/* フィードバックセクション */}
        <section className="py-16 mb-16">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-6">このデザインコンセプトはいかがですか？</h2>
            <p className="text-text-medium mb-8">
              より「賢く怠ける」ためのデザインについてのフィードバックをお待ちしています。
            </p>
            
            <div className="flex justify-center space-x-6">
              <button className="bg-white border border-brand-300 hover:border-brand-500 px-6 py-3 rounded-xl transition-colors transform hover:scale-105">
                👍 いいね！
              </button>
              <button className="bg-white border border-brand-300 hover:border-brand-500 px-6 py-3 rounded-xl transition-colors transform hover:scale-105">
                💡 アイデアがある
              </button>
              <button className="bg-white border border-brand-300 hover:border-brand-500 px-6 py-3 rounded-xl transition-colors transform hover:scale-105">
                🔄 検討が必要
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* フローティングナビゲーション */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg p-1.5 flex items-center">
          <Link 
            href="/" 
            className="w-10 h-10 flex items-center justify-center text-brand-500 hover:bg-brand-50 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </Link>
          <Link 
            href="/toolkit" 
            className="w-10 h-10 flex items-center justify-center text-brand-500 hover:bg-brand-50 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
            </svg>
          </Link>
          <Link 
            href="/service" 
            className="w-10 h-10 flex items-center justify-center text-brand-500 hover:bg-brand-50 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </Link>
          <Link 
            href="/contact" 
            className="w-10 h-10 flex items-center justify-center text-brand-500 hover:bg-brand-50 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 