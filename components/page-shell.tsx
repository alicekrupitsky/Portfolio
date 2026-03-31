"use client";

import Nav from "@/components/nav";
import SiteNameLink from "@/components/ui/site-name-link";

type PageShellProps = {
  currentPath: string;
  headerContent?: React.ReactNode;
  pageClassName?: string;
  gridClassName?: string;
  mainClassName?: string;
  children: React.ReactNode;
};

export default function PageShell({
  currentPath,
  headerContent,
  pageClassName = "",
  gridClassName = "",
  mainClassName = "",
  children,
}: PageShellProps) {
  return (
    <div className={`page ${pageClassName}`.trim()}>
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
          {headerContent ?? (
            <>
              <div className="bigTitle">Advertising Major + CS Minor</div>
              <div className="sub-title">University of Florida</div>
            </>
          )}
        </div>
      </div>

      <div className={`grid ${gridClassName}`.trim()}>
        <Nav currentPath={currentPath} />

        <main className={`pageMain ${mainClassName}`.trim()}>
          {children}

          <div className="footer">
            Made with <span className="heart">&#9829;</span> by Alice
          </div>
        </main>
      </div>
    </div>
  );
}
