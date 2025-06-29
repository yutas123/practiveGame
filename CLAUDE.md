# Claude Development Guide
日本語で回答するようにしてください。

## Project Overview
Practice Game - Bun + Next.js + TypeScript練習用ゲームプロジェクト

## Technology Stack
- **Runtime**: Bun (高速なJavaScriptランタイム)
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint

## Development Commands
```bash
# 開発サーバー起動
bun dev

# プロダクションビルド
bun run build

# プロダクションサーバー起動
bun start

# リンターチェック
bun run lint

# 依存関係インストール
bun install
```

## Project Structure
```
practiveGame/
├── src/
│   ├── app/
│   │   ├── globals.css      # グローバルスタイル
│   │   ├── layout.tsx       # ルートレイアウト
│   │   └── page.tsx         # ホームページ
│   └── components/
│       └── ShampooBottle.tsx # シャンプーボトルコンポーネント
├── public/                  # 静的ファイル
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## Development Notes
- Next.js 14のApp Routerを使用
- TypeScriptの厳格な型チェック有効
- Tailwind CSSでスタイリング
- コンポーネントは`src/components/`に配置

## Current Features
- ShampooBottleコンポーネント（props対応、Tailwind CSS使用）

## Branch Information
- Current branch: step-02-static-component
- Main branch: (not set)