import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        {/* 抽象的な背景グラフィック - ミント色の淡いグラデーション */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-200/50 via-white to-neutral-50 z-0"></div>
        
        {/* 抽象的な装飾要素 - 幾何学模様やドット */}
        <div className="absolute right-0 top-1/4 w-1/3 h-1/3 bg-brand-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute left-20 bottom-1/4 w-24 h-24 bg-brand-500 rounded-full opacity-10"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-heading mb-6">
              余白が、<br />
              <span className="text-brand-500">あなたを冴えさせる。</span>
            </h1>
            <p className="text-xl font-body text-text-medium mb-10 max-w-xl">
              必要なものだけを残し、余計なものを削ぎ落とす。
              そこから生まれる「余白」こそが、創造性と効率の源泉です。
            </p>
            <Link href="/toolkit" className="inline-flex items-center bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-lg font-ui transition-all">
              <span>Toolkitを試す</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto relative">
            {/* 装飾要素 */}
            <div className="absolute -left-10 -top-10 w-20 h-20 bg-brand-200 opacity-50 rounded"></div>
            
            <h2 className="text-3xl font-heading mb-12 text-text-high relative">
              <span className="bg-white pr-4 relative z-10">Our Story</span>
              <div className="absolute w-full h-px bg-neutral-700 top-1/2 -z-0"></div>
            </h2>
            
            <div className="prose prose-lg text-text-medium">
              <p className="lead text-xl font-body">
                LazyWhizは「頑張りすぎず、賢く生きる」をコンセプトに、最小限の労力で最大限の成果を出すための知恵とツールを提供します。私たちが目指すのは、無駄な作業や過剰な負担から解放され、本当に大切なことに集中できる世界です。
              </p>
              
              <p className="font-body">
                現代社会では、「忙しさ」がステータスのように扱われることがあります。しかし、本当の価値は労働時間の長さではなく、生み出される成果の質にあるはずです。LazyWhizは、効率と創造性を両立させ、余白のある生活を通じて新たな気づきや発想が生まれることを大切にしています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section id="principles" className="py-24 bg-neutral-50">
        <div className="container">
          <h2 className="text-3xl font-heading mb-16 text-center text-text-high">
            賢く怠ける <span className="text-brand-500">5</span>箇条
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {/* 原則1-2 */}
            <div className="col-span-1">
              <div className="card h-full">
                <div className="p-8">
                  <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 text-xl font-ui mb-6">1</div>
                  <h3 className="text-2xl font-heading mb-4 text-brand-500">力を抜く</h3>
                  <p className="text-text-medium font-body">最小の力で最大の成果を。力みすぎず、効率的なアプローチを見つけることで、エネルギーを温存しながら結果を出します。</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="card h-full">
                <div className="p-8">
                  <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 text-xl font-ui mb-6">2</div>
                  <h3 className="text-2xl font-heading mb-4 text-brand-500">流れに乗る</h3>
                  <p className="text-text-medium font-body">抵抗せず機を見て動く。無理に逆らうのではなく、状況の流れを読み、最適なタイミングで行動することで効率を高めます。</p>
                </div>
              </div>
            </div>
            
            {/* 原則3 - 特別強調 */}
            <div className="lg:col-span-1 lg:row-span-2 lg:flex lg:flex-col">
              <div className="bg-brand-500 p-8 rounded-lg border-2 border-brand-600 text-white h-full flex flex-col">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-500 text-xl font-ui mb-6">3</div>
                <h3 className="text-2xl font-heading mb-4">削ぎ落とす</h3>
                <p className="mb-6 font-body">本質以外を手放し余白をつくる。必要なものだけを残し、余分なものを取り除くことで、シンプルさと明瞭さを手に入れます。</p>
                <div className="mt-auto text-sm opacity-75 font-ui">
                  <p>LazyWhizの中核となる原則</p>
                </div>
              </div>
            </div>
            
            {/* 原則4-5 */}
            <div className="col-span-1">
              <div className="card h-full">
                <div className="p-8">
                  <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 text-xl font-ui mb-6">4</div>
                  <h3 className="text-2xl font-heading mb-4 text-brand-500">委ねる</h3>
                  <p className="text-text-medium font-body">任せられるものはシステムへ委譲。繰り返しの作業や定型業務を自動化し、あなたにしかできない創造的な仕事に集中します。</p>
                </div>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="card h-full">
                <div className="p-8">
                  <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center text-brand-500 text-xl font-ui mb-6">5</div>
                  <h3 className="text-2xl font-heading mb-4 text-brand-500">味わう</h3>
                  <p className="text-text-medium font-body">余白で得た感覚を深く味わい次へ活かす。創出された時間と空間を大切にし、新たな気づきや創造のきっかけとします。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* 背景 */}
        <div className="absolute inset-0 bg-brand-500 z-0"></div>
        
        {/* 装飾要素 */}
        <div className="absolute left-0 top-0 w-1/3 h-full bg-brand-600 opacity-50 skew-x-12 -translate-x-1/3"></div>
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-brand-200 rounded-full opacity-20"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-heading mb-8">原則を試してみませんか？</h2>
            <p className="text-xl font-body mb-12">
              LazyWhizの「頑張りすぎず、賢く生きる」原則をあなたの日常に取り入れてみませんか？
              実践的なツールやヒントで、より効率的で創造的な毎日をサポートします。
            </p>
            <Link href="/toolkit" className="inline-flex items-center bg-white text-brand-500 hover:bg-neutral-50 px-10 py-5 rounded-lg font-ui text-lg transition-all">
              <span>Toolkitへ</span>
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