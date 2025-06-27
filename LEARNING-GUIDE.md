# 🎮 シャンプーゲーム学習ガイド

Next.js初心者向けの段階的学習教材です。シンプルなシャンプーゲームを通じて、React・Next.js・TypeScriptの基本から応用まで学習できます。

## 📋 学習の進め方

### 1. 前提知識
- HTML/CSS の基本
- JavaScript の基本（変数、関数、配列、オブジェクト）
- Node.js がインストールされていること
- Bun がインストールされていること

### 2. 学習環境
```bash
# プロジェクトのクローン
git clone <repository-url>
cd practiveGame

# 依存関係のインストール
bun install

# 開発サーバー起動
bun dev
```

## 🎯 学習ステップ一覧

### Step 1: 基礎環境構築 (初心者レベル)
**所要時間**: 30分  
**学習目標**: Next.jsプロジェクトの基本構造を理解する

```bash
git checkout step-01-basic-setup
```

**学習内容**:
- Next.js プロジェクトの構造
- TypeScript の基本設定
- Tailwind CSS の基本
- 開発サーバーの起動方法

**成果物**: シンプルな Hello World ページ

---

### Step 2: 静的コンポーネント作成 (初心者レベル)
**所要時間**: 45分  
**学習目標**: Reactコンポーネントの基本とpropsの使い方を学ぶ

```bash
git checkout step-02-static-component
```

**学習内容**:
- React 関数コンポーネント
- TypeScript interface
- props の受け渡し
- Tailwind CSS でのスタイリング

**成果物**: 静的なシャンプーボトルコンポーネント

---

### Step 3: 状態管理入門 (初級レベル)
**所要時間**: 60分  
**学習目標**: useStateを使った状態管理を学ぶ

```bash
git checkout step-03-state-management
```

**学習内容**:
- useState フック
- イベントハンドラー
- 条件付きレンダリング
- 'use client' ディレクティブ

**成果物**: クリックで色が変わるインタラクティブなボトル

---

### Step 4: イベント処理 (初級レベル)
**所要時間**: 60分  
**学習目標**: マウスイベントとuseRefを学ぶ

```bash
git checkout step-04-event-handling
```

**学習内容**:
- マウス座標の取得
- useRef フック
- DOM要素へのアクセス
- 座標計算の基礎

**成果物**: マウス位置を追跡する機能

---

### Step 5: 動的リスト管理 (中級レベル)
**所要時間**: 75分  
**学習目標**: 配列状態の管理と動的レンダリングを学ぶ

```bash
git checkout step-05-dynamic-lists
```

**学習内容**:
- 配列状態の管理
- map() を使った動的レンダリング
- ユニークキーの重要性
- 要素の追加・削除

**成果物**: 水滴オブジェクトの管理システム

---

### Step 6: useCallback最適化 (中級レベル)
**所要時間**: 45分  
**学習目標**: パフォーマンス最適化を学ぶ

```bash
git checkout step-06-callback-optimization
```

**学習内容**:
- useCallback の使い方
- 依存配列の理解
- 不要な再レンダリングの防止
- メモ化の概念

**成果物**: 最適化されたイベントハンドラー

---

### Step 7: タイマーとインターバル (中級レベル)
**所要時間**: 60分  
**学習目標**: 時間ベースの処理を学ぶ

```bash
git checkout step-07-timers-intervals
```

**学習内容**:
- setInterval の使い方
- タイマーのクリーンアップ
- useRef でタイマーIDを保持
- メモリリークの防止

**成果物**: 連続発射機能

---

### Step 8: アニメーション実装 (上級レベル)
**所要時間**: 90分  
**学習目標**: requestAnimationFrameを使ったスムーズなアニメーション

```bash
git checkout step-08-animations
```

**学習内容**:
- requestAnimationFrame の使い方
- 60FPS アニメーションの実現
- 数学的な位置計算（等速直線運動）
- アニメーションループの管理

**成果物**: 滑らかに動く水滴アニメーション

---

### Step 9: useEffect完全理解 (上級レベル)
**所要時間**: 75分  
**学習目標**: useEffectの高度な使い方を学ぶ

```bash
git checkout step-09-useeffect-mastery
```

**学習内容**:
- useEffect の依存配列
- クリーンアップ関数
- 複数の useEffect の使い分け
- 無限ループの回避

**成果物**: 完全なライフサイクル管理

---

### Step 10: TypeScript型安全性 (上級レベル)
**所要時間**: 60分  
**学習目標**: TypeScriptの型システムを活用する

```bash
git checkout step-10-typescript-safety
```

**学習内容**:
- インターフェースの定義
- 型安全なprops
- ジェネリクスの使用
- 型ガードの実装

**成果物**: 完全に型安全なシャンプーゲーム

---

## 📚 各ステップの詳細ドキュメント

各ステップには詳細な学習ガイドが用意されています：

- `STEP-01-README.md` - 基礎環境構築
- `STEP-02-README.md` - 静的コンポーネント作成
- `STEP-03-README.md` - 状態管理入門
- `STEP-04-README.md` - イベント処理
- `STEP-05-README.md` - 動的リスト管理
- `STEP-06-README.md` - useCallback最適化
- `STEP-07-README.md` - タイマーとインターバル
- `STEP-08-README.md` - アニメーション実装
- `STEP-09-README.md` - useEffect完全理解
- `STEP-10-README.md` - TypeScript型安全性

## 🎓 学習のコツ

### 1. 段階的に進める
- 各ステップを順番に進める
- 前のステップを理解してから次に進む
- 急がずに確実に理解する

### 2. 実際に手を動かす
- コードを読むだけでなく、実際に変更してみる
- 練習課題に取り組む
- エラーを恐れずに実験する

### 3. 比較して理解する
```bash
# 前のステップとの差分を確認
git diff step-02-static-component step-03-state-management
```

### 4. デバッグスキルを身につける
- ブラウザの開発者ツールを活用
- console.log でデバッグ
- TypeScript エラーメッセージを読む

## 🔧 トラブルシューティング

### よくある問題と解決方法

#### 1. 開発サーバーが起動しない
```bash
# ポートが使用中の場合
bun dev --port 3001

# 依存関係を再インストール
rm -rf node_modules bun.lockb
bun install
```

#### 2. TypeScript エラー
```bash
# 型チェックを実行
bun run type-check

# ESLint でコードチェック
bun run lint
```

#### 3. ブランチ切り替えでエラー
```bash
# 変更を一時保存
git stash

# ブランチ切り替え
git checkout step-XX-xxxxx

# 必要に応じて復元
git stash pop
```

## 📖 参考リソース

### 公式ドキュメント
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### 学習リソース
- [React Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [JavaScript.info](https://javascript.info/)

## 🎯 学習後の次のステップ

このガイドを完了した後は、以下のような発展的な学習に進むことができます：

1. **状態管理ライブラリ**: Redux、Zustand
2. **データフェッチング**: SWR、React Query
3. **フォーム処理**: React Hook Form
4. **テスト**: Jest、React Testing Library
5. **デプロイ**: Vercel、Netlify
6. **データベース**: Prisma、Supabase

## 🤝 コントリビューション

このガイドの改善提案やバグ報告は、GitHubのIssueまたはPull Requestでお願いします。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

---

**Happy Learning! 🚀**

シャンプーゲームを通じて、楽しくNext.jsを学習しましょう！
