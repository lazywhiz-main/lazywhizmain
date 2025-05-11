import React from 'react';
import Link from 'next/link';
import ArticleFilter from '../../components/ArticleFilter';

export default function Toolkit() {
  // 記事データ
  const articles = [
    {
      id: 'efficiency-tips',
      title: '【実践】会議の時間を半分に減らす5つのテクニック',
      category: '生産性向上',
      description: '無駄な会議に費やしている時間を取り戻しましょう。この記事では、会議時間を効率的に短縮するための実践的なテクニックを紹介します。',
      date: '2023-12-15',
      readTime: '8分',
      isRecommended: true
    },
    {
      id: 'automation-basics',
      title: 'はじめての業務自動化：ノンプログラマーでもできる自動化入門',
      category: '自動化',
      description: 'プログラミングの知識がなくても始められる、シンプルな業務自動化の方法を解説。無料ツールを使った具体的な手順も紹介します。',
      date: '2023-11-28',
      readTime: '12分'
    },
    {
      id: 'decision-making',
      title: '意思決定疲れを解消する「3秒ルール」とは？',
      category: '思考法',
      description: '日々の小さな決断に時間とエネルギーを浪費していませんか？シンプルな「3秒ルール」を活用して、意思決定の効率を劇的に向上させる方法。',
      date: '2023-10-30',
      readTime: '7分'
    },
    {
      id: 'remote-work',
      title: 'リモートワークでの「ディープワーク」実現法',
      category: '集中力',
      description: '在宅勤務での集中力低下に悩んでいませんか？環境設定から時間管理まで、リモートワークで深い集中状態を作り出すための実践的なアプローチ。',
      date: '2023-09-18',
      readTime: '10分',
      isNew: true
    },
    {
      id: 'ai-tools',
      title: '【2023年版】賢く使いこなしたいAI生産性ツール10選',
      category: 'AIツール',
      description: '最新のAIツールを活用して日々の業務を効率化。テキスト作成、画像生成、データ分析など、目的別のオススメツールとその活用法を紹介。',
      date: '2023-08-25',
      readTime: '15分'
    },
    {
      id: 'digital-minimalism',
      title: 'デジタル・ミニマリズム：オンライン生活を最適化する',
      category: 'デジタルウェルビーイング',
      description: 'デジタルツールやサービスの氾濫があなたの生産性を下げていませんか？必要なものだけを残し、オンライン生活をシンプルに整理する方法。',
      date: '2023-07-10',
      readTime: '9分'
    }
  ];

  // ミニツールデータ
  const tools = [
    {
      id: 'pomodoro',
      title: 'LazyPomodoro',
      description: 'カスタマイズ可能なポモドーロタイマー。作業と休憩のバランスを取りながら、生産性を向上させましょう。',
      icon: '⏱️',
      status: 'ready', // 実装済み
      isPopular: true
    },
    {
      id: 'note-taker',
      title: 'SmartNotes',
      description: 'AIアシスト機能付きのシンプルノートアプリ。会議の記録や素早いメモ取りに最適です。',
      icon: '📝',
      status: 'coming-soon', // 近日公開
      isNew: true
    },
    {
      id: 'task-prioritizer',
      title: 'タスク優先度マトリックス',
      description: '重要性と緊急性に基づいてタスクを整理し、本当に集中すべき作業を明確にします。',
      icon: '📊',
      status: 'coming-soon', // 近日公開
    },
    {
      id: 'meeting-calculator',
      title: '会議コスト計算機',
      description: '参加者の人数と時間から会議の実コストを算出。本当にその会議が必要かを判断する指標に。',
      icon: '💰',
      status: 'coming-soon', // 近日公開
    }
  ];

  // カテゴリーでフィルタリングするための準備
  const categories = ['すべて', ...Array.from(new Set(articles.map(article => article.category)))];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-16 flex items-center overflow-hidden">
        {/* 背景グラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-200/40 to-neutral-50 z-0"></div>
        
        {/* 装飾要素 */}
        <div className="absolute right-0 top-10 w-1/3 h-1/2 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-64 h-64 bg-coral-200 rounded-full opacity-5"></div>
        <div className="absolute right-1/4 bottom-10 w-32 h-32 bg-brand-200 rounded-full opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block mb-6 px-4 py-2 bg-brand-200 text-brand-600 rounded-full text-sm font-ui">知恵とツール</span>
            <h1 className="text-4xl md:text-5xl font-heading mb-6">
              <span className="text-brand-500">ツール</span>キット
            </h1>
            <p className="text-lg md:text-xl text-text-medium font-body mb-8 max-w-2xl">
              頑張りすぎず、賢く生きるための記事とミニツールコレクション。効率化のヒントからプラクティカルなWebツールまで、あなたの生産性向上をサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 relative">
        {/* 装飾要素 */}
        <div className="absolute left-0 top-1/4 w-48 h-48 bg-brand-200 rounded-full opacity-30 -translate-x-1/3"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-ui mb-4">ナレッジ</span>
            <h2 className="text-4xl font-heading text-text-high">記事</h2>
            <p className="mt-4 text-text-medium font-body max-w-2xl mx-auto">頑張りすぎず、賢く生きるためのアイデアと実践的なテクニック</p>
          </div>
          
          {/* フィルター機能を別コンポーネントに分離 */}
          <ArticleFilter 
            articles={articles}
            categories={categories}
          />
          
          <div className="text-center mt-16">
            <Link href="/toolkit/archive" className="inline-flex items-center justify-center bg-white border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-4 rounded-lg font-ui transition-all">
              <span>記事アーカイブを見る</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 section-alt relative overflow-hidden">
        {/* 装飾要素 */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-brand-500 rounded-full opacity-10 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-200 rounded-full opacity-30 -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-ui mb-4">ユーティリティ</span>
            <h2 className="font-heading text-text-high">ミニツール</h2>
            <p className="mt-4 text-text-medium font-body max-w-2xl mx-auto">日々の作業を効率化するための便利なWebツール</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {tools.map((tool) => (
              <div key={tool.id} className={
                tool.isPopular ? 'tool-card card-highlighted' : 
                tool.isNew ? 'tool-card card-new' :
                'tool-card'
              }>
                <div className="p-5 text-center tool-card-content">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 ${
                    tool.isPopular ? 'bg-orange-200/30' : 
                    tool.isNew ? 'bg-coral-200/30' :
                    'bg-brand-100'
                  }`}>{tool.icon}</div>
                  <h3 className="text-xl font-heading mb-3 text-text-high">{tool.title}</h3>
                  <p className="mb-4 text-text-medium font-body">{tool.description}</p>
                  {tool.status === 'ready' ? (
                    <Link
                      href={`/toolkit/tools/${tool.id}`}
                      className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg font-ui transition-all text-sm"
                    >
                      <span>ツールを使う</span>
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                  ) : (
                    <div className="flex flex-col items-center">
                      <button
                        className="inline-flex items-center justify-center bg-neutral-200 text-text-medium cursor-not-allowed px-4 py-2 rounded-lg font-ui mb-1 text-sm"
                        disabled
                      >
                        <span>近日公開</span>
                      </button>
                      {tool.isNew && (
                        <span className="mt-1 inline-block px-2 py-0.5 bg-coral-200/20 text-coral-500 text-xs rounded-full ui-element">
                          NEW
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 relative overflow-hidden">
        {/* 装飾要素 */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-brand-200 rounded-full opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-lg border border-neutral-200 relative overflow-hidden">
            {/* 装飾要素 */}
            <div className="absolute -right-24 -bottom-24 w-64 h-64 bg-brand-200 rounded-full opacity-20"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <span className="inline-block mb-2 px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-ui">定期配信</span>
                <h2 className="text-3xl font-heading text-text-high">LazyWhiz ニュースレター</h2>
                <p className="mt-4 text-text-medium font-body">最新の記事やツール、「頑張りすぎず、賢く生きる」ためのヒントを定期的にお届けします。</p>
              </div>
              
              <form className="space-y-6" action="/api/newsletter" method="post">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="メールアドレスを入力"
                    className="flex-grow px-5 py-3 border border-neutral-200 rounded-lg focus:outline-none focus:border-brand-300 focus:ring-1 focus:ring-brand-500 text-text-medium font-body"
                    required
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-coral-200 hover:bg-coral-500 text-white px-8 py-3 rounded-lg font-ui transition-all"
                  >
                    <span>登録する</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
                <p className="text-xs text-text-medium text-center font-body">
                  ※ 配信は月2回程度です。いつでも解除できます。
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-24 section-alt relative overflow-hidden">
        {/* 装飾要素 */}
        <div className="absolute left-0 top-0 w-64 h-64 bg-brand-200 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-500 rounded-full opacity-10 translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-orange-200/30 text-orange-600 rounded-full text-sm font-ui mb-4">おすすめ</span>
            <h2 className="font-heading text-text-high">人気記事</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {articles.filter(article => article.isRecommended || [0, 1, 2].includes(articles.indexOf(article))).slice(0, 3).map((article, index) => (
              <div key={article.id} className={
                article.isRecommended ? 'card-highlighted' : 
                article.isNew ? 'card-new' :
                'card'
              }>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-brand-200 text-brand-600 px-3 py-1 text-xs rounded-full font-ui">
                      {article.category}
                    </span>
                    {article.isRecommended && (
                      <span className="px-2 py-0.5 bg-orange-200/20 text-orange-600 text-xs rounded-full ui-element">
                        おすすめ
                      </span>
                    )}
                    {article.isNew && (
                      <span className="px-2 py-0.5 bg-coral-200/20 text-coral-500 text-xs rounded-full ui-element">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-heading mb-3 text-text-high">{article.title}</h3>
                  <Link 
                    href={`/toolkit/${article.id}`}
                    className={`inline-flex items-center font-ui ${
                      article.isRecommended ? 'text-orange-300 hover:text-orange-600' :
                      article.isNew ? 'text-coral-500 hover:text-coral-600' :
                      'text-brand-500 hover:text-brand-600'
                    }`}
                  >
                    <span>続きを読む</span>
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-coral-200 to-coral-500 z-0"></div>
        
        {/* 装飾要素 */}
        <div className="absolute left-0 top-0 w-full h-full bg-coral-500 opacity-30 skew-y-6 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-coral-200 rounded-full opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-heading mb-8">もっと効率的に<br />働きたいですか？</h2>
            <p className="text-xl font-body mb-12 opacity-90">
              LazyWhizの受託サービスでは、あなたのビジネスに合わせたカスタム効率化ソリューションを提供しています。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/service" className="inline-flex items-center justify-center bg-white text-coral-500 hover:bg-neutral-50 px-10 py-5 rounded-lg font-ui text-lg transition-all">
                <span>サービスを見る</span>
                <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white/10 px-10 py-5 rounded-lg font-ui text-lg transition-all">
                <span>お問い合わせ</span>
                <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 