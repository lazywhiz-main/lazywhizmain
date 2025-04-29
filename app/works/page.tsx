import React from 'react';
import Link from 'next/link';

export default function Works() {
  // 実績データ（実際のプロジェクトではAPIやCMSからデータを取得することが望ましい）
  const projects = [
    {
      id: '1',
      title: 'クラウド管理ダッシュボード',
      category: 'Webアプリ',
      technologies: ['React', 'Next.js', 'GraphQL', 'AWS'],
      description: '複数のクラウドサービスとSaaSツールを一元管理するためのダッシュボードアプリケーション。リアルタイムデータ連携とカスタマイズ可能なレポート機能を実装し、業務効率の向上を実現。',
      year: '2023'
    },
    {
      id: '2',
      title: 'スマートワークアプリ',
      category: 'モバイルアプリ',
      technologies: ['Flutter', 'Firebase', 'Swift', 'Kotlin'],
      description: 'リモートワーク環境下でのタスク管理と時間追跡を効率化するモバイルアプリ。オフラインモードや同期機能を備え、どこでも生産性を維持できるツールを提供。',
      year: '2022'
    },
    {
      id: '3',
      title: 'マーケティングオートメーション基盤',
      category: '業務自動化',
      technologies: ['Python', 'Node.js', 'GCP', 'Zapier'],
      description: 'マーケティング活動の自動化基盤の構築。データ収集からキャンペーン実行、分析レポート生成までの一連のプロセスを自動化し、運用コストを大幅に削減。',
      year: '2023'
    },
    {
      id: '4',
      title: 'ECサイトリニューアル',
      category: 'Webアプリ',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB'],
      description: '老朽化したECサイトのフルリニューアル。最新のフロントエンド技術を採用し、UXを大幅に改善。モバイルファーストのアプローチにより、売上の向上を実現。',
      year: '2021'
    },
    {
      id: '5',
      title: '医療記録管理システム',
      category: 'Webアプリ',
      technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
      description: '医療機関向けの電子カルテシステム。セキュリティを最重視しつつ、操作性と拡張性を兼ね備えたシステムを構築。複数の医療機関での導入実績あり。',
      year: '2022'
    },
    {
      id: '6',
      title: 'フィールドワーク支援アプリ',
      category: 'モバイルアプリ',
      technologies: ['React Native', 'Express', 'MongoDB', 'AWS'],
      description: '現場作業員向けのデータ収集・共有アプリ。オフライン環境でも使用可能で、位置情報と連携した業務指示機能を備える。作業効率の大幅な向上を実現。',
      year: '2023'
    }
  ];

  // カテゴリーでフィルタリングするための準備
  const categories = Array.from(new Set(projects.map(project => project.category)));

  return (
    <div>
      {/* Hero Section - 改良版 */}
      <section className="relative min-h-[60vh] py-16 overflow-hidden bg-gradient-to-br from-brand-200/30 via-white to-neutral-50">
        {/* 装飾要素 */}
        <div className="absolute right-0 top-20 w-64 h-64 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-72 h-72 bg-[#E57373] rounded-full opacity-5"></div>
        <div className="absolute right-1/4 bottom-10 w-32 h-32 bg-brand-200 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-6 px-4 py-2 bg-brand-200 text-brand-600 rounded-full text-sm font-medium">LazyWhiz Works</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-brand-500">効率化</span>の実績紹介
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-8 max-w-2xl">
              LazyWhizが手掛けた主要プロジェクトをご紹介します。「賢く怠ける」アプローチで、クライアントの課題をどのように解決し、どのような<span className="font-medium">時間短縮と価値創出</span>を実現したかをご覧ください。
            </p>
          </div>
        </div>
      </section>

      {/* Projects Filter & List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* フィルター - 改良版 */}
          <div className="mb-12">
            <h2 className="sr-only">プロジェクトフィルター</h2>
            <div className="flex flex-wrap gap-2 justify-center bg-white p-3 rounded-full shadow-md max-w-xl mx-auto">
              <button className="px-5 py-2 bg-brand-500 text-white rounded-full transition-all hover:shadow-md">
                すべて
              </button>
              {categories.map((category, index) => (
                <button key={index} className="px-5 py-2 hover:bg-brand-200 text-text-medium hover:text-text-high rounded-full transition-all">
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* プロジェクトリスト */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="aspect-video bg-gradient-to-br from-neutral-700 to-neutral-900 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5 flex flex-col gap-3">
                    <span className="bg-brand-500 text-white px-3 py-1.5 text-xs rounded-full inline-flex items-center">
                      {project.category}
                    </span>
                    {/* 効率化指標を追加 */}
                    <div className="bg-white/90 text-brand-600 px-3 py-1.5 text-xs rounded-full inline-flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      工数60%削減
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm text-text-medium">{project.year}</span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-brand-200 text-brand-600 px-2 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/works/${project.id}`} className="text-brand-500 hover:text-brand-600 font-medium inline-flex items-center">
                    詳細を見る
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LazyTips Section - 新規追加 */}
      <section className="py-12 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold">LazyTip: プロジェクト選定の賢い基準</h3>
            </div>
            <p className="text-text-medium mb-5">
              効率的なプロジェクト進行の鍵は、初期段階での優先順位付けにあります。私たちは「20:80の法則」を活用し、最も価値を生み出す20%の機能に集中することで、無駄な工数を削減しています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-neutral-50 p-3 rounded">
                <div className="font-medium mb-1 text-brand-600">優先度の見極め</div>
                <p>ビジネスインパクトとユーザー体験への影響度を数値化</p>
              </div>
              <div className="bg-neutral-50 p-3 rounded">
                <div className="font-medium mb-1 text-brand-600">フェーズ分け</div>
                <p>MVP→改善→拡張の3段階で価値を早期に創出</p>
              </div>
              <div className="bg-neutral-50 p-3 rounded">
                <div className="font-medium mb-1 text-brand-600">自動化の徹底</div>
                <p>繰り返し作業の特定と自動化で工数を大幅削減</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach - 改良版 */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-brand-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">Lazy Smart Approach</span>
            <h2 className="text-3xl font-bold mb-4">賢く怠ける開発アプローチ</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              最小限の労力で最大限の成果を実現するための、LazyWhiz独自の方法論
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-200 to-brand-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">1</div>
              <h3 className="text-xl font-bold mb-3">課題の深い理解</h3>
              <p className="mb-4">
                表面的な要件だけでなく、根本的なビジネス課題を理解し、本質的な解決策を導き出します。
              </p>
              <div className="text-sm inline-block bg-neutral-50 px-3 py-1 rounded-full">
                <span className="text-brand-600 font-medium">効果:</span> 的外れな開発を防止
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-200 to-brand-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">2</div>
              <h3 className="text-xl font-bold mb-3">最適な技術選択</h3>
              <p className="mb-4">
                トレンドに流されず、プロジェクトに最適な技術を選択。長期的な視点で持続可能なソリューションを設計します。
              </p>
              <div className="text-sm inline-block bg-neutral-50 px-3 py-1 rounded-full">
                <span className="text-brand-600 font-medium">効果:</span> 保守コスト30%削減
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-200 to-brand-500 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 text-white">3</div>
              <h3 className="text-xl font-bold mb-3">効率と品質の両立</h3>
              <p className="mb-4">
                「賢く怠ける」哲学に基づき、無駄を省きながらも品質を妥協しない開発アプローチを実践します。
              </p>
              <div className="text-sm inline-block bg-neutral-50 px-3 py-1 rounded-full">
                <span className="text-brand-600 font-medium">効果:</span> 開発期間40%短縮
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - 改良版 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">Client Voice</span>
            <h2 className="text-3xl font-bold mb-4">お客様の声</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              「賢く怠ける」アプローチがもたらした具体的な効果
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-5xl text-brand-200 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <p className="mb-4 text-lg italic">
                  LazyWhizのアプローチは非常に効率的でした。無駄な作業を最小化し、本当に価値のある機能開発に集中してくれたおかげで、<span className="font-medium text-brand-600">開発期間を40%短縮</span>しながら期待以上の成果を得られました。
                </p>
                <div className="mb-4">
                  <p className="font-bold">田中 誠</p>
                  <p className="text-sm text-text-medium">株式会社テックイノベーション CTO</p>
                </div>
                <div className="text-sm bg-neutral-50 p-3 rounded-lg">
                  <p className="font-medium text-brand-600">LazyWhizからの回答:</p>
                  <p>田中様、ご信頼いただきありがとうございます。MVP開発のフェーズ分けと自動テスト導入が効率化に貢献できて嬉しいです。今後も「賢く怠ける」アプローチでサポートいたします。</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-5xl text-brand-200 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <div className="flex text-yellow-400 mb-4">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <p className="mb-4 text-lg italic">
                  自動化プロジェクトを依頼しましたが、単なる技術導入ではなく、ビジネスプロセス全体を最適化する視点で提案してくれました。結果として、<span className="font-medium text-brand-600">運用コストを60%削減</span>し、業務効率を大幅に向上できました。
                </p>
                <div className="mb-4">
                  <p className="font-bold">佐藤 美咲</p>
                  <p className="text-sm text-text-medium">グローバルマーケティング株式会社 マーケティング部長</p>
                </div>
                <div className="text-sm bg-neutral-50 p-3 rounded-lg">
                  <p className="font-medium text-brand-600">LazyWhizからの回答:</p>
                  <p>佐藤様、評価いただきありがとうございます。業務プロセスの可視化から始め、真に効果のある自動化ポイントを特定できたことが成功の鍵でした。引き続き改善のサポートをさせていただきます。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - 改良版 */}
      <section className="py-16 bg-gradient-to-br from-brand-500 to-brand-600 text-white relative overflow-hidden">
        {/* 装飾要素 */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-200 opacity-10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">あなたのプロジェクトも<br/>「賢く怠ける」成功事例に</h2>
            <p className="text-xl opacity-90 mb-8">
              従来の方法では<span className="line-through px-2">100時間</span>かかる作業も、<br/>
              LazyWhizなら<span className="font-bold underline">たった40時間</span>で同等以上の成果を。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-brand-600 hover:bg-opacity-90 px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                60分で効率化相談
              </Link>
              <Link href="/service" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-4 rounded-lg font-medium transition-all">
                サービス一覧を見る
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-80">
              初回相談は無料・必要な場合のみお見積り・最短2週間で効果実感
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 