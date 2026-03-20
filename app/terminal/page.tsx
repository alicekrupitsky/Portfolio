import PortfolioTerminal from "@/components/ui/interactive-portfolio-terminal-component";
import PageShell from "@/components/page-shell";

export default function TerminalPage() {
  return (
    <PageShell currentPath="/terminal">
      <PortfolioTerminal />
    </PageShell>
  );
}
