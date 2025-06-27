# Practice Game

Bun + Next.js + TypeScriptで構築された練習用ゲームプロジェクトです。

## 技術スタック

- **Bun**: 高速なJavaScriptランタイム、バンドラー、パッケージマネージャー
- **Next.js 14**: Reactベースのフルスタックフレームワーク（App Router使用）
- **TypeScript**: 型安全なJavaScript開発環境
- **Tailwind CSS**: ユーティリティファーストのCSSフレームワーク
- **ESLint**: コード品質とスタイルの統一

## 開発環境のセットアップ

### 前提条件

- Bunがインストールされていること

### インストール

```bash
# 依存関係のインストール
bun install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

### その他のコマンド

```bash
# プロダクションビルド
bun run build

# プロダクションサーバーの起動
bun start

# ESLintによるコードチェック
bun run lint
```

## プロジェクト構造

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
├── postcss.config.js       # PostCSS設定
└── .eslintrc.json          # ESLint設定
```

## 開発について

このプロジェクトはNext.js 13+のApp Routerを使用しています。新しいページやコンポーネントを追加する際は、`src/app`ディレクトリ内に配置してください。

TypeScriptの厳格な型チェックが有効になっているため、型安全な開発が可能です。
