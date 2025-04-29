import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Service() {
  // サービスカラーパレット
  const serviceColors = {
    spark: {
      bg: 'bg-[#F5ADA8]', // ソフトなコーラルピンク
      text: 'text-text-high', // 黒テキスト
      heading: 'text-[#E2857B]' // 見出し用コーラル
    },
    flow: {
      bg: 'bg-brand-200', // ブランドカラーの明るいバージョン
      text: 'text-text-high', // 黒テキスト
      heading: 'text-brand-500' // ブランドメインカラー
    },
    care: {
      bg: 'bg-[#D9D2C5]', // グレージュ
      text: 'text-text-high', // 黒テキスト
      heading: 'text-[#8B917F]' // 濃いめのグレージュ（ニュートラルの700に近い）
    }
  };

  // サービスデータ
  const serviceFlowData = [
    {
      id: 'spark',
      name: 'Soft-Spark',
      subtitle: '〈決める〉',
      description: 'まだ言葉にならない "やりたいこと" を、30 分で 1 枚のコンセプトシートに。フォームに好きな雰囲気や思いを打ち込むだけで、AI が即座に整理・デザイン。モヤモヤしていたアイデアが、眺めてうなずける "カタチ" になって届きます。',
      price: '¥5,500〜（税込）',
      options: '追加ペルソナ／追加ステップ提案　＋¥1,100〜',
      color: serviceColors.spark.bg,
      textColor: serviceColors.spark.text,
      headingColor: serviceColors.spark.heading,
      icon: '✨',
      sample: {
        title: 'Spark Sheetサンプル',
        image: '/images/spark-sample.jpg',
        description: '対話から作成される「Spark Sheet」のサンプルです。アイデアを構造化し、次のステップを明確にします。',
        alt: 'Soft-Sparkサービスの成果物サンプル - Spark Sheet'
      },
      testimonial: {
        quote: 'アイデアが整理されて、次のステップが明確になりました。1時間でこれだけの価値が得られるとは思いませんでした。',
        author: '個人事業主 佐藤様'
      }
    },
    {
      id: 'flow',
      name: 'Quiet-Flow',
      subtitle: '〈作る〉',
      description: 'Spark Sheet を起点に、5 日で "名刺代わり" のブランドサイトを公開。色味や雰囲気を選ぶだけで、トップ・アバウト・コンタクトの 3 ページが整います。手離れよく、でも見た目はきちんと――始動の背中をそっと押すライトパッケージ。',
      price: '¥33,000〜（税込）',
      included: '独自ドメイン設定・レスポンシブ調整',
      options: '追加ページ／イラスト生成／決済連携／ドメイン取得代行／アプリ制作相談／周辺業務サポート　＋¥5,500〜',
      color: serviceColors.flow.bg,
      textColor: serviceColors.flow.text,
      headingColor: serviceColors.flow.heading,
      icon: '🌊',
      sample: {
        title: 'Webサイトサンプル',
        image: '/images/flow-sample.jpg',
        description: 'シンプルでありながら、ブランドの世界観を表現するウェブサイト。レスポンシブデザインで全デバイスに対応。',
        alt: 'Quiet-Flowサービスの成果物サンプル - ウェブサイト'
      },
      testimonial: {
        quote: '思った以上にスムーズに完成しました。複雑な説明なしでも、こちらの意図を汲み取って形にしてくれます。',
        author: 'フリーランスデザイナー 田中様'
      }
    },
    {
      id: 'care',
      name: 'Gentle-Care',
      subtitle: '〈まわす〉',
      description: '公開したサイトを月イチの小さな手入れで健やかにキープ。テキスト差し替えや最新情報の追加はチャットで一声。レイアウト崩れチェックと簡易アクセスレポートを添えてお返しします。（※夜間対応・セキュリティ強化は別オプションでご用意）',
      basePrice: '¥6,600〜（税込）',
      priceDescription: '月あたりの更新回数に基づいて算出',
      options: 'SEO対策／コンテンツ作成／分析レポート　＋お見積り',
      color: serviceColors.care.bg,
      textColor: serviceColors.care.text,
      headingColor: serviceColors.care.heading,
      icon: '💭',
      sample: {
        title: 'レポートサンプル',
        image: '/images/care-sample.jpg',
        description: '毎月お届けする分析レポート。直感的に理解できるデザインで、サイトの状況と次の一手が明確になります。',
        alt: 'Gentle-Careサービスの成果物サンプル - 分析レポート'
      },
      plans: [
        {
          name: 'Lite',
          price: '¥6,600〜',
          features: '月 1 更新・稼働レポート PDF',
          options: '追加更新 +¥3,300〜'
        },
        {
          name: 'Standard',
          price: '¥18,000〜',
          features: '月 2 更新・簡易 SEO・月次 30 min Zoom',
          options: 'AB テスト +¥6,600〜'
        },
        {
          name: 'Growth',
          price: '¥33,000〜',
          features: '週次更新・AB テスト 1 本・当日 Discord レス',
          options: 'ブログ代筆 +¥8,800〜'
        }
      ],
      testimonial: {
        quote: '運用の手間が激減しました。定期的な更新とデータ分析で、むしろ以前より効果が出ています。',
        author: '起業家 山田様'
      }
    }
  ];

  // スモールギフトデータ
  const smallGifts = [
    {
      name: 'Notion ワークシート',
      description: 'アイデア整理・タスクボード',
      price: '¥1,100〜',
      icon: '📝'
    },
    {
      name: 'GPT プロンプトパック',
      description: 'コンセプト磨き用の呪文集',
      price: '¥550〜',
      icon: '✨'
    },
    {
      name: 'Google スプレッドシート',
      description: 'KPI 計算や簡易ロードマップテンプレ',
      price: '¥1,100〜',
      icon: '📊'
    }
  ];

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-16 flex items-center overflow-hidden bg-white">
        {/* 装飾要素 */}
        <div className="absolute right-0 top-10 w-1/3 h-1/2 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-72 h-72 bg-coral-500 rounded-full opacity-5"></div>
        <div className="absolute right-1/4 bottom-10 w-32 h-32 bg-brand-200 rounded-full opacity-40"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block mb-6 px-4 py-2 bg-brand-200 text-brand-600 rounded-full text-sm font-medium">LazyWhiz Service Menu</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#E2857B]">Spark</span> ▶ <span className="text-brand-500">Flow</span> ▶ <span className="text-[#8B917F]">Care</span>
                <span className="block text-text-high text-2xl md:text-3xl mt-4">3つだけ。</span>
              </h1>
              <p className="text-lg md:text-xl text-text-medium mb-6 max-w-2xl mx-auto">
                すべて "ミニマムセットアップ料金" を表示しています。<br />
                追加オプションやボリューム調整により最終金額は上下しますので、詳細は気軽にご相談ください。
              </p>
            </div>
            
            {/* サービスナビゲーション */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {serviceFlowData.map((service) => (
                <a 
                  key={service.id}
                  href={`#${service.id}`}
                  className="px-6 py-3 bg-white border border-neutral-200 rounded-full hover:shadow-md transition-all flex items-center"
                >
                  <span className="mr-2">{service.icon}</span>
                  <span>{service.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Flow */}
      <section className="py-16 relative">
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-[#F5ADA8] via-brand-200 to-[#D9D2C5] top-0"></div>
        
        <div className="container relative">
          {/* Spark */}
          <div id="spark" className="mb-32 scroll-mt-16">
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-start">
              {/* サービスアイコンと名前 */}
              <div className="w-full md:w-1/3">
                <div className={`rounded-2xl p-8 ${serviceFlowData[0].color} text-center shadow-md`}>
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
                    {serviceFlowData[0].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1 text-text-high">{serviceFlowData[0].name}</h3>
                  <p className="text-xl opacity-90 text-text-high">{serviceFlowData[0].subtitle}</p>
                  
                  <div className={`mt-6 ${serviceFlowData[0].textColor} font-medium text-lg`}>
                    {serviceFlowData[0].price}
                  </div>
                  
                  <div className="mt-6">
                    <Link href="/service/spark" className="inline-block px-4 py-2 border border-[#E2857B] text-[#E2857B] rounded-lg hover:bg-[#E2857B] hover:text-white transition-colors">
                      詳しく見る
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* サービス詳細 */}
              <div className="w-full md:w-2/3 bg-white rounded-xl p-8 shadow-md">
                <h4 className={`${serviceFlowData[0].headingColor} font-bold text-lg mb-4`}>内容</h4>
                <p className="text-text-medium text-base mb-6">{serviceFlowData[0].description}</p>
                
                <h4 className={`${serviceFlowData[0].headingColor} font-bold text-lg mb-4`}>主なオプション</h4>
                <p className="text-text-medium mb-6">{serviceFlowData[0].options}</p>
                
                {/* 成果物サンプル */}
                <div className="mt-4 mb-4">
                  <h4 className={`${serviceFlowData[0].headingColor} font-bold text-lg mb-4`}>成果物サンプル</h4>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="aspect-[16/9] relative w-full mb-4 rounded-md overflow-hidden bg-neutral-200">
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                        <span>Spark Sheetイメージ</span>
                      </div>
                    </div>
                    <h5 className="font-medium mb-2">{serviceFlowData[0].sample.title}</h5>
                    <p className="text-sm text-text-medium">{serviceFlowData[0].sample.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Flow */}
          <div id="flow" className="mb-32 scroll-mt-16">
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-start">
              {/* サービスアイコンと名前 */}
              <div className="w-full md:w-1/3">
                <div className={`rounded-2xl p-8 ${serviceFlowData[1].color} text-center shadow-md`}>
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
                    {serviceFlowData[1].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1 text-text-high">{serviceFlowData[1].name}</h3>
                  <p className="text-xl opacity-90 text-text-high">{serviceFlowData[1].subtitle}</p>
                  
                  <div className={`mt-6 ${serviceFlowData[1].textColor} font-medium text-lg`}>
                    {serviceFlowData[1].price}
                  </div>
                  
                  <div className="mt-6">
                    <Link href="/service/flow" className="inline-block px-4 py-2 border border-brand-500 text-brand-500 rounded-lg hover:bg-brand-500 hover:text-white transition-colors">
                      詳しく見る
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* サービス詳細 */}
              <div className="w-full md:w-2/3 bg-white rounded-xl p-8 shadow-md">
                <h4 className={`${serviceFlowData[1].headingColor} font-bold text-lg mb-4`}>内容</h4>
                <p className="text-text-medium text-base mb-6">{serviceFlowData[1].description}</p>
                
                <h4 className={`${serviceFlowData[1].headingColor} font-bold text-lg mb-4`}>含むもの</h4>
                <p className="text-text-medium mb-4">{serviceFlowData[1].included}</p>
                
                <h4 className={`${serviceFlowData[1].headingColor} font-bold text-lg mb-4`}>主なオプション</h4>
                <p className="text-text-medium mb-6">{serviceFlowData[1].options}</p>
                
                {/* 成果物サンプル */}
                <div className="mt-4 mb-4">
                  <h4 className={`${serviceFlowData[1].headingColor} font-bold text-lg mb-4`}>成果物サンプル</h4>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="aspect-[16/9] relative w-full mb-4 rounded-md overflow-hidden bg-neutral-200">
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                        <span>Webサイトイメージ</span>
                      </div>
                    </div>
                    <h5 className="font-medium mb-2">{serviceFlowData[1].sample.title}</h5>
                    <p className="text-sm text-text-medium">{serviceFlowData[1].sample.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Care */}
          <div id="care" className="mb-20 scroll-mt-16">
            <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto items-start">
              {/* サービスアイコンと名前 */}
              <div className="w-full md:w-1/3">
                <div className={`rounded-2xl p-8 ${serviceFlowData[2].color} text-center shadow-md`}>
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
                    {serviceFlowData[2].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-1 text-text-high">{serviceFlowData[2].name}</h3>
                  <p className="text-xl opacity-90 text-text-high">{serviceFlowData[2].subtitle}</p>
                  
                  <div className={`mt-6 ${serviceFlowData[2].textColor} font-medium text-lg`}>
                    {serviceFlowData[2].basePrice}
                  </div>
                  
                  <div className="mt-6">
                    <Link href="/service/care" className="inline-block px-4 py-2 border border-[#8B917F] text-[#8B917F] rounded-lg hover:bg-[#8B917F] hover:text-white transition-colors">
                      詳しく見る
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* サービス詳細 - シンプル化したバージョン */}
              <div className="w-full md:w-2/3 bg-white rounded-xl p-8 shadow-md">
                <h4 className={`${serviceFlowData[2].headingColor} font-bold text-lg mb-4`}>内容</h4>
                <p className="text-text-medium text-base mb-6">{serviceFlowData[2].description}</p>
                
                <h4 className={`${serviceFlowData[2].headingColor} font-bold text-lg mb-4`}>料金の考え方</h4>
                <p className="text-text-medium mb-6">{serviceFlowData[2].priceDescription}</p>
                
                <div className="bg-neutral-50 p-6 rounded-lg mb-6">
                  <p className="text-lg mb-2">
                    <span className="font-medium">例:</span> 月1回の更新で¥6,600〜、月2回の更新で¥12,000〜
                  </p>
                  <p className="text-text-medium text-sm">※ 更新の内容や緊急度、追加オプションにより変動します</p>
                </div>
                
                <h4 className={`${serviceFlowData[2].headingColor} font-bold text-lg mb-4`}>主なオプション</h4>
                <p className="text-text-medium mb-6">{serviceFlowData[2].options}</p>
                
                {/* 成果物サンプル */}
                <div className="mt-4 mb-4">
                  <h4 className={`${serviceFlowData[2].headingColor} font-bold text-lg mb-4`}>成果物サンプル</h4>
                  <div className="bg-neutral-50 p-4 rounded-lg">
                    <div className="aspect-[16/9] relative w-full mb-4 rounded-md overflow-hidden bg-neutral-200">
                      <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                        <span>レポートイメージ</span>
                      </div>
                    </div>
                    <h5 className="font-medium mb-2">{serviceFlowData[2].sample.title}</h5>
                    <p className="text-sm text-text-medium">{serviceFlowData[2].sample.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Small Gifts */}
      <section className="py-16 bg-gradient-to-br from-white to-neutral-100">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-6">
            <span className="text-brand-500">Small</span> Gifts
          </h2>
          
          <p className="text-text-medium text-center max-w-3xl mx-auto mb-12">
            思いついた瞬間、すぐ試せるダウンロード資産を揃えました。どれもワンコイン前後。ちょっとした"賢い怠け方"の種としてご活用ください。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {smallGifts.map((gift, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-2xl mb-4">
                  {gift.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{gift.name}</h3>
                <p className="text-text-medium text-sm mb-4">{gift.description}</p>
                <div className="font-medium text-brand-500">{gift.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* LazyWhiz Promise */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-brand-500">lazywhiz</span> の約束
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">選択肢は３つまで</h3>
                  <p className="text-text-medium">迷わせない。多すぎる選択肢は決断疲れを引き起こし、行動の妨げとなります。重要な決断に集中できるよう、選択肢は厳選して提案します。</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">作業感を隠す</h3>
                  <p className="text-text-medium">気づけば完了。背後での複雑なプロセスをお見せすることなく、シンプルで美しい結果だけをお届けします。テクノロジーは目立たず、あなたの目的達成に徹します。</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center text-brand-500 font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">背伸びしない価格</h3>
                  <p className="text-text-medium">長く続けられる関係を優先。無理をして一度きりのプロジェクトをこなすよりも、持続可能な形で価値を提供し続けることを大切にしています。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5ADA8] to-[#F5C0BB] z-0"></div>
        
        {/* 装飾要素 */}
        <div className="absolute left-0 top-0 w-full h-full bg-[#F5ADA8] opacity-30 skew-y-6 -translate-y-1/2"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#F5D0CC] rounded-full opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">まずは "Soft-Spark" で<br />おしゃべりから。</h2>
            <p className="text-xl mb-12 opacity-90">
              具体的な計画がなくても大丈夫。カジュアルな対話から、あなたの本当のニーズを一緒に発見していきましょう。
            </p>
            <Link href="/contact" className="inline-flex items-center bg-white text-[#E2857B] hover:bg-neutral-50 px-10 py-5 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>ひと声かける</span>
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