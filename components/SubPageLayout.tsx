import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------- Content block types ---------- */
export type Block =
  | {
      type: "cards";
      title?: string;
      intro?: string;
      cols?: 2 | 3 | 4;
      items: { title: string; desc?: string; href?: string }[];
    }
  | {
      type: "groups";
      title?: string;
      intro?: string;
      items: { title: string; list: string[] }[];
    }
  | {
      type: "steps";
      title?: string;
      intro?: string;
      items: { title: string; desc: string }[];
    }
  | {
      type: "pills";
      title?: string;
      items: string[];
    }
  | {
      type: "text";
      title?: string;
      paragraphs: string[];
      closing?: string;
    };

export type SubPageProps = {
  eyebrow: string;
  heading: string;
  intro?: string[];
  tagline?: string;
  backHref: string;
  backLabel: string;
  blocks: Block[];
  ctaHeading?: string;
  ctaText?: string;
  related?: { label: string; href: string }[];
};

/* ---------- Shared styles ---------- */
const BORDER = "rgba(46,139,87,0.15)";
const primaryBtn = {
  background: "linear-gradient(135deg, var(--forest-light), var(--forest))",
  boxShadow: "0 4px 20px rgba(46,139,87,0.35)",
};
const colClass = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

/* ---------- Small pieces ---------- */
function SectionHead({ title, intro }: { title?: string; intro?: string }) {
  if (!title && !intro) return null;
  return (
    <div className="text-center max-w-2xl mx-auto mb-10">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: "var(--text)" }}>
          {title}
        </h2>
      )}
      {intro && (
        <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
          {intro}
        </p>
      )}
    </div>
  );
}

function InfoCard({ title, desc, href }: { title: string; desc?: string; href?: string }) {
  const inner = (
    <div className="glass rounded-2xl border p-6 h-full" style={{ borderColor: BORDER }}>
      <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>
        {title}
      </h3>
      {desc && (
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {desc}
        </p>
      )}
      {href && (
        <span className="inline-block mt-4 text-xs font-semibold" style={{ color: "var(--forest-light)" }}>
          Learn more →
        </span>
      )}
    </div>
  );
  return href ? (
    <Link href={href} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

/* ---------- Block renderer ---------- */
function RenderBlock({ block }: { block: Block }) {
  if (block.type === "cards") {
    return (
      <section className="max-w-5xl mx-auto mb-20">
        <SectionHead title={block.title} intro={block.intro} />
        <div className={`grid gap-6 ${colClass[block.cols ?? 3]}`}>
          {block.items.map((it) => (
            <InfoCard key={it.title} title={it.title} desc={it.desc} href={it.href} />
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "groups") {
    return (
      <section className="max-w-5xl mx-auto mb-20">
        <SectionHead title={block.title} intro={block.intro} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {block.items.map((g) => (
            <div key={g.title} className="glass rounded-2xl border p-6" style={{ borderColor: BORDER }}>
              <h3 className="font-bold mb-4" style={{ color: "var(--forest-light)" }}>
                {g.title}
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text)" }}>
                {g.list.map((li) => (
                  <li key={li} className="flex gap-2">
                    <span style={{ color: "var(--gold)" }}>•</span>
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (block.type === "steps") {
    return (
      <section className="max-w-3xl mx-auto mb-20">
        <SectionHead title={block.title} intro={block.intro} />
        <ol className="space-y-5">
          {block.items.map((s, i) => (
            <li
              key={s.title}
              className="glass rounded-2xl border p-6 flex gap-5 items-start"
              style={{ borderColor: BORDER }}
            >
              <span
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={primaryBtn}
              >
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold mb-1" style={{ color: "var(--text)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (block.type === "pills") {
    return (
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <SectionHead title={block.title} />
        <div className="flex flex-wrap justify-center gap-3">
          {block.items.map((p) => (
            <span
              key={p}
              className="px-4 py-2 rounded-full border text-sm font-semibold"
              style={{ color: "var(--forest-light)", background: "rgba(46,139,87,0.08)", borderColor: "rgba(46,139,87,0.25)" }}
            >
              {p}
            </span>
          ))}
        </div>
      </section>
    );
  }

  // text
  return (
    <section className="max-w-3xl mx-auto mb-20 text-center">
      <SectionHead title={block.title} />
      <div className="space-y-4">
        {block.paragraphs.map((p) => (
          <p key={p} className="text-base md:text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            {p}
          </p>
        ))}
      </div>
      {block.closing && (
        <p className="mt-6 text-lg md:text-xl font-bold" style={{ color: "var(--forest-light)" }}>
          {block.closing}
        </p>
      )}
    </section>
  );
}

/* ---------- Page layout ---------- */
export default function SubPageLayout({
  eyebrow,
  heading,
  intro,
  tagline,
  backHref,
  backLabel,
  blocks,
  ctaHeading = "Not sure where to start?",
  ctaText = "That's okay. You don't have to have it all figured out. Tell us a little about what you're looking for, and we'll work out the next step together.",
  related,
}: SubPageProps) {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-24 pb-24 px-6 md:px-16">
        <Link href={backHref} className="inline-block text-sm mb-8" style={{ color: "var(--muted)" }}>
          {"← " + backLabel}
        </Link>

        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto mb-24">
          <span
            className="block text-xs font-bold tracking-[4px] uppercase mb-3"
            style={{ color: "var(--forest-light)" }}
          >
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5" style={{ color: "var(--text)" }}>
            {heading}
          </h1>
          {intro?.map((p) => (
            <p key={p} className="mb-3 leading-relaxed" style={{ color: "var(--muted)" }}>
              {p}
            </p>
          ))}
          {tagline && (
            <p className="mt-6 font-bold" style={{ color: "var(--forest-light)" }}>
              {tagline}
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/#enquiry" className="px-6 py-3 rounded-xl font-semibold text-sm text-white" style={primaryBtn}>
              Start a Conversation
            </Link>
          </div>
        </section>

        {/* Content blocks */}
        {blocks.map((b, i) => (
          <RenderBlock key={i} block={b} />
        ))}

        {/* Bottom CTA */}
        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "var(--text)" }}>
            {ctaHeading}
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
            {ctaText}
          </p>
          <Link
            href="/#enquiry"
            className="inline-block px-8 py-3 rounded-xl font-semibold text-sm text-white"
            style={primaryBtn}
          >
            Start a Conversation
          </Link>
        </section>

        {/* Related pages */}
        {related && related.length > 0 && (
          <section className="max-w-3xl mx-auto mt-20 text-center">
            <p className="text-xs font-bold tracking-[3px] uppercase mb-4" style={{ color: "var(--muted)" }}>
              Explore more
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="px-4 py-2 rounded-full border text-sm font-semibold"
                  style={{ color: "var(--text)", borderColor: "rgba(46,139,87,0.3)" }}
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
