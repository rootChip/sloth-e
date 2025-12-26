import PageShell from "@/components/layout/PageShell";
import Section from "@/components/sections/Section";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


export default function ContactPage() {
  return (
    <PageShell>
      <Section>
        <h1>Contact</h1>

        <form>
          <Input
            label="Name"
            name="name"
            placeholder="Your name"
          />

          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="you@example.com"
          />

          <Button>Send</Button>
        </form>
      </Section>
    </PageShell>
  );
}

