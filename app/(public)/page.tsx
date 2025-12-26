import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/hero/Hero";
import Features from "@/components/sections/Features";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Features />
    </PageShell>
  );
}
