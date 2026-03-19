import type { Metadata } from "next";
import Link from "next/link";
import SiteNameLink from "@/components/ui/site-name-link";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Museboard Growth & Conversion Analysis | Alice Krupitsky",
  description:
    "Data analytics case study by Alice Krupitsky analyzing Instagram acquisition, conversion bottlenecks, and platform engagement trends for Museboard.",
};

const toolsAndMethods = [
  "Power BI",
  "Funnel analysis",
  "Conversion rate analysis",
  "KPI tracking",
  "Trend analysis",
  "Data visualization",
];

const whatIDid = [
  "Built and interpreted an Instagram acquisition funnel",
  "Analyzed platform activity trends over time",
  "Calculated a key conversion KPI",
  "Identified the biggest drop-off point in the user journey",
  "Summarized findings into a visually clear analytics presentation",
];

const keyInsights = [
  "Discovery was strong at the top of the funnel",
  "Engagement existed, but very few users moved from profile visits to platform entry",
  "The largest bottleneck occurred between profile visits and link clicks",
  "Platform activity rose significantly from December to January and remained above the original baseline afterward",
];

export default function MuseboardGrowthConversionPage() {
  return (
    <div className="page">
      <div className="headerWindow">
        <div className="headerTop">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <SiteNameLink />
        </div>
        <div className="headerBottom">
          <div className="main-title">Advertising Major + CS Minor</div>
          <div className="main-title">University of Florida</div>
        </div>
      </div>

      <div className="grid">
        <Nav currentPath="/projects" />

        <main style={{ display: "grid", gap: "22px" }}>
          <section className="window">
            <div className="windowTop">
              <div className="windowTopLeft">
                <strong>Museboard Growth &amp; Conversion Analysis</strong>
              </div>
              <Link href="/projects">Back to Projects</Link>
            </div>

            <div className="windowBody">
              <div className="projectTagRow">
                <span className="projectTag">Data Analytics</span>
                <span className="projectTag">Power BI</span>
                <span className="projectTag">Conversion Funnel</span>
              </div>
              <p className="confidentialityNote" style={{ marginTop: "10px", marginBottom: "0" }}>
                Developed as client analytics work through my associate role at SOLV Digital.
              </p>

              <div className="caseStudySection">
                <h2>Overview</h2>
                <p>
                  I analyzed the conversion journey from Instagram discovery to
                  Museboard platform entry to understand where users were dropping
                  off and what that behavior revealed about product engagement.
                  The goal was to combine data analysis with clear storytelling
                  so product and marketing decisions could be guided by evidence.
                </p>
              </div>

              <div className="caseStudySection">
                <h2>Problem</h2>
                <p>
                  Museboard was generating discovery on Instagram, but it was not
                  clear how effectively that attention translated into meaningful
                  platform engagement. The core challenge was identifying friction
                  points in the path from content discovery to product interaction.
                </p>
              </div>

              <div className="caseStudySection">
                <h2>What I Did</h2>
                <ul>
                  {whatIDid.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="caseStudySection">
                <h2>Key Insights</h2>
                <ul>
                  {keyInsights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="caseStudySection">
                <h2>Tools &amp; Methods</h2>
                <div className="projectTagRow">
                  {toolsAndMethods.map((item) => (
                    <span key={item} className="projectTag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="caseStudySection">
                <h2>Impact</h2>
                <p>
                  This analysis highlighted a key conversion bottleneck and
                  clarified where friction existed between social discovery and
                  actual product engagement. The project demonstrates how data
                  storytelling and KPI-driven analysis can turn user behavior into
                  actionable business insight.
                </p>
              </div>

              <p className="confidentialityNote">
                Some metrics and visuals have been generalized for portfolio use
                to respect confidentiality.
              </p>
            </div>
          </section>

          <div className="footer">
            Made with <span className="heart">&#9829;</span> by Alice
          </div>
        </main>
      </div>
    </div>
  );
}






