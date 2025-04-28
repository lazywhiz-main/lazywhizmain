import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EfficiencyTipsArticle() {
  // 記事メタデータ
  const articleMeta = {
    title: '【実践】会議の時間を半分に減らす5つのテクニック',
    category: '生産性向上',
    date: '2023-12-15',
    readTime: '8分',
    author: 'LazyWhiz編集部',
    description: '無駄な会議に費やしている時間を取り戻しましょう。この記事では、会議時間を効率的に短縮するための実践的なテクニックを紹介します。',
  };

  // 関連記事
  const relatedArticles = [
    {
      id: 'decision-making',
      title: '意思決定疲れを解消する「3秒ルール」とは？',
      category: '思考法',
    },
    {
      id: 'remote-work',
      title: 'リモートワークでの「ディープワーク」実現法',
      category: '集中力',
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4">
          <div className="flex items-center">
            <Link href="/toolkit" className="flex items-center text-brand-500 hover:text-brand-600">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span>ツールキットに戻る</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* 記事ヘッダー */}
          <div className="mb-10">
            <span className="inline-block px-3 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">
              {articleMeta.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-text-high">
              {articleMeta.title}
            </h1>
            <div className="flex items-center text-text-medium text-sm mb-6">
              <span className="mr-4">{articleMeta.date}</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {articleMeta.readTime}
              </span>
            </div>
            <p className="text-lg text-text-medium mb-8">
              {articleMeta.description}
            </p>
            <div className="border-t border-b border-neutral-200 py-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-brand-200 rounded-full flex items-center justify-center text-brand-600 mr-3">
                  LW
                </div>
                <span className="font-medium">{articleMeta.author}</span>
              </div>
            </div>
          </div>

          {/* 記事本文 */}
          <div className="prose prose-lg max-w-none">
            <p>
              現代のビジネスパーソンにとって、会議は仕事の大きな部分を占めています。しかし、多くの会議は必要以上に長くなり、貴重な時間を無駄にしてしまうことも少なくありません。
              この記事では、会議時間を半分に減らしながらも、効果的な成果を得るための5つの実践的なテクニックを紹介します。
            </p>

            <h2>1. アジェンダと目的を明確に</h2>
            <p>
              会議の無駄な時間の多くは、準備不足から生まれます。効率的な会議のためには、事前に明確なアジェンダを設定し、参加者全員に共有しておくことが重要です。
            </p>
            <p><strong>実践テクニック:</strong></p>
            <ul>
              <li>会議の冒頭で「この会議で決めるべきこと」を3点以内で明示する</li>
              <li>各議題に時間配分を設定し、タイマーを活用する</li>
              <li>会議招待時に目的と期待される成果を明記する</li>
            </ul>
            <p>
              <strong className="text-brand-500">LazyTip:</strong> 会議の目的が「情報共有のみ」の場合は、非同期コミュニケーション（メール、Slack等）に切り替えることを検討しましょう。
            </p>

            <h2>2. スタンディングミーティングの導入</h2>
            <p>
              椅子に座って行う会議は、ついだらだらと長引きがちです。スタンディングミーティング（立ったまま行う会議）は、自然と簡潔な議論を促進します。
            </p>
            <p><strong>実践テクニック:</strong></p>
            <ul>
              <li>15〜20分の短時間会議には、全員立ったまま実施する</li>
              <li>会議室の椅子をあえて減らす、または机の高さを調整可能なものに変更する</li>
              <li>オンライン会議でも「カメラの前で立っている」ことをルール化する試みも効果的</li>
            </ul>

            <h2>3. 「25分ルール」の採用</h2>
            <p>
              通常1時間として設定される会議の多くは、実際には25〜30分で十分に目的を達成できます。パーキンソンの法則によれば、「仕事は与えられた時間いっぱいまで膨張する」ため、初めから短い時間で設定することが効果的です。
            </p>
            <p><strong>実践テクニック:</strong></p>
            <ul>
              <li>デフォルトの会議時間を60分ではなく25分に設定する</li>
              <li>会議の5分前に自動的にアラートが鳴るようにする</li>
              <li>次のアクションを明確にして会議を終了する習慣をつける</li>
            </ul>
            <p>
              <strong className="text-brand-500">LazyTip:</strong> LazyPomodoroツールを活用して、25分のタイマーを設定しましょう。時間が来たら強制的に会議を終了するのがコツです。
            </p>

            <h2>4. 決定権者と参加者を最小限に</h2>
            <p>
              会議の参加者が増えるほど、議論は複雑になり時間も長引きます。Amazonのジェフ・ベゾスが提唱する「2枚のピザルール」（会議参加者は2枚のピザで食べられる人数に制限する）は、効率的な意思決定のための優れた指針です。
            </p>
            <p><strong>実践テクニック:</strong></p>
            <ul>
              <li>必須参加者と任意参加者を明確に区別する</li>
              <li>決定権を持つ人のみを必須参加者とする</li>
              <li>会議の内容を後で共有できる人は、代表者1名の参加に絞る</li>
            </ul>

            <h2>5. 「No Agenda, No Meeting」の徹底</h2>
            <p>
              アジェンダのない会議は、目的を見失いがちです。「アジェンダがなければ会議なし」というルールを組織内で徹底することで、準備不足の無駄な会議を排除できます。
            </p>
            <p><strong>実践テクニック:</strong></p>
            <ul>
              <li>会議招集時にアジェンダテンプレートの入力を必須にする</li>
              <li>アジェンダが不明確な会議はキャンセルする権利を参加者に与える</li>
              <li>会議後5分以内に、決定事項と次のアクションを文書化して共有する</li>
            </ul>

            <div className="bg-brand-50 p-6 rounded-xl border border-brand-200 my-8">
              <h3 className="font-bold flex items-center text-brand-600 mb-2">
                <span className="mr-2">💡</span> 組織全体で実践するためのステップ
              </h3>
              <p className="text-sm text-text-medium mb-4">
                以上の5つのテクニックは個人で実践することもできますが、組織全体で取り入れるとさらに効果的です。
              </p>
              <ol className="text-sm text-text-medium list-decimal pl-5 space-y-2">
                <li>まずは自分が主催する会議から実験的に導入する</li>
                <li>効果を数値化して共有（例：「会議時間が週に3時間削減できた」）</li>
                <li>チームメンバーからフィードバックを集め、テクニックを調整</li>
                <li>会議ガイドラインとして文書化し、組織内で共有</li>
              </ol>
            </div>

            <p>
              会議時間の短縮は、単に時間の節約だけではなく、より集中した議論と明確な意思決定をもたらします。これらのテクニックを実践することで、会議の質を高めながら、あなたの貴重な時間を取り戻しましょう。
            </p>

            <p>
              <strong>ビジネスにおける「賢い怠け方」とは、必要なことに集中し、無駄を省くこと。</strong>会議時間の最適化は、その第一歩となるでしょう。
            </p>
          </div>

          {/* CTAセクション */}
          <div className="mt-12 bg-brand-50 p-8 rounded-xl border border-brand-200">
            <h3 className="text-xl font-bold mb-4">組織の効率化についてもっと知りたいですか？</h3>
            <p className="text-text-medium mb-6">
              LazyWhizでは、組織の効率化とワークフローの最適化についてのコンサルティングも提供しています。30分の無料相談から始めてみませんか？
            </p>
            <Link 
              href="/service/spark" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#F5ADA8] hover:bg-[#E2857B] text-white rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              <span>Soft-Sparkで相談する</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          {/* ツール紹介 */}
          <div className="mt-8 bg-neutral-100 p-6 rounded-xl">
            <h3 className="font-bold mb-4">この記事に関連するツール</h3>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-2xl mr-4">⏱️</div>
                <div>
                  <h4 className="font-bold">LazyPomodoro</h4>
                  <p className="text-sm text-text-medium">会議時間を25分に制限するのに最適なタイマー</p>
                </div>
              </div>
              <Link 
                href="/toolkit/tools/pomodoro" 
                className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium"
              >
                <span>ツールを使う</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>

          {/* 関連記事 */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">関連記事</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((article) => (
                <div key={article.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <span className="inline-block px-3 py-1 bg-brand-200 text-brand-600 rounded-full text-xs font-medium mb-3">
                    {article.category}
                  </span>
                  <h4 className="font-bold mb-4">{article.title}</h4>
                  <Link 
                    href={`/toolkit/${article.id}`}
                    className="inline-flex items-center text-brand-500 hover:text-brand-600 text-sm font-medium"
                  >
                    <span>続きを読む</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* シェアボタン */}
          <div className="mt-12 flex items-center justify-center space-x-4">
            <span className="text-text-medium text-sm">この記事をシェア：</span>
            <a href="#" className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-[#4267B2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-[#0A66C2] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-white border-t border-neutral-200 py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-text-medium">
            <p>© {new Date().getFullYear()} LazyWhiz All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 