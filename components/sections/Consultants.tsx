import Image from "next/image";
import "./consultants.css";

export default function Consultants() {
  return (
    <section className="section consultants">
      <div className="section-inner">
        <h2 className="section-title">Consulting Partners</h2>

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

          {/* Duplicate cards as needed */}
        </div>
      </div>
    </section>
  );
}
