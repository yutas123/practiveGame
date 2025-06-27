// Step 1: 基礎環境構築
// 学習目標: Next.jsプロジェクトの基本構造を理解する

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="text-center">
        {/* Step 1: 基本的なJSX要素 */}
        <h1 className="text-6xl font-bold text-blue-800 mb-8">
          Hello Shampoo Game! 🧴
        </h1>
        
        {/* Step 1: Tailwind CSSの基本的な使い方 */}
        <p className="text-xl text-blue-600 mb-8">
          Next.js + TypeScript + Tailwind CSS の基本セットアップが完了しました
        </p>
        
        {/* Step 1: 基本的なスタイリング */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            🎯 学習目標
          </h2>
          <ul className="text-left text-gray-600 space-y-2">
            <li>✅ Next.jsプロジェクトの構造理解</li>
            <li>✅ TypeScriptの基本設定</li>
            <li>✅ Tailwind CSSでのスタイリング</li>
            <li>✅ 開発サーバーの起動方法</li>
          </ul>
        </div>
        
        {/* Step 1: 次のステップへの案内 */}
        <div className="mt-8 p-4 bg-yellow-100 rounded-lg">
          <p className="text-yellow-800">
            <strong>次のステップ:</strong> git checkout step-02-static-component
          </p>
        </div>
      </div>
    </main>
  )
}
