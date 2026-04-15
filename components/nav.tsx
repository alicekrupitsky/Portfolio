"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { themes, type ThemeName } from "@/themes/themes";

const navItems = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/involvement", label: "Involvement" },
  { href: "/contact", label: "Contact" },
  { href: "/terminal", label: "Terminal" },
] as const;

const themeOptions: Array<{ name: ThemeName; label: string }> = [
  { name: "blue", label: "Blue" },
  { name: "purple", label: "Purple" },
  { name: "green", label: "Green" },
];

function PaintBucketIcon({
  color,
  active,
}: {
  color: string;
  active: boolean;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      <rect x="3" y="2" width="6" height="2" fill="var(--color-text)" />
      <rect x="9" y="4" width="2" height="2" fill="var(--color-text)" />
      <rect x="11" y="6" width="2" height="2" fill="var(--color-text)" />
      <rect x="4" y="5" width="8" height="2" fill="var(--color-text)" />
      <rect x="3" y="7" width="10" height="2" fill="var(--color-text)" />
      <rect x="2" y="9" width="10" height="2" fill="var(--color-text)" />
      <rect x="3" y="11" width="8" height="2" fill="var(--color-text)" />
      <rect x="4" y="13" width="6" height="2" fill="var(--color-text)" />
      <rect x="5" y="7" width="6" height="6" fill={color} />
      <rect x="11" y="11" width="2" height="2" fill={color} />
      <rect
        x="13"
        y="12"
        width="2"
        height="2"
        fill={active ? "var(--color-text-inverse)" : color}
      />
      <rect x="14" y="14" width="2" height="2" fill={color} />
    </svg>
  );
}

export default function Nav({ currentPath }: { currentPath: string }) {
  const { activeTheme, setTheme } = useTheme();

  return (
    <aside className="navWrap">
      <div className="navCard">
        <div className="navTitle">NAV</div>
        <div className="navGrid">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`navBtn${currentPath === item.href ? " active" : ""}`}
            >
              <strong>{item.label}</strong>
            </Link>
          ))}
        </div>

        <div className="navTitle themeTitle">THEME</div>
        <div className="themePicker" role="group" aria-label="Theme picker">
          {themeOptions.map((option) => (
            <button
              key={option.name}
              type="button"
              className={`themeSwatch${
                activeTheme === option.name ? " active" : ""
              }`}
              onClick={() => setTheme(option.name)}
              aria-label={`Switch to ${option.label} theme`}
              aria-pressed={activeTheme === option.name}
            >
              <PaintBucketIcon
                color={themes[option.name]["--color-accent"]}
                active={activeTheme === option.name}
              />
            </button>
          ))}
        </div>

        <div className="quickLinksCard">
          <div className="quickLinksTitle">Quick Links</div>
          <div className="quickLinksRow">
            <a href="mailto:akrupitsky@ufl.edu">Email</a>
            <span className="quickLinksDivider">|</span>
            <a
              href="https://www.linkedin.com/in/alicekrupitsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <span className="quickLinksDivider">|</span>
            <a
              href="https://github.com/alicekrupitsky"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
