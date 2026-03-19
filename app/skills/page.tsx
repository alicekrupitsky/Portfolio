"use client";

import Nav from "@/components/nav";
import SiteNameLink from "@/components/ui/site-name-link";
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
  "Russian (conversational)",
];

const CERTIFICATIONS = [
  {
    name: "Google Analytics Certification - Google (Feb 2026)",
    link: "https://skillshop.credential.net/ef8f5a0f-538f-4f69-ac14-38b9a477e0ce#acc.jkzMfpNU",
  },
  { name: "Social Media Marketing Professional Certificate - Hootsuite" },
  { name: "Design User Experiences with Figma - LinkedIn Learning" },
  { name: "Psychology Fundamentals for Marketing & Sales - LinkedIn Learning" },
];

type SkillState = {
  name: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

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
    <section className="window">
      <div className="windowTop">
        <div className="windowTopLeft">
          <strong>Installed Programs</strong>
        </div>

        <button type="button" className="sandboxPlayBtn" onClick={toggleSandbox}>
          {isSandbox ? "STOP" : "PLAY"}
        </button>
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

        <div
          style={{
            marginTop: 26,
            paddingTop: 20,
            borderTop: "3px solid var(--green2)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: "bold",
              color: "var(--green2)",
              letterSpacing: ".08em",
              marginBottom: 14,
            }}
          >
            Certifications
          </div>

          <ul
            style={{
              maxWidth: 700,
              margin: "0 auto",
              lineHeight: 1.5,
              paddingLeft: 26,
            }}
          >
            {CERTIFICATIONS.map((cert, index) => (
              <li key={index} style={{ marginBottom: 9 }}>
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    {cert.name}
                  </a>
                ) : (
                  cert.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function SkillsPage() {
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
          <div className="main-title">Advertising Major + CS Minor</div>
          <div className="main-title">University of Florida</div>
        </div>
      </div>

      <div className="grid">
        <Nav currentPath="/skills" />

        <main style={{ display: "grid", gap: 22 }}>
          <SkillsWindow />
          <div className="footer">
            Made with <span className="heart">&#9829;</span> by Alice
          </div>
        </main>
      </div>
    </div>
  );
}







