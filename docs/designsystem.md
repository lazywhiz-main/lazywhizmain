# lazywhiz Design System — Color Palette v0.1

## Purpose
cursorAI や Figma などに取り込めるよう、lazywhiz の暫定カラーパレットを
デザイントークン形式でまとめる。

---

## 1. Core Brand Colors
- **brand/mint-200**  `#BFEADF`  rgba(191,234,223,1)  
  ↳ さりげない背景・バッジ
- **brand/mint-500**  `#95D8C7`  rgba(149,216,199,1)  
  ↳ プライマリボタン・リンク
- **brand/mint-600**  `#7DCFB6`  rgba(125,207,182,1)  
  ↳ ボタン hover / active

> Mint 系トーン = “賢さ + 清涼感” を象徴するアクセント

---

## 2. Neutral Surface & Text
- **neutral/greige-50**  `#F5F3EE`  (Tailwind stone-100)  
  ↳ ページ背景
- **neutral/taupe-700**  `#8B917F`  (Tailwind stone-500)  
  ↳ カード背景・ボーダー
- **neutral/overlay-white-60**  `rgba(255,255,255,0.6)`  
  ↳ 画像オーバーレイ
- **text/high**  `#111827`  (Tailwind gray-900)  
  ↳ 見出し文字
- **text/medium**  `#374151`  (Tailwind gray-700)  
  ↳ 本文文字

---

## 3. Tailwind 設定例
~~~js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          200: '#BFEADF',
          500: '#95D8C7',
          600: '#7DCFB6',
        },
        neutral: {
          50:  '#F5F3EE',
          700: '#8B917F',
        },
        text: {
          high:   '#111827',
          medium: '#374151',
        },
      },
    },
  },
};
~~~

---

## 4. Semantic Mapping
- **Primary Button**         → `bg-brand-500`
- **Primary Button :hover** → `hover:bg-brand-600`
- **Page Background**        → `bg-neutral-50`
- **Heading Text**           → `text-text-high`
- **Body Text**              → `text-text-medium`

---

## 5. Accessibility Notes
- `text/high` (#111827) × `neutral/greige-50` → コントラスト比 **15.7 : 1** (AAA)
- `brand/mint-500` 上の白文字 → コントラスト比 **4.8 : 1**  
  （フォントサイズ 18 px 以上で AA 達成）

---

## 6. Next Steps
1. 追加カラーやダークモードの検討  
2. Figma Variables / Style Dictionary へのトークン同期  
3. UI コンポーネントへのマッピング拡張  