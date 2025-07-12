import Link from "next/link"

export default function Navbar() {
    return ( 
        <nav className="bg-white/80 backdrop-blur-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-stone-800">
              <span className="font-black text-rose-600">INTEL</span>
              <span className="font-light">lectual</span>
            </Link>
            <div className="flex space-x-8">
              <Link href="/" className="text-stone-700 hover:text-rose-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/current-events" className="text-stone-700 hover:text-rose-600 font-medium transition-colors">
                Current Events
              </Link>
              <Link href="/briefings" className="text-stone-700 hover:text-rose-600 font-medium transition-colors">
                Briefings
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
}