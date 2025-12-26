import Section from "./Section";
import "./features.css";
import Card from "@/components/ui/Card";

export default function Features() {
  return (
    <Section>
      <div className="features">
        <h2>Why Sloth-E</h2>

        <div className="features-list">
          <Card>Deliberate system design</Card>
          <Card>Security-first architecture</Card>
          <Card>Scalable from day one</Card>
        </div>
      </div>
    </Section>
  );
}
