import "./hero.css";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
<section className="hero">
    <div className="hero-content">
        
        <h1>Sloth-E</h1>
        <p>Sloth ipsum placeholder. Slow, deliberate, secure systems built with intent.</p>
        <div className="hero-actions">
  <Button href="#action">Primary Action</Button>
  <Button href="#learn" variant="secondary">
    Learn More
  </Button>
</div>
    
    </div>
</section>
);}
