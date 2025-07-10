import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { articles } from "@/lib/current_event"

export default function CurrentEventsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-stone-50">
      {/* Navigation */}
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
              <Link href="/current-events" className="text-rose-600 font-medium">
                Current Events
              </Link>
              <Link href="/briefings" className="text-stone-700 hover:text-rose-600 font-medium transition-colors">
                Briefings
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Current Events Analysis</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            In-depth analysis of global events through an intelligence lens, providing context and strategic insights
            for today's complex world.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {articles.map((article) => (
              <Card key={article.id} className="border-rose-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={500}
                        height={300}
                        className="w-full h-48 md:h-full object-cover rounded-l-lg"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold text-stone-800 mb-3">{article.title}</h2>
                      <p className="text-stone-600 mb-4 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm text-stone-500">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                        <Link href={`/current-events/${article.slug}`}>
                          <Button variant="ghost" className="text-rose-600 hover:text-rose-700">
                            Read More →
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="font-black text-rose-400">INTEL</span>
            <span className="font-light">lectual</span>
          </h3>
          <p className="text-stone-300 mb-6">Intelligence analysis and commentary for the modern world</p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="text-stone-300 hover:text-rose-400 transition-colors">
              Home
            </Link>
            <Link href="/current-events" className="text-stone-300 hover:text-rose-400 transition-colors">
              Current Events
            </Link>
            <Link href="/briefings" className="text-stone-300 hover:text-rose-400 transition-colors">
              Briefings
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-stone-700">
            <p className="text-stone-400 text-sm">© 2025 INTELlectual. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
