/*
  Whenever you want to add new content follow these instructions:
  1. Go to chatGPT
  2. Copy the export interface Briefing object (all it's fields)
  3. Copy and paste this prompt into chatgpt:

  I am writing a new briefing for my website. here are the fields it expects:
  export interface Briefing {
  id: string
  slug: string // this is the path to the briefing. for exampleL /briefing/timmy
  title: string
  excerpt: string
  content: string
  date: string
  threatLevel: "High" | "Medium" | "Low"
  category: string
  image: string
  tags: string[]
  keyFindings: string[]
  recommendations: string[]
  author?: string
}

here is the information I want to add:
title: 
slug: 
...


Only return the entry for this new object.

  4. Copy and paste the chatgpt output into the briefings array

*/

export interface Briefing {
  id: string
  slug: string // this is the path to the briefing. for exampleL /briefing/timmy
  title: string
  excerpt: string
  content: string
  date: string
  threatLevel: "High" | "Medium" | "Low"
  category: string
  image: string
  tags: string[]
  keyFindings: string[]
  recommendations: string[]
  author?: string
}

// Threat Briefings - Easy to add new ones here
export const briefings: Briefing[] = [
  
  {id: "1",
    slug: "Advanced-persistent-threat-37",
    title: "APT37 in Focus: North Korea’s Espionage Tactics and Evolving Malware",
    excerpt: "This briefing examines how APT37 uses zero-day exploits, phishing, and tools like RoKRAT to conduct targeted cyber operations.",
    content: `
    
    **Incident Summary:

    APT37 (Advanced Persistent Threat 37), also known as ScarCruft or Reaper, is a North Korean state-sponsored threat group that engages in targeted cyber espionage campaigns. These campaigns have primarily focused on South Korea but are increasingly reaching other countries. APT37 employs a diverse range of tactics, techniques, and procedures, including zero-day exploits, strategic web compromises, and spear phishing, to gain initial access and conduct intelligence collection. 
    
    Furthermore, recent reporting indicates continued use of both traditional and novel techniques, including disk-wiping malware and credential theft. The group has a history of using Dropbox and other global cloud services, such as OneDrive and Google Drive, to distribute malicious files. In their latest attack, APT37 sent fake Microsoft Word documents through targeted phishing emails. When opened, these files took advantage of a Windows flaw (CVE-2023-21674) to gain higher-level access on the victim’s computer, this is called privilege escalation. This allowed the attackers to quietly run PowerShell commands that installed RoKRAT, a spying tool that can gather system information, take screenshots, and steal files for later use. APT37’s evolving operations present a credible threat to organizations across East Asia and beyond.

    Below, I have provided a summarized table of some of the tactics and techniques used by APT37, along with their MITRE ATT&CK framework ID: 


    `,
    date: "string",
    threatLevel: "High",
    category: "string", 
    image: "string",
    tags: ["APT", "Zero-Day", "Digital Threats"],
    keyFindings:[],
    recommendations: [],
    author: "Timel Rodriguez",
  },
]

// Helper functions to get content by slug
export function getBriefingBySlug(slug: string): Briefing | undefined {
  return briefings.find((briefing) => briefing.slug === slug)
}
