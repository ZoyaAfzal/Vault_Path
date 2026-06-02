export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Remote" | "Hybrid";
  summary: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
};

export const jobs: Job[] = [
  {
    slug: "senior-loan-officer",
    title: "Senior Loan Officer",
    department: "Lending",
    location: "San Francisco, CA",
    type: "Hybrid",
    summary:
      "Lead a portfolio of high-touch clients through every step of the mortgage process. You'll partner with our operations team to close on time, every time.",
    responsibilities: [
      "Originate and structure conventional, FHA, VA, and jumbo loans",
      "Develop and maintain referral partner relationships",
      "Guide clients through pre-approval through closing",
      "Mentor junior loan officers",
    ],
    requirements: [
      "5+ years originating mortgage loans",
      "Active NMLS license",
      "$30M+ annual production history",
      "Strong CRM and tech fluency",
    ],
    benefits: ["Top-tier commission structure", "Health, dental, vision", "401(k) match", "Unlimited PTO"],
  },
  {
    slug: "mortgage-processor",
    title: "Mortgage Processor",
    department: "Operations",
    location: "Remote",
    type: "Remote",
    summary:
      "Be the operational backbone of the loan process. Gather documents, coordinate with underwriting, and keep files moving toward clear-to-close.",
    responsibilities: [
      "Manage a pipeline of 20-30 active loan files",
      "Coordinate with borrowers, underwriters, and title companies",
      "Ensure compliance with TRID and lender guidelines",
    ],
    requirements: [
      "2+ years mortgage processing experience",
      "Encompass or similar LOS proficiency",
      "Exceptional attention to detail",
    ],
    benefits: ["Fully remote", "Health & dental", "401(k)", "Annual learning budget"],
  },
  {
    slug: "marketing-manager",
    title: "Marketing Manager",
    department: "Marketing",
    location: "San Francisco, CA",
    type: "Full-time",
    summary:
      "Own VaultPath's brand voice and growth funnel. Build content, campaigns, and partnerships that bring more families to our team.",
    responsibilities: [
      "Develop and execute multi-channel marketing strategy",
      "Manage content calendar and SEO performance",
      "Partner with sales on campaign attribution",
    ],
    requirements: [
      "4+ years B2C marketing, fintech or real estate preferred",
      "Strong writing and content judgment",
      "Comfort with analytics tooling",
    ],
    benefits: ["Equity participation", "Health & dental", "Hybrid schedule", "Conference budget"],
  },
];