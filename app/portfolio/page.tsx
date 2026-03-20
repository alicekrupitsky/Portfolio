'use client';

import PageShell from "@/components/page-shell";
import { useState } from "react";

type PortfolioImage = {
  src: string;
  alt: string;
  caption: string;
};

type PortfolioSection = {
  title: string;
  handle: string;
  summary: string;
  role: string;
  images: PortfolioImage[];
};

const sections: PortfolioSection[] = [
  {
    title: "Computing Student Union",
    handle: "@ufcsu",
    summary:
      "Social graphics and event content built to promote meetings, spotlight community activity, and keep the organization visually consistent across posts.",
    role: "Content Design + Social Media Graphics",
    images: [
      {
        src: "/CSUGBMone.png",
        alt: "Computing Student Union general body meeting graphic",
        caption: "General Body Meeting",
      },
      {
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
        alt: "Students collaborating for a CSU-style community post",
        caption: "Community Highlight",
      },
      {
        src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
        alt: "Laptop and event materials for a CSU event graphic",
        caption: "Event Promotion",
      },
    ],
  },
  {
    title: "Golden Egg Cafe",
    handle: "@golden.eggcafe",
    summary:
      "Promotional content focused on menu storytelling, seasonal campaigns, and bright lifestyle imagery that fits the cafe's casual, friendly brand.",
    role: "Content Strategy + Promotional Design",
    images: [
      {
        src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&q=80&w=1200",
        alt: "Breakfast plate for Golden Egg Cafe menu feature",
        caption: "Menu Feature",
      },
      {
        src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1200",
        alt: "Brunch photo for Golden Egg Cafe special promotion",
        caption: "Brunch Special",
      },
      {
        src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200",
        alt: "Cafe interior and food for promotional content",
        caption: "Cafe Campaign",
      },
    ],
  },
];

export default function PortfolioPage() {
  const [activeImage, setActiveImage] = useState<PortfolioImage | null>(null);

  const closeLightbox = () => setActiveImage(null);

  return (
    <>
      <PageShell currentPath="/portfolio">
        <section className="window">
          <div className="windowTop">
            <div className="windowTopLeft">
              <div className="dots">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <strong>Content Portfolio</strong>
            </div>
          </div>

          <div className="windowBody">
            <p>
              A simple gallery of the brand work I have created for Computing
              Student Union and Golden Egg Cafe.
            </p>

            <div className="cardList" style={{ marginTop: "18px" }}>
              {sections.map((section) => (
                <article key={section.title} className="miniCard">
                  <div className="brandHeader" style={{ marginBottom: "10px" }}>
                    <div className="brandLabel">{section.title}</div>
                    <div className="brandHandle">{section.handle}</div>
                  </div>
                  <div className="meta">{section.role}</div>
                  <p style={{ marginBottom: "18px" }}>{section.summary}</p>

                  <div className="postGrid">
                    {section.images.map((image) => (
                      <button
                        key={image.src}
                        type="button"
                        className="postCard"
                        onClick={() => setActiveImage(image)}
                        style={{
                          padding: 0,
                          font: "inherit",
                          color: "inherit",
                          textAlign: "left",
                        }}
                      >
                        <div className="postImgWrap">
                          <img className="postImg" src={image.src} alt={image.alt} />
                        </div>
                        <div className="postMeta">{image.caption}</div>
                      </button>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>

      {activeImage ? (
        <div
          className="lightbox open"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              closeLightbox();
            }
          }}
        >
          <div className="lightboxInner">
            <button type="button" className="lightboxClose" onClick={closeLightbox}>
              x
            </button>
            <img className="lightboxImg" src={activeImage.src} alt={activeImage.alt} />
            <div className="lightboxDate">{activeImage.caption}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
