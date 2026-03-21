import PageShell from "@/components/page-shell";
import ButtonSocialIconDemo from "@/components/ui/social-icon";

export default function ContactPage() {
  return (
    <PageShell currentPath="/contact">
      <section className="window connectWindow">
        <div className="windowTop">
          <div className="windowTopLeft">
            <div className="dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <strong>reachme.exe</strong>
          </div>
        </div>

        <div className="aboutContent connectContent">
          <div className="bigTitle connectTitle">
            Want to work together?
            <br />
            Let&apos;s chat!
          </div>

          <div className="connectRow">
            <ButtonSocialIconDemo />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
