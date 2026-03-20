"use client"

import { useState } from "react"
import { Typewriter } from "@/components/ui/typewriter"

export default function SiteHeaderTitles() {
  const [showSecondLine, setShowSecondLine] = useState(false)

  return (
    <>
      <div className="bigTitle">
        <Typewriter
          words={["Advertising Major + CS Minor"]}
          speed={55}
          cursor={false}
          loop={false}
          onComplete={() => setShowSecondLine(true)}
        />
      </div>
      <div className="sub-title">
        {showSecondLine ? (
          <Typewriter
            words={["University of Florida"]}
            speed={55}
            cursor={false}
            loop={false}
          />
        ) : (
          "\u00A0"
        )}
      </div>
    </>
  )
}
