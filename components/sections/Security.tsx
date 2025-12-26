import Section from "./Section";
import Card from "@/components/ui/Card";
import "./security.css";

export default function Security() {
  return (
    <Section>
      <div className="security">
        <div className="security-text">
          <h2>Security by Design</h2>
          <p>
            Sloth-E systems are built with clear boundaries, minimal attack
            surface, and deliberate control over data flow.
          </p>
        </div>

        <div className="security-points">
          <Card>Explicit trust boundaries</Card>
          <Card>Least-privilege access</Card>
          <Card>Auditable system structure</Card>
        </div>
      </div>
    </Section>
  );
}
