# Step 1: 基礎環境構築

## 🎯 学習目標
Next.jsプロジェクトの基本構造を理解し、開発環境をセットアップする

## 📚 学習内容

### 1. プロジェクト構造の理解
```
practiveGame/
├── src/
│   └── app/
│       ├── globals.css      # グローバルスタイル
│       ├── layout.tsx       # ルートレイアウト
│       └── page.tsx         # ホームページ
├── public/                  # 静的ファイル
├── package.json            # プロジェクト設定
├── tsconfig.json           # TypeScript設定
├── next.config.js          # Next.js設定
├── tailwind.config.ts      # Tailwind CSS設定
└── postcss.config.js       # PostCSS設定
```

### 2. 重要なファイルの役割

**`src/app/page.tsx`**
- Next.js 13+ App Routerのメインページ
- React関数コンポーネントとして実装
- TypeScriptで型安全に記述

**`src/app/layout.tsx`**
- 全ページ共通のレイアウト
- HTMLの基本構造を定義
- フォントやメタデータを設定

**`tailwind.config.ts`**
- Tailwind CSSの設定ファイル
- カスタムスタイルやテーマを定義

### 3. 基本的なJSX構文
```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <h1 className="text-6xl font-bold text-blue-800">
        Hello Shampoo Game! 🧴
      </h1>
    </main>
  )
}
```

### 4. Tailwind CSSの基本
- `min-h-screen`: 最小高さを画面全体に
- `bg-gradient-to-b`: 上から下へのグラデーション
- `text-6xl`: 大きなテキストサイズ
- `font-bold`: 太字
- `text-blue-800`: 濃い青色

## 🚀 実行方法

```bash
# 開発サーバー起動
bun dev

# ブラウザで確認
# http://localhost:3000
```

## ✅ 確認ポイント

1. **ページが表示される**: "Hello Shampoo Game! 🧴" が表示される
2. **スタイルが適用される**: 青いグラデーション背景が表示される
3. **TypeScriptエラーがない**: コンパイルエラーが発生しない
4. **ホットリロードが動作**: ファイル変更時に自動更新される

## 🎓 練習課題

1. **テキストを変更**: タイトルを自分の好きな文字に変更してみよう
2. **色を変更**: `text-blue-800` を `text-red-800` に変更してみよう
3. **背景を変更**: グラデーションの色を変更してみよう

## 📖 学習リソース

- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [Tailwind CSS公式ドキュメント](https://tailwindcss.com/docs)
- [TypeScript公式ドキュメント](https://www.typescriptlang.org/docs/)

## ➡️ 次のステップ

```bash
git checkout step-02-static-component
```

Step 2では、静的なシャンプーボトルコンポーネントを作成し、Reactコンポーネントの基本を学習します。
