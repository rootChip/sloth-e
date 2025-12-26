import Section from "./Section";
import "./cta.css";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <Section>
      <div className="cta">
        <h2>Build Deliberately</h2>
        <p>
          Sloth-E is designed for teams that value clarity, security,
          and long-term maintainability.
        </p>

        <Button href="/contact">Start a Conversation</Button>
        
      </div>
    </Section>
  );
}
