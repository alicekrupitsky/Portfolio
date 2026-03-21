"use client";

import PageShell from "@/components/page-shell";
import ShimmerButton from "@/components/ui/shimmer-button";
import { useEffect, useRef, useState } from "react";

const SKILLS = [
  "Python",
  "C++",
  "C#",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "SQL",
  "React",
  "Next.js",
  "Git & GitHub",
  "Vercel",
  "Bootstrap",
  "Power BI",
  "Excel",
  "UI/UX Design",
  "Figma",
  "LaTeX",
  "Digital Marketing",
  "Adobe Creative Suite",
  "Canva",
  "Russian",
];

const CERTIFICATIONS = [
  {
    id: "google-analytics",
    shortName: "Google Analytics Certification",
    issuer: "Google",
    date: "Feb 2026",
    application:
      "Used to read campaign traffic, spot drop-offs in user journeys, and turn audience behavior into clearer content decisions.",
    link: "https://skillshop.credential.net/ef8f5a0f-538f-4f69-ac14-38b9a477e0ce#acc.jkzMfpNU",
  },
  {
    id: "social-media-marketing",
    shortName: "Social Media Marketing Professional Certificate",
    issuer: "Hootsuite",
    date: "Dec 2025",
    application:
      "Applied in post planning, audience targeting, and performance review for brand accounts and campaign iterations.",
    link: "https://www.linkedin.com/learning/certificates/eef9c1454412dee2e7a8c6fdc097afc8a306f4e6af8d23546d3e3237729e1bcc?u=41282748",
  },
  {
    id: "figma-ux",
    shortName: "Design User Experiences with Figma",
    issuer: "LinkedIn Learning",
    date: "Jan 2026",
    application:
      "Shows up in wireframes, interface cleanup, and making product flows easier to scan and navigate before build.",
    link: "https://www.linkedin.com/learning/certificates/4e4dad6f615cb321a0a6325f8bc3b373f64c2b7d48b3722e181ca0ec163768a5?u=41282748",
  },
  {
    id: "psychology-marketing-sales",
    shortName: "Psychology Fundamentals for Marketing & Sales",
    issuer: "LinkedIn Learning",
    date: "Dec 2025",
    application:
      "Informs message framing, offer presentation, and how I structure content so calls to action feel more intuitive.",
    link: "https://www.linkedin.com/learning/certificates/c39baa7d88f397799aceaa2f92575d6d82f99777819fdac8def3a96bda34cf48?u=41282748",
  },
];

type SkillState = {
  name: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function CertificationsWindow() {
  const [activeCertId, setActiveCertId] = useState("");

  return (
    <section className="window certWindowNested">
      <div className="windowTop">
        <div className="windowTopLeft">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <strong>Certifications</strong>
        </div>
      </div>

      <div className="windowBody certWindowBody">
        <div className="certExplorer" role="list" aria-label="Certification list">
          {CERTIFICATIONS.map((cert) => {
            const isOpen = cert.id === activeCertId;

            return (
              <article
                key={cert.id}
                className={`certFile${isOpen ? " is-open" : ""}`}
                role="listitem"
              >
                <div className="certFileTop" aria-hidden="true">
                  <div className="dots certFileDots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                  </div>
                  <span className="certFileTabLabel">{cert.shortName}</span>
                </div>
                <button
                  type="button"
                  className="certFileButton"
                  aria-expanded={isOpen}
                  onClick={() =>
                    setActiveCertId((current) => (current === cert.id ? "" : cert.id))
                  }
                >
                  <span className="certFileText">
                    <span className="certFileMeta">
                      {cert.issuer} / {cert.date}
                    </span>
                  </span>
                  <span className="certFileStatus" aria-hidden="true">
                    {isOpen ? "hide details" : "show details"}
                  </span>
                </button>

                {isOpen ? (
                  <div className="certFileDetail">
                    <p>{cert.application}</p>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      Open credential
                    </a>
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillsWindow() {
  const [isSandbox, setIsSandbox] = useState(false);
  const [skillsState, setSkillsState] = useState<SkillState[]>(() =>
    SKILLS.map((skill) => ({
      name: skill,
      x: Math.random() * 200,
      y: Math.random() * 50,
      vx: 0,
      vy: 0,
    }))
  );

  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggedRef = useRef<string | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const lastPosRef = useRef({ x: 0, y: 0, t: 0 });

  useEffect(() => {
    if (!isSandbox) return;

    const interval = setInterval(() => {
      setSkillsState((prev) => {
        const container = containerRef.current;
        if (!container) return prev;

        const skillWidth = 140;
        const skillHeight = 50;
        const width = container.clientWidth;
        const height = container.clientHeight;

        return prev.map((skill) => {
          if (skill.name === draggedRef.current) return skill;

          let { x, y, vx, vy } = skill;

          vy += 0.3;
          vx *= 0.99;
          vy *= 0.99;
          x += vx;
          y += vy;

          if (x < 0) {
            x = 0;
            vx *= -0.7;
          }
          if (x + skillWidth > width) {
            x = width - skillWidth;
            vx *= -0.7;
          }
          if (y < 0) {
            y = 0;
            vy *= -0.7;
          }
          if (y + skillHeight > height) {
            y = height - skillHeight;
            vy *= -0.7;
          }

          return { ...skill, x, y, vx, vy };
        });
      });
    }, 30);

    return () => clearInterval(interval);
  }, [isSandbox]);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement>,
    skillName: string
  ) => {
    if (!isSandbox || !containerRef.current) return;

    e.preventDefault();
    draggedRef.current = skillName;

    const rect = containerRef.current.getBoundingClientRect();
    const skill = skillsState.find((entry) => entry.name === skillName);

    if (skill) {
      offsetRef.current = {
        x: e.clientX - rect.left - skill.x,
        y: e.clientY - rect.top - skill.y,
      };
      lastPosRef.current = { x: skill.x, y: skill.y, t: e.timeStamp };
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggedRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const nx = Math.max(
      0,
      Math.min(e.clientX - rect.left - offsetRef.current.x, rect.width - 140)
    );
    const ny = Math.max(
      0,
      Math.min(e.clientY - rect.top - offsetRef.current.y, rect.height - 50)
    );

    const now = e.timeStamp;
    const last = lastPosRef.current;
    const dt = Math.max(16, now - last.t);

    lastPosRef.current = { x: nx, y: ny, t: now };

    setSkillsState((prev) =>
      prev.map((skill) =>
        skill.name === draggedRef.current
          ? {
              ...skill,
              x: nx,
              y: ny,
              vx: ((nx - last.x) / dt) * 25,
              vy: ((ny - last.y) / dt) * 25,
            }
          : skill
      )
    );
  };

  const handleMouseUp = () => {
    draggedRef.current = null;
  };

  const toggleSandbox = () => {
    if (!isSandbox) {
      setSkillsState(
        SKILLS.map((skill) => ({
          name: skill,
          x: Math.random() * 400,
          y: Math.random() * 100,
          vx: (Math.random() - 0.5) * 3,
          vy: (Math.random() - 0.5) * 3,
        }))
      );
    }
    setIsSandbox((value) => !value);
  };

  return (
    <section className="window noWindowLift">
      <div className="windowTop">
        <div className="windowTopLeft">
          <div className="dots">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
          <strong>Installed Programs</strong>
        </div>

        <ShimmerButton
          type="button"
          className="sandboxPlayBtn"
          onClick={toggleSandbox}
          style={{
            backgroundImage:
              "linear-gradient(110deg, color-mix(in srgb, var(--green) 88%, white 12%) 0%, color-mix(in srgb, var(--green) 94%, white 6%) 42%, rgba(255, 255, 255, 0.42) 50%, color-mix(in srgb, var(--green) 94%, white 6%) 58%, color-mix(in srgb, var(--green) 88%, white 12%) 100%)",
            backgroundColor: "var(--green)",
            backgroundSize: "200% 100%",
            borderColor: "var(--color-text-inverse)",
            color: "var(--color-text-inverse)",
          }}
        >
          {isSandbox ? "STOP" : "PLAY"}
        </ShimmerButton>
      </div>

      <div className="windowBody">
        {isSandbox ? (
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="skillsSandbox"
          >
            {skillsState.map((skill) => (
              <div
                key={skill.name}
                className="skill sandbox-mode"
                style={{
                  left: `${skill.x}px`,
                  top: `${skill.y}px`,
                  userSelect: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseDown={(e) => handleMouseDown(e, skill.name)}
              >
                {skill.name}
              </div>
            ))}
          </div>
        ) : (
          <div className="skills">
            {SKILLS.map((skill) => (
              <div key={skill} className="skill">
                {skill}
              </div>
            ))}
          </div>
        )}
        <div className="skillsPanelExtra">
          <CertificationsWindow />
        </div>
      </div>
    </section>
  );
}

export default function SkillsPage() {
  return (
    <PageShell currentPath="/skills" mainClassName="pageMain start">
      <SkillsWindow />
    </PageShell>
  );
}
