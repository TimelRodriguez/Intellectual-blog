import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, AlertTriangle, CheckCircle, Shield } from "lucide-react"
import { getBriefingBySlug } from "@/lib/briefings"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


interface PageProps {
  params: {
    slug: string
  }
}

export default function BriefingPage({ params }: PageProps) {
  
  const briefing = getBriefingBySlug(params.slug)

  if (!briefing) {
    console.log(briefing)
    notFound()
  }

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

      {/* Briefing Content */}
      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/briefings"
          className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Briefings
        </Link>

        {/* Briefing Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="outline" className={getThreatLevelColor(briefing.threatLevel)}>
              <AlertTriangle className="w-3 h-3 mr-1" />
              {briefing.threatLevel} Risk
            </Badge>
            <Badge variant="secondary" className="bg-rose-100 text-rose-700">
              {briefing.category}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">{briefing.title}</h1>

          <div className="flex items-center gap-6 text-stone-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{briefing.date}</span>
            </div>
            {briefing.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{briefing.author}</span>
              </div>
            )}
          </div>

          <p className="text-xl text-stone-600 leading-relaxed mb-8">{briefing.excerpt}</p>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={briefing.image || "/placeholder.svg"}
            alt={briefing.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Key Information Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Key Findings */}
          <Card className="border-rose-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-700">
                <Shield className="w-5 h-5" />
                Key Findings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {briefing.keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-start gap-2 text-stone-700">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{finding}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="border-rose-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-rose-700">
                <CheckCircle className="w-5 h-5" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {briefing.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start gap-2 text-stone-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{recommendation}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Briefing Content */}
        <div className="prose prose-lg prose-stone max-w-none mb-8">
          <div
            className="text-stone-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: briefing.content
                .replace(/\n/g, "<br />")
                .replace(/#{1,6}\s/g, (match) => {
                  const level = match.trim().length
                  return `<h${level} class="text-${4 - level}xl font-bold text-stone-800 mt-8 mb-4">`
                })
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="text-stone-600 font-medium">Tags:</span>
          {briefing.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="border-rose-200 text-rose-700">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Briefing Footer */}
        <footer className="mt-12 pt-8 border-t border-stone-200">
          <div className="flex items-center justify-between">
            <div className="text-stone-600">
              <p className="text-sm">
              </p>
            </div>
            <Link href="/current-events" className="text-rose-600 hover:text-rose-700 font-medium transition-colors">
              More Briefings →
            </Link>
          </div>
        </footer>
      </article>

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
