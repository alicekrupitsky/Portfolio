import Nav from "@/components/nav";
import SiteNameLink from "@/components/ui/site-name-link";

export default function InvolvementPage() {
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
        <Nav currentPath="/involvement" />

        <main style={{ display: "grid", gap: "22px", alignContent: "start" }}>
          <section className="window" style={{ alignSelf: "start" }}>
            <div className="windowTop">
              <div className="windowTopLeft">
                <div className="dots" style={{ paddingTop: 0 }}>
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <strong>Campus Involvement</strong>
              </div>
            </div>

            <div className="windowBody" style={{ padding: "16px 22px 18px" }}>
              <ul
                style={{
                  fontSize: "21px",
                  lineHeight: "1.35",
                  paddingLeft: "24px",
                  margin: 0,
                }}
              >
                <li style={{ marginBottom: "9px" }}>
                  Computing Student Union (CSU) - <strong>Marketing Director</strong>
                </li>
                <li style={{ marginBottom: "9px" }}>WiNGHacks - Volunteer</li>
                <li style={{ marginBottom: "9px" }}>
                  Data Science &amp; Informatics (DSI) Student Organization - Member
                </li>
                <li style={{ marginBottom: "9px" }}>UF Girls Who Code - Member</li>
              </ul>
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







