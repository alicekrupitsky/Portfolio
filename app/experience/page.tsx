"use client";

import PageShell from "@/components/page-shell";
import Timeline3D, { type TimelineEvent } from "@/components/ui/3d-interactive-timeline";
import {
  BriefcaseBusiness,
  Building2,
  Code2,
  Megaphone,
  Presentation,
  School,
} from "lucide-react";

export default function ExperiencePage() {
  const timelineEvents: TimelineEvent[] = [
    {
      id: "csu",
      date: "Jan 2026 – Present",
      title: "Marketing Director - Computing Student Union (CSU)",
      description: "",
      icon: <Megaphone className="h-5 w-5" />,
      category: "Leadership",
      color: "#79a15d",
      location: "Gainesville, FL",
      bullets: [
        "Lead event promotion across Instagram, announcements, and weekly timelines.",
        "Coordinate with leadership and event teams to keep messaging and timing aligned.",
      ],
    },
    {
      id: "swamp-records",
      date: "Jan 2026 – Present",
      title: "Web Developer - Swamp Records",
      description: "",
      icon: <Code2 className="h-5 w-5" />,
      category: "Development",
      color: "#9670aa",
      location: "Gainesville, FL | Part-time",
      bullets: [
        "Build and maintain artist-facing web features using React, Next.js, and TypeScript, deployed via Vercel.",
        "Partner with teammates to translate requirements into usable UI, balancing design, accessibility, and performance.",
      ],
    },
    {
      id: "solv",
      date: "Nov 2025 – Present",
      title: "Associate - SOLV Digital",
      description: "",
      icon: <Presentation className="h-5 w-5" />,
      category: "Analytics",
      color: "#5c93bd",
      location: "Gainesville, FL | Part-time",
      bullets: [
        "Analyze engagement metrics and user behavior data to optimize content strategy across digital platforms.",
        "Translate insights into recommendations with cross-functional teams; communicate results clearly to stakeholders.",
      ],
    },
    {
      id: "golden-egg",
      date: "Jul 2025 – Present",
      title: "Social Media & Marketing Manager - Golden Egg Café",
      description: "",
      icon: <Building2 className="h-5 w-5" />,
      category: "Brand Growth",
      color: "#db8078",
      location: "Tampa, FL | Part-time",
      bullets: [
        "Increased account reach by 190% through data-informed content strategy and platform optimization.",
        "Designed branded visual content using photography and Canva to maintain consistent visual identity.",
      ],
    },
    {
      id: "mathnasium",
      date: "May 2022 – Aug 2022",
      title: "Math Tutor - Mathnasium Learning Center",
      description: "",
      icon: <School className="h-5 w-5" />,
      category: "Education",
      color: "#e7c87a",
      location: "Tampa, FL",
      bullets: [
        "Delivered personalized tutoring for K–12 students across different pacing and learning styles.",
        "Supported an average score improvement of ~30% across students.",
      ],
    },
    {
      id: "sushi-cafe",
      date: "Jul 2021 – Jun 2023",
      title: "Server - Sushi Cafe",
      description: "",
      icon: <BriefcaseBusiness className="h-5 w-5" />,
      category: "Customer Experience",
      color: "#587645",
      location: "Tampa, FL",
      bullets: [
        "Delivered high-quality service in a fast-paced, high-volume environment and built strong conflict-resolution skills.",
      ],
    },
  ];

  return (
    <PageShell currentPath="/experience" mainClassName="pageMain start">
      <section className="window experienceWindow">
        <div className="windowTop">
          <div className="windowTopLeft">
            <div className="dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <strong>Experience</strong>
          </div>
        </div>

        <div className="windowBody experienceWindowBody">
          <Timeline3D events={timelineEvents} />
        </div>
      </section>
    </PageShell>
  );
}


