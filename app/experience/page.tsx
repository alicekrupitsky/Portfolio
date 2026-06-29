"use client";

import PageShell from "@/components/page-shell";
import Timeline3D, { type TimelineEvent } from "@/components/ui/3d-interactive-timeline";
import mathnasiumLogo from "@/app/Mathnasium_Logo.jpg";
import goldenEggCafePic from "@/app/goldeneggcafe.jpg";
import solvLogo from "@/app/SolvLogo.jpg";
import swampRecordsPic from "@/app/srpic.jpg";
import ufcsuLogo from "@/app/ufcsulogo.png";
import beachLensLogo from "@/app/beachLensLogo.png";
import {
  BriefcaseBusiness,
  Building2,
  Code2,
  Database,
  Megaphone,
  Presentation,
  School,
} from "lucide-react";

export default function ExperiencePage() {
  const timelineEvents: TimelineEvent[] = [
    {
      id: "beachlens",
      date: "Jun 2026 - Present",
      title: "Data Engineering Intern - BeachLens",
      description: "",
      icon: <Database className="h-5 w-5" />,
      category: "Data Engineering",
      color: "#4f9f91",
      location: "Gainesville, FL",
      mediaWindow: {
        src: beachLensLogo.src,
        alt: "BeachLens logo",
        label: "BeachLens.png",
      },
      bullets: [
        "Develop Python ETL pipelines that ingest, scrape, clean, and standardize beach, parking, and public access data from APIs, public datasets, and web sources.",
        "Improve data quality by building validation and matching workflows that identify duplicates, resolve inconsistencies, and prepare structured data for the BeachLens production database.",
      ],
    },
    {
      id: "csu",
      date: "Jan 2026 – Present",
      title: "Marketing Director - Computing Student Union (CSU)",
      description: "",
      icon: <Megaphone className="h-5 w-5" />,
      category: "Leadership",
      color: "#79a15d",
      location: "Gainesville, FL",
      mediaWindow: {
        src: ufcsuLogo.src,
        alt: "UF Computing Student Union logo",
        label: "ufcsu.png",
      },
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
      mediaWindow: {
        src: swampRecordsPic.src,
        alt: "Swamp Records preview",
        label: "DevTeamGroupPic.jpg",
      },
      mediaPlacement: "bottom",
      bullets: [
        "Build and maintain artist-facing web features using React, Next.js, and TypeScript, deployed via Vercel.",
        "Partner with teammates to translate requirements into usable UI, balancing design, accessibility, and performance.",
      ],
    },
    {
      id: "solv",
      date: "Nov 2025 – Present",
      title: "Account Manager & Data Strategist - SOLV Digital",
      description: "",
      icon: <Presentation className="h-5 w-5" />,
      category: "Analytics",
      color: "#5c93bd",
      location: "Gainesville, FL",
      mediaWindow: {
        src: solvLogo.src,
        alt: "SOLV Digital logo",
        label: "SolvLogo.jpg",
      },
      bullets: [
        "Lead client relationships end-to-end, scoping deliverables, setting timelines, and translating business goals into data-driven content and growth strategy.",
        "Built a Power BI funnel analysis that identified a key acquisition drop-off point, directly informing adjustments to content strategy and product direction.",
      ],
    },
    {
      id: "golden-egg",
      date: "Jul 2025 – Present",
      title: "Social Media & Marketing Manager - Golden Egg Cafe",
      description: "",
      icon: <Building2 className="h-5 w-5" />,
      category: "Brand Growth",
      color: "#db8078",
      location: "Tampa, FL | Part-time",
      mediaWindow: {
        src: goldenEggCafePic.src,
        alt: "Golden Egg Cafe content preview",
        label: "GEcafe.jpg",
      },
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
      mediaWindow: {
        src: mathnasiumLogo.src,
        alt: "Mathnasium logo",
        label: "MathnasiumLogo.jpg",
      },
      mediaPlacement: "bottom",
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
    <PageShell
      currentPath="/experience"
      pageClassName="experiencePage"
      gridClassName="experienceGrid"
      mainClassName="start"
    >
      <section className="window experienceWindow noWindowLift">
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
