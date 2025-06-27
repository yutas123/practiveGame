interface ShampooBottleProps {
  x: number
  y: number
  isShooting: boolean
}

export default function ShampooBottle({ x, y, isShooting }: ShampooBottleProps) {
  return (
    <div 
      className="absolute pointer-events-none"
      style={{ left: x, top: y }}
    >
      {/* シャンプーボトル本体 */}
      <div className={`relative transition-transform duration-100 ${isShooting ? 'scale-105' : 'scale-100'}`}>
        {/* ボトル本体 */}
        <div className="w-20 h-24 bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg shadow-lg relative">
          {/* ラベル */}
          <div className="absolute inset-x-2 top-4 h-8 bg-white rounded opacity-80 flex items-center justify-center">
            <span className="text-xs font-bold text-blue-800">SHAMPOO</span>
          </div>
          
          {/* ボトルのハイライト */}
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
        
        {/* 発射エフェクト */}
        {isShooting && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-1 h-2 bg-blue-300 opacity-60 animate-pulse"></div>
          </div>
        )}
      </div>
      
      {/* ホバーエフェクト用の透明な領域 */}
      <div className="absolute inset-0 w-20 h-24 hover:bg-blue-100 hover:bg-opacity-20 rounded-lg transition-colors duration-200"></div>
    </div>
  )
}
