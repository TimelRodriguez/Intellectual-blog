import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { briefings } from "@/lib/briefings"
import { articles } from "@/lib/current_event"
import Navbar from "./Navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-stone-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <Image
            src="https://i.imgur.com/7dIEgsB.png"
            alt="INTELlectual Hero Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative z-30 max-w-3xl mx-auto px-7">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="font-black text-rose-400">INTEL</span>
            <span className="font-light">lectual</span>
          </h1>
          <p className="text-xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            A space for original analysis, commentary, and threat briefings from an intelligence analyst in the making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full">
              <Link href="/current-events">Latest Analysis</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full bg-transparent"
            >
              <Link href="/briefings">Threat Briefings</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">About</h2>
              <p className="text-stone-600 mb-4 leading-relaxed">
  Welcome to <span className="font-black text-rose-600">INTEL</span>lectual — My name is Timel and I’m an aspiring intelligence analyst with deep interest in open-source intelligence (OSINT), the analysis of extremist movements, strategic forecasting, and cyber threats. This is my personal space to explore those areas, break things down, and practice intelligence writing.
</p>
              <p className="text-stone-600 mb-4 leading-relaxed">
               I started this blog as a way to develop and showcase my analytical and critical thinking skills, while having a little fun doing it. Here, I share original analysis and commentary on current events, along with structured threat briefings, as I continue building experience in the intelligence field.
              </p>
              <p className="text-stone-600 leading-relaxed">
  The site is simple:
</p>
<ul className="list-disc list-inside text-stone-600 mb-4 leading-relaxed">
  <li>
    <strong>Current Events</strong> → my take on what’s happening and why it matters
  </li>
  <li>
    <strong>Threat Briefings</strong> → focused, digestible write-ups on trends or incidents
  </li>
  <li>
    <strong>Home</strong> → that’s this page :)
  </li>
</ul>

               <p className="text-stone-600 mb-4 leading-relaxed">
               Thanks for visiting! Feel free to read around and see how I think.
               </p> 
            </div>
            <div className="relative ml-5">
              <Image
                src="https://i.imgur.com/SQEkFED.png"
                alt="Intelligence analysis workspace"
                width={350}
                height={525}
                className="rounded-2xl shadow-lg w-[400px] h-[575px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">Featured Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Events Preview */}
            <Card className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="https://i.imgur.com/mrhp3WU.png"
                    alt="Current events analysis"
                    width={400}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                    Current Events
                  </span>
                  <span className="text-stone-500 text-sm">June 9, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">
                Lawfare and the Limits of Economic Deterrence: South Africa v. Israel at the ICJ
                </h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
                South Africa’s ICJ genocide case against Israel shows that legal escalation (“lawfare”) is being used even when trade ties exist, challenging the idea that economic interdependence deters conflict. This case suggests...
        
                </p>
                <Link href={`/current-events/${articles[0]?.slug || ""}`}>
                  <Button variant="ghost" className="text-rose-600 hover:text-rose-700 p-0">
                    Read Full Analysis →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Threat Briefing Preview */}
            <Card className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Image
                    src="https://i.imgur.com/l2f4rGx.png"
                    alt="Threat briefing"
                    width={400}
                    height={200}
                    className="rounded-lg w-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    Threat Briefing
                  </span>
                  <span className="text-stone-500 text-sm">July 10, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">APT37 in Focus: North Korea’s Espionage Tactics and Evolving Malware</h3>
                <p className="text-stone-600 mb-4 leading-relaxed">
               This briefing examines how APT37 uses zero-day exploits, phishing, and tools like RoKRAT to conduct targeted cyber operations.
    
                </p>
                <Link href={`/briefings/${briefings[0]?.slug || ""}`}>
                  <Button variant="ghost" className="text-rose-600 hover:text-rose-700 p-0">
                    View Briefing →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="font-black text-rose-400">INTEL</span>
            <span className="font-light">lectual</span>
          </h3>
          <p className="text-stone-300 mb-6">Thinking out loud about the threats shaping our world</p>
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
