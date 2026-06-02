import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { LoanPrograms } from "@/components/sections/LoanPrograms";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { FAQSection } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VaultPath — Your Path to Home Ownership" },
      { name: "description", content: "Transparent rates, expert guidance, and zero confusion. Mortgages built around people, not paperwork." },
      { property: "og:title", content: "VaultPath — Your Path to Home Ownership" },
      { property: "og:description", content: "Transparent rates, expert guidance, and zero confusion." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <LoanPrograms />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <TeamPreview />
      <FAQSection />
      <CTABanner />
    </>
  );
}
