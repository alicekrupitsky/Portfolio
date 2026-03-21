import PageShell from "@/components/page-shell";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RealismButton from "@/components/ui/shiny-borders-button";
import neuroviewpic from "@/app/neuroviewpic.jpg";
import goldeneggcafe from "@/app/goldeneggcafe.jpg";

function ProjectWindow({
  title,
  children,
  faded = false,
}: {
  title: string;
  children: React.ReactNode;
  faded?: boolean;
}) {
  return (
    <section className={`window${faded ? " projectCardFaded" : ""}`}>
      <div className="windowTop">
        <div className="windowTopLeft">
          <div className="dots" style={{ paddingTop: 0 }}>
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <strong>{title}</strong>
        </div>
      </div>
      <div className="windowBody">{children}</div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <PageShell currentPath="/projects">
      <section className="window noWindowLift">
        <div className="windowTop">
          <div className="windowTopLeft">
            <div className="dots" style={{ paddingTop: 0 }}>
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <strong>Projects</strong>
          </div>
        </div>

        <div className="windowBody" style={{ display: "grid", gap: "18px" }}>
          <ProjectWindow title="NeuroView">
            <div className="projectSectionSubheading">
              <a
                href="https://devpost.com/software/neuroview"
                target="_blank"
                rel="noopener noreferrer"
                className="projectTitleLink"
              >
                <span>Open Devpost</span>
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
            </div>

            <div className="aboutContent">
          <div className="aboutPhotoWrap" style={{ marginTop: "10px" }}>
                <div className="aboutPhotoWindow">
                  <div className="aboutPhotoTop">
                    <div className="aboutPhotoTopLeft">
                      <div className="dots aboutPhotoDots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                      <span>swamphacks.jpg</span>
                    </div>
                  </div>
                  <div className="aboutPhotoBody">
                    <div className="aboutPhotoFrame">
                      <img
                        src={neuroviewpic.src}
                        alt="NeuroView at SwampHacks"
                        className="aboutPhotoImg"
                      />
                    </div>
                  </div>
                </div>
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
          </ProjectWindow>

          <ProjectWindow title="Florida Medical Doctor Search">
            <div className="projectSectionSubheading">
              <a
                href="https://floridamedsearch.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectTitleLink"
              >
                <span>Visit Site</span>
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
          </ProjectWindow>

          <ProjectWindow title="Museboard Growth & Conversion Analysis">
            <div className="projectSectionSubheading">
              <Link href="/projects/museboard-growth-conversion-analysis" className="projectTitleLink">
                <span>View Case Study</span>
                <ArrowUpRight size={24} strokeWidth={2.4} />
              </Link>
            </div>

            <div className="meta cardMetaRow">
              <span className="cardMetaText">Data Analytics | Client work through SOLV Digital | Mar 2026</span>
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
          </ProjectWindow>

          <ProjectWindow title="Golden Egg Cafe Instagram Content">
            <div className="projectSectionSubheading">
              <a
                href="https://www.instagram.com/golden.eggcafe/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectTitleLink"
              >
                <span>View Instagram</span>
                <ArrowUpRight size={24} strokeWidth={2.4} />
              </a>
            </div>

            <div className="meta cardMetaRow">
              <span className="cardMetaText">Content Strategy + Performance Review | Ongoing</span>
            </div>

            <div className="aboutContent">
              <div className="aboutPhotoWrap" style={{ width: "177px", marginTop: "10px" }}>
                <div className="aboutPhotoWindow">
                  <div className="aboutPhotoTop">
                    <div className="aboutPhotoTopLeft">
                      <div className="dots aboutPhotoDots">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                      </div>
                      <span>GEcafe.jpg</span>
                    </div>
                  </div>
                  <div className="aboutPhotoBody">
                    <div className="aboutPhotoFrame">
                      <img
                        src={goldeneggcafe.src}
                        alt="Golden Egg Cafe content preview"
                        className="aboutPhotoImg"
                      />
                    </div>
                  </div>
                </div>
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
          </ProjectWindow>

          <ProjectWindow title="Tetris">
            <div className="projectSectionSubheading">
              <a
                href="https://github.com/alicekrupitsky/Tetris"
                target="_blank"
                rel="noopener noreferrer"
                className="projectTitleLink"
              >
                <span>View on GitHub</span>
                <ArrowUpRight size={24} strokeWidth={2.4} />
              </a>
            </div>

            <div className="meta cardMetaRow">
              <span className="cardMetaText">Python + Pygame | Jan 2026</span>
            </div>

            <ul>
              <li>Built an executable Tetris game using Python and Pygame.</li>
              <li>Features scoring and leveling with increasing speed, wall kicks, and pause/restart controls.</li>
            </ul>
          </ProjectWindow>

          <ProjectWindow title="Website for David D. Friedman" faded>
            <div className="projectSectionSubheading">
              <a
                href="http://www.daviddfriedman.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectTitleLink"
              >
                <span>Visit Site</span>
                <ArrowUpRight size={24} strokeWidth={2.4} />
              </a>
            </div>

            <div className="meta cardMetaRow">
              <span className="cardMetaText">Frontend Development | Mar 2020</span>
            </div>

            <ul>
              <li>Designed and launched a client website, building early experience in scoped delivery and client communication.</li>
            </ul>
          </ProjectWindow>
        </div>
      </section>
    </PageShell>
  );
}
