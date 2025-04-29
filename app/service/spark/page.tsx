import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SparkPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[#F5ADA8] opacity-5"></div>
        <div className="absolute right-0 top-20 w-1/3 h-1/2 bg-[#F5ADA8] rounded-full opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block mb-6 px-4 py-2 bg-[#F5ADA8] text-[#E2857B] rounded-full text-sm font-medium">Service Detail</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-text-high">
              <span className="text-[#E2857B]">Soft-Spark</span>
              <span className="block text-2xl md:text-3xl mt-4">〈決める〉</span>
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-10 max-w-3xl mx-auto">
              まだ言葉にならない "やりたいこと" を、30 分で 1 枚のコンセプトシートに。
              フォームに好きな雰囲気や思いを打ち込むだけで、AI が即座に整理・デザイン。
              モヤモヤしていたアイデアが、眺めてうなずける "カタチ" になって届きます。
            </p>
            <div className="flex justify-center">
              <Link 
                href="/contact?service=spark" 
                className="px-8 py-4 bg-[#E2857B] text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                体験してみる
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            Soft-Spark<span className="text-[#E2857B]">の特徴</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#F5ADA8] rounded-full flex items-center justify-center text-2xl mb-4">
                ⏱️
              </div>
              <h3 className="text-xl font-bold mb-2">たった30分で完了</h3>
              <p className="text-text-medium">
                長時間の会議や複数回のやり取りなし。フォームへの記入と30分の対話だけで、ビジョンを形にします。
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#F5ADA8] rounded-full flex items-center justify-center text-2xl mb-4">
                🛌
              </div>
              <h3 className="text-xl font-bold mb-2">手間なく自然に</h3>
              <p className="text-text-medium">
                「だいたいこんな感じ」で十分。整理する作業を私たちがすべて引き受けます。
              </p>
            </div>
            
            <div className="bg-neutral-50 p-6 rounded-xl shadow-sm">
              <div className="w-14 h-14 bg-[#F5ADA8] rounded-full flex items-center justify-center text-2xl mb-4">
                🔄
              </div>
              <h3 className="text-xl font-bold mb-2">次のステップに直結</h3>
              <p className="text-text-medium">
                整理されたSparkシートをそのまま、サイト制作やコンテンツ作成の素材として活用できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-[#E2857B]">プロセス</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#E2857B] rounded-full flex items-center justify-center text-2xl text-white font-bold z-10 relative">
                      1
                    </div>
                    <div className="absolute top-8 left-8 w-1 h-full bg-[#F5ADA8] hidden md:block"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">事前フォームの記入</h3>
                  <p className="text-text-medium mb-2">
                    好きなブランドや参考にしたいサイト、ざっくりとしたイメージなど、思いつくままにフォームに記入していただきます。
                  </p>
                  <p className="text-sm text-text-medium italic">
                    所要時間：約10分
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#E2857B] rounded-full flex items-center justify-center text-2xl text-white font-bold z-10 relative">
                      2
                    </div>
                    <div className="absolute top-8 left-8 w-1 h-full bg-[#F5ADA8] hidden md:block"></div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">30分の対話セッション</h3>
                  <p className="text-text-medium mb-2">
                    オンラインで30分、フォームを元に対話を行い、あなたの本当のニーズや好みを掘り下げます。
                  </p>
                  <p className="text-sm text-text-medium italic">
                    所要時間：30分（Zoom/Google Meet）
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#E2857B] rounded-full flex items-center justify-center text-2xl text-white font-bold z-10 relative">
                      3
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Sparkシートのお届け</h3>
                  <p className="text-text-medium mb-2">
                    対話から2営業日以内に、整理されたコンセプトシートをメールでお届けします。必要に応じて若干の調整も可能です。
                  </p>
                  <p className="text-sm text-text-medium italic">
                    納期：対話から2営業日以内
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
            <span className="text-[#E2857B]">事例</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-neutral-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-6">個人事業主のためのブランディングシート</h3>
              
              <div className="mb-8">
                <div className="aspect-[16/9] relative w-full mb-4 rounded-md overflow-hidden bg-neutral-200">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                    <span>Sparkシートサンプル画像</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-[#E2857B]">Before</h4>
                  <p className="text-text-medium">
                    「なんとなくオンラインサロンをやりたい」という漠然としたアイデアだけで来られたクライアント様。ターゲットや提供価値が明確ではありませんでした。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-[#E2857B]">After</h4>
                  <p className="text-text-medium">
                    30分の対話を通じて、「仕事と子育ての両立に悩む30代女性向けのタイムマネジメントコミュニティ」という明確なコンセプトが誕生。その後のサイト制作とコミュニティ設計がスムーズに進みました。
                  </p>
                </div>
                
                <div className="border-t border-neutral-200 pt-6">
                  <p className="italic text-text-medium text-sm">
                    "モヤモヤしていた思いが、たった30分の会話でこんなにクリアになるとは思いませんでした。自分では絶対に整理できなかったです。このシートを見るたびに初心を思い出せます。"
                  </p>
                  <p className="text-right text-sm mt-2">- 個人事業主 K.S様</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            よくある<span className="text-[#E2857B]">質問</span>
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">事前にしっかりとした構想がなくても大丈夫ですか？</h3>
              <p className="text-text-medium">
                はい、むしろ構想がまとまっていない方にこそおすすめです。曖昧なアイデアや感覚的なイメージからでも、対話を通じて本質を引き出し、整理していきます。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">対面での打ち合わせは可能ですか？</h3>
              <p className="text-text-medium">
                基本的にはオンライン対応としていますが、東京都内であれば対面セッションも可能です（交通費別途）。詳細はお問い合わせください。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">納品されるSparkシートのフォーマットは？</h3>
              <p className="text-text-medium">
                PDFとして納品します。必要に応じてWord/Google Docなど編集可能な形式での納品も可能です。Milanoteなどのビジュアルボードでの納品もオプションで承っています。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-2">追加の修正は可能ですか？</h3>
              <p className="text-text-medium">
                初回納品後、1回までの軽微な修正は無料で対応します。大幅な方向転換や追加セッションが必要な場合は、別途料金が発生します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-[#E2857B]">料金</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#F5ADA8] p-8 rounded-xl shadow-sm text-center">
              <h3 className="text-3xl font-bold mb-4">¥5,500〜（税込）</h3>
              <p className="text-lg mb-8">基本料金には以下が含まれます</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">事前フォーム分析</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">30分の対話セッション</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium">Sparkシート納品（PDF）</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg mb-8">
                <h4 className="font-bold mb-3">オプション</h4>
                <ul className="space-y-2 text-left max-w-md mx-auto">
                  <li className="flex items-center">
                    <span className="mr-2 text-[#E2857B]">•</span>
                    <span>追加ペルソナ設定：+¥1,100〜</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[#E2857B]">•</span>
                    <span>追加ステップ提案：+¥1,100〜</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-[#E2857B]">•</span>
                    <span>ビジュアルボード納品：+¥2,200</span>
                  </li>
                </ul>
              </div>
              
              <Link 
                href="/contact?service=spark" 
                className="inline-block px-8 py-4 bg-[#E2857B] text-white rounded-lg font-bold text-lg hover:shadow-lg transition-all transform hover:-translate-y-1"
              >
                申し込む
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E2857B] to-[#F5ADA8] z-0"></div>
        <div className="absolute left-0 top-0 w-full h-full bg-[#E2857B] opacity-30 skew-y-6 -translate-y-1/2"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-8">
              まずは気軽に<br />ひと声かけてみませんか？
            </h2>
            <p className="text-xl mb-12 opacity-90">
              相談だけでもOK。どんな小さな「やりたいこと」も、カタチにするお手伝いをします。
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact?service=spark" 
                className="px-8 py-4 bg-white text-[#E2857B] rounded-lg font-bold text-lg hover:bg-neutral-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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