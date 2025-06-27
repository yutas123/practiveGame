import ShampooGame from './components/ShampooGame'

export default function GamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-8">
          シャンプーゲーム
        </h1>
        <p className="text-lg text-blue-600 mb-8">
          シャンプーをクリックして水滴を発射しよう！
        </p>
        <ShampooGame />
      </div>
    </div>
  )
}
