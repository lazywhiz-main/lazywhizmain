import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// サービスデータ（実際のプロジェクトではAPIやCMSからデータを取得することが望ましい）
const services = {
  strategy: {
    title: '戦略立案',
    description: 'ビジネス目標を達成するための最適な技術戦略を共に考え、実行計画を策定します。',
    longDescription: 'テクノロジーの導入や改善は、ビジネス戦略と密接に結びついています。LazyWhizでは、あなたのビジネス目標を理解し、それを達成するための効率的な技術戦略を共に考えます。市場動向やユーザーニーズの分析に基づき、最適な技術選択と実行計画を提案します。',
    features: [
      'マーケット分析と競合調査',
      'テクノロジースタック選定',
      'ロードマップ作成と優先順位付け',
      'KPI設定とモニタリング計画',
      'リスク評価と対策立案'
    ],
    benefits: [
      '明確な方向性と具体的な行動計画が得られる',
      '無駄な投資やリソース配分を避けられる',
      '最新技術トレンドを活用できる',
      '長期的な成長を見据えた基盤を構築できる'
    ],
    casestudy: {
      title: 'ECサイトの戦略的リニューアル',
      description: '老朽化したECプラットフォームの刷新に向けて、市場分析とユーザー行動の調査を実施。モバイルファーストのアプローチと段階的なマイグレーション戦略を立案し、売上30%増と運用コスト削減を達成。',
    },
    icon: '🧠',
    color: 'bg-blue-100'
  },
  development: {
    title: 'Webアプリ開発',
    description: '使いやすく、拡張性の高いWebアプリケーションを効率的に開発します。',
    longDescription: '現代のビジネスには、効率的で使いやすいWebアプリケーションが不可欠です。LazyWhizでは、最新のフレームワークと開発手法を駆使して、あなたのニーズに合わせたカスタムWebアプリケーションを開発します。フロントエンドの美しいUIから、堅牢なバックエンドまで、トータルなソリューションを提供します。',
    features: [
      'モダンなフロントエンド開発（React, Vue.js等）',
      'スケーラブルなバックエンド構築',
      'RESTful APIまたはGraphQL API設計・開発',
      'データベース設計と最適化',
      'セキュリティ対策とパフォーマンスチューニング'
    ],
    benefits: [
      'ユーザーにとって直感的で使いやすいインターフェース',
      '将来の拡張や変更に柔軟に対応できる設計',
      '高いパフォーマンスと安定性',
      'セキュアな実装によるデータ保護'
    ],
    casestudy: {
      title: '業務効率化ダッシュボードの開発',
      description: '複数システムのデータを一元管理するためのダッシュボードを開発。リアルタイムデータ連携とカスタマイズ可能なレポート機能を実装し、意思決定の迅速化と業務効率の40%向上を実現。',
    },
    icon: '💻',
    color: 'bg-indigo-100'
  },
  mobile: {
    title: 'モバイルアプリ開発',
    description: 'iOSとAndroid向けの高品質なモバイルアプリケーションを提供します。',
    longDescription: 'スマートフォンが生活の中心となった今日、質の高いモバイルアプリは重要な差別化要因です。LazyWhizでは、iOSとAndroid両方のプラットフォームに対応したアプリ開発を行います。ネイティブ開発からクロスプラットフォーム開発まで、プロジェクトに最適な手法を選択し、ユーザー体験を最大化します。',
    features: [
      'ネイティブアプリ開発（Swift, Kotlin）',
      'クロスプラットフォーム開発（React Native, Flutter）',
      'モバイル特化型UI/UXデザイン',
      'オフライン機能とデータ同期',
      'プッシュ通知やバックグラウンド処理の実装'
    ],
    benefits: [
      'スムーズで直感的な操作性',
      'デバイスの機能を最大限に活用',
      'オフラインでも利用可能な堅牢な設計',
      'バッテリー消費を抑えた効率的な実装'
    ],
    casestudy: {
      title: 'フィールドワーク支援アプリの開発',
      description: '現場作業員向けのモバイルアプリを開発。オフラインでのデータ収集と、位置情報を活用した作業指示機能を実装。作業報告の時間を75%削減し、リアルタイムでの進捗管理を可能に。',
    },
    icon: '📱',
    color: 'bg-green-100'
  },
  automation: {
    title: '業務自動化',
    description: '繰り返し作業を自動化し、本質的な業務に集中できる環境を構築します。',
    longDescription: '単調で繰り返しの多い作業は、人的ミスのリスクが高く、貴重な人材のリソースを浪費します。LazyWhizの業務自動化サービスでは、現在の業務フローを詳細に分析し、自動化可能なプロセスを特定。カスタムツールやRPAを活用して、効率的かつ正確な自動処理システムを構築します。',
    features: [
      'ビジネスプロセス分析と自動化ポイントの特定',
      'カスタム自動化ツールの開発',
      'RPA（Robotic Process Automation）の導入',
      'レポート自動生成システムの構築',
      'APIを活用したシステム間連携の実現'
    ],
    benefits: [
      '人的ミスの削減と品質の向上',
      '定型業務からの解放による創造的業務への集中',
      'コスト削減と処理速度の向上',
      'データ分析基盤の強化'
    ],
    casestudy: {
      title: '経理プロセスの自動化',
      description: '請求書処理と経費精算の自動化システムを開発。OCRとAIを活用したデータ抽出と、会計システムとの自動連携を実現。処理時間を90%削減し、月次決算作業を2日間短縮。',
    },
    icon: '⚙️',
    color: 'bg-amber-100'
  }
};

// 動的パラメータの型定義
type Props = {
  params: {
    id: string
  }
}

export default function ServiceDetail({ params }: Props) {
  const { id } = params;
  
  // IDに対応するサービスが存在しない場合は404ページにリダイレクト
  if (!services[id as keyof typeof services]) {
    notFound();
  }
  
  const service = services[id as keyof typeof services];

  return (
    <div>
      {/* Header */}
      <section className={`py-16 ${service.color}`}>
        <div className="container">
          <div className="flex items-center mb-8">
            <Link href="/service" className="text-brand-500 hover:text-brand-600">
              ← サービス一覧に戻る
            </Link>
          </div>
          <div className="flex items-center mb-6">
            <span className="text-5xl mr-4">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-lg max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">サービス概要</h2>
              <p className="mb-8 text-lg">
                {service.longDescription}
              </p>
              
              <h3 className="text-2xl font-bold mb-4 text-brand-500">提供サービス</h3>
              <ul className="space-y-3 mb-12">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-500 mr-2 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-2xl font-bold mb-4 text-brand-500">導入メリット</h3>
              <ul className="space-y-3 mb-12">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-brand-500 mr-2 mt-1">●</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <div className="bg-white p-6 rounded shadow sticky top-8">
                <h3 className="text-xl font-bold mb-4 border-b pb-2">お問い合わせ</h3>
                <p className="mb-6">
                  {service.title}に関するご質問や見積もりのご依頼は、こちらからお気軽にどうぞ。
                </p>
                <Link href="/contact" className="btn-primary block text-center">
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">導入事例</h2>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow">
            <h3 className="text-2xl font-bold mb-4">{service.casestudy.title}</h3>
            <p className="text-lg">
              {service.casestudy.description}
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">関連サービス</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(services)
              .filter(([serviceId]) => serviceId !== id)
              .slice(0, 3)
              .map(([serviceId, relatedService]) => (
                <div key={serviceId} className="bg-white p-6 rounded shadow">
                  <div className="text-3xl mb-2">{relatedService.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                  <p className="mb-4">{relatedService.description}</p>
                  <Link 
                    href={`/service/${serviceId}`}
                    className="text-brand-500 hover:text-brand-600"
                  >
                    詳細を見る →
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-500 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">プロジェクトのご相談はお気軽に</h2>
          <p className="max-w-2xl mx-auto mb-8">
            LazyWhizは、あなたのビジネス課題を「賢く怠ける」視点で解決します。まずはお気軽にご相談ください。
          </p>
          <Link href="/contact" className="bg-white text-brand-500 hover:bg-opacity-90 px-6 py-3 rounded font-medium transition-colors">
            お問い合わせ
          </Link>
        </div>
      </section>
    </div>
  );
} 