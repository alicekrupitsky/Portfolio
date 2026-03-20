"use client";

import type { ReactNode } from "react";
import Nav from "@/components/nav";
import SiteNameLink from "@/components/ui/site-name-link";
import SiteHeaderTitles from "@/components/ui/site-header-titles";

type PageShellProps = {
  currentPath: string;
  headerContent?: React.ReactNode;
  mainClassName?: string;
  children: React.ReactNode;
};

export default function PageShell({
  currentPath,
  headerContent,
  mainClassName = "",
  children,
}: PageShellProps) {
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
          {headerContent ?? (
            <>
              <div className="bigTitle">Advertising Major + CS Minor</div>
              <div className="sub-title">University of Florida</div>
            </>
          )}
        </div>
      </div>

      <div className="grid">
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
