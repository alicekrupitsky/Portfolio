"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  category?: string;
  color?: string;
  location?: string;
  bullets?: string[];
  link?: {
    url: string;
    text: string;
  };
  mediaWindow?: {
    src: string;
    alt: string;
    label: string;
  };
  mediaPlacement?: "wrap" | "bottom";
}

interface Timeline3DProps {
  events: TimelineEvent[];
  showImages?: boolean;
  className?: string;
}

export function Timeline3D({
  events,
  showImages = false,
  className,
}: Timeline3DProps) {
  return (
    <section className={cn("experienceTimeline", className)}>
      <div className="experienceTimelineRail" aria-hidden="true" />

      <div className="experienceTimelineList">
        {events.map((event, index) => (
          <motion.article
            key={event.id}
            className={cn(
              "experienceTimelineItem",
              index % 2 === 0 ? "is-left" : "is-right"
            )}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="experienceTimelineNodeWrap">
              <div
                className={cn(
                  "experienceTimelineDateBadge",
                  index % 2 === 0 ? "is-right" : "is-left"
                )}
              >
                {event.date}
              </div>
              <div
                className="experienceTimelineNode"
                style={{ background: event.color ?? "var(--green)" }}
                aria-hidden="true"
              />
            </div>

            <div className="experienceTimelineCardStack">
              <div className="experienceTimelineCard">
                <div className="experienceTimelineCardTop">
                  <div className="windowTopLeft experienceTimelineTabLabel">
                    <div className="dots" style={{ paddingTop: 0 }}>
                      <div className="dot red" />
                      <div className="dot yellow" />
                      <div className="dot green" />
                    </div>
                    <strong>{event.title}</strong>
                  </div>
                </div>

                <div className="experienceTimelineCardBody">
                  <div className="experienceTimelineCardHeader">
                    <div>
                      {event.location ? (
                        <div className="experienceTimelineMeta">{event.location}</div>
                      ) : null}
                    </div>
                    {showImages && event.image ? (
                      <div
                        className="experienceTimelineThumb"
                        style={{ backgroundImage: `url("${event.image}")` }}
                        aria-hidden="true"
                      />
                    ) : null}
                  </div>

                  {event.mediaWindow &&
                  event.id !== "csu" &&
                  event.mediaPlacement !== "bottom" ? (
                    <div
                      className={cn(
                        "experienceTimelineMediaWrap",
                        "is-wrap",
                        event.id === "solv" && "is-solv",
                        event.id === "golden-egg" && "is-golden-egg"
                      )}
                    >
                      <div
                        className="experienceTimelineMediaWindow"
                        aria-label={event.mediaWindow.label}
                      >
                        <div className="experienceTimelineMediaTop">
                          <div className="windowTopLeft experienceTimelineTabLabel">
                            <div className="dots" style={{ paddingTop: 0 }}>
                              <div className="dot red" />
                              <div className="dot yellow" />
                              <div className="dot green" />
                            </div>
                            <strong>{event.mediaWindow.label}</strong>
                          </div>
                        </div>
                        <div className="experienceTimelineMediaBody">
                          <img
                            src={event.mediaWindow.src}
                            alt={event.mediaWindow.alt}
                            className="experienceTimelineMediaImage"
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <p className="experienceTimelineDescription">{event.description}</p>

                  {event.bullets?.length ? (
                    <ul className="experienceTimelineBullets">
                      {event.bullets.map((bullet, bulletIndex) => {
                        if (
                          event.mediaWindow &&
                          event.id === "csu" &&
                          bulletIndex === 0
                        ) {
                          return (
                            <li key={bullet} className="experienceTimelineBulletWithMedia">
                              <span className="experienceTimelineBulletLead">
                                Lead event promotion across Instagram,
                              </span>
                              <div className="experienceTimelineMediaWrap">
                                <div
                                  className="experienceTimelineMediaWindow"
                                  aria-label={event.mediaWindow.label}
                                >
                                  <div className="experienceTimelineMediaTop">
                                    <div className="windowTopLeft experienceTimelineTabLabel">
                                      <div className="dots" style={{ paddingTop: 0 }}>
                                        <div className="dot red" />
                                        <div className="dot yellow" />
                                        <div className="dot green" />
                                      </div>
                                      <strong>{event.mediaWindow.label}</strong>
                                    </div>
                                  </div>
                                  <div className="experienceTimelineMediaBody">
                                    <img
                                      src={event.mediaWindow.src}
                                      alt={event.mediaWindow.alt}
                                      className="experienceTimelineMediaImage"
                                    />
                                  </div>
                                </div>
                              </div>
                              <span>announcements, and weekly timelines.</span>
                            </li>
                          );
                        }

                        const instagramMatch = /instagram/i;
                        if (instagramMatch.test(bullet)) {
                          const parts = bullet.split(/(instagram)/gi);
                          return (
                            <li key={bullet}>
                              {parts.map((part, index) =>
                                instagramMatch.test(part) ? (
                                  <a
                                    key={index}
                                    href="https://www.instagram.com/ufcsu/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inlineLink"
                                  >
                                    {part}
                                  </a>
                                ) : (
                                  part
                                )
                              )}
                            </li>
                          );
                        }
                        return <li key={bullet}>{bullet}</li>;
                      })}
                    </ul>
                  ) : null}

                  {event.link ? (
                    <a
                      href={event.link.url}
                      target={event.link.url.startsWith("http") ? "_blank" : undefined}
                      rel={
                        event.link.url.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="experienceTimelineLink"
                    >
                      {event.link.text}
                    </a>
                  ) : null}

                  {event.mediaWindow &&
                  event.id !== "csu" &&
                  event.mediaPlacement === "bottom" ? (
                    <div
                      className={cn(
                        "experienceTimelineMediaWrap",
                        "is-bottom",
                        event.id === "mathnasium" && "is-mathnasium"
                      )}
                    >
                      <div
                        className="experienceTimelineMediaWindow"
                        aria-label={event.mediaWindow.label}
                      >
                        <div className="experienceTimelineMediaTop">
                          <div className="windowTopLeft experienceTimelineTabLabel">
                            <div className="dots" style={{ paddingTop: 0 }}>
                              <div className="dot red" />
                              <div className="dot yellow" />
                              <div className="dot green" />
                            </div>
                            <strong>{event.mediaWindow.label}</strong>
                          </div>
                        </div>
                        <div className="experienceTimelineMediaBody">
                          <img
                            src={event.mediaWindow.src}
                            alt={event.mediaWindow.alt}
                            className="experienceTimelineMediaImage"
                          />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Timeline3D;
