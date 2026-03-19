import Nav from "@/components/nav";
import SiteNameLink from "@/components/ui/site-name-link";

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
          <SiteNameLink />
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
                <div className="dots" style={{ paddingTop: 0 }}>
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
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
                    Marketing Director - Computing Student Union (CSU)
                  </div>
                  <div className="meta">
                    Jan 2026 - Present | Gainesville, FL
                  </div>
                  <ul>
                    <li>
                     Own CSU marketing strategy, including campaign direction, channels, and content planning.
                    </li>
                    <li>
                      Lead event promotion across Instagram, announcements, and weekly timelines.
                    </li>
                    <li>
                      Coordinate with leadership and event teams to keep messaging and timing aligned.
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
                    Associate - SOLV Digital
                  </div>
                  <div className="meta">
                    Nov 2025 - Present | Gainesville, FL | Part-time
                  </div>
                  <ul>
                    <li>
                      Build content strategies from performance data across
                      reach, engagement, and interaction trends.
                    </li>
                    <li>
                      Turn weekly analytics into clear campaign decisions on
                      messaging, format, and publishing cadence.
                    </li>
                    <li>
                      Partner with cross-functional teams to convert insights
                      into actionable recommendations and higher-performing
                      content.
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
                    Web Developer - Swamp Records
                  </div>
                  <div className="meta">
                    Jan 2026 - Present | Gainesville, FL | Part-time
                  </div>
                  <ul>
                    <li>
                      Build and ship responsive website updates for artist and
                      event content.
                    </li>
                    <li>
                      Work with teammates to turn campaign needs into clear user
                      flows and on-brand page experiences.
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
                      Own the @golden.eggcafe content calendar and campaign
                      execution across social channels.
                    </li>
                    <li>
                      Test creative direction, offers, and messaging based on
                      post performance and audience response.
                    </li>
                    <li>
                      Grew account reach by 190% through consistent iteration
                      and data-informed optimization.
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
                    <li>
                      Delivered personalized tutoring for K-12 students with
                      different pacing and learning styles.
                    </li>
                    <li>
                      Supported an average score improvement of about 30% across
                      students.
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
                      Managed high-volume shifts while balancing speed,
                      accuracy, and team coordination.
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
                      Delivered reliable service in a fast-paced setting and
                      built strong customer communication skills.
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







