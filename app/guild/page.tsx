import Link from 'next/link';
import Image from 'next/image';

export default function GuildPage() {
  return (
    <main>
      {/* Hero Section - 改良版 */}
      <section className="relative min-h-[60vh] py-16 overflow-hidden bg-gradient-to-br from-brand-200/30 via-white to-neutral-50">
        {/* 装飾要素 */}
        <div className="absolute right-0 top-20 w-64 h-64 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-72 h-72 bg-[#E57373] rounded-full opacity-5"></div>
        <div className="absolute right-1/4 bottom-10 w-32 h-32 bg-brand-200 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 px-4 py-2 bg-brand-200 text-brand-600 rounded-full text-sm font-medium">LazyWhiz Community</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-text-high">仲間と</span>
              <span className="text-brand-500">賢く怠ける</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-8 max-w-2xl mx-auto">
              クリエイターやビジネスパーソンが集まり、アイデアを共有し、協力して新しい価値を生み出すコミュニティです。ミニマムな労力で最大限の成果を目指す仲間が集まっています。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://discord.gg/lazywhiz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
                Discordに参加する
              </a>
              <a 
                href="#community-overview" 
                className="inline-flex items-center justify-center border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all"
              >
                <span>詳しく見る</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </a>
            </div>
            
            {/* 参加者数バッジ */}
            <div className="mt-12 inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md">
              <div className="flex -space-x-2 mr-3">
                <div className="w-8 h-8 rounded-full bg-brand-300 border-2 border-white flex items-center justify-center text-xs text-white">TK</div>
                <div className="w-8 h-8 rounded-full bg-[#E57373] border-2 border-white flex items-center justify-center text-xs text-white">YS</div>
                <div className="w-8 h-8 rounded-full bg-brand-500 border-2 border-white flex items-center justify-center text-xs text-white">MN</div>
                <div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-white flex items-center justify-center text-xs text-white">+42</div>
              </div>
              <span className="text-sm text-text-medium">45名のメンバーが活動中</span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Overview - IDを追加 */}
      <section id="community-overview" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/2 aspect-video relative bg-neutral-100 rounded-lg overflow-hidden">
                {/* コミュニティイメージ */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="w-full max-w-sm bg-white rounded-lg shadow-lg p-4 mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 mr-3">#</div>
                      <div>
                        <div className="font-medium">general</div>
                        <div className="text-xs text-text-medium">雑談・交流チャンネル</div>
                      </div>
                    </div>
                    <div className="border-t border-neutral-200 mt-2 pt-2">
                      <div className="flex items-start mb-2">
                        <div className="w-8 h-8 rounded-full bg-brand-200 flex items-center justify-center text-xs text-brand-600 mr-2">YS</div>
                        <div className="bg-neutral-100 rounded-lg p-2 text-sm">おはようございます！今日も賢く怠けましょう</div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-[#E57373] flex items-center justify-center text-xs text-white mr-2">TK</div>
                        <div className="bg-neutral-100 rounded-lg p-2 text-sm">昨日共有されたショートカットキー、すごく便利でした！</div>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-500">※ イメージ図です</span>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">LazyWhizコミュニティの特徴</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">✓</span>
                    <span>多様なバックグラウンドを持つメンバーとの交流</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">✓</span>
                    <span>定期的なイベントやワークショップの開催</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">✓</span>
                    <span>プロジェクト協力や共同制作の機会</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">✓</span>
                    <span>最新のトレンドや技術情報の共有</span>
                  </li>
                </ul>
                
                {/* LazyTip追加 */}
                <div className="mt-6 bg-brand-100 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="text-brand-500 mr-2">💡</div>
                    <h3 className="font-medium">LazyTip</h3>
                  </div>
                  <p className="text-sm">Discordでは通知設定をカスタマイズして、本当に必要な情報だけを受け取ることができます。設定→通知から調整しましょう。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discord Overview - 新規追加 */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-brand-50 mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Discordコミュニティの構成</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              誰でも気軽に参加でき、自分のペースで交流できる環境を整えています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* チャンネル一覧 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 mr-2">#</span>
                主なチャンネル
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center p-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-brand-500 mr-2 font-medium">WELCOME</span>
                  <span className="text-sm text-text-medium">ガイド・自己紹介</span>
                </li>
                <li className="flex items-center p-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-brand-500 mr-2 font-medium">CAFÉ</span>
                  <span className="text-sm text-text-medium">雑談・交流チャンネル</span>
                </li>
                <li className="flex items-center p-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-brand-500 mr-2 font-medium">TOOLS</span>
                  <span className="text-sm text-text-medium">ツール共有・活用術</span>
                </li>
                <li className="flex items-center p-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-brand-500 mr-2 font-medium">PROJECTS</span>
                  <span className="text-sm text-text-medium">小プロジェクト募集</span>
                </li>
                <li className="flex items-center p-2 hover:bg-neutral-50 rounded-lg transition-colors">
                  <span className="text-brand-500 mr-2 font-medium">VOICE LOUNGE</span>
                  <span className="text-sm text-text-medium">常設ボイスチャット</span>
                </li>
              </ul>
            </div>
            
            {/* ロール説明 */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="w-8 h-8 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 mr-2">@</span>
                参加者のロール
              </h3>
              <ul className="space-y-5">
                <li>
                  <div className="flex items-center mb-1">
                    <span className="bg-neutral-200 text-neutral-700 px-2 py-1 rounded text-sm font-medium mr-2">Observer</span>
                    <span className="text-sm text-text-medium">読み専でもOK</span>
                  </div>
                  <p className="text-sm text-text-medium pl-4">
                    まずは様子を見たい方向け。読むだけでも大歓迎です。
                  </p>
                </li>
                <li>
                  <div className="flex items-center mb-1">
                    <span className="bg-brand-200 text-brand-600 px-2 py-1 rounded text-sm font-medium mr-2">Catalyst</span>
                    <span className="text-sm text-text-medium">話題提供・Q&A</span>
                  </div>
                  <p className="text-sm text-text-medium pl-4">
                    積極的に質問や情報をシェアしてくれるメンバー。コミュニティの活性化に貢献します。
                  </p>
                </li>
                <li>
                  <div className="flex items-center mb-1">
                    <span className="bg-brand-500 text-white px-2 py-1 rounded text-sm font-medium mr-2">Guild Master</span>
                    <span className="text-sm text-text-medium">運営 & ファシリ</span>
                  </div>
                  <p className="text-sm text-text-medium pl-4">
                    コミュニティの運営を担当。質問への回答やイベント開催をサポートします。
                  </p>
                </li>
              </ul>
              <div className="mt-6 p-3 bg-neutral-50 rounded-lg text-sm">
                <p className="text-text-medium">
                  <span className="font-medium">Note:</span> ロールは自動的に付与されます。活動に応じて昇格することも。
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://discord.gg/lazywhiz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white px-8 py-4 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor">
                <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
              </svg>
              永続招待リンクで参加する
            </a>
            <p className="mt-2 text-sm text-text-medium">メールアドレス登録は不要です</p>
          </div>
        </div>
      </section>

      {/* Community Benefits */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">コミュニティに参加するメリット</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">ネットワーキング</h3>
              <p className="opacity-80">様々な分野のプロフェッショナルとの出会いで、あなたのキャリアやプロジェクトが広がります。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">知識共有</h3>
              <p className="opacity-80">最新の業界動向やスキル向上のためのリソースにアクセスし、継続的な学習環境を手に入れましょう。</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">コラボレーション</h3>
              <p className="opacity-80">協力して新しいプロジェクトに取り組み、個人では実現できない大きな成果を生み出します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">今後のイベント</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              コミュニティメンバーが参加できるイベントを定期的に開催しています。
              すべてオンラインで参加可能です。
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-8 max-w-5xl mx-auto">
            {/* カレンダー風レイアウト */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-brand-50 rounded-lg p-5">
                <div className="mb-3 flex justify-between items-center">
                  <div className="text-brand-500 font-semibold">7月</div>
                  <div className="bg-brand-500 text-white text-xs px-2 py-1 rounded">今月</div>
                </div>
                
                <div className="rounded-lg overflow-hidden border border-neutral-200">
                  <div className="flex bg-neutral-100 text-neutral-500 text-sm font-medium">
                    <div className="w-10 py-2 text-center border-r border-neutral-200">日</div>
                    <div className="flex-1 py-2 px-3">イベント</div>
                  </div>
                  
                  <div className="flex items-center hover:bg-brand-50 transition-colors cursor-pointer border-t border-neutral-200">
                    <div className="w-10 py-4 text-center font-bold text-brand-500 border-r border-neutral-200">15</div>
                    <div className="flex-1 py-3 px-3">
                      <div className="font-medium">クリエイティブワークショップ</div>
                      <div className="text-sm text-neutral-500">19:00-21:00・Discord</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center hover:bg-brand-50 transition-colors cursor-pointer border-t border-neutral-200">
                    <div className="w-10 py-4 text-center font-bold text-neutral-400 border-r border-neutral-200">28</div>
                    <div className="flex-1 py-3 px-3">
                      <div className="font-medium">効率化ティップス共有会</div>
                      <div className="text-sm text-neutral-500">20:00-21:00・Discord</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-brand-50 rounded-lg p-5">
                <div className="mb-3 flex justify-between items-center">
                  <div className="text-brand-500 font-semibold">8月</div>
                  <div className="bg-neutral-200 text-neutral-600 text-xs px-2 py-1 rounded">来月</div>
                </div>
                
                <div className="rounded-lg overflow-hidden border border-neutral-200">
                  <div className="flex bg-neutral-100 text-neutral-500 text-sm font-medium">
                    <div className="w-10 py-2 text-center border-r border-neutral-200">日</div>
                    <div className="flex-1 py-2 px-3">イベント</div>
                  </div>
                  
                  <div className="flex items-center hover:bg-brand-50 transition-colors cursor-pointer border-t border-neutral-200">
                    <div className="w-10 py-4 text-center font-bold text-neutral-400 border-r border-neutral-200">5</div>
                    <div className="flex-1 py-3 px-3">
                      <div className="font-medium">ビジネスネットワーキング</div>
                      <div className="text-sm text-neutral-500">14:00-16:00・Discord</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center hover:bg-brand-50 transition-colors cursor-pointer border-t border-neutral-200">
                    <div className="w-10 py-4 text-center font-bold text-neutral-400 border-r border-neutral-200">20</div>
                    <div className="flex-1 py-3 px-3">
                      <div className="font-medium">効率化ツール共有会</div>
                      <div className="text-sm text-neutral-500">20:00-21:30・Discord</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* LazyTip */}
            <div className="mt-6 bg-brand-100 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="text-brand-500 mr-2">💡</div>
                <h3 className="font-medium">LazyTip</h3>
              </div>
              <p className="text-sm">Discordでは、イベントに「興味あり」を設定すると、開始直前に通知を受け取れます。過剰な通知は避けつつ、参加機会を逃さない賢い方法です。</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link href="/guild/events" className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-8 py-3 rounded-lg font-medium transition-all shadow-md hover:shadow-lg">
              すべてのイベントを見る
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Member Stories - 新規追加 */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">メンバーの声</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              LazyWhizコミュニティに参加したメンバーからの声をご紹介します
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-200 flex items-center justify-center text-brand-600 mr-3">MT</div>
                <div>
                  <div className="font-bold">松田 拓也</div>
                  <div className="text-sm text-text-medium">Webデザイナー</div>
                </div>
              </div>
              <p className="italic text-text-medium mb-3">
                "仕事の効率化について悩んでいましたが、ここで得たショートカットキーとタスク管理のコツで作業時間が20%も減りました。時間の余裕が生まれて新しいスキルの習得に使えています。"
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E57373] flex items-center justify-center text-white mr-3">KS</div>
                <div>
                  <div className="font-bold">木村 早紀</div>
                  <div className="text-sm text-text-medium">フリーランスエンジニア</div>
                </div>
              </div>
              <p className="italic text-text-medium mb-3">
                "参加者の多様なバックグラウンドが刺激になります。プログラミングだけでなく、デザインやマーケティングの知見も得られて視野が広がりました。一人では思いつかないアイデアが生まれる場所です。"
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white mr-3">TY</div>
                <div>
                  <div className="font-bold">田中 裕介</div>
                  <div className="text-sm text-text-medium">マーケター</div>
                </div>
              </div>
              <p className="italic text-text-medium mb-3">
                "最初は読み専で参加していましたが、少しずつ発言するようになり、今では小さなプロジェクトもしています。無理なく始められるのがいいですね。周りのメンバーの知識量とアウトプットの質が高く、毎日刺激を受けています。"
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section - 新規追加 */}
      <section className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">よくある質問</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              コミュニティ参加に関するよくある疑問にお答えします
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-neutral-100">
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>参加費用はかかりますか？</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-medium mt-3 group-open:animate-fadeIn">
                  いいえ、無料でご参加いただけます。コミュニティは「知見の共有」を大切にしており、お金ではなく知識や経験をシェアすることで成り立っています。
                </p>
              </details>
              
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>初心者でも参加できますか？</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-medium mt-3 group-open:animate-fadeIn">
                  もちろん、歓迎します！初めは「Observer」ロールで様子を見るだけでも大丈夫です。質問も大歓迎ですし、#beginner チャンネルもありますので、お気軽にご参加ください。
                </p>
              </details>
              
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>どのようなルールがありますか？</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-medium mt-3 group-open:animate-fadeIn">
                  基本的には相互尊重とポジティブなコミュニケーションをお願いしています。詳細なガイドラインは、Discord参加後に#rulesチャンネルでご確認いただけます。攻撃的な言動や商業的な宣伝は禁止としています。
                </p>
              </details>
              
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>退会や休止はいつでもできますか？</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-medium mt-3 group-open:animate-fadeIn">
                  はい、いつでも自由に退会・休止いただけます。通知をミュートにして休止状態にすることも可能です。あなたのペースでご参加ください。
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* Join the Community - 改良版 */}
      <section className="py-16 bg-gradient-to-br from-brand-500 to-brand-600 relative overflow-hidden rounded-3xl">
        {/* 装飾要素 */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-brand-200 opacity-10 rounded-full translate-y-1/3 -translate-x-1/3"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">今すぐコミュニティに参加しませんか？</h2>
            <p className="text-xl mb-12 opacity-90">
              LazyWhizコミュニティでは、あなたの参加をお待ちしています。<br />
              一緒に「賢く怠ける」ためのヒントを共有し、効率的な未来を創りましょう。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://discord.gg/lazywhiz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-brand-600 hover:bg-opacity-90 px-8 py-4 rounded-lg font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
                Discordで参加する
              </a>
              <Link 
                href="/contact?source=guild" 
                className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-brand-600 px-8 py-4 rounded-lg font-medium transition-all"
              >
                <span>質問・お問い合わせ</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-white text-opacity-80">
              メールアドレス登録不要・いつでも退会可能・参加は無料です
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 