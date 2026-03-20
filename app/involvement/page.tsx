import PageShell from "@/components/page-shell";
import GoGators from "@/app/GoGators.png";

export default function InvolvementPage() {
  return (
    <PageShell currentPath="/involvement" mainClassName="pageMain start">
      <section className="window involvementWindow">
        <div className="windowTop">
          <div className="windowTopLeft">
            <div className="dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <strong>Campus Involvement</strong>
          </div>
        </div>

        <div className="windowBody involvementWindowBody">
          <div className="involvementContentRow">
            <ul className="involvementList">
              <li>
                Computing Student Union (CSU) - <strong>Marketing Director</strong>
              </li>
              <li>WiNGHacks - Volunteer</li>
              <li>UF Data Science & Informatics (DSI) Student Organization - Member</li>
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
    </PageShell>
  );
}
