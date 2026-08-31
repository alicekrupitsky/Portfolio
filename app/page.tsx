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
              I&apos;m an Advertising student at UF with a minor in Computer
              Science and an AI Fundamentals Certificate. I&apos;m most interested
              in work that brings together technical thinking and an understanding
              of people, especially when it comes to figuring out what people
              respond to and why.
            </p>

            <p>
              I like being involved in different sides of a project, whether
              that means building something, digging into data, thinking through
              the user experience, or figuring out how to communicate an idea
              clearly. That&apos;s led me to work across marketing, web development,
              data, research, and design.
            </p>

            <p>
              Outside of school, I enjoy language learning, writing, going down
              psychology rabbit holes, and exploring fashion and visual design.
            </p>

            <p>
              Long term, I want to work on products where brand, data, and
              user experience all come together. I like being close to the
              decisions, understanding what works, and helping shape what gets
              built and why.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
