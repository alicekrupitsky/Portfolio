'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/context/ThemeContext'

type HistoryEntry = {
  command: string
  output: string
}

const WELCOME_BANNER = [
  ` \u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2557     \u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557`,
  `\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255d`,
  `\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2588\u2588\u2588\u2557  `,
  `\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2551\u2588\u2588\u2551     \u2588\u2588\u2554\u2550\u2550\u255d  `,
  `\u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2551\u255a\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557`,
  `\u255a\u2550\u255d  \u255a\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u255d \u255a\u2550\u2550\u2550\u2550\u2550\u255d\u255a\u2550\u2550\u2550\u2550\u2550\u2550\u255d`,
  "",
  "[SYSTEM] Terminal Portfolio v1.0 \u2014 Initialised.",
  "",
  "Hi! I'm Alice Krupitsky. Type help to explore.",
].join("\n")

export default function PortfolioTerminal() {
  const { setTheme } = useTheme()
  const [history, setHistory] = useState<HistoryEntry[]>([
    { command: "/welcome", output: WELCOME_BANNER },
  ])
  const [currentCommand, setCurrentCommand] = useState("")
  const [, setHistoryIndex] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const commands: Record<string, () => string> = {
    help: () => `
[AVAILABLE COMMANDS]

  about       -> Who I am
  skills      -> Technical and creative skills
  experience  -> Work history
  projects    -> Selected projects
  contact     -> How to reach me
  clear       -> Clear the terminal
  help        -> Show this message
`,
    about: () => `
[ABOUT]

  Name:     Alice Krupitsky
  Role:     Advertising Major + CS Minor
  School:   University of Florida
  Based in: Tampa / Gainesville, FL

  I'm an Advertising student at UF with a minor in Computer Science and
  an AI Fundamentals Certificate. I'm most interested in work that
  brings together technical thinking and an understanding of people,
  especially when it comes to figuring out what people respond to and
  why.

  I like being involved in different sides of a project, whether that
  means building something, digging into data, thinking through the user
  experience, or figuring out how to communicate an idea clearly. That's
  led me to work across marketing, web development, data, research, and
  design.

  Outside of school, I enjoy language learning, writing, going down
  psychology rabbit holes, and exploring fashion and visual design.

  Long term, I want to work on products where brand, data, and user
  experience all come together. I like being close to the decisions,
  understanding what works, and helping shape what gets built and why.
`,
    skills: () => `
[SKILLS]

  Skills:
    Python | SQL | PostgreSQL | pandas | NumPy | DuckDB | Supabase
    ETL Pipelines | Data Cleaning & Validation | Web Scraping | BeautifulSoup
    REST APIs | C++ | C# | JavaScript | TypeScript | HTML/CSS | React
    Next.js | Git & GitHub | Vercel | Power BI | Excel | UI/UX Design
    Figma | Wireframing | Adobe Creative Suite | Canva | Account Management
    Digital Marketing | Russian

  Certifications:
    - Google Analytics Certification - Google (Feb 2026)
      https://skillshop.credential.net/ef8f5a0f-538f-4f69-ac14-38b9a477e0ce
    - Social Media Marketing Professional Certificate - Hootsuite
      https://www.linkedin.com/learning/certificates/eef9c1454412dee2e7a8c6fdc097afc8a306f4e6af8d23546d3e3237729e1bcc?u=41282748
    - Design User Experiences with Figma - LinkedIn Learning
      https://www.linkedin.com/learning/certificates/4e4dad6f615cb321a0a6325f8bc3b373f64c2b7d48b3722e181ca0ec163768a5?u=41282748
    - Psychology Fundamentals for Marketing and Sales - LinkedIn Learning
      https://www.linkedin.com/learning/certificates/c39baa7d88f397799aceaa2f92575d6d82f99777819fdac8def3a96bda34cf48?u=41282748
`,
    experience: () => `
[EXPERIENCE]

  Jun 2026 - Present | Data Engineering Intern
  BeachLens | Gainesville, FL
  - Develop end-to-end Python ETL pipelines that ingest,
    transform, validate, and load multi-source data into
    BeachLens' production database
  - Build data-quality workflows that detect inconsistencies,
    reconcile duplicate records, and standardize datasets before
    they reach production

  Nov 2025 - Present | Account Manager & Data Strategist
  SOLV Digital | Gainesville, FL
  - Lead client relationships end-to-end, scoping deliverables,
    setting timelines, and translating business goals into
    data-driven content and growth strategy
  - Built a Power BI funnel analysis that identified a key
    acquisition drop-off point, directly informing adjustments
    to content strategy and product direction

  Jan 2026 - Present | Web Developer
  Swamp Records | Gainesville, FL | Part-time
  - Build and ship responsive website updates for artist
    and event content
  - Work with teammates to turn campaign needs into
    clear user flows and on-brand page experiences

  Jan 2026 - May 2026 | Marketing Director
  Computing Student Union (CSU) | Gainesville, FL
  - Own CSU marketing strategy across campaign direction,
    channels, and content planning
  - Lead event promotion across Instagram, announcements,
    and weekly timelines
  - Coordinate with leadership and event teams to keep
    messaging and timing aligned

  Jul 2025 - Feb 2026 | Social Media and Marketing Manager
  Golden Egg Cafe | Tampa, FL | Part-time
  - Own the @golden.eggcafe content calendar and campaign
    execution across social channels
  - Test creative direction, offers, and messaging based on
    post performance and audience response
  - Grew account reach by 190% through consistent iteration
    and data-informed optimization

  May 2022 - Aug 2022 | Math Tutor
  Mathnasium Learning Center | Tampa, FL
  - Delivered personalized tutoring for K-12 students with
    different pacing and learning styles
  - Supported an average score improvement of about 30%
    across students

  Feb 2024 - May 2024 | Server
  Applebee's | Gainesville, FL
  - Managed high-volume shifts while balancing speed,
    accuracy, and team coordination

  Jul 2021 - Jun 2023 | Server
  Sushi Cafe | Tampa, FL
  - Delivered reliable service in a fast-paced setting and
    built strong customer communication skills
`,
    projects: () => `
[PROJECTS]

  1. NeuroView
     Frontend Lead | SwampHacks XI Winner (Best User Design) | Jan 2026
     https://devpost.com/software/neuroview
     - Built the frontend for a real-time 3D MRI viewer that made
       complex scan review easier and faster
     - Built synchronized multi-plane slicing, annotation, and shared
       sessions for up to 4 users
     - Reduced user friction by making key scan actions faster to learn
       and easier to repeat
     - Result: NeuroView won Best User Design at SwampHacks XI

  2. Florida Medical Doctor Search
     Founder and Developer | Dec 2025 - Jan 2026
     https://floridamedsearch.com/
     - Built and launched a doctor search tool focused on real
       procedural history, not just ratings
     - Turned large public healthcare datasets into a clean search
       experience with filters users can act on
     - Result: transformed complex medical data into a practical tool
       for patient decision-making

  3. Gator Quant Hacks Website
     Sole Designer and Developer | Mar 2026
     https://www.gqhacks.com/
     - Designed and built the Gator Quant Hacks website, translating
       Figma mockups into a responsive React and Next.js experience
     - Refined the site through multiple feedback rounds before launch,
       tightening layout, copy, and interaction details
     - Created custom animations and handled SEO improvements to make
       the site feel polished and easier to discover

  4. Museboard Growth and Conversion Analysis
     Data Analytics | Client work through SOLV Digital (Associate)
     /projects/museboard-growth-conversion-analysis
     - Mapped the Instagram-to-platform funnel to show exactly where
       discovery stopped converting into product usage
     - Identified profile visit to link click as the key bottleneck,
       which clarified where growth experiments should focus first
     - Used trend and KPI analysis to separate one-time spikes from
       sustained engagement and guide next-step decisions

  5. Film on a Whim
     Data Structures and Algorithms Project | University of Florida | Jun-Jul 2026
     https://github.com/alicekrupitsky/Film-On-A-Whim
     - Built a movie discovery tool using a dataset of 141,976 films
     - Evaluated custom Max Heap and B+ Tree implementations for
       filtering and recommending movies

  6. Gen Z Brand Reputation Research and Presentation
     Team Lead and Spokesperson | UF CJCxNYC PR and Ad Week | Burson NYC | May 2026
     /projects/gen-z-brand-reputation-strategy
     - Volunteered as team lead and coordinated direction under a
       compressed one-week deadline
     - Served as the primary spokesperson during the final presentation
       to professionals at Burson's New York office
     - Refined the presentation narrative so complex research and
       strategic implications were clear, polished, and persuasive

  7. Wawa Consumer Insights Study
     Research Lead | Digital Insights, University of Florida | Mar 2026
     /wawa-consumer-insights-study.pdf
     - Designed and executed a branching survey, distributing it to
       600+ respondents and qualifying 54 for deeper analysis
     - Analyzed response data to uncover three distinct audience groups
       and translate behavioral patterns into usable insights
     - Built a data-driven persona that shaped the team's strategic
       recommendations for Wawa

  8. Tetris
     Python + Pygame | Jan 2026
     https://github.com/alicekrupitsky/Tetris
     - Built an executable Tetris game using Python and Pygame
     - Features scoring and leveling with increasing speed, wall kicks,
       and pause/restart controls

  9. Website for David D. Friedman
     Frontend Development | Mar 2020
     http://www.daviddfriedman.com/
     - Designed and launched a client website, building early
       experience in scoped delivery and client communication
`,
    contact: () => `
[CONTACT]

  Email:    akrupitsky@ufl.edu
  LinkedIn: https://www.linkedin.com/in/alicekrupitsky
  GitHub:   https://github.com/alicekrupitsky

  Feel free to reach out for opportunities, collaborations, or just a chat!
`,
    yo: () => `yo`,
    hi: () => `Hi! :D`,
    boo: () => {
      setTheme("bloodmoon")
      return `
[EASTER EGG UNLOCKED]

  Bloodmoon mode enabled.
  Something spooky just happened to the palette.
`
    },
    badabingbadaboom: () => `...
WINNER DETECTED.
Game over. You beat the portfolio.`,
    clear: () => {
      setHistory([])
      return ""
    },
  }

  const handleCommand = () => {
    const cmd = currentCommand.trim().toLowerCase()
    const commandFn = commands[cmd]
    const output = commandFn
      ? commandFn()
      : `Command not found: "${cmd}"\nType help to see available commands.`

    if (cmd !== "clear") {
      setHistory((prev) => [...prev, { command: currentCommand, output }])
    }

    setCurrentCommand("")
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCommand()
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setHistoryIndex((prev) => {
        const newIndex = Math.min(prev + 1, history.length - 1)
        if (history.length > 0) {
          setCurrentCommand(history[history.length - 1 - newIndex]?.command || "")
        }
        return newIndex
      })
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setHistoryIndex((prev) => {
        const newIndex = Math.max(prev - 1, -1)
        setCurrentCommand(
          newIndex === -1 ? "" : history[history.length - 1 - newIndex]?.command || ""
        )
        return newIndex
      })
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  useEffect(() => {
    const el = terminalRef.current
    const focus = () => inputRef.current?.focus()
    el?.addEventListener("click", focus)
    return () => el?.removeEventListener("click", focus)
  }, [])

  const renderOutput = (output: string) => {
    const parts = output.split(
      /(https?:\/\/[^\s]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g
    )

    return parts.map((part, index) => {
      if (/^https?:\/\//.test(part)) {
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent)", borderBottomColor: "var(--accent)" }}
          >
            {part}
          </a>
        )
      }

      if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
        return (
          <a
            key={index}
            href={`mailto:${part}`}
            style={{ color: "var(--accent)", borderBottomColor: "var(--accent)" }}
          >
            {part}
          </a>
        )
      }

      return <span key={index}>{part}</span>
    })
  }

  return (
    <div
      className="window"
      style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}
    >
      <div className="windowTop">
        <div className="windowTopLeft">
          <div className="dots" style={{ paddingTop: 0 }}>
            <div className="dot red" />
            <div className="dot yellow" />
            <div className="dot green" />
          </div>
          <strong>alice@portfolio:~</strong>
        </div>
        <span style={{ fontSize: "18px", opacity: 0.7, letterSpacing: ".05em" }}>
          Interactive Terminal | v1.0
        </span>
        <span style={{ fontSize: "18px" }}>
          <span style={{ color: "var(--color-terminal-online)" }}>o</span> ONLINE
        </span>
      </div>

      <div
        ref={terminalRef}
        style={{
          background: "var(--ink)",
          color: "var(--color-terminal-text)",
          fontFamily: "'VT323', monospace",
          fontSize: "20px",
          padding: "18px 22px",
          height: "55vh",
          overflowY: "auto",
          cursor: "text",
          lineHeight: 1.45,
          scrollbarWidth: "thin",
          scrollbarColor: "var(--green2) var(--ink)",
        }}
      >
        {history.map((entry, i) => (
          <div key={i} style={{ marginBottom: "14px" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              <span style={{ color: "var(--accent)", fontWeight: "bold" }}>
                alice@portfolio:~$
              </span>
              <span style={{ color: "var(--color-terminal-text-strong)" }}>
                {entry.command}
              </span>
            </div>
            <div
              style={{
                whiteSpace: "pre-wrap",
                color: "var(--color-terminal-text)",
                paddingLeft: "22px",
                marginTop: "2px",
              }}
            >
              {renderOutput(entry.output)}
            </div>
          </div>
        ))}

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <span
            style={{ color: "var(--accent)", fontWeight: "bold", whiteSpace: "nowrap" }}
          >
            alice@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "var(--color-terminal-text-strong)",
              fontFamily: "'VT323', monospace",
              fontSize: "20px",
              caretColor: "var(--green)",
              lineHeight: 1.45,
            }}
          />
          <span
            style={{
              color: "var(--green)",
              animation: "termBlink 1s step-end infinite",
            }}
          >
            |
          </span>
        </div>

        <div ref={bottomRef} />
      </div>

      <div
        style={{
          background: "var(--green2)",
          color: "var(--color-terminal-text-strong)",
          padding: "8px 18px",
          fontSize: "18px",
          display: "flex",
          justifyContent: "space-between",
          borderTop: "3px solid var(--color-window-divider)",
          letterSpacing: ".04em",
        }}
      >
        <span>up/down command history | Enter to run</span>
        <span>type help for commands</span>
      </div>

      <style>{`
        @keyframes termBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
