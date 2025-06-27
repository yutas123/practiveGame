'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import ShampooBottle from './ShampooBottle'
import WaterDroplet from './WaterDroplet'

interface Droplet {
  id: string
  x: number
  y: number
  targetX: number
  targetY: number
  speed: number
  startX: number
  startY: number
}

export default function ShampooGame() {
  const [isShooting, setIsShooting] = useState(false)
  const [droplets, setDroplets] = useState<Droplet[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const gameAreaRef = useRef<HTMLDivElement>(null)
  const shootingIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const animationFrameRef = useRef<number>()

  // ノズルの位置（シャンプーボトルの先端）
  const nozzlePosition = { x: 400, y: 300 }

  // マウス位置の更新
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (gameAreaRef.current) {
      const rect = gameAreaRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      })
    }
  }, [])

  // 水滴生成
  const createDroplet = useCallback(() => {
    const newDroplet: Droplet = {
      id: Date.now().toString() + Math.random(),
      x: nozzlePosition.x,
      y: nozzlePosition.y,
      targetX: mousePosition.x,
      targetY: mousePosition.y,
      speed: 5,
      startX: nozzlePosition.x,
      startY: nozzlePosition.y
    }
    
    setDroplets(prev => [...prev, newDroplet])
  }, [mousePosition])

  // 発射開始
  const startShooting = useCallback(() => {
    if (isShooting) return
    
    setIsShooting(true)
    
    // 即座に1発発射
    createDroplet()
    
    // 一定間隔で発射
    shootingIntervalRef.current = setInterval(() => {
      createDroplet()
    }, 100) // 100ms間隔
  }, [isShooting, createDroplet])

  // 発射停止
  const stopShooting = useCallback(() => {
    setIsShooting(false)
    if (shootingIntervalRef.current) {
      clearInterval(shootingIntervalRef.current)
      shootingIntervalRef.current = null
    }
  }, [])

  // 水滴の位置更新
  const updateDroplets = useCallback(() => {
    setDroplets(prev => {
      return prev
        .map(droplet => {
          const dx = droplet.targetX - droplet.startX
          const dy = droplet.targetY - droplet.startY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < droplet.speed) {
            // 目標に到達
            return null
          }
          
          // 等速直線運動
          const newX = droplet.x + (dx / distance) * droplet.speed
          const newY = droplet.y + (dy / distance) * droplet.speed
          
          // 画面外チェック
          if (newX < -50 || newX > 850 || newY < -50 || newY > 650) {
            return null
          }
          
          return {
            ...droplet,
            x: newX,
            y: newY
          }
        })
        .filter((droplet): droplet is Droplet => droplet !== null)
    })
  }, [])

  // アニメーションループ
  useEffect(() => {
    const animate = () => {
      updateDroplets()
      animationFrameRef.current = requestAnimationFrame(animate)
    }
    
    animationFrameRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [updateDroplets])

  // クリーンアップ
  useEffect(() => {
    return () => {
      if (shootingIntervalRef.current) {
        clearInterval(shootingIntervalRef.current)
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div 
      ref={gameAreaRef}
      className="relative w-[800px] h-[600px] bg-white rounded-lg shadow-lg border-2 border-blue-300 overflow-hidden cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseDown={startShooting}
      onMouseUp={stopShooting}
      onMouseLeave={stopShooting}
    >
      {/* シャンプーボトル */}
      <ShampooBottle 
        x={nozzlePosition.x - 50} 
        y={nozzlePosition.y - 100} 
        isShooting={isShooting}
      />
      
      {/* 水滴 */}
      {droplets.map(droplet => (
        <WaterDroplet
          key={droplet.id}
          x={droplet.x}
          y={droplet.y}
        />
      ))}
      
      {/* 発射状態の表示 */}
      {isShooting && (
        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          発射中！
        </div>
      )}
      
      {/* 水滴カウント */}
      <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded-full text-sm">
        水滴: {droplets.length}
      </div>
    </div>
  )
}
