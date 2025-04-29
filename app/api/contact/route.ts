import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// メール送信のトランスポーター設定
// 実際の環境変数に置き換えてください
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || 'your-email@gmail.com',
    pass: process.env.SMTP_PASSWORD || 'your-password',
  },
});

// 顧客への自動返信メールの設定
const sendAutoReply = async (name: string, email: string) => {
  const autoReplyOptions = {
    from: `"LazyWhiz" <${process.env.SMTP_USER}>`,
    to: email,
    subject: '【LazyWhiz】お問い合わせありがとうございます',
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2A9D83;">LazyWhiz - お問い合わせ受付完了</h2>
        <p>${name} 様</p>
        <p>お問い合わせありがとうございます。<br>以下のメールアドレスにお問い合わせを受け付けました。</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p>内容を確認の上、2営業日以内にご返信させていただきます。<br>お急ぎの場合は、お電話（03-1234-5678）までご連絡ください。</p>
        <div style="margin: 30px 0; padding: 20px; background-color: #f5f5f5; border-radius: 5px;">
          <p style="margin: 0; color: #666;">
            ※このメールは自動送信されています。<br>
            ※このメールに返信いただいても対応できない場合があります。
          </p>
        </div>
        <p>——————————<br>
        LazyWhiz株式会社<br>
        〒000-0000 東京都渋谷区○○○<br>
        TEL: 03-1234-5678<br>
        Email: info@lazywhiz.com<br>
        Web: <a href="https://lazywhiz.com">https://lazywhiz.com</a>
        </p>
      </div>
    `,
  };

  await transporter.sendMail(autoReplyOptions);
};

// 管理者への通知メールの設定
const sendAdminNotification = async (formData: FormData) => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const inquiryType = formData.get('inquiry_type') as string;
  const budget = formData.get('budget') as string;
  const message = formData.get('message') as string;

  // 問い合わせ種類の日本語表示
  const inquiryTypeMap: Record<string, string> = {
    'service': 'サービスに関するお問い合わせ',
    'project': 'プロジェクトのご相談',
    'quote': 'お見積もり依頼',
    'interview': '取材・講演依頼',
    'other': 'その他'
  };

  // 予算の日本語表示
  const budgetMap: Record<string, string> = {
    'low': '〜50万円',
    'medium': '50万円〜100万円',
    'high': '100万円〜300万円',
    'enterprise': '300万円〜',
    'undecided': '未定'
  };

  const adminMailOptions = {
    from: `"LazyWhiz Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL || 'admin@lazywhiz.com',
    subject: `【お問い合わせ】${name} 様からの新規お問い合わせ`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2A9D83;">新規お問い合わせがありました</h2>
        
        <h3 style="margin-top: 20px;">■ お問い合わせ者情報</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">項目</th>
            <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">内容</th>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">お名前</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">メールアドレス</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">お問い合わせの種類</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${inquiryTypeMap[inquiryType] || inquiryType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">予算感</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${budgetMap[budget] || '未選択'}</td>
          </tr>
        </table>
        
        <h3 style="margin-top: 20px;">■ お問い合わせ内容</h3>
        <div style="padding: 15px; background-color: #f9f9f9; border-radius: 5px; margin-bottom: 20px;">
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <p style="color: #666; font-size: 14px;">
          * このメールはWebサイトのお問い合わせフォームから自動送信されています。<br>
          * クライアントへの自動返信メールも送信済みです。
        </p>
      </div>
    `,
    replyTo: email,
  };

  await transporter.sendMail(adminMailOptions);
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const inquiryType = formData.get('inquiry_type') as string;
    const message = formData.get('message') as string;

    // 必須フィールドの検証
    if (!name || !email || !inquiryType || !message) {
      return NextResponse.json(
        { error: '必須項目を入力してください' },
        { status: 400 }
      );
    }

    // メール送信
    await Promise.all([
      sendAutoReply(name, email),
      sendAdminNotification(formData)
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: 'メール送信中にエラーが発生しました' },
      { status: 500 }
    );
  }
} 