import PageShell from "@/components/page-shell";
import SiteHeaderTitles from "@/components/ui/site-header-titles";
import AliceTalking from "@/app/AliceTalking.jpg";

export default function Home() {
  return (
    <PageShell currentPath="/" headerContent={<SiteHeaderTitles />}>
      <section className="window noWindowLift">
        <div className="windowTop">
          <div className="windowTopLeft">
            <div className="dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <strong>About Me</strong>
          </div>
        </div>

        <div className="windowBody">
          <div className="aboutContent homeAboutContent">
            <aside className="aboutPhotoWrap homeAboutPhotoWrap">
              <div className="aboutPhotoWindow">
                <div className="aboutPhotoTop">
                  <div className="aboutPhotoTopLeft">
                    <div className="dots aboutPhotoDots">
                      <div className="dot red"></div>
                      <div className="dot yellow"></div>
                      <div className="dot green"></div>
                    </div>
                    <span>me.jpg</span>
                  </div>
                </div>
                <div className="aboutPhotoBody">
                  <div className="aboutPhotoFrame">
                    <img
                      src={AliceTalking.src}
                      alt="Alice Krupitsky"
                      className="aboutPhotoImg"
                    />
                  </div>
                </div>
              </div>
            </aside>

            <p>
              I&apos;m an Advertising student at UF with a minor in Computer
              Science and an AI Fundamentals Certificate. I&apos;ve worked across
              data, web development, and marketing, and I genuinely love all of it.
            </p>

            <p>
              I&apos;m happiest when I can take ownership of something, figure
              things out as I go, and see it through. If I don&apos;t know how
              something works yet, I want to find out.
            </p>

            <p>
              Outside of school, I enjoy {" "}
              <a
                href="https://www.instagram.com/shotzbyalice/"
                target="_blank"
                rel="noopener noreferrer"
                className="inlineLink"
              >
                photography
              </a>
              , language learning, writing,
              going down psychology rabbit holes, and exploring fashion and
              visual design.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
