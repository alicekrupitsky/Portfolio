"use client";

import PageShell from "@/components/page-shell";
import ShimmerButton from "@/components/ui/shimmer-button";
import { memo, useEffect, useRef, useState } from "react";

const SKILL_HEIGHT = 50;
const DRAG_VELOCITY_SCALE = 25;
const DRAG_PUSH_MULTIPLIER = 0.55;
const MIN_PUSH_SPEED = 0.9;
const DRAG_CONTACT_THRESHOLD = 16;
const SEPARATION_BOUNCE = 0.35;
const IMPACT_TRANSFER = 0.82;
const IMPACT_DAMPING = 0.45;
const REST_SPEED_EPSILON = 0.18;
const ACTIVE_IMPACT_SPEED = 0.75;
const COLLISION_PASSES = 1;

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
  width: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(value, max));
}

function getSkillWidth(name: string) {
  return Math.max(48, Math.round(name.length * 10 + 8));
}

function separateSkills(
  skills: SkillState[],
  width: number,
  height: number,
  draggedName: string | null
) {
  const next = skills.map((skill) => ({ ...skill }));

  for (let iteration = 0; iteration < COLLISION_PASSES; iteration += 1) {
    for (let i = 0; i < next.length; i += 1) {
      for (let j = i + 1; j < next.length; j += 1) {
        const a = next[i];
        const b = next[j];

        const overlapX =
          Math.min(a.x + a.width, b.x + b.width) - Math.max(a.x, b.x);
        const overlapY =
          Math.min(a.y + SKILL_HEIGHT, b.y + SKILL_HEIGHT) - Math.max(a.y, b.y);

        if (overlapX <= 0 || overlapY <= 0) continue;

        const aDragged = a.name === draggedName;
        const bDragged = b.name === draggedName;

        if (overlapX < overlapY) {
          const direction = a.x <= b.x ? 1 : -1;
          const totalSeparation = overlapX;
          const separation = aDragged || bDragged ? totalSeparation : totalSeparation / 2;
          const aSpeed = Math.abs(a.vx);
          const bSpeed = Math.abs(b.vx);

          if (!aDragged) {
            a.x = clamp(a.x - direction * separation, 0, width - a.width);
          }

          if (!bDragged) {
            b.x = clamp(b.x + direction * separation, 0, width - b.width);
          }

          if (aDragged || bDragged) {
            if (!aDragged && aSpeed < REST_SPEED_EPSILON) {
              a.vx = 0;
            }
            if (!bDragged && bSpeed < REST_SPEED_EPSILON) {
              b.vx = 0;
            }
          } else if (aSpeed >= ACTIVE_IMPACT_SPEED || bSpeed >= ACTIVE_IMPACT_SPEED) {
            if (aSpeed >= bSpeed) {
              a.vx *= IMPACT_DAMPING;
              b.vx = direction * Math.max(aSpeed * IMPACT_TRANSFER, 0.6);
            } else {
              b.vx *= IMPACT_DAMPING;
              a.vx = -direction * Math.max(bSpeed * IMPACT_TRANSFER, 0.6);
            }
          } else {
            a.vx = 0;
            b.vx = 0;
          }

          if (Math.abs(a.vx) < REST_SPEED_EPSILON) a.vx = 0;
          if (Math.abs(b.vx) < REST_SPEED_EPSILON) b.vx = 0;
        } else {
          const direction = a.y <= b.y ? 1 : -1;
          const totalSeparation = overlapY;
          const separation = aDragged || bDragged ? totalSeparation : totalSeparation / 2;
          const aSpeed = Math.abs(a.vy);
          const bSpeed = Math.abs(b.vy);

          if (!aDragged) {
            a.y = clamp(a.y - direction * separation, 0, height - SKILL_HEIGHT);
          }

          if (!bDragged) {
            b.y = clamp(b.y + direction * separation, 0, height - SKILL_HEIGHT);
          }

          if (aDragged || bDragged) {
            if (!aDragged && aSpeed < REST_SPEED_EPSILON) {
              a.vy = 0;
            }
            if (!bDragged && bSpeed < REST_SPEED_EPSILON) {
              b.vy = 0;
            }
          } else if (aSpeed >= ACTIVE_IMPACT_SPEED || bSpeed >= ACTIVE_IMPACT_SPEED) {
            if (aSpeed >= bSpeed) {
              a.vy *= IMPACT_DAMPING;
              b.vy = direction * Math.max(aSpeed * IMPACT_TRANSFER, SEPARATION_BOUNCE);
            } else {
              b.vy *= IMPACT_DAMPING;
              a.vy = -direction * Math.max(bSpeed * IMPACT_TRANSFER, SEPARATION_BOUNCE);
            }
          } else {
            a.vy = 0;
            b.vy = 0;
          }

          if (Math.abs(a.vy) < REST_SPEED_EPSILON) a.vy = 0;
          if (Math.abs(b.vy) < REST_SPEED_EPSILON) b.vy = 0;
        }
      }
    }
  }

  return next;
}

const CertificationsWindow = memo(function CertificationsWindow() {
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
});

function SkillsWindow() {
  const [isSandbox, setIsSandbox] = useState(false);
  const [skillsState, setSkillsState] = useState<SkillState[]>(() =>
    SKILLS.map((skill) => ({
      name: skill,
      x: Math.random() * 200,
      y: Math.random() * 50,
      vx: 0,
      vy: 0,
      width: getSkillWidth(skill),
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

        const width = container.clientWidth;
        const height = container.clientHeight;

        const moved = prev.map((skill) => {
          if (draggedRef.current === skill.name) return skill;

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
          if (x + skill.width > width) {
            x = width - skill.width;
            vx *= -0.7;
          }
          if (y < 0) {
            y = 0;
            vy *= -0.7;
          }
          if (y + SKILL_HEIGHT > height) {
            y = height - SKILL_HEIGHT;
            vy *= -0.7;
          }

          return { ...skill, x, y, vx, vy };
        });

        return separateSkills(moved, width, height, draggedRef.current);
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
      setSkillsState((prev) =>
        prev.map((entry) =>
          entry.name === skillName ? { ...entry, vx: 0, vy: 0 } : entry
        )
      );
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggedRef.current || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const draggedSkill = skillsState.find((skill) => skill.name === draggedRef.current);
    if (!draggedSkill) return;
    const nx = Math.max(
      0,
      Math.min(e.clientX - rect.left - offsetRef.current.x, rect.width - draggedSkill.width)
    );
    const ny = Math.max(
      0,
      Math.min(e.clientY - rect.top - offsetRef.current.y, rect.height - SKILL_HEIGHT)
    );

    const now = e.timeStamp;
    const last = lastPosRef.current;
    const dt = Math.max(16, now - last.t);
    const dragVx = ((nx - last.x) / dt) * DRAG_VELOCITY_SCALE;
    const dragVy = ((ny - last.y) / dt) * DRAG_VELOCITY_SCALE;

    lastPosRef.current = { x: nx, y: ny, t: now };

    setSkillsState((prev) => {
      const moved = prev.map((skill) =>
        skill.name === draggedRef.current
          ? {
              ...skill,
              x: nx,
              y: ny,
              vx: dragVx,
              vy: dragVy,
            }
          : { ...skill }
      );

      const draggedSkill = moved.find((skill) => skill.name === draggedRef.current);
      if (!draggedSkill) return moved;

      for (const skill of moved) {
        if (skill.name === draggedSkill.name) continue;

        const overlapX =
          Math.min(draggedSkill.x + draggedSkill.width, skill.x + skill.width) -
          Math.max(draggedSkill.x, skill.x);
        const overlapY =
          Math.min(draggedSkill.y + SKILL_HEIGHT, skill.y + SKILL_HEIGHT) -
          Math.max(draggedSkill.y, skill.y);

        if (
          overlapX <= DRAG_CONTACT_THRESHOLD ||
          overlapY <= DRAG_CONTACT_THRESHOLD
        ) {
          continue;
        }

        if (overlapX < overlapY) {
          const pushDirection = draggedSkill.x < skill.x ? 1 : -1;
          skill.x = clamp(
            skill.x + pushDirection * (overlapX - DRAG_CONTACT_THRESHOLD),
            0,
            rect.width - skill.width
          );
          skill.vx =
            pushDirection *
            Math.max(Math.abs(dragVx) * DRAG_PUSH_MULTIPLIER, MIN_PUSH_SPEED);
        } else {
          const pushDirection = draggedSkill.y < skill.y ? 1 : -1;
          skill.y = clamp(
            skill.y + pushDirection * (overlapY - DRAG_CONTACT_THRESHOLD),
            0,
            rect.height - SKILL_HEIGHT
          );
          skill.vy =
            pushDirection *
            Math.max(Math.abs(dragVy) * DRAG_PUSH_MULTIPLIER, MIN_PUSH_SPEED);
        }
      }

      return separateSkills(moved, rect.width, rect.height, draggedRef.current);
    });
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
          width: getSkillWidth(skill),
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
