import Nav from "@/components/nav";
import SiteNameLink from "@/components/ui/site-name-link";
import SiteHeaderTitles from "@/components/ui/site-header-titles";

export default function Home() {
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
          <SiteHeaderTitles />
        </div>
      </div>

      <div className="grid">
        <Nav currentPath="/" />

        <main style={{ display: "grid", gap: "22px" }}>
          <section className="window">
            <div className="windowTop">
              <div className="windowTopLeft">
                <strong>About Me</strong>
              </div>
            </div>

            <div className="windowBody">
              <div className="bigTitle">Welcome to my portfolio!</div>

              <p>
                Hi, I&apos;m Alice Krupitsky, a third-year student at the
                University of Florida studying Advertising with a minor in
                Computer Science and an AI Fundamentals Certificate. I&apos;m
                instinctively drawn to creativity, while also deeply interested
                in the technology and data behind the scenes.
              </p>

              <p>
                I grew up in a Russian household in Tampa, which shaped my
                curiosity about culture, language, and communication. I&apos;m
                fascinated by how different perspectives influence the way
                people interpret meaning, and I bring that awareness into how I
                think about audiences, messaging, and brand identity.
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
                intuition sparks ideas, but meaningful communication is strongest
                when storytelling is supported by analytics and intentional
                strategy.
              </p>
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





