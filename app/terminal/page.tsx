import PortfolioTerminal from "@/components/ui/interactive-portfolio-terminal-component";
import Nav from "@/components/nav";
import Link from "next/link";

export default function TerminalPage() {
  return (
    <div className="page">
      <div className="headerWindow">
        <div className="headerTop">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <Link href="/" className="name">
            ALICE KRUPITSKY
          </Link>
        </div>
        <div className="headerBottom">
          <div className="main-title">Advertising Major + CS Minor</div>
          <div className="main-title">University of Florida</div>
        </div>
      </div>

      <div className="grid">
        <Nav currentPath="/terminal" />

        <main style={{ display: "grid", gap: "22px" }}>
          <PortfolioTerminal />

          <div className="footer">
            Made with <span className="heart">&#9829;</span> by Alice
          </div>
        </main>
      </div>
    </div>
  );
}
