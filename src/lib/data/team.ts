export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  yearsExperience: number;
  loansClosed: number;
  rating: number;
  email: string;
  phone: string;
  linkedin: string;
  initials: string;
  accent: string;
};

export const team: TeamMember[] = [
  {
    slug: "kira-zayn",
    name: "Kira Zayn",
    role: "Senior Loan Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
    bio: "Kira has guided over 1,200 families to homeownership across three states. She specializes in first-time buyer programs and FHA loans, with a reputation for patient, plain-language guidance.",
    specialties: ["First-Time Buyers", "FHA Loans", "Down Payment Assistance"],
    yearsExperience: 12,
    loansClosed: 1240,
    rating: 4.9,
    email: "kira@vaultpath.com",
    phone: "(415) 555-0142",
    linkedin: "https://linkedin.com",
    initials: "KZ",
    accent: "oklch(0.61 0.16 38)",
  },
  {
    slug: "marcus-hale",
    name: "Marcus Hale",
    role: "VA Loan Specialist",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
    bio: "A 10-year Navy veteran turned loan officer, Marcus understands the VA process inside and out — and the people it serves. He's helped 800+ service members and veterans close on their homes.",
    specialties: ["VA Loans", "Veterans Programs", "Refinancing"],
    yearsExperience: 9,
    loansClosed: 820,
    rating: 5.0,
    email: "marcus@vaultpath.com",
    phone: "(415) 555-0188",
    linkedin: "https://linkedin.com",
    initials: "MH",
    accent: "oklch(0.78 0.16 70)",
  },
  {
    slug: "elena-park",
    name: "Elena Park",
    role: "Jumbo & Luxury Lending Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    bio: "Elena leads our high-value lending team, structuring complex jumbo and portfolio loans for clients in competitive luxury markets.",
    specialties: ["Jumbo Loans", "Portfolio Lending", "Investment Properties"],
    yearsExperience: 15,
    loansClosed: 640,
    rating: 4.9,
    email: "elena@vaultpath.com",
    phone: "(415) 555-0211",
    linkedin: "https://linkedin.com",
    initials: "EP",
    accent: "oklch(0.55 0.18 25)",
  },
  {
    slug: "david-okafor",
    name: "David Okafor",
    role: "Refinance Strategist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    bio: "David has helped clients save over $40M in lifetime interest through smart refinancing. He's the person you want analyzing your rate options.",
    specialties: ["Refinancing", "Cash-Out Refi", "Rate Analysis"],
    yearsExperience: 8,
    loansClosed: 950,
    rating: 4.8,
    email: "david@vaultpath.com",
    phone: "(415) 555-0177",
    linkedin: "https://linkedin.com",
    initials: "DO",
    accent: "oklch(0.50 0.14 200)",
  },
];