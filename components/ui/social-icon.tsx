import { Mail, Github, Linkedin } from "lucide-react";

export default function ButtonSocialIconDemo() {
  const socials = [
    {
      href: "mailto:akrupitsky@ufl.edu",
      label: "Email",
      icon: Mail,
    },
    {
      href: "https://www.linkedin.com/in/alicekrupitsky",
      label: "LinkedIn",
      icon: Linkedin,
    },
    {
      href: "https://github.com/alicekrupitsky",
      label: "GitHub",
      icon: Github,
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "272px",
        height: "64px",
        margin: "0 auto",
      }}
    >
      {socials.map(({ href, label, icon: Icon }, i) => {
        let positionStyles: React.CSSProperties = {};
        if (i === 0) positionStyles = { left: "0", top: "0" };
        if (i === 1) positionStyles = { left: "50%", top: "0", transform: "translateX(-50%)" };
        if (i === 2) positionStyles = { right: "0", top: "0" };

        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer transition-all hover:-translate-y-1"
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-text)",
              textDecoration: "none",
              border: "none",
              ...positionStyles,
            }}
          >
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
              }}
            >
              <Icon className="h-8 w-8" strokeWidth={2.25} />
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  bottom: "-2px",
                  width: "30px",
                  borderBottom: "4px solid var(--color-text)",
                }}
              />
            </span>
          </a>
        );
      })}
    </div>
  );
}
