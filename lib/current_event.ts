export interface Article {
    id: string
    slug: string
    title: string
    excerpt: string
    content: string
    date: string
    readTime: string
    image: string
    tags: string[]
    author?: string
  }
  
  // Current Events Articles - Easy to add new ones here
 // current_event.ts

  export const articles: Article[] = [
    
    {
        id: "4",
        slug: "lawfare-and-the-limits-of-economic-deterrence",
        title: "Lawfare and the Limits of Economic Deterrence: South Africa v. Israel at the ICJ",
        excerpt: "South Africa’s ICJ genocide case against Israel shows that legal escalation (“lawfare”) is being used even when trade ties exist challenging the idea that economic interdependence deters conflict. This case suggests middle powers may increasingly use international law as a tool for political pressure rather than conflict resolution.",
        
        content:` 
        Incident Summary: 
       
        On 26 January 2024, South Africa initiated legal proceedings against Israel at the International Court of Justice (ICJ), accusing it of genocide against the Palestinian people in Gaza. This filing occurred despite decades of trade between the two countries, including high-value commodities such as diamonds and energy products. South Africa’s case cites Article III of the Genocide Convention and Article 3 of ICERD, claiming Israel has engaged in acts designed to destroy an ethnic group, a charge Israel denies. The ICJ has issued preliminary orders, but enforcement remains uncertain.

        **OSINT Assessment:
        
        South Africa’s behavior deviates from economic interdependence theory, which suggests states with strong trade ties prefer 
        legal arbitration to preserve commerce. Here, adjudication wasn’t used to preserve the relationship. Instead, it was used to escalate and symbolically sever it. 
        The case also reflects an emerging pattern: middle powers leveraging the ICJ and other multilateral legal bodies as a form of political influence rather than conflict resolution.

        Strategic Risk Implications: 

        1) Multilateral Legal Systems: ICJ credibility is at risk if major powers (e.g., Israel, U.S., Russia) continue to ignore or reject its rulings. 
        2) Norm Shift: States may increasingly weaponize lawfare when economic deterrence is off the table. 
        3) Intelligence Risk: Lawfare incidents may correlate with IO (information operations), diplomatic retaliation, or trade decoupling. 

        **Watchlist:

       - ICJ follow-through on enforcement

       - Israel–South Africa diplomatic fallout

       - Trend of legal escalation by Global South powers
    
       - Alignment with future information ops or protest movements

        `,
        date: "July 9, 2025",
        readTime: "5 min read",
        image: "https://i.imgur.com/mrhp3WU.png",
        tags: ["Lawfare","International Law", "Strategic Risk" ],
        author: "Timel Rodriguez", 
        
    },
]

// Helper functions to get content by slug
export function getArticleBySlug(slug: string): Article | undefined {
    return articles.find((article) => article.slug === slug)
}
