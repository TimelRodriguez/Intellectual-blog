import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { briefings } from "@/lib/briefings"

export default function BriefingsPage() {
  const getThreatLevelColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-red-100 text-red-700 border-red-200"
      case "Medium":
        return "bg-amber-100 text-amber-700 border-amber-200"
      case "Low":
        return "bg-green-100 text-green-700 border-green-200"
      default:
        return "bg-stone-100 text-stone-700 border-stone-200"
    }
  }
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
              <Link href="/current-events" className="text-stone-700 hover:text-rose-600 font-medium transition-colors">
                Current Events
              </Link>
              <Link href="/briefings" className="text-rose-600 font-medium">
                Briefings
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">Threat Intelligence Briefings</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Threat briefings and intelligence insights on cyber security, extremism, and strategic risks through an OSINT lens.
          </p>
        </div>
      </section>

      {/* Briefings */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8">
            {briefings.map((briefing) => (
              <Card key={briefing.id} className="border-rose-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-rose-100 rounded-lg text-rose-600">{briefing.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="outline" className={getThreatLevelColor(briefing.threatLevel)}>
                          {briefing.threatLevel} Risk
                        </Badge>
                        <span className="text-sm text-stone-500">{briefing.category}</span>
                        <span className="text-sm text-stone-500">•</span>
                        <span className="text-sm text-stone-500">{briefing.date}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-stone-800 mb-3">{briefing.title}</h2>
                    </div>
                  </div>

                  <div className="md:flex gap-6">
                    <div className="md:w-1/3 mb-4 md:mb-0">
                      <Image
                        src={briefing.image || "/placeholder.svg"}
                        alt={briefing.title}
                        width={500}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-stone-600 mb-4 leading-relaxed">{briefing.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {briefing.tags.map((tag) => (
                          <span key={tag} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/briefings/${briefing.slug}`}>
                        <Button variant="ghost" className="text-rose-600 hover:text-rose-700">
                          Read Full Briefing →
                        </Button>
                      </Link>
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
