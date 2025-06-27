interface WaterDropletProps {
  x: number
  y: number
}

export default function WaterDroplet({ x, y }: WaterDropletProps) {
  return (
    <div 
      className="absolute pointer-events-none"
      style={{ 
        left: x - 4, // 中心を調整（水滴のサイズの半分）
        top: y - 4,
        transform: 'translate(-50%, -50%)'
      }}
    >
      {/* 水滴本体 */}
      <div className="w-3 h-3 bg-blue-400 rounded-full shadow-sm opacity-80 animate-pulse">
        {/* 水滴のハイライト */}
        <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-60"></div>
      </div>
      
      {/* 水滴の軌跡エフェクト */}
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-blue-300 opacity-40 rounded-full"></div>
    </div>
  )
}
