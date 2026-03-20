import PageShell from "@/components/page-shell";
import SiteHeaderTitles from "@/components/ui/site-header-titles";
import AliceHeadShot from "@/app/AliceHeadShot.jpg";

export default function Home() {
  return (
    <PageShell currentPath="/" headerContent={<SiteHeaderTitles />}>
      <section className="window">
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
          <div className="aboutContent">
            <aside className="aboutPhotoWrap">
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

            <div className="bigTitle homeTitle">Welcome to my portfolio!</div>

            <p>
              Hi, I&apos;m Alice Krupitsky, a third-year student at the
              University of Florida studying Advertising with a minor in
              Computer Science and an AI Fundamentals Certificate.
              I&apos;m instinctively drawn to creativity, while also deeply
              interested in the technology and data behind the scenes.
            </p>

            <p>
              I grew up in a Russian household in Tampa, which shaped my
              curiosity about culture, language, and communication.
              I&apos;m fascinated by how different perspectives influence the
              way people interpret meaning, and I bring that awareness into
              how I think about audiences, messaging, and brand identity.
            </p>

            <p>
              Outside of work and school, I spend time learning languages,
              coding, writing, exploring fashion and visual design, and
              studying psychology. I&apos;m drawn to disciplines that explain
              how people think, create, and connect.
            </p>

            <p>
              My long-term goal is to build a career that blends brand
              strategy, content creation, and emerging technology. My
              advertising philosophy centers on data-driven creativity:
              intuition sparks ideas, but meaningful communication is
              strongest when storytelling is supported by analytics and
              intentional strategy.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}




