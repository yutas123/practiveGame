// Step 2: 静的コンポーネント作成
// 学習目標: Reactコンポーネントの基本とpropsの使い方を学ぶ

// コンポーネントのインポート
import ShampooBottle from '../components/ShampooBottle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200">
      <div className="text-center pt-8">
        {/* Step 2: タイトル */}
        <h1 className="text-4xl font-bold text-blue-800 mb-4">
          Step 2: 静的シャンプーボトル 🧴
        </h1>
        
        <p className="text-lg text-blue-600 mb-8">
          Reactコンポーネントの基本とpropsの使い方を学習
        </p>
      </div>
      
      {/* Step 2: ゲーム領域 */}
      <div className="relative w-[800px] h-[500px] bg-white rounded-lg shadow-lg border-2 border-blue-300 mx-auto">
        {/* Step 2: シャンプーボトルコンポーネントの使用 */}
        {/* propsとして位置情報を渡す */}
        <ShampooBottle x={350} y={200} />
        
        {/* Step 2: 説明テキスト */}
        <div className="absolute bottom-4 left-4 bg-blue-500 text-white p-3 rounded-lg max-w-xs">
          <h3 className="font-bold mb-2">🎯 学習ポイント</h3>
          <ul className="text-sm space-y-1">
            <li>✅ 関数コンポーネント作成</li>
            <li>✅ TypeScript interface定義</li>
            <li>✅ propsの受け渡し</li>
            <li>✅ Tailwind CSSスタイリング</li>
          </ul>
        </div>
        
        {/* Step 2: 次のステップ案内 */}
        <div className="absolute bottom-4 right-4 bg-yellow-100 p-3 rounded-lg">
          <p className="text-yellow-800 text-sm">
            <strong>次:</strong> git checkout step-03-state-management
          </p>
        </div>
      </div>
      
      {/* Step 2: コード例の表示 */}
      <div className="max-w-4xl mx-auto mt-8 p-6 bg-gray-800 text-green-400 rounded-lg font-mono text-sm">
        <h3 className="text-white mb-4">📝 コード例:</h3>
        <pre>{`// コンポーネントの定義
interface ShampooBottleProps {
  x: number  // X座標
  y: number  // Y座標
}

export default function ShampooBottle({ x, y }: ShampooBottleProps) {
  return (
    <div style={{ left: x, top: y }}>
      {/* ボトルのJSX */}
    </div>
  )
}

// コンポーネントの使用
<ShampooBottle x={350} y={200} />`}</pre>
      </div>
    </main>
  )
}
