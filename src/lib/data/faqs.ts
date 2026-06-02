export type FAQ = { question: string; answer: string; group: string };

export const faqs: FAQ[] = [
  { group: "General", question: "What is VaultPath?", answer: "VaultPath is a modern mortgage brokerage that combines expert human guidance with transparent technology to make home financing simple, fair, and fast." },
  { group: "General", question: "Where do you operate?", answer: "We are licensed to originate loans in 38 states across the U.S. Reach out to confirm coverage in your area." },
  { group: "General", question: "How is VaultPath different from a bank?", answer: "Banks offer their own products. As a broker, we shop dozens of lenders to find the best rate and structure for your specific situation without the bank's markup." },
  { group: "Application Process", question: "How long does pre-approval take?", answer: "Most pre-approvals are issued within 24-72 hours once we receive your documentation." },
  { group: "Application Process", question: "What documents do I need?", answer: "Two years of tax returns, recent pay stubs, two months of bank statements, a list of monthly debts, and a valid ID." },
  { group: "Application Process", question: "Will applying hurt my credit score?", answer: "We use a soft pull for initial qualification. A hard credit inquiry happens only once you formally apply, and the impact is typically 2-5 points." },
  { group: "Loan Programs", question: "What loan types do you offer?", answer: "Conventional fixed and adjustable-rate mortgages, FHA, VA, USDA, jumbo, and refinancing — including cash-out and streamline programs." },
  { group: "Loan Programs", question: "Do I need 20% down?", answer: "No. Many of our programs accept 3-5% down, and VA loans require zero down for eligible service members." },
  { group: "Rates & Fees", question: "How are your rates determined?", answer: "Rates depend on your credit score, loan-to-value ratio, loan type, and current market conditions. We shop multiple lenders to find your best option." },
  { group: "Rates & Fees", question: "What fees should I expect?", answer: "Typical closing costs range from 2-5% of the loan amount and include lender fees, title insurance, appraisal, and prepaid escrows. We provide a full breakdown upfront." },
  { group: "Rates & Fees", question: "Can I lock my rate?", answer: "Yes. Once you have an accepted offer, we can lock your rate for 30, 45, or 60 days — protecting you from market shifts during closing." },
];

export const faqGroups = ["General", "Application Process", "Loan Programs", "Rates & Fees"] as const;