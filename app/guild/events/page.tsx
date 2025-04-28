import Link from 'next/link';

export default function EventsPage() {
  // イベントデータ
  const events = [
    {
      id: '1',
      title: 'クリエイティブワークショップ',
      date: '2023年7月15日',
      time: '19:00-21:00',
      description: 'デザイン思考を活用した問題解決アプローチを学びます。実践的なエクササイズを通じて、創造的な思考法を身につけましょう。',
      location: 'Discord音声チャンネル',
      host: 'Tanaka Yuki',
      category: 'ワークショップ'
    },
    {
      id: '2',
      title: 'ビジネスネットワーキング',
      date: '2023年8月5日',
      time: '14:00-16:00',
      description: '異なる業界のプロフェッショナルとの交流会。新しいつながりを作り、ビジネスチャンスを広げる機会です。',
      location: 'Discord音声チャンネル',
      host: 'Sato Mei',
      category: 'ネットワーキング'
    },
    {
      id: '3',
      title: '効率化ツール共有会',
      date: '2023年8月20日',
      time: '20:00-21:30',
      description: 'メンバーそれぞれが使っている効率化ツールやテクニックを共有し合います。日々の作業を効率化するヒントが見つかるはずです。',
      location: 'Discord音声チャンネル',
      host: 'Yamada Taro',
      category: 'ツール'
    },
    {
      id: '4',
      title: 'オープンプロジェクト説明会',
      date: '2023年9月10日',
      time: '18:30-20:00',
      description: 'コミュニティ内で進行中のプロジェクトの紹介と参加者募集。あなたのスキルを活かせる場所が見つかるかもしれません。',
      location: 'Discord音声チャンネル',
      host: 'Watanabe Hana',
      category: 'プロジェクト'
    }
  ];

  // カテゴリでグループ化
  const categories = Array.from(new Set(events.map(event => event.category)));

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">イベント一覧</h1>
        <p className="text-lg text-text-medium max-w-2xl mx-auto">
          LazyWhizコミュニティでは定期的にイベントを開催しています。オンラインでの気軽な参加が可能です。
        </p>
      </div>

      {/* フィルター */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button className="px-4 py-2 bg-brand-500 text-white rounded-lg">
          すべて
        </button>
        {categories.map((category, index) => (
          <button 
            key={index} 
            className="px-4 py-2 bg-white border border-brand-200 hover:bg-brand-100 text-text-high rounded-lg transition-colors"
          >
            {category}
          </button>
        ))}
      </div>

      {/* イベントリスト */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm bg-brand-100 text-brand-600 px-3 py-1 rounded-full">
                  {event.category}
                </span>
                <span className="text-sm text-text-medium">
                  {event.host} 主催
                </span>
              </div>
              <h2 className="text-xl font-bold mb-2">{event.title}</h2>
              <div className="flex items-center text-text-medium mb-3">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>{event.date} {event.time}</span>
              </div>
              <div className="flex items-center text-text-medium mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>{event.location}</span>
              </div>
              <p className="text-text-medium mb-5">{event.description}</p>
              <div className="flex justify-between items-center">
                <Link 
                  href={`/guild/events/${event.id}`}
                  className="text-brand-500 hover:text-brand-600 font-medium"
                >
                  詳細を見る →
                </Link>
                <a 
                  href="https://discord.gg/lazywhiz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-brand-500 hover:bg-brand-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  参加する
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-brand-50 rounded-xl p-8 mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">自分でイベントを開催しませんか？</h2>
          <p className="text-text-medium mb-6">
            LazyWhizコミュニティでは、メンバーによるイベント企画を歓迎しています。
            あなたの知識やスキルをシェアし、コミュニティに貢献してみませんか？
          </p>
          <a 
            href="https://discord.gg/lazywhiz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            イベント企画を提案する
          </a>
        </div>
      </div>

      <div className="text-center">
        <Link 
          href="/guild"
          className="inline-flex items-center text-brand-500 hover:text-brand-600 font-medium"
        >
          <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          ギルドホームに戻る
        </Link>
      </div>
    </main>
  );
} 