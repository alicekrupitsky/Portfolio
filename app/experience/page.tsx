import Nav from "@/components/nav";
import Link from "next/link";

export default function ExperiencePage() {
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
        <Nav currentPath="/experience" />

        <main style={{ display: "grid", gap: "22px" }}>
          <section className="window">
            <div className="windowTop">
              <div className="windowTopLeft">
                <strong>Experience</strong>
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
                    Web Developer - Swamp Records
                  </div>
                  <div className="meta">
                    Jan 2026 - Present | Gainesville, FL | Part-time
                  </div>
                  <ul>
                    <li>
                      Collaborate with team members to create responsive,
                      user-friendly web applications
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
                    Associate, Content Specialist - SOLV Digital
                  </div>
                  <div className="meta">
                    Nov 2025 - Present | Gainesville, FL | Part-time
                  </div>
                  <ul>
                    <li>
                      Develop and execute content strategies informed by
                      performance metrics, engagement trends, and platform
                      analytics
                    </li>
                    <li>
                      Analyze content performance (reach, engagement,
                      interactions) to refine strategy and improve campaign
                      effectiveness
                    </li>
                    <li>
                      Collaborate with cross-functional teams to translate
                      insights into actionable content recommendations
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
                    Social Media & Marketing Manager - Golden Egg Caf&eacute;
                  </div>
                  <div className="meta">
                    Jul 2025 - Present | Tampa, FL | Part-time
                  </div>
                  <ul>
                    <li>
                      Manage the @golden.eggcafe Instagram and associated
                      digital platforms
                    </li>
                    <li>
                      Create branded visual content using photography and Canva
                      to maintain consistent visual identity
                    </li>
                    <li>
                      Increased account reach by 190% through data-informed
                      content strategy and platform optimization
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
                    Math Tutor - Mathnasium Learning Center
                  </div>
                  <div className="meta">May 2022 - Aug 2022 | Tampa, FL</div>
                  <ul>
                    <li>Provided personalized math tutoring for students K-12</li>
                    <li>
                      Led an average score improvement of around 30% across
                      students of all grades
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
                    Server - Sushi Cafe
                  </div>
                  <div className="meta">Jul 2021 - Jun 2023 | Tampa, FL</div>
                  <ul>
                    <li>
                      Delivered high-quality service in a fast-paced,
                      high-volume environment
                    </li>
                    <li>
                      Built strong conflict-resolution and customer service
                      skills
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
                    Server - Applebee&apos;s
                  </div>
                  <div className="meta">Feb 2024 - May 2024 | Gainesville, FL</div>
                  <ul>
                    <li>
                      Managed high-volume service while balancing multitasking,
                      teamwork, and time management
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
