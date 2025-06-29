# Step 2: 静的コンポーネント作成

## 🎯 学習目標
Reactコンポーネントの基本とpropsの使い方、Tailwind CSSでのスタイリングを学ぶ

## 📚 学習内容

### 1. React関数コンポーネントの基本

```tsx
// 関数コンポーネントの定義
export default function ShampooBottle({ x, y }: ShampooBottleProps) {
  return (
    <div className="absolute" style={{ left: x, top: y }}>
      {/* JSX要素 */}
    </div>
  )
}
```

**ポイント**:
- `export default` でコンポーネントをエクスポート
- 関数名は大文字で始める（PascalCase）
- JSXを返す関数として定義

### 2. TypeScript Interface

```tsx
interface ShampooBottleProps {
  x: number  // X座標
  y: number  // Y座標
}
```

**ポイント**:
- `interface` でpropsの型を定義
- 型安全性を確保
- IDEでの補完機能が利用可能

### 3. Props（プロパティ）

```tsx
// コンポーネントの使用
<ShampooBottle x={350} y={200} />

// コンポーネント内でpropsを受け取り
function ShampooBottle({ x, y }: ShampooBottleProps) {
  // x と y を使用可能
}
```

**ポイント**:
- 親コンポーネントから子コンポーネントにデータを渡す仕組み
- 分割代入（destructuring）で受け取り
- 型安全にデータを渡せる

### 4. Tailwind CSSでのスタイリング

```tsx
<div className="w-20 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg">
```

**主要なクラス**:
- `w-20 h-24`: 幅と高さの指定
- `bg-gradient-to-b`: 上から下へのグラデーション
- `from-blue-400 to-blue-600`: グラデーションの色
- `rounded-lg`: 角丸
- `shadow-lg`: 影効果
- `absolute`: 絶対位置指定
- `relative`: 相対位置指定

### 5. JSXの構造

```tsx
return (
  <div>
    {/* コメントはこのように書く */}
    <div className="parent">
      <div className="child">
        <span>テキスト</span>
      </div>
    </div>
  </div>
)
```

**ポイント**:
- 必ず1つのルート要素を返す
- `className` でCSSクラスを指定
- `{}` 内にJavaScript式を記述可能

## 🚀 実行方法

```bash
# 開発サーバー起動
bun dev

# ブラウザで確認
# http://localhost:3000
```

## ✅ 確認ポイント

1. **シャンプーボトルが表示される**: 青いグラデーションのボトルが中央に表示
2. **ポンプが表示される**: グレーのポンプとノズルが上部に表示
3. **ラベルが表示される**: 白い背景に「SHAMPOO」の文字
4. **TypeScriptエラーがない**: コンパイルエラーが発生しない

## 🎓 練習課題

### 初級
1. **位置を変更**: `<ShampooBottle x={100} y={100} />` で位置を変更
2. **色を変更**: `from-blue-400 to-blue-600` を `from-red-400 to-red-600` に変更
3. **サイズを変更**: `w-20 h-24` を `w-24 h-28` に変更

### 中級
1. **複数のボトル**: 異なる位置に複数のボトルを表示
2. **新しいprop追加**: `color` propを追加して色を変更可能にする
3. **ラベルテキスト変更**: `label` propでラベルテキストを変更可能にする

### 上級
1. **サイズprop追加**: `size` propでボトルサイズを変更可能にする
2. **アニメーション追加**: `hover:scale-105` でホバー効果を追加
3. **条件付きレンダリング**: `showLabel` propでラベルの表示/非表示を制御

## 📖 重要な概念

### コンポーネント設計の原則
- **単一責任**: 1つのコンポーネントは1つの責任を持つ
- **再利用性**: 異なる場所で再利用できるように設計
- **props**: 外部からの設定を受け取れるように設計

### TypeScriptの利点
- **型安全性**: 実行前にエラーを検出
- **IDE支援**: 自動補完やリファクタリング支援
- **ドキュメント**: 型定義がドキュメントの役割

## 🔍 コードの詳細解説

### ファイル構造
```
src/
├── app/
│   └── page.tsx          # メインページ（コンポーネントを使用）
└── components/
    └── ShampooBottle.tsx # シャンプーボトルコンポーネント
```

### インポート/エクスポート
```tsx
// エクスポート（ShampooBottle.tsx）
export default function ShampooBottle() { ... }

// インポート（page.tsx）
import ShampooBottle from '../components/ShampooBottle'
```

## ➡️ 次のステップ

```bash
git checkout step-03-state-management
```

Step 3では、`useState`を使った状態管理を学習し、クリックでボトルの状態を変更する機能を実装します。
