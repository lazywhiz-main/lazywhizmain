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
              <span className="text-brand-500">共創</span>の取り組み
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-8 max-w-2xl">
              LazyWhizが共に歩んだプロジェクトをご紹介します。効率化だけでなく、試行錯誤や挑戦の過程を通じて、クライアントと共に<span className="font-medium">成長と発見</span>を得た軌跡です。
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
                      価値ある発見
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
              意味あるプロジェクト選定の鍵は、目先の効率だけでなく長期的な価値にあります。私たちは「何を作るか」と同じくらい「何を作らないか」を大切にし、本質的な課題に集中するアプローチを実践しています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-neutral-50 p-3 rounded">
                <div className="font-medium mb-1 text-brand-600">優先度の見極め</div>
                <p>意味と価値の再定義を通じて真に挑戦すべき課題を特定</p>
              </div>
              <div className="bg-neutral-50 p-3 rounded">
                <div className="font-medium mb-1 text-brand-600">挑戦と実験</div>
                <p>失敗を学びに変える小さなサイクルで進化を加速</p>
              </div>
              <div className="bg-neutral-50 p-3 rounded">
                <div className="font-medium mb-1 text-brand-600">創造的な余白</div>
                <p>本質以外を省くことで生まれる創造と発見の時間</p>
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
            <h2 className="text-3xl font-bold mb-4">本質を見極める開発アプローチ</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              本当に価値あることに集中し、意味のある成果を生み出すためのLazyWhiz独自の方法論
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
                「賢く怠ける」哲学をベースに、無駄を省きながらも挑戦と創造性を大切にする開発アプローチを実践します。
              </p>
              <div className="text-sm inline-block bg-neutral-50 px-3 py-1 rounded-full">
                <span className="text-brand-600 font-medium">効果:</span> 創造的な時間の確保
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
              共創による価値創出のストーリー
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
                  LazyWhizとの協働は新しい視点をもたらしました。単なる効率化ではなく、私たちが本当に取り組むべき課題を見極め、<span className="font-medium text-brand-600">意味のある成果</span>に集中できたことで、チーム全体に新しい価値観が生まれました。
                </p>
                <div className="mb-4">
                  <p className="font-bold">田中 誠</p>
                  <p className="text-sm text-text-medium">株式会社テックイノベーション CTO</p>
                </div>
                <div className="text-sm bg-neutral-50 p-3 rounded-lg">
                  <p className="font-medium text-brand-600">LazyWhizからの回答:</p>
                  <p>田中様、貴重なフィードバックをありがとうございます。「何をしないか」を決める勇気と「本質に集中する」姿勢が素晴らしい結果につながりました。私たちも多くを学ばせていただきました。</p>
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
                  最初は単なる業務効率化を期待していましたが、LazyWhizは私たちの課題の本質を探り、新しい可能性を示してくれました。失敗を恐れずに実験できる環境を作り、<span className="font-medium text-brand-600">創造的な挑戦</span>を後押ししてくれたことが最大の価値でした。
                </p>
                <div className="mb-4">
                  <p className="font-bold">佐藤 美咲</p>
                  <p className="text-sm text-text-medium">グローバルマーケティング株式会社 マーケティング部長</p>
                </div>
                <div className="text-sm bg-neutral-50 p-3 rounded-lg">
                  <p className="font-medium text-brand-600">LazyWhizからの回答:</p>
                  <p>佐藤様、共に挑戦できたことに感謝します。「効率化」と「創造性」は対立するものではなく、本質的な価値に集中することで両立できると信じています。今後も一緒に新しい可能性を探求していきましょう。</p>
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
            <h2 className="text-3xl font-bold mb-6">あなたのプロジェクトも<br/>価値ある挑戦の物語に</h2>
            <p className="text-xl opacity-90 mb-8">
              ただ効率化するだけでなく<br/>
              <span className="font-bold underline">本当に意味のあることに集中</span>する体験を。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-brand-600 hover:bg-opacity-90 px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                60分で対話セッション
              </Link>
              <Link href="/service" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-4 rounded-lg font-medium transition-all">
                サービス一覧を見る
              </Link>
            </div>
            <p className="mt-6 text-sm opacity-80">
              初回相談は無料・プロジェクトの可能性を一緒に探求・あなたのペースで進行
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 