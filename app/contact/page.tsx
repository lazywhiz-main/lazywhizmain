'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const form = e.currentTarget;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || '送信に失敗しました');
      }

      // フォームをリセット（submitStatusの設定前に行う）
      form.reset();
      
      // 成功時の処理
      setSubmitStatus('success');
    } catch (error) {
      // エラー処理
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '送信に失敗しました。しばらく経ってからもう一度お試しください。');
      console.error('送信エラー:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero Section - 改良版 */}
      <section className="relative min-h-[60vh] py-16 overflow-hidden bg-gradient-to-br from-brand-200/30 via-white to-neutral-50">
        {/* 装飾要素 */}
        <div className="absolute right-0 top-20 w-64 h-64 bg-brand-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-20 w-72 h-72 bg-[#E57373] rounded-full opacity-5"></div>
        <div className="absolute right-1/4 bottom-10 w-32 h-32 bg-brand-200 rounded-full opacity-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <span className="inline-block mb-6 px-4 py-2 bg-brand-200 text-brand-600 rounded-full text-sm font-medium">LazyWhiz Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-brand-500">ひと声</span>かける
            </h1>
            <p className="text-lg md:text-xl text-text-medium mb-8 max-w-2xl">
              LazyWhizへのお問い合わせ、ご相談はこちらからお気軽にどうぞ。
              ご質問やご相談内容をお聞かせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form - 改良版 */}
      <section className="py-16" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-md">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-8 bg-green-50 p-5 rounded-lg border border-green-200 text-green-700">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="font-medium">お問い合わせを送信しました</h3>
                  </div>
                  <p className="text-sm">
                    ありがとうございます。ご記入いただいたメールアドレスに確認メールが送信されています。2営業日以内にご返信いたします。
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-8 bg-red-50 p-5 rounded-lg border border-red-200 text-red-700">
                  <div className="flex items-center mb-2">
                    <div className="mr-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="font-medium">エラーが発生しました</h3>
                  </div>
                  <p className="text-sm">{errorMessage}</p>
                </div>
              )}

              {/* LazyTip */}
              {submitStatus !== 'success' && (
                <div className="mb-8 bg-brand-50 p-5 rounded-lg border border-brand-200">
                  <div className="flex items-center mb-2">
                    <div className="text-brand-500 mr-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <h3 className="font-medium text-text-high">LazyTip: 相談のコツ</h3>
                  </div>
                  <p className="text-sm text-text-medium">
                    具体的な課題と目標を明確に伝えることで、より的確な提案が可能になります。また、現状の課題点を優先度順に列挙いただくと、より良い解決策を提示できます。
                  </p>
                </div>
              )}
              
              {submitStatus !== 'success' ? (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-text-high font-medium mb-2">
                        お名前 <span className="text-[#E57373]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="山田 太郎"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-text-high font-medium mb-2">
                        メールアドレス <span className="text-[#E57373]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                        placeholder="your-email@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="inquiry_type" className="block text-text-high font-medium mb-2">
                      お問い合わせの種類 <span className="text-[#E57373]">*</span>
                    </label>
                    <select
                      id="inquiry_type"
                      name="inquiry_type"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-white"
                      required
                      disabled={isSubmitting}
                    >
                      <option value="">選択してください</option>
                      <option value="service">サービスに関するお問い合わせ</option>
                      <option value="project">プロジェクトのご相談</option>
                      <option value="quote">お見積もり依頼</option>
                      <option value="interview">取材・講演依頼</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-text-high font-medium mb-2">
                      予算感
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-white"
                      disabled={isSubmitting}
                    >
                      <option value="">選択してください</option>
                      <option value="low">〜50万円</option>
                      <option value="medium">50万円〜100万円</option>
                      <option value="high">100万円〜300万円</option>
                      <option value="enterprise">300万円〜</option>
                      <option value="undecided">未定</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-text-high font-medium mb-2">
                      メッセージ <span className="text-[#E57373]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="ご質問・ご相談内容をご記入ください"
                      required
                      disabled={isSubmitting}
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-medium transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          送信中...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                          </svg>
                          送信する
                        </>
                      )}
                    </button>
                  </div>
                  
                  <p className="text-sm text-text-medium text-center">
                    <span className="text-[#E57373]">*</span> は必須項目です。通常2営業日以内にご返信いたします。
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <Link 
                    href="/" 
                    className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-medium transition-all mt-4"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    トップページに戻る
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Other Contact Methods - 改良版 */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-brand-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">Alternative Ways</span>
            <h2 className="text-3xl font-bold mb-4">その他のお問い合わせ方法</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              目的に合わせて最適な方法でご連絡ください
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-2">メール</h3>
              <p className="mb-2 font-medium">info@lazywhiz.com</p>
              <div className="flex items-center justify-center space-x-2 text-sm text-text-medium">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  24時間受付
                </span>
                <span>•</span>
                <span>2営業日以内に返信</span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">電話</h3>
              <p className="mb-2 font-medium">03-1234-5678</p>
              <div className="flex items-center justify-center space-x-2 text-sm text-text-medium">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  平日 10:00〜18:00
                </span>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2">Discord</h3>
              <p className="mb-2 font-medium">@lazywhiz_jp</p>
              <div className="flex items-center justify-center space-x-2 text-sm text-text-medium">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1 text-brand-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  最速で返信
                </span>
                <span>•</span>
                <span>カジュアル相談</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - 新規追加 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-200 text-brand-600 rounded-full text-sm font-medium mb-4">Quick Answers</span>
            <h2 className="text-3xl font-bold mb-4">よくある質問</h2>
            <p className="text-lg text-text-medium max-w-2xl mx-auto">
              お問い合わせの前に、こちらをご確認ください
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="divide-y divide-neutral-100">
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>サービス料金はどのように決まりますか？</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-medium mt-3 group-open:animate-fadeIn">
                  プロジェクトの規模、複雑さ、期間などを考慮して個別にお見積りさせていただきます。標準的なWebサイト制作は50万円〜、アプリ開発は100万円〜が目安ですが、まずはご相談ください。
                </p>
              </details>
              
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>納期はどれくらいかかりますか？</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-medium mt-3 group-open:animate-fadeIn">
                  プロジェクトの内容によりますが、シンプルなWebサイトは2〜4週間、複雑なアプリケーションは2〜6ヶ月が目安です。「賢く怠ける」アプローチで、最短での価値提供を心がけています。
                </p>
              </details>
              
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>どのような支払い方法がありますか？</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-medium mt-3 group-open:animate-fadeIn">
                  銀行振込、クレジットカード決済に対応しています。プロジェクトの規模により、着手金（30%）と完了時支払い（70%）、または月額払いなど柔軟に対応可能です。
                </p>
              </details>
              
              <details className="group p-6 cursor-pointer">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>地方在住ですが、相談は可能ですか？</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-text-medium mt-3 group-open:animate-fadeIn">
                  もちろん可能です。オンラインでの打ち合わせに対応しており、全国どこからでもご相談いただけます。これまでにも多くの地方企業様とリモートで協業してきた実績があります。
                </p>
              </details>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-text-medium mb-4">質問が見つからない場合は、お気軽にお問い合わせください</p>
            <a href="#contact-form" className="inline-flex items-center justify-center bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-medium transition-all">
              お問い合わせフォームへ戻る
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 