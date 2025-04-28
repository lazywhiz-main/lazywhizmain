import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// プロジェクトデータ（実際のプロジェクトではAPIやCMSからデータを取得することが望ましい）
const projects = {
  '1': {
    title: 'クラウド管理ダッシュボード',
    category: 'Webアプリ',
    client: '株式会社テックイノベーション',
    period: '2023年4月 〜 2023年8月',
    technologies: ['React', 'Next.js', 'GraphQL', 'AWS', 'Tailwind CSS'],
    description: '複数のクラウドサービスとSaaSツールを一元管理するためのダッシュボードアプリケーション。リアルタイムデータ連携とカスタマイズ可能なレポート機能を実装し、業務効率の向上を実現。',
    challenge: 'クライアントは複数のクラウドサービスとSaaSツールを利用しており、それぞれ個別に管理する必要があったため、効率的な運用が難しい状況でした。また、サービス間のデータ連携が手動で行われており、リアルタイムな状況把握が困難でした。',
    solution: 'APIを活用した統合ダッシュボードを設計し、各サービスのデータを一元的に表示・管理できるインターフェースを構築しました。GraphQLを採用することで、必要なデータのみを効率的に取得し、パフォーマンスを最適化。また、AWSのサーバーレスアーキテクチャを活用し、スケーラブルで運用コストの低いシステムを実現しました。',
    results: [
      'データ確認作業の時間を約70%削減',
      'レポート生成の自動化により、月次レポート作成時間を90%削減',
      'リアルタイムアラートにより、問題の早期発見・対応が可能に',
      'カスタマイズ可能なダッシュボードにより、各部門の特定ニーズに対応'
    ],
    testimonial: {
      quote: 'LazyWhizのダッシュボード開発により、複数システムの管理が驚くほど簡単になりました。特にリアルタイムデータの可視化は意思決定の迅速化に大きく貢献しています。',
      author: '田中 誠',
      position: 'CTO'
    },
    screens: [
      { caption: 'メインダッシュボード画面' },
      { caption: 'データ分析ビュー' },
      { caption: 'アラート設定画面' }
    ]
  },
  '2': {
    title: 'スマートワークアプリ',
    category: 'モバイルアプリ',
    client: 'WorkSmart株式会社',
    period: '2022年7月 〜 2022年12月',
    technologies: ['Flutter', 'Firebase', 'Swift', 'Kotlin', 'Cloud Functions'],
    description: 'リモートワーク環境下でのタスク管理と時間追跡を効率化するモバイルアプリ。オフラインモードや同期機能を備え、どこでも生産性を維持できるツールを提供。',
    challenge: 'リモートワークの普及に伴い、分散した環境での効率的なタスク管理と時間追跡の需要が高まっていました。特にオフライン環境でも利用でき、後にデータを同期できるソリューションが求められていました。',
    solution: 'Flutterを採用してクロスプラットフォーム開発を行い、iOS・Android両方に対応したアプリを効率的に開発。オフライン使用を可能にするローカルデータベースと、オンライン復帰時の自動同期機能を実装しました。また、バックグラウンドでの時間追跡や位置情報との連携など、モバイル端末の特性を活かした機能も搭載しています。',
    results: [
      'タスク管理の効率が45%向上',
      'プロジェクト進捗の可視化により、リソース配分の最適化を実現',
      'オフライン作業のデータ損失がゼロに',
      'チーム間のコミュニケーションとコラボレーションが向上'
    ],
    testimonial: {
      quote: 'このアプリは私たちのリモートワーク環境を一変させました。特にオフライン機能は、移動中や不安定なネット環境でも生産性を維持するのに役立っています。',
      author: '鈴木 健太',
      position: 'プロダクトマネージャー'
    },
    screens: [
      { caption: 'タスク管理画面' },
      { caption: '時間追跡機能' },
      { caption: 'プロジェクトダッシュボード' }
    ]
  },
  '3': {
    title: 'マーケティングオートメーション基盤',
    category: '業務自動化',
    client: 'グローバルマーケティング株式会社',
    period: '2023年1月 〜 2023年5月',
    technologies: ['Python', 'Node.js', 'GCP', 'Zapier', 'BigQuery'],
    description: 'マーケティング活動の自動化基盤の構築。データ収集からキャンペーン実行、分析レポート生成までの一連のプロセスを自動化し、運用コストを大幅に削減。',
    challenge: 'クライアントは複数のマーケティングチャネルを運用しており、データ収集、分析、キャンペーン実行、効果測定など、多くの作業が手動で行われていました。これにより、リソースの多くがルーチンワークに費やされ、戦略的な取り組みへの時間が限られていました。',
    solution: 'Python と Node.js を活用したカスタム自動化スクリプトを開発し、Google Cloud Platform 上にスケーラブルなデータパイプラインを構築。Zapier との連携により、様々なマーケティングツール間のワークフローを自動化しました。また、BigQuery を活用した分析基盤により、効果測定とレポート生成のプロセスも完全に自動化しています。',
    results: [
      'マーケティング運用工数を60%削減',
      'データ分析とレポート作成の時間を85%削減',
      'キャンペーン展開のリードタイムを50%短縮',
      'マーケティングROIが35%向上'
    ],
    testimonial: {
      quote: '自動化プロジェクトを依頼しましたが、単なる技術導入ではなく、ビジネスプロセス全体を最適化する視点で提案してくれました。結果として、想定以上のコスト削減と業務効率化を実現できました。',
      author: '佐藤 美咲',
      position: 'マーケティング部長'
    },
    screens: [
      { caption: 'データ分析ダッシュボード' },
      { caption: 'ワークフロー設計画面' },
      { caption: '自動レポート生成システム' }
    ]
  }
};

// 動的パラメータの型定義
type Props = {
  params: {
    id: string
  }
}

export default function WorkDetail({ params }: Props) {
  const { id } = params;
  
  // IDに対応するプロジェクトが存在しない場合は404ページにリダイレクト
  if (!projects[id as keyof typeof projects]) {
    notFound();
  }
  
  const project = projects[id as keyof typeof projects];

  return (
    <div>
      {/* Header */}
      <section className="py-16 bg-brand-200">
        <div className="container">
          <div className="flex items-center mb-8">
            <Link href="/works" className="text-brand-500 hover:text-brand-600">
              ← 実績一覧に戻る
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>
          <div className="flex items-center mb-4">
            <span className="bg-brand-500 text-white px-3 py-1 text-sm rounded-full mr-3">
              {project.category}
            </span>
            <span className="text-text-medium">
              {project.period}
            </span>
          </div>
          <p className="text-lg max-w-3xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">プロジェクト概要</h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-brand-500">課題</h3>
                <p className="mb-6">
                  {project.challenge}
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-brand-500">ソリューション</h3>
                <p className="mb-6">
                  {project.solution}
                </p>
                
                <h3 className="text-2xl font-bold mb-4 text-brand-500">成果</h3>
                <ul className="space-y-2 mb-6">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-500 mr-2 mt-1">✓</span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Screenshots (Placeholder) */}
              <h3 className="text-2xl font-bold mb-6">スクリーンショット</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {project.screens.map((screen, index) => (
                  <div key={index} className="bg-neutral-700 aspect-video rounded overflow-hidden flex items-center justify-center">
                    <p className="text-white text-center p-4">{screen.caption}</p>
                  </div>
                ))}
              </div>
              
              {/* Testimonial */}
              {project.testimonial && (
                <div className="bg-white p-8 rounded shadow mb-12 relative">
                  <div className="text-5xl text-brand-200 absolute top-4 left-4">"</div>
                  <div className="relative z-10">
                    <p className="mb-6 text-lg italic">
                      {project.testimonial.quote}
                    </p>
                    <div>
                      <p className="font-bold">{project.testimonial.author}</p>
                      <p className="text-sm text-text-medium">{project.client} {project.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <div className="bg-white p-6 rounded shadow sticky top-8">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">プロジェクト情報</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm text-text-medium">クライアント</h4>
                    <p>{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-sm text-text-medium">期間</h4>
                    <p>{project.period}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-sm text-text-medium">カテゴリー</h4>
                    <p>{project.category}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-sm text-text-medium">使用技術</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-brand-200 text-text-high px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary block text-center">
                    同様のプロジェクトを相談する
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">関連プロジェクト</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(projects)
              .filter(([projectId]) => projectId !== id)
              .slice(0, 3)
              .map(([projectId, relatedProject]) => (
                <div key={projectId} className="bg-white rounded shadow overflow-hidden">
                  <div className="aspect-video bg-neutral-700 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="bg-brand-500 text-white px-2 py-1 text-xs rounded">
                        {relatedProject.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedProject.title}</h3>
                    <p className="mb-4 text-sm">{relatedProject.description.substring(0, 100)}...</p>
                    <Link 
                      href={`/works/${projectId}`}
                      className="text-brand-500 hover:text-brand-600"
                    >
                      詳細を見る →
                    </Link>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">あなたのプロジェクトも成功事例に</h2>
          <p className="max-w-2xl mx-auto mb-8">
            LazyWhizの「賢く怠ける」アプローチで、あなたのビジネス課題を解決しませんか？まずはお気軽にご相談ください。
          </p>
          <Link href="/contact" className="bg-white text-brand-500 hover:bg-opacity-90 px-6 py-3 rounded font-medium transition-colors">
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
} 