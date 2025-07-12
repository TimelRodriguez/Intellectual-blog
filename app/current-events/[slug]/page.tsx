import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { getArticleBySlug } from "@/lib/current_event"
import { Badge } from "@/components/ui/badge"

interface PageProps {
  params: {
    slug: string
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
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

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/current-events"
          className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Current Events
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-rose-100 text-rose-700">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">{article.title}</h1>

          <div className="flex items-center gap-6 text-stone-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{article.readTime}</span>
            </div>
            {article.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
            )}
          </div>

          <p className="text-xl text-stone-600 leading-relaxed mb-8">{article.excerpt}</p>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={800}
            height={400}
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-stone max-w-none">
          <div
            className="text-stone-700 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: article.content
                .replace(/\n/g, "<br />")
                .replace(/#{1,6}\s/g, (match) => {
                  const level = match.trim().length
                  return `<h${level} class="text-${4 - level}xl font-bold text-stone-800 mt-8 mb-4">`
                })
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-stone-200">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <span className="text-stone-600">Tags:</span>
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-rose-200 text-rose-700">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link href="/current-events" className="text-rose-600 hover:text-rose-700 font-medium transition-colors">
              More Articles →
            </Link>
          </div>
        </footer>
      </article>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="md:max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="font-black text-rose-400">INTEL</span>
            <span className="font-light">lectual</span>
          </h3>
          <p className="text-stone-300 mb-6">Intelligence analysis and commentary for the modern world</p>
          <div className="flex md:justify-center md:space-x-6">
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
