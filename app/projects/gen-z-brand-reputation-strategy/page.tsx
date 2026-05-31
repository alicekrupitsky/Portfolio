import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageShell from "@/components/page-shell";
import cjcNycPic from "@/app/CJCxNYCPic.jpg";
import { ArrowUpRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Gen Z Brand Reputation Research & Presentation | Alice Krupitsky",
  description:
    "Brand strategy case study by Alice Krupitsky focused on Gen Z trust, authenticity, brand reputation, leadership, and strategic presentation at Burson NYC.",
};

const focusAreas = [
  "Leadership",
  "Public Speaking",
  "Brand Strategy",
  "Consumer Research",
  "Strategic Communication",
];

const roleHighlights = [
  "Established the team's operating structure on day one, creating a FigJam workspace and workflow for research, ideation, and presentation development.",
  "Facilitated daily team meetings, coordinated responsibilities, and maintained momentum throughout the one-week timeline.",
  "Directed work based on each team member's strengths, availability, and progress.",
  "Conducted independent research into consumer responses to brand controversy and used findings to shape the core strategic framework.",
];

const insights = [
  "Core tension: Gen Z can publicly criticize brands while still purchasing from and engaging with them.",
  "Cancel Culture: online criticism does not always create lasting behavioral change, as seen with brands such as Starbucks, Chick-fil-A, and Shein.",
  "Grey Rock Method: brands can reduce backlash by avoiding unnecessary emotional engagement. Brandy Melville served as a case example.",
  "Goldilocks Zone: brands should maintain a consistent voice without forcing themselves into every trend or conversation.",
];

const impact = [
  "Delivered a research-backed strategy presentation to professionals at Burson's New York office.",
  "Developed a framework for understanding why Gen Z may publicly criticize brands while continuing to engage with them.",
  "Translated consumer behavior patterns into actionable guidance for brand response and reputation management.",
];

export default function GenZBrandReputationStrategyPage() {
  return (
    <PageShell currentPath="/projects">
      <section className="window">
        <div className="windowTop">
          <div className="windowTopLeft">
            <div className="dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <strong>Gen Z Brand Reputation Research &amp; Presentation</strong>
          </div>
          <Link href="/projects" className="projectActionLink">
            Back to Projects
          </Link>
        </div>

        <div className="windowBody">
          <div className="projectTagRow">
            {focusAreas.map((item) => (
              <span key={item} className="projectTag">
                {item}
              </span>
            ))}
          </div>
          <p className="confidentialityNote" style={{ marginTop: "10px", marginBottom: "0" }}>
            Team Lead &amp; Spokesperson | UF CJCxNYC PR &amp; Ad Week | Burson NYC | May 2026
          </p>

          <div className="caseStudyCoverPhotoWrap">
            <div className="aboutPhotoWindow noPhotoLift">
              <div className="aboutPhotoTop">
                <div className="aboutPhotoTopLeft">
                  <div className="dots aboutPhotoDots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <span>presentation.png</span>
                </div>
              </div>
              <div className="aboutPhotoBody">
                <div className="aboutPhotoFrame">
                  <Image
                    src={cjcNycPic}
                    alt="CJCxNYC group presentation at Burson"
                    className="caseStudyCoverPhotoImg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="caseStudySection">
            <h2>Overview</h2>
            <p>
              Selected for UF&apos;s CJCxNYC PR &amp; Ad Week immersion program, I
              served as team lead and directed our strategy, messaging, and
              final delivery. Our team built a framework for why Gen Z often
              criticizes brands publicly while continuing to buy from and
              engage with them. We presented the work at Burson&apos;s New York
              office after a one-week timeline that required ownership, fast
              decisions, and disciplined communication.
            </p>
          </div>

          <div className="caseStudySection">
            <h2>The Challenge</h2>
            <p>
              The central question: if public backlash does not always change
              consumer behavior, how should brands decide when to respond,
              when to stay quiet, and how to avoid appearing performative? The
              challenge was turning cultural observations and brand examples
              into a clear strategic point of view.
            </p>
          </div>

          <div className="caseStudySection">
            <h2>My Role</h2>
            <ul>
              {roleHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="caseStudySection">
            <h2>Research &amp; Insights</h2>
            <ul>
              {insights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="caseStudySection">
            <h2>Presentation at Burson</h2>
            <p>
              Our team presented the final strategy at Burson&apos;s New York
              office in the World Trade Center. As Team Lead and Spokesperson,
              I shaped the presentation narrative, maintained a cohesive flow
              across team sections, and presented my research, findings, and
              recommendations to industry professionals.
            </p>
          </div>

          <div className="caseStudySection">
            <h2>Presentation Deck</h2>
            <p>
              The final presentation delivered to professionals at Burson&apos;s
              New York office in the World Trade Center.
            </p>
            <div className="presentationDeckWindow">
              <div className="presentationDeckTop">
                <div className="aboutPhotoTopLeft">
                  <div className="dots aboutPhotoDots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <span>GenZ_Brand_Reputation.pdf</span>
                </div>
              </div>
              <div className="presentationDeckBody">
                <div className="presentationDeckFile">
                  <FileText size={18} strokeWidth={2.2} />
                  <span>GenZ_Brand_Reputation.pdf</span>
                </div>
                <p>Research Presentation</p>
                <p>Presented at Burson NYC</p>
                <a
                  href="/GenZBrandReputation.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectTitleLink presentationDeckLink"
                >
                  <span>View Presentation</span>
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </a>
              </div>
            </div>
          </div>

          <div className="caseStudySection">
            <h2>Impact</h2>
            <ul>
              {impact.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
