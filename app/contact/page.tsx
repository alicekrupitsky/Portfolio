import Nav from "@/components/nav";
import SiteNameLink from "@/components/ui/site-name-link";
import ButtonSocialIconDemo from "@/components/ui/social-icon";

export default function ContactPage() {
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
        <Nav currentPath="/contact" />

        <main style={{ display: "grid", gap: "22px" }}>
          <section className="window" style={{ maxWidth: '360px', width: '100%', margin: '0 auto', justifySelf: 'center', height: 'max-content', overflow: 'hidden' }}>
            <div className="windowTop">
              <div className="windowTopLeft">
                <div className="dots" style={{ paddingTop: 0 }}>
                  <div className="dot red"></div>
                  <div className="dot yellow"></div>
                  <div className="dot green"></div>
                </div>
                <strong>Connect.EXE</strong>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 22px 14px' }}>
              <div className="bigTitle" style={{ fontSize: '30px', lineHeight: '1.2', margin: '0 0 16px 0' }}>
                Want to work together?
                <br />
                Let&apos;s chat!
              </div>

              <div style={{ width: "100%", display: 'flex' }}>
                <ButtonSocialIconDemo />
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







