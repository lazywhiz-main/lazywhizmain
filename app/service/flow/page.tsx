import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FlowPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-brand-200 opacity-5"></div>
        <div className="absolute right-0 top-20 w-1/3 h-1/2 bg-brand-200 rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 px-4 py-2 bg-brand-200 text-brand-600 rounded-full text-sm font-medium">Service Detail</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-high">
              <span className="text-brand-500">Quiet-Flow</span>
              <span className="block text-2xl md:text-3xl mt-4">〈作る〉</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-10 max-w-3xl mx-auto">
              Spark Sheet を起点に、5 日で "名刺代わり" のブランドサイトを公開。
              色味や雰囲気を選ぶだけで、トップ・アバウト・コンタクトの 3 ページが整います。
              手離れよく、でも見た目はきちんと――始動の背中をそっと押すライトパッケージ。
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact?service=flow" 
                className="px-8 py-4 bg-brand-500 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
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
            Quiet-Flow<span className="text-brand-500">の特徴</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center text-2xl mb-4">
                ⚡
              </div>
              <h3 className="text-xl font-bold mb-2">スピード納品</h3>
              <p className="text-text-medium">
                最短5営業日でウェブサイトを公開。スピード重視のプロジェクトに最適です。
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center text-2xl mb-4">
                🎨
              </div>
              <h3 className="text-xl font-bold mb-2">美しいデザイン</h3>
              <p className="text-text-medium">
                シンプルながら洗練されたデザイン。少ないページ数でも確かな存在感を演出します。
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center text-2xl mb-4">
                📱
              </div>
              <h3 className="text-xl font-bold mb-2">フル対応</h3>
              <p className="text-text-medium">
                全デバイス（PC・タブレット・スマホ）で美しく表示される、レスポンシブデザイン。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-brand-500">制作プロセス</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-2xl text-white font-bold z-10 relative">
                      1
                    </div>
                    <div className="absolute top-8 left-8 w-1 h-full bg-brand-200 hidden md:block"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">方向性のすり合わせ</h3>
                  <p className="text-text-medium mb-2">
                    Spark Sheetをベースに、サイトの方向性を確認。色や雰囲気のイメージを選んでいただきます（オンラインフォーム形式）。
                  </p>
                  <p className="text-sm text-text-medium italic">
                    所要時間：約15分のフォーム記入
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-2xl text-white font-bold z-10 relative">
                      2
                    </div>
                    <div className="absolute top-8 left-8 w-1 h-full bg-brand-200 hidden md:block"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">デザイン案の提示</h3>
                  <p className="text-text-medium mb-2">
                    2つのデザイン案をご提案。トップページの完成イメージをお見せします。お好みの案をお選びいただきます。
                  </p>
                  <p className="text-sm text-text-medium italic">
                    納期：方向性確認から2営業日以内
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-2xl text-white font-bold z-10 relative">
                      3
                    </div>
                    <div className="absolute top-8 left-8 w-1 h-full bg-brand-200 hidden md:block"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">サイト制作と調整</h3>
                  <p className="text-text-medium mb-2">
                    お選びいただいたデザイン案をベースに残りのページを制作。1回までの軽微な修正にも対応します。
                  </p>
                  <p className="text-sm text-text-medium italic">
                    納期：デザイン承認から3営業日以内
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center text-2xl text-white font-bold z-10 relative">
                      4
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">公開・引き渡し</h3>
                  <p className="text-text-medium mb-2">
                    サイトの公開と基本的な操作方法のご案内。独自ドメインの設定やGoogleアナリティクス連携などの初期設定も代行します。
                  </p>
                  <p className="text-sm text-text-medium italic">
                    納期：サイト制作完了後1営業日以内
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-brand-500">事例</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">フリーランスデザイナー様</h3>
                <div className="aspect-[4/3] relative w-full mb-4 rounded-md overflow-hidden bg-neutral-200">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <span>ポートフォリオサイトイメージ</span>
                  </div>
                </div>
                <p className="text-text-medium text-sm mb-4">
                  シンプルなポートフォリオサイト。作品を際立たせるミニマルなデザインで、クライアントの目を引きます。
                </p>
                <p className="font-medium text-sm">完成期間：5営業日</p>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">コンサルタント様</h3>
                <div className="aspect-[4/3] relative w-full mb-4 rounded-md overflow-hidden bg-neutral-200">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <span>コーポレートサイトイメージ</span>
                  </div>
                </div>
                <p className="text-text-medium text-sm mb-4">
                  信頼感を演出するプロフェッショナルなデザイン。サービス内容と実績を簡潔に伝え、問い合わせにつなげます。
                </p>
                <p className="font-medium text-sm">完成期間：7営業日</p>
              </div>
            </div>
            
            <div className="mt-12 bg-brand-50 p-6 rounded-xl">
              <p className="text-brand-600 font-medium mb-2">Client's Voice</p>
              <p className="italic text-text-medium mb-4">
                "新規事業の立ち上げで時間がなく、サイト制作を後回しにしていました。Quiet-Flowを利用したところ、思っていた以上に素早く、高品質なサイトが完成。初めての打ち合わせからたった1週間で公開できたのには驚きました。"
              </p>
              <p className="text-right text-sm">— スタートアップ経営者 N.S様</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-brand-500">対応サービス</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center text-2xl mb-4">
                  🖥️
                </div>
                <h3 className="text-xl font-bold mb-3">ウェブサイト制作</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-text-medium">コーポレートサイト</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-text-medium">ポートフォリオサイト</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-text-medium">ランディングページ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-text-medium">サービス紹介サイト</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center text-2xl mb-4">
                  📱
                </div>
                <h3 className="text-xl font-bold mb-3">アプリ制作相談</h3>
                <p className="text-text-medium mb-4">
                  Webアプリケーションやモバイルアプリの企画・設計についても相談可能です。以下のような案件も対応します：
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-text-medium">業務効率化ツール</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-text-medium">会員制サイト・コミュニティ</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-brand-500 mr-2">•</span>
                    <span className="text-text-medium">予約システム</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-brand-200 rounded-full flex items-center justify-center text-2xl mb-4">
                🔧
              </div>
              <h3 className="text-xl font-bold mb-3">技術スタック</h3>
              <p className="text-text-medium mb-4">
                最新のテクノロジーを用いて、高速・安定・安全なウェブサイト/アプリを提供します。
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-neutral-50 p-3 rounded-lg text-center">
                  <p className="font-medium">Next.js</p>
                </div>
                <div className="bg-neutral-50 p-3 rounded-lg text-center">
                  <p className="font-medium">React</p>
                </div>
                <div className="bg-neutral-50 p-3 rounded-lg text-center">
                  <p className="font-medium">Tailwind CSS</p>
                </div>
                <div className="bg-neutral-50 p-3 rounded-lg text-center">
                  <p className="font-medium">Vercel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-brand-500">料金</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-brand-200 p-8 rounded-xl shadow-sm text-center">
              <h3 className="text-3xl font-bold mb-4">¥33,000〜（税込）</h3>
              <p className="text-lg mb-8">基本料金には以下が含まれます</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">3ページの制作</p>
                  <p className="text-sm text-text-medium">(Home/About/Contact)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">レスポンシブデザイン</p>
                  <p className="text-sm text-text-medium">(PC/タブレット/スマホ対応)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">独自ドメイン設定</p>
                  <p className="text-sm text-text-medium">(お持ちのドメイン)</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-3">オプション</h4>
                <ul className="space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-center justify-between">
                    <span>追加ページ制作</span>
                    <span className="font-medium">+¥5,500〜/ページ</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>イラスト生成</span>
                    <span className="font-medium">+¥3,300〜/点</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>決済連携</span>
                    <span className="font-medium">+¥11,000〜</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>ドメイン取得代行</span>
                    <span className="font-medium">+¥5,500〜</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>アプリ企画・設計相談</span>
                    <span className="font-medium">+¥11,000〜</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/contact?service=flow" 
                className="inline-block px-8 py-4 bg-brand-500 text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                相談する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            よくある<span className="text-brand-500">質問</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">公開後の修正や更新はできますか？</h3>
              <p className="text-text-medium">
                公開後2週間以内であれば、軽微な修正は無料で対応します。以降の更新や修正については、Gentle-Careプランをご検討ください。月々のメンテナンスプランで継続的にサイトを最新の状態に保ちます。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">独自ドメインを持っていない場合はどうなりますか？</h3>
              <p className="text-text-medium">
                ドメイン取得代行サービス（オプション）をご利用いただけます。お好みのドメイン名をお伺いし、取得から設定まですべて代行します。年間の更新費用も明示的にご案内します。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">より複雑なウェブアプリケーションの開発は可能ですか？</h3>
              <p className="text-text-medium">
                はい、可能です。会員制サイト、予約システム、Eコマースなど、複雑な機能を持つアプリケーション開発についてもご相談ください。要件に応じた見積もりをご提案します。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">納期を短縮することは可能ですか？</h3>
              <p className="text-text-medium">
                特急対応も承ります（追加料金あり）。最短3営業日での納品も可能なケースがございますので、お急ぎの場合はその旨をお伝えください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-500 z-0"></div>
        <div className="absolute left-0 top-0 w-full h-full bg-brand-600 opacity-30 skew-y-6 -translate-y-1/2"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              あなたのアイデアを<br />カタチにしませんか？
            </h2>
            <p className="text-xl mb-12 opacity-90">
              ウェブサイトもアプリも、まずは気軽にご相談ください。
              具体的なイメージがなくても、一緒に考えていきます。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact?service=flow" 
                className="px-8 py-4 bg-white text-brand-500 hover:bg-neutral-50 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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