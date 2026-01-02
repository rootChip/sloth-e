import "./hero.css";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function Hero() {
    return (
<section className="hero">
    <div className="hero-content">
       <div className="hero-logo">
        
   <Image
        src="/images/Sloth-e-hero.png"
        alt="Company Logo"
        width={150}
        height={150}
        priority   
/>
      </div>
       
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

<section className="consulting-companies">
  <div className="companies-grid">

    {/* Company Card */}
    <div className="company-card">
      <div className="company-image">
        <Image
          src="/branding/sloth-e-placeholder.png"
          alt="Upcoming Partner"
          width={320}
          height={180}
        />
      </div>

      <a
        href="https://kinetiqsystems.example"
        className="company-pill"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/branding/kinetiq-pill.svg"
          alt="Kinetiq Systems"
          width={360}
          height={64}
        />
      </a>
    </div>

    {/* Duplicate card blocks for more companies */}

  </div>
</section>