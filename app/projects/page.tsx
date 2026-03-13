import Nav from "@/components/nav";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  const projectTitleLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: "bold",
    borderBottom: "2px dotted var(--ink)",
  } as const;

  return (
    <div className="page">
      <div className="headerWindow">
        <div className="headerTop">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <Link href="/" className="name">
            ALICE KRUPITSKY
          </Link>
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
                <strong>Projects</strong>
              </div>
            </div>

            <div className="windowBody">
              <div className="cardList">
                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    <a
                      href="https://devpost.com/software/neuroview"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectTitleLinkStyle}
                    >
                      <span>NeuroView</span>
                      <ArrowUpRight size={24} strokeWidth={2.4} />
                    </a>
                  </div>
                  <div
                    className="meta"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>
                      Frontend Lead | SwampHacks XI Winner (Best User Design) |
                      Jan 2026
                    </span>
                    <a
                      href="https://devpost.com/software/neuroview"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "2px solid var(--ink)",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        boxShadow: "0 2px 0 var(--green2)",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        borderBottom: "2px solid var(--ink)",
                      }}
                    >
                      Visit Site -&gt;
                    </a>
                  </div>
                  <ul>
                    <li>
                      Led frontend architecture and development of a real-time,
                      open-source 3D brain MRI viewer
                    </li>
                    <li>
                      Developed interactive 3D visualization features including
                      synchronized multi-plane slicing and annotation using
                      Three.js
                    </li>
                    <li>
                      Designed and implemented the product UI and landing page,
                      contributing to a Best User Design award at SwampHacks XI
                    </li>
                    <li>
                      Built WebSocket-based collaboration infrastructure
                      enabling live shared sessions for up to 4 concurrent users
                    </li>
                  </ul>
                </div>

                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    <a
                      href="https://floridamedsearch.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectTitleLinkStyle}
                    >
                      <span>Florida Medical Doctor Search</span>
                      <ArrowUpRight size={24} strokeWidth={2.4} />
                    </a>
                  </div>
                  <div
                    className="meta"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>Founder &amp; Developer | Dec 2025 - Jan 2026</span>
                    <a
                      href="https://floridamedsearch.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "2px solid var(--ink)",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        boxShadow: "0 2px 0 var(--green2)",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        borderBottom: "2px solid var(--ink)",
                      }}
                    >
                      Visit Site -&gt;
                    </a>
                  </div>
                  <ul>
                    <li>
                      Built a full-stack web application that enables users to
                      identify doctors based on real procedural experience
                    </li>
                    <li>
                      Designed and managed a relational SQL database using large
                      Florida healthcare datasets (CPT, ICD-10, license data)
                    </li>
                    <li>
                      Implemented advanced search features including procedure
                      lookup and geographic filtering (county + ZIP radius)
                    </li>
                    <li>
                      Developed the application using C#, SQL, HTML, CSS,
                      JavaScript, and Bootstrap
                    </li>
                  </ul>
                </div>

                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    <a
                      href="https://github.com/alicekrupitsky/Tetris"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectTitleLinkStyle}
                    >
                      <span>Tetris</span>
                      <ArrowUpRight size={24} strokeWidth={2.4} />
                    </a>
                  </div>
                  <div
                    className="meta"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>Python + Pygame | Jan 2026</span>
                    <a
                      href="https://github.com/alicekrupitsky/Tetris"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "2px solid var(--ink)",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        boxShadow: "0 2px 0 var(--green2)",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        borderBottom: "2px solid var(--ink)",
                      }}
                    >
                      View on GitHub -&gt;
                    </a>
                  </div>
                  <ul>
                    <li>Built an executable Tetris game using Python and Pygame</li>
                    <li>
                      Features scoring and leveling with increasing speed, wall
                      kicks, and pause/restart controls
                    </li>
                  </ul>
                </div>

                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    <a
                      href="http://www.daviddfriedman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={projectTitleLinkStyle}
                    >
                      <span>Website for David D. Friedman</span>
                      <ArrowUpRight size={24} strokeWidth={2.4} />
                    </a>
                  </div>
                  <div
                    className="meta"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span>Frontend Developer | Mar 2020</span>
                    <a
                      href="http://www.daviddfriedman.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        border: "2px solid var(--ink)",
                        borderRadius: "10px",
                        padding: "3px 10px",
                        background: "var(--bg)",
                        boxShadow: "0 2px 0 var(--green2)",
                        whiteSpace: "nowrap",
                        fontSize: "19px",
                        borderBottom: "2px solid var(--ink)",
                      }}
                    >
                      Visit Site -&gt;
                    </a>
                  </div>
                  <ul>
                    <li>
                      Designed and deployed a personal website for economist
                      David D. Friedman using HTML and CSS
                    </li>
                    <li>
                      Strengthened independent problem-solving and client
                      communication skills
                    </li>
                  </ul>
                </div>

                <div className="miniCard">
                  <div
                    style={{
                      fontSize: "25px",
                      fontWeight: "bold",
                      letterSpacing: ".04em",
                    }}
                  >
                    Golden Egg Caf&eacute; Instagram Content
                  </div>
                  <div className="meta">
                    Content strategy + Canva design | Ongoing
                  </div>
                  <ul>
                    <li>
                      Designed promotional posts and campaign graphics with
                      strong visual hierarchy and readability
                    </li>
                    <li>
                      Wrote clear, on-brand copy aligned with the caf&eacute;&apos;s
                      tone and customer expectations
                    </li>
                    <li>
                      Used performance data to refine what content formats and
                      messages work best
                    </li>
                  </ul>
                </div>
              </div>
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
