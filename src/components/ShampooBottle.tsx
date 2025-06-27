// Step 2: 静的コンポーネント作成
// 学習目標: Reactコンポーネントの基本とpropsの使い方を学ぶ

// TypeScriptのインターフェース定義
// propsの型を明確にすることで型安全性を確保
interface ShampooBottleProps {
  // ボトルの表示位置（X座標）
  x: number
  // ボトルの表示位置（Y座標）  
  y: number
}

// 関数コンポーネントの定義
// propsを受け取って、JSXを返す関数
export default function ShampooBottle({ x, y }: ShampooBottleProps) {
  return (
    // 絶対位置指定でボトルを配置
    <div 
      className="absolute"
      style={{ left: x, top: y }}
    >
      {/* シャンプーボトル本体 */}
      <div className="relative">
        {/* ボトル本体 - Tailwind CSSでスタイリング */}
        <div className="w-20 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg relative">
          {/* ラベル部分 */}
          <div className="absolute inset-x-2 top-4 h-8 bg-white rounded opacity-80 flex items-center justify-center">
            <span className="text-xs font-bold text-blue-800">SHAMPOO</span>
          </div>
          
          {/* ボトルのハイライト効果 */}
          <div className="absolute left-1 top-2 w-2 h-16 bg-white opacity-30 rounded-full"></div>
        </div>
        
        {/* ポンプ部分 */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          {/* ポンプヘッド */}
          <div className="w-6 h-6 bg-gray-300 rounded-t-lg border border-gray-400">
            {/* ノズル */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gray-400 rounded-t-full">
              {/* ノズル先端 */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-500 rounded-full"></div>
            </div>
          </div>
          
          {/* ポンプの軸 */}
          <div className="w-3 h-4 bg-gray-200 mx-auto border-x border-gray-300"></div>
        </div>
      </div>
    </div>
  )
}
