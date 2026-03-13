import ButtonSocialIconDemo from "@/components/ui/social-icon";

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-xl overflow-hidden rounded-[18px]" style={{ border: "4px solid var(--color-text)", background: "var(--color-surface)", boxShadow: "6px 6px 0 var(--color-text)" }}>
      <div className="flex items-center gap-2.5 px-4 py-3" style={{ borderBottom: "4px solid var(--color-text)", background: "var(--color-primary-strong)", color: "var(--color-text-inverse)" }}>
        <strong>Connect.EXE</strong>
      </div>

      <div className="p-6 text-[23px] leading-relaxed tracking-[0.02em]" style={{ color: "var(--color-text)" }}>
        <div className="mb-8 mt-1 text-center text-[48px]" style={{ color: "var(--color-primary-strong)" }}>
          Want to work together? <br />
          Let&apos;s chat!
        </div>

        <div className="mt-6 flex justify-center">
          <ButtonSocialIconDemo />
        </div>
      </div>
    </section>
  );
}
