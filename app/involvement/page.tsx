import Nav from "@/components/nav";
import SiteNameLink from "@/components/ui/site-name-link";
import GoGators from "@/app/GoGators.png";

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

            <div className="windowBody" style={{ padding: "16px 22px 12px" }}>
              <div className="involvementContentRow">
                <ul className="involvementList">
                  <li>
                    Computing Student Union (CSU) - <strong>Marketing Director</strong>
                  </li>
                  <li>WiNGHacks - Volunteer</li>
                  <li>UF Data Science &amp; Informatics (DSI) Student Organization - Member</li>
                  <li>UF Girls Who Code - Member</li>
                </ul>

                <div className="involvementPhotoWrap">
                  <div className="aboutPhotoWindow">
                    <div className="aboutPhotoTop">
                      <div className="aboutPhotoTopLeft">
                        <div className="dots aboutPhotoDots">
                          <div className="dot red"></div>
                          <div className="dot yellow"></div>
                          <div className="dot green"></div>
                        </div>
                        <span>go_gators.jpg</span>
                      </div>
                    </div>
                    <div className="aboutPhotoBody">
                      <div className="aboutPhotoFrame">
                        <img
                          src={GoGators.src}
                          alt="Go Gators"
                          className="aboutPhotoImg involvementPhotoImg"
                        />
                      </div>
                    </div>
                  </div>
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






