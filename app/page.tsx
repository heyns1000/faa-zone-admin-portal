import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white p-2 flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-lg font-bold">🍇 Fruitful™</span>
        </Link>

        <div className="hidden md:flex items-center space-x-2 text-sm">
          <Link href="#" className="px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center">
            <span>🌐 Global Checkout</span>
          </Link>
          <Link href="#" className="px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center">
            <span>✨ World 1st 7000+ brands by Fruitful™</span>
          </Link>
          <Link href="#" className="px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center">
            <span>🇺🇸 Fruitful.America™</span>
          </Link>
          <Link href="#" className="px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center">
            <span>☁️ Vrugtige.Planet.Verandering™</span>
          </Link>
          <Link href="#" className="px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center">
            <span>📜 Treaty™</span>
          </Link>
          <Link href="#" className="px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center">
            <span>🔶 VaultMesh™</span>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <Button className="bg-green-500 hover:bg-green-600 text-white">
            <span>🟢 Crate Dance</span>
          </Button>
          <Button variant="outline" className="bg-orange-500 hover:bg-orange-600 text-white border-none">
            <span>🔸 Contact FAA</span>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-blue-600 to-blue-500 text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="flex items-center justify-center gap-2">
              <span>🍉</span>
              <span>Fruitful.Planet.Change™</span>
              <span>🦍</span>
            </span>
          </h1>

          <div className="space-y-6">
            <p className="text-lg">
              Welcome to <span className="font-bold">✨ FAA.ZONE</span> — this is where new ideas for how we live, shop,
              and work come together. <span className="font-bold">✨ FAA.ZONE</span> — brings together thousands of
              small, independent brands that care about people, the planet, and the future. From eco-friendly clothing
              to clean food, smart mobile tools to nature protection — this site connects you with businesses that
              actually care and collaborate.
            </p>

            <p className="text-lg">
              This isn&apos;t a typical shopping website. Everything you see here is part of a global network working
              together — not competing. When you click, explore, or buy here, you&apos;re joining a movement to make
              life more fair, creative, and sustainable. <span className="font-bold">✨ FAA.ZONE</span> is for the next
              generation — and for anyone who wants a better way to belong, build, and do good.
            </p>

            <p className="text-lg">
              And behind it all? Our AI — a quiet but powerful engine that helps make everything work smoother, smarter,
              and more personally. FAA&apos;s technology helps match users with the right brands, surfaces better
              alternatives, and keeps the entire platform intelligent, fair, and fast. Whether it&apos;s organizing
              products, tracking sustainability, or helping a small brand shine globally, our AI is always working — not
              just to sell, but to support.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-6 py-5">EXPLORE THE VAULT</Button>
            <Button className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-6 py-5">
              <span>🦊 DECODE FOXED TRANSMISSION</span>
            </Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-5">
              <span>🌿 WILDLIFE SECTOR DASHBOARD</span>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
