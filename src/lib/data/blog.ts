export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  author: { name: string; role: string; initials: string };
};

export const blogPosts: BlogPost[] = [
  {
    slug: "guide-to-getting-pre-approved",
    title: "The Complete Guide to Getting Pre-Approved for a Mortgage",
    category: "First-Time Buyers",
    date: "2024-05-10",
    readTime: "5 min read",
    excerpt:
      "Pre-approval is the single most powerful step you can take before house hunting. Here's exactly what to expect, what to prepare, and how to make the process painless.",
    content:
      "Pre-approval is more than just a number — it's your competitive edge in today's housing market. Before you submit an application, gather two years of tax returns, recent pay stubs, bank statements, and a list of your monthly debts.\n\nOnce submitted, most lenders return a pre-approval decision within 24-72 hours. The letter you receive is typically valid for 60-90 days and shows sellers you're a serious, qualified buyer.\n\nKeep your finances stable during this window: avoid opening new credit lines, making large purchases, or changing jobs. Any of these can trigger a re-underwrite and delay your closing.",
    author: { name: "Kira Zayn", role: "Senior Loan Officer", initials: "KZ" },
  },
  {
    slug: "fixed-vs-adjustable-rate",
    title: "Fixed-Rate vs. -Rate: Which Mortgage Fits Your Life?",
    category: "Tips",
    date: "2024-04-22",
    readTime: "7 min read",
    excerpt:
      "The right loan structure depends less on the market and more on how long you plan to stay. Here's a clear framework for choosing.",
    content:
      "Fixed-rate mortgages offer one thing above all: certainty. Your principal and interest payment never change. Adjustable-rate mortgages (ARMs) trade that certainty for a lower initial rate — often 0.5-1% below comparable fixed-rate loans.\n\nIf you plan to stay in your home for 10+ years, a fixed-rate loan is almost always the safer bet. If you'll move or refinance within 5-7 years, an ARM can save you significant money during the introductory fixed period.",
    author: { name: "David Okafor", role: "Refinance Strategist", initials: "DO" },
  },
  {
    slug: "refinancing-in-2024",
    title: "Is Refinancing Worth It in 2024? A Break-Even Analysis",
    category: "Refinancing",
    date: "2024-04-08",
    readTime: "6 min read",
    excerpt:
      "The old rule was 'refinance when rates drop 1%.' That rule is broken. Here's the math that actually matters.",
    content:
      "The break-even point is the number of months it takes for your monthly savings to cover the closing costs of your refinance. Calculate it by dividing total closing costs by monthly savings.\n\nIf you'll stay in your home longer than the break-even period, refinancing makes financial sense. Today's environment also offers cash-out refinancing opportunities for renovations or debt consolidation at rates still well below most consumer debt.",
    author: { name: "David Okafor", role: "Refinance Strategist", initials: "DO" },
  },
  {
    slug: "va-loan-myths",
    title: "5 VA Loan Myths That Cost Veterans Thousands",
    category: "Tips",
    date: "2024-03-19",
    readTime: "4 min read",
    excerpt:
      "VA loans are one of the most powerful benefits in American lending — and one of the most misunderstood. Let's clear the air.",
    content:
      "Myth 1: 'VA loans take forever.' Modern VA loans close in 30-45 days, comparable to conventional loans.\n\nMyth 2: 'You can only use it once.' VA loan benefits are reusable. Many veterans use them 2-3 times in their lifetime.\n\nMyth 3: 'Sellers don't accept VA offers.' With proper education and a competitive offer, VA buyers win bids regularly.",
    author: { name: "Marcus Hale", role: "VA Loan Specialist", initials: "MH" },
  },
  {
    slug: "housing-market-outlook",
    title: "Housing Market Outlook: What Buyers Should Watch in Q3",
    category: "Market News",
    date: "2024-03-02",
    readTime: "8 min read",
    excerpt:
      "Inventory is shifting, rates are stabilizing, and buyer leverage is returning to certain markets. Here's what the data shows.",
    content:
      "After two years of intense competition, the housing market is finding equilibrium. Inventory has risen 18% year-over-year, giving qualified buyers more options and negotiating room.\n\nRates have stabilized in the mid-6% range, and most economists expect modest declines through year-end as inflation continues to cool.",
    author: { name: "Elena Park", role: "Jumbo & Luxury Lending Director", initials: "EP" },
  },
  {
    slug: "first-time-buyer-mistakes",
    title: "7 Mistakes First-Time Buyers Make (And How to Avoid Them)",
    category: "First-Time Buyers",
    date: "2024-02-14",
    readTime: "6 min read",
    excerpt:
      "After 12 years and 1,200 closings, the same avoidable mistakes keep showing up. Here's your shortcut.",
    content:
      "1. Skipping pre-approval. 2. Maxing your budget. 3. Forgetting closing costs. 4. Skipping the home inspection. 5. Making big purchases mid-process. 6. Choosing the wrong loan structure. 7. Not shopping for homeowner's insurance.\n\nEach of these is fixable — but only if you know about them before you sign anything.",
    author: { name: "Kira Zayn", role: "Senior Loan Officer", initials: "KZ" },
  },
];

export const blogCategories = ["All", "First-Time Buyers", "Refinancing", "Market News", "Tips"] as const;