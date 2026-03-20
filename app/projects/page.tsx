import PageShell from "@/components/page-shell";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RealismButton from "@/components/ui/shiny-borders-button";

export default function ProjectsPage() {
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
            <strong>Projects</strong>
          </div>
        </div>

        <div className="windowBody">
          <div className="cardList">
            <div className="projectSectionHeading">Featured Work</div>

            <div className="miniCard">
              <div className="projectSectionSubheading">
                <a
                  href="https://devpost.com/software/neuroview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectTitleLink"
                >
                  <span>1. NeuroView</span>
                  <ArrowUpRight size={24} strokeWidth={2.4} />
                </a>
                <RealismButton
                  text="Featured"
                  className="featuredBadgeInline"
                  aria-label="Featured project"
                />
              </div>

              <div className="meta cardMetaRow">
                <span className="cardMetaText">
                  Frontend Lead | SwampHacks XI Winner (Best User Design) | Jan 2026
                </span>
                <a
                  href="https://devpost.com/software/neuroview"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectActionLink"
                >
                  <span>Visit Devpost</span>
                  <ArrowUpRight size={20} strokeWidth={2.4} />
                </a>
              </div>

              <div className="projectTagRow">
                <span className="projectTag">Product UX</span>
                <span className="projectTag">3D Visualization</span>
                <span className="projectTag">Real-Time Collaboration</span>
              </div>
              <ul>
                <li>Built the frontend for a real-time 3D MRI viewer that made complex scan review easier and faster.</li>
                <li>Built synchronized multi-plane slicing, annotation, and shared sessions for up to 4 users.</li>
                <li>Reduced user friction by making key scan actions faster to learn and easier to repeat.</li>
                <li>Result: NeuroView won Best User Design at SwampHacks XI.</li>
              </ul>
            </div>

            <div className="miniCard">
              <div className="projectSectionSubheading">
                <a
                  href="https://floridamedsearch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectTitleLink"
                >
                  <span>2. Florida Medical Doctor Search</span>
                  <ArrowUpRight size={24} strokeWidth={2.4} />
                </a>
                <RealismButton
                  text="Featured"
                  className="featuredBadgeInline"
                  aria-label="Featured project"
                />
              </div>

              <div className="meta cardMetaRow">
                <span className="cardMetaText">Founder & Developer | Dec 2025 - Jan 2026</span>
                <a
                  href="https://floridamedsearch.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectActionLink"
                >
                  <span>Visit Site</span>
                  <ArrowUpRight size={20} strokeWidth={2.4} />
                </a>
              </div>

              <div className="projectTagRow">
                <span className="projectTag">Product Build</span>
                <span className="projectTag">SQL + Data Modeling</span>
                <span className="projectTag">Search UX</span>
              </div>
              <ul>
                <li>Built and launched a doctor search tool focused on real procedural history, not just ratings.</li>
                <li>Turned large public healthcare datasets into a clean search experience with filters users can act on.</li>
                <li>Result: transformed complex medical data into a practical tool for patient decision-making.</li>
              </ul>
            </div>

            <div className="projectSectionHeadingSmall">
              Selected Work
            </div>

            <div className="miniCard">
              <div className="projectSectionSubheading">
                <Link href="/projects/museboard-growth-conversion-analysis" className="projectTitleLink">
                  <span>3. Museboard Growth & Conversion Analysis</span>
                  <ArrowUpRight size={24} strokeWidth={2.4} />
                </Link>
              </div>

              <div className="meta cardMetaRow">
                <span className="cardMetaText">Data Analytics | Client work through SOLV Digital</span>
                <Link href="/projects/museboard-growth-conversion-analysis" className="projectActionLink">
                  <span>View Case Study</span>
                  <ArrowUpRight size={20} strokeWidth={2.4} />
                </Link>
              </div>

              <div className="projectTagRow">
                <span className="projectTag">Power BI</span>
                <span className="projectTag">Funnel Analysis</span>
                <span className="projectTag">KPI Tracking</span>
              </div>
              <ul>
                <li>Mapped the Instagram-to-platform funnel to show exactly where discovery stopped converting into product usage.</li>
                <li>Identified profile visit to link click as the key bottleneck, which clarified where growth experiments should focus first.</li>
                <li>Used trend and KPI analysis to distinguish one-time spikes from sustained engagement and guide next-step product and marketing decisions.</li>
              </ul>
            </div>

            <div className="miniCard">
              <div className="projectSectionSubheading">
                <a
                  href="https://www.instagram.com/golden.eggcafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectTitleLink"
                >
                  <span>4. Golden Egg Caf� Instagram Content</span>
                  <ArrowUpRight size={24} strokeWidth={2.4} />
                </a>
              </div>

              <div className="meta cardMetaRow">
                <span className="cardMetaText">Content Strategy + Performance Review | Ongoing</span>
                <a
                  href="https://www.instagram.com/golden.eggcafe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectActionLink"
                >
                  <span>View Instagram</span>
                  <ArrowUpRight size={20} strokeWidth={2.4} />
                </a>
              </div>

              <div className="projectTagRow">
                <span className="projectTag">Social Strategy</span>
                <span className="projectTag">Creative Testing</span>
                <span className="projectTag">Audience Messaging</span>
              </div>
              <ul>
                <li>Used post-level data to plan campaigns around seasonal demand and customer behavior patterns.</li>
                <li>Tested and iterated on creative formats, messaging, and offer framing to improve response over time.</li>
                <li>Built a repeatable content system guided by performance metrics</li>
              </ul>
            </div>

            <div className="miniCard">
              <div className="projectSectionSubheading">
                <a
                  href="https://github.com/alicekrupitsky/Tetris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectTitleLink"
                >
                  <span>5. Tetris</span>
                  <ArrowUpRight size={24} strokeWidth={2.4} />
                </a>
              </div>

              <div className="meta cardMetaRow">
                <span className="cardMetaText">Python + Pygame | Jan 2026</span>
                <a
                  href="https://github.com/alicekrupitsky/Tetris"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectActionLink"
                >
                  <span>View on GitHub</span>
                  <ArrowUpRight size={20} strokeWidth={2.4} />
                </a>
              </div>
              <ul>
                <li>Built an executable Tetris game using Python and Pygame.</li>
                <li>Features scoring and leveling with increasing speed, wall kicks, and pause/restart controls.</li>
              </ul>
            </div>

            <div className="projectSectionSubheadingMuted">
              Earlier Work
            </div>

            <div className="miniCard projectCardFaded">
              <div className="projectSectionSubheading">
                <a
                  href="http://www.daviddfriedman.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectTitleLink"
                >
                  <span>6. Website for David D. Friedman</span>
                  <ArrowUpRight size={24} strokeWidth={2.4} />
                </a>
              </div>
              <div className="meta cardMetaRow">
                <span className="cardMetaText">Frontend Development | Mar 2020</span>
                <a
                  href="http://www.daviddfriedman.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projectActionLink"
                >
                  <span>Visit Site</span>
                  <ArrowUpRight size={20} strokeWidth={2.4} />
                </a>
              </div>
              <ul>
                <li>Designed and launched a client website, building early experience in scoped delivery and client communication.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
