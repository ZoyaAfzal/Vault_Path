export type Loan = {
  slug: string;
  name: string;
  tagline: string;
  category: "Purchase" | "Refinance" | "Government";
  icon: string;
  image: string;
  description: string;
  benefits: string[];
  requirements: string[];
  rate: string;
  term: string;
};

export const loans: Loan[] = [
  {
    slug: "fixed-rate-mortgage",
    name: "Fixed-Rate Mortgage",
    tagline: "Stability you can count on",
    category: "Purchase",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop",
    description:
      "A fixed-rate mortgage locks in your interest rate for the life of the loan, giving you predictable monthly payments and protection from market volatility.",
    benefits: [
      "Predictable monthly payments for the entire loan term",
      "Protection from rising interest rates",
      "Easier long-term budgeting",
      "Available in 15, 20, and 30-year terms",
    ],
    requirements: [
      "Minimum credit score of 620",
      "Stable employment history (2+ years)",
      "Debt-to-income ratio below 43%",
      "Down payment of 3% or more",
    ],
    rate: "6.5% – 7.2%",
    term: "15 or 30 years",
  },
  {
    slug: "adjustable-rate-mortgage",
    name: "Adjustable Rate Mortgage",
    tagline: "Lower initial rates, more flexibility",
    category: "Purchase",
    icon: "TrendingUp",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    description:
      "ARMs start with a lower fixed rate for an introductory period, then adjust periodically based on market conditions, ideal for short-term homeowners.",
    benefits: [
      "Lower initial monthly payments",
      "Great for buyers planning to move in 5-10 years",
      "Potential to pay less interest overall",
      "Multiple ARM products available (5/1, 7/1, 10/1)",
    ],
    requirements: [
      "Minimum credit score of 640",
      "Stable income documentation",
      "Down payment of 5% or more",
    ],
    rate: "5.8% – 6.4%",
    term: "5/1, 7/1, or 10/1 ARM",
  },
  {
    slug: "fha-loan",
    name: "FHA Loan",
    tagline: "Designed for first-time buyers",
    category: "Government",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800&auto=format&fit=crop",
    description:
      "FHA loans, insured by the Federal Housing Administration, make homeownership accessible with low down payments and flexible credit requirements.",
    benefits: [
      "Down payment as low as 3.5%",
      "More lenient credit score requirements",
      "Higher debt-to-income ratios allowed",
      "Gift funds accepted for down payment",
    ],
    requirements: [
      "Minimum credit score of 580",
      "Steady employment for 2 years",
      "Property must be primary residence",
    ],
    rate: "6.2% – 6.9%",
    term: "15 or 30 years",
  },
  {
    slug: "va-loan",
    name: "VA Loan",
    tagline: "Honoring those who served",
    category: "Government",
    icon: "Shield",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
    description:
      "Backed by the Department of Veterans Affairs, VA loans offer exclusive benefits to active-duty service members, veterans, and eligible spouses.",
    benefits: [
      "Zero down payment required",
      "No private mortgage insurance (PMI)",
      "Competitive interest rates",
      "Limits on closing costs",
    ],
    requirements: [
      "Eligible military service",
      "Valid Certificate of Eligibility (COE)",
      "Primary residence only",
    ],
    rate: "6.0% – 6.7%",
    term: "15 or 30 years",
  },
  {
    slug: "jumbo-loan",
    name: "Jumbo Loan",
    tagline: "For high-value properties",
    category: "Purchase",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
    description:
      "Jumbo loans finance properties that exceed conforming loan limits, giving you the buying power needed for luxury homes and high-cost markets.",
    benefits: [
      "Borrow above conforming loan limits",
      "Flexible loan structures available",
      "Competitive rates for qualified buyers",
      "Single loan for high-value purchases",
    ],
    requirements: [
      "Minimum credit score of 700",
      "Substantial cash reserves",
      "Down payment of 10–20%",
      "Lower debt-to-income ratio",
    ],
    rate: "6.8% – 7.5%",
    term: "15 or 30 years",
  },
  {
    slug: "refinancing",
    name: "Refinancing",
    tagline: "Lower your rate, change your life",
    category: "Refinance",
    icon: "Repeat",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    description:
      "Replace your existing mortgage with new terms — lower your rate, shorten your term, or tap into your home's equity for renovations or debt consolidation.",
    benefits: [
      "Reduce your monthly payment",
      "Shorten your loan term",
      "Switch from ARM to fixed-rate",
      "Cash-out for renovations or debt",
    ],
    requirements: [
      "Minimum 3% home equity",
      "Credit score of 620+",
      "Current on existing mortgage",
    ],
    rate: "6.3% – 7.0%",
    term: "10, 15, 20, or 30 years",
  },
];

export const loanCategories = ["All", "Purchase", "Refinance", "Government"] as const;