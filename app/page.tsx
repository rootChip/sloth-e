import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/hero/Hero";
import Consultants from "@/components/sections/Consultants";
import Security from "@/components/sections/Security";
import CTA from "@/components/sections/CTA";


export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Consultants />
      <Security />
      <CTA />
    </PageShell>
  );
}
