import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CarePage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#D9D2C5] opacity-5"></div>
        <div className="absolute right-0 top-20 w-1/3 h-1/2 bg-[#D9D2C5] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 px-4 py-2 bg-[#D9D2C5] text-[#8B917F] rounded-full text-sm font-medium">Service Detail</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-high">
              <span className="text-[#8B917F]">Gentle-Care</span>
              <span className="block text-2xl md:text-3xl mt-4">〈まわす〉</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-10 max-w-3xl mx-auto">
              公開したサイトを月イチの小さな手入れで健やかにキープ。
              テキスト差し替えや最新情報の追加はチャットで一声。
              レイアウト崩れチェックと簡易アクセスレポートを添えてお返しします。
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact?service=care" 
                className="px-8 py-4 bg-[#8B917F] text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                相談してみる
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            Gentle-Care<span className="text-[#8B917F]">の特徴</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#D9D2C5] rounded-full flex items-center justify-center text-2xl mb-4">
                🛠️
              </div>
              <h3 className="text-xl font-bold mb-2">手間いらず</h3>
              <p className="text-text-medium">
                チャットで一声かけるだけ。面倒な作業は私たちが行います。
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#D9D2C5] rounded-full flex items-center justify-center text-2xl mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold mb-2">状況把握</h3>
              <p className="text-text-medium">
                毎月のレポートで、サイトの状況を一目で確認。改善点も提案します。
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#D9D2C5] rounded-full flex items-center justify-center text-2xl mb-4">
                📆
              </div>
              <h3 className="text-xl font-bold mb-2">更新頻度自由</h3>
              <p className="text-text-medium">
                月1回からフレキシブルに。必要に応じた更新頻度を選べます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-[#8B917F]">料金プラン</span>
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Lite Plan */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#D9D2C5]">
                <h3 className="text-2xl font-bold mb-2">Lite</h3>
                <p className="text-3xl font-bold mb-6">¥6,600<span className="text-sm text-text-medium font-normal">〜/月（税込）</span></p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">月1回の更新</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">稼働レポートPDF</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">サイト健全性チェック</span>
                  </li>
                </ul>
                
                <div className="border-t border-neutral-100 pt-4 mb-6">
                  <p className="text-text-medium text-sm">
                    追加更新：+¥3,300〜/回
                  </p>
                </div>
                
                <Link 
                  href="/contact?service=care&plan=lite" 
                  className="block w-full py-3 text-center bg-white border border-[#8B917F] text-[#8B917F] rounded-lg hover:bg-[#8B917F] hover:text-white transition-colors"
                >
                  このプランを選ぶ
                </Link>
              </div>
              
              {/* Standard Plan */}
              <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#8B917F] transform md:-translate-y-4 z-10">
                <div className="bg-[#8B917F] text-white text-xs font-bold uppercase py-1 px-3 rounded-full inline-block mb-2">人気プラン</div>
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <p className="text-3xl font-bold mb-6">¥18,000<span className="text-sm text-text-medium font-normal">〜/月（税込）</span></p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">月2回の更新</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">簡易SEO対策</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">月次30分Zoom</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">サイト健全性チェック</span>
                  </li>
                </ul>
                
                <div className="border-t border-neutral-100 pt-4 mb-6">
                  <p className="text-text-medium text-sm">
                    ABテスト：+¥6,600〜
                  </p>
                </div>
                
                <Link 
                  href="/contact?service=care&plan=standard" 
                  className="block w-full py-3 text-center bg-[#8B917F] text-white rounded-lg hover:shadow-lg transition-all"
                >
                  このプランを選ぶ
                </Link>
              </div>
              
              {/* Growth Plan */}
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#D9D2C5]">
                <h3 className="text-2xl font-bold mb-2">Growth</h3>
                <p className="text-3xl font-bold mb-6">¥33,000<span className="text-sm text-text-medium font-normal">〜/月（税込）</span></p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">週次更新</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">ABテスト1本</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">当日Discord応答</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#8B917F] mr-2">✓</span>
                    <span className="text-text-medium">詳細アナリティクス</span>
                  </li>
                </ul>
                
                <div className="border-t border-neutral-100 pt-4 mb-6">
                  <p className="text-text-medium text-sm">
                    ブログ代筆：+¥8,800〜
                  </p>
                </div>
                
                <Link 
                  href="/contact?service=care&plan=growth" 
                  className="block w-full py-3 text-center bg-white border border-[#8B917F] text-[#8B917F] rounded-lg hover:bg-[#8B917F] hover:text-white transition-colors"
                >
                  このプランを選ぶ
                </Link>
              </div>
            </div>
            
            <div className="mt-12 bg-[#F5F3EE] p-6 rounded-xl">
              <p className="text-[#8B917F] font-medium mb-2">Note</p>
              <p className="text-text-medium mb-4">
                各プランは最低契約期間なし。いつでもアップグレード・ダウングレード可能です。
                1回の更新は、テキスト・画像の差し替えや、既存ページへの小規模な追加などが含まれます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            よくある<span className="text-[#8B917F]">質問</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">更新の依頼方法は？</h3>
              <p className="text-text-medium">
                Discordチャンネルでのメッセージ、またはメールでのご連絡で更新内容をお知らせください。テキストや画像などの素材をお送りいただければ、こちらで実装します。
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">更新の対応時間はどのくらい？</h3>
              <p className="text-text-medium">
                通常は依頼から48時間以内に対応します。Growthプランの場合は当日対応（営業時間内）が基本です。緊急対応が必要な場合はご相談ください。
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">更新回数の繰り越しはできますか？</h3>
              <p className="text-text-medium">
                月の更新回数を使い切らなかった場合、翌月への繰り越しが可能です（最大2ヶ月まで）。長期的に更新頻度が低い場合は、プランのダウングレードをご検討ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B917F] to-[#D9D2C5] z-0"></div>
        <div className="absolute left-0 top-0 w-full h-full bg-[#8B917F] opacity-30 skew-y-6 -translate-y-1/2"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              サイトの運用を<br />手放してみませんか？
            </h2>
            <p className="text-xl mb-12 opacity-90">
              更新の手間をかけずに、サイトを常に最新・最適な状態に。
              あなたは本業に集中し、サイト運用は私たちにお任せください。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact?service=care" 
                className="px-8 py-4 bg-white text-[#8B917F] hover:bg-neutral-50 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                お問い合わせ
              </Link>
              <Link 
                href="/service" 
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
              >
                サービス一覧へ戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 