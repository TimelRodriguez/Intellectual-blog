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
    
    *table here*
   
    Overall, while their primary targeting has focused on Korean-language users and domestic South Korean institutions, the group’s malware toolset is adaptable. Entities operating in government, journalism, human rights, defense, or research should consider APT37 a high-risk actor, especially if their mission intersects with North Korean geopolitical interests.


Sources
https://attack.mitre.org/groups/G0067/
https://therecord.media/apt37-scarcruft-cyber-espionage-campaign-south-korea
https://www.genians.co.kr/en/blog/threat_intelligence/toybox-story?hsCtaAttrib=187480934467
https://blog.google/threat-analysis-group/internet-explorer-0-day-exploited-by-north-korean-actor-apt37/
https://www.helpnetsecurity.com/2023/01/10/patch-tuesday-cve-2023-21674/

    `,
    date: "July 10, 2025",
    threatLevel: "High",
    category: "Cybersecurity", 
    image: "https://i.imgur.com/l2f4rGx.png", 
    tags: ["APT", "Zero-Day", "Cyber Threats"],
    keyFindings:["APT37 has expanded its targeting beyond South Korea, signaling a growing regional and possibly global threat, especially to entities aligned against North Korean interests."],
    recommendations: ["Patch Windows systems regularly to block known exploits", "Monitor for unusual PowerShell or cloud activity", "Train staff to spot phishing and suspicious attachments"],
    author: "Timel Rodriguez",
  },
  
  {id: "2",
    slug: "Extremist-Use-of-AI",
    title: "Extremist Use of AI for Propaganda & Operational Support",
    excerpt: "This briefing examines how extremist groups are leveraging AI tools to generate propaganda and conduct influence operations across fringe platforms.",
    content: `##Summary

Recent open source intelligence (OSINT) suggests that extremist groups such as ISIS are increasingly using AI tools for propaganda, recruitment, and to support in house operations. They are producing audiovisual content, encrypted guides, and even varying weapon design like bomb-making. This trend represents a significant escalation in extremist adaptation to technology. 

##Background

 - Generative AI platforms like ChatGPT and voice/video generators have become more accessible and user-friendly. Extremist actors are leveraging these to enhance the appeal and reach of their messaging.
 - These new methods and tools are shared via encrypted or fringe social media platforms such as Telegram which amplify reach while limiting detection.

##Threat Assessment

- Propaganda: Audio-visual content is now more polished which improves recruitment potential, especially among tech-savvy audiences.
- Operational support: AI-generated manuals for encryption and surveillance help individuals with low technical abilities perform harmful actions. 
- Disinformation: This fake content created with AI raise the risk of broader influence and ideological manipulation.

Overall, extremist groups are likely to continue integrating AI into their media operations, increasing the sophistication of their content and making open-source monitoring more difficult. As these groups adapt and potentially bypass traditional surveillance measures, countermeasures like content regulation, AI content detection, and strategic policy development will become important. 

##Indicators to Watch for

- AI-branded propaganda channels emerging on Telegram or other platforms. 
- A surge in extremist content labeled or tagged as “GPT” 
- New versions of DIY manuals that appear formal and structured (e.g., icons, diagrams).

    `,
    date: "July 12, 2025",
    threatLevel: "Medium",
    category: "Extremism", 
    image: "https://i.imgur.com/z84AbRv.png", 
    tags: ["Generative AI", "Disinformation", "Digital Threats"],
    keyFindings:["Extremist groups are increasingly using AI to enhance propaganda, produce operational guides, and spread disinformation across fringe platforms. This makes their content harder to detect and more effective at recruiting and spreading ideology."],
    recommendations: ["Monitor fringe platforms for AI-labeled content and emerging propaganda", "Improve detection tools for AI-generated media", "Create internal policies on how to respond to AI extremist content"],
    author: "Timel Rodriguez",
  },

 ]

// Helper functions to get content by slug
export function getBriefingBySlug(slug: string): Briefing | undefined {
  return briefings.find((briefing) => briefing.slug === slug)
}
