import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 個人情報の収集と利用</h2>
        <p className="mb-4">LazyWhiz（以下、「当サイト」）は、より良いサービスを提供するために、以下の方法で情報を収集する場合があります：</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Google Analytics 4によるアクセス解析</li>
          <li className="mb-2">お問い合わせフォームからの情報収集</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Google Analyticsの使用について</h2>
        <p className="mb-4">当サイトでは、Googleによるアクセス解析ツール「Google Analytics 4」を使用しています。このGoogle Analyticsはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。</p>
        <p className="mb-4">この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。</p>
        <p className="mb-4">Google Analyticsの利用規約に関しては<a href="https://policies.google.com/technologies/partner-sites" className="text-brand-500 hover:text-brand-600">こちら</a>をご覧ください。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Cookieの使用について</h2>
        <p className="mb-4">当サイトでは、ユーザーエクスペリエンスの向上のためにCookieを使用しています。Cookieは以下の目的で使用されます：</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">アクセス解析（Google Analytics）</li>
          <li className="mb-2">サイトの利便性向上</li>
          <li className="mb-2">ユーザー設定の保存</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. データの共有と開示</h2>
        <p className="mb-4">収集した情報は、以下の場合を除き、第三者に開示することはありません：</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">法令に基づく場合</li>
          <li className="mb-2">ユーザーの同意がある場合</li>
          <li className="mb-2">当サイトの権利や財産を保護する必要がある場合</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. プライバシーポリシーの変更</h2>
        <p className="mb-4">当サイトは、必要に応じて、このプライバシーポリシーの内容を変更することがあります。変更した場合には、当ページにて通知いたします。</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. お問い合わせ</h2>
        <p className="mb-4">本ポリシーに関するお問い合わせは、以下のメールアドレスまでお願いいたします：</p>
        <p className="mb-4">メール：contact@lazywhiz.io</p>
      </section>

      <footer className="text-sm text-text-medium">
        <p>最終更新日：2024年3月22日</p>
      </footer>
    </div>
  );
} 