import PageShell from "@/components/page-shell";
import SiteHeaderTitles from "@/components/ui/site-header-titles";
import AliceHeadShot from "@/app/AliceHeadShot.jpg";

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
                    <span>pfp.jpg</span>
                  </div>
                </div>
                <div className="aboutPhotoBody">
                  <div className="aboutPhotoFrame">
                    <img
                      src={AliceHeadShot.src}
                      alt="Alice Krupitsky"
                      className="aboutPhotoImg"
                    />
                  </div>
                </div>
              </div>
            </aside>

            <p>
              Hi, I&apos;m Alice Krupitsky, a third-year Advertising student
              at UF with a minor in Computer Science and an AI Fundamentals
              Certificate. I&apos;m drawn to bold creative work and the data,
              psychology, and technology behind what makes it effective.
            </p>

            <p>
              Growing up in a Russian household in Tampa got me thinking early
              about how much communication matters. The same message can land
              completely differently depending on who&apos;s hearing it, and
              that still shapes how I approach audiences, messaging, and
              branding.
            </p>

            <p>
              I learned HTML and CSS when I was 13 and never really stopped.
              Outside of school, I enjoy language learning, writing, going down
              psychology rabbit holes, and exploring fashion and visual design.
            </p>

            <p>
              Long term, I want to work on products where brand, data, and
              user experience all come together. I like being close to the
              decisions, understanding what works, and figuring out why people
              respond the way they do.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
