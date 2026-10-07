import Link from "next/link";
import { notFound } from "next/navigation";
import { courses } from "@/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const courseId = Number(params.slug);
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  // Special-case pages for the "What We Offer" categories
  if (course.title === "Academics") return <AcademicsPage />;
  if (course.title === "Sports") return <SportsPage />;
  if (course.title === "Arts") return <ArtsPage />;
  if (course.title === "Tech") return <TechPage />;
  if (course.title === "Languages") return <LanguagesPage />;

  notFound();
}
/* ---------- Shared layout helper ---------- */
function CategoryPageShell({
  eyebrow,
  heading,
  subtext,
  primaryHref,
  primaryLabel,
  children,
}: {
  eyebrow: string;
  heading: string;
  subtext: string;
  primaryHref: string;
  primaryLabel: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-24 pb-24 px-6 md:px-16">
        <Link href="/" className="inline-block text-sm mb-8" style={{ color: "var(--muted)" }}>
          ← Back
        </Link>

        <section className="text-center max-w-3xl mx-auto mb-24">
          <span className="block text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: "var(--forest-light)" }}>
            {eyebrow}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
            {heading}
          </h1>
          <p className="mb-8" style={{ color: "var(--muted)" }}>{subtext}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={primaryHref}
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white"
              style={{ background: "linear-gradient(135deg, var(--forest-light), var(--forest))", boxShadow: "0 4px 20px rgba(46,139,87,0.35)" }}
            >
              {primaryLabel}
            </Link>
            <Link
              href="/#enquiry"
              className="px-6 py-3 rounded-xl font-semibold text-sm border"
              style={{ color: "var(--text)", borderColor: "rgba(46,139,87,0.3)" }}
            >
              Start a Conversation
            </Link>
          </div>
        </section>

        {children}

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>
            Ready to get started?
          </h2>
          <Link
            href="/#enquiry"
            className="inline-block px-8 py-3 rounded-xl font-semibold text-sm text-white"
            style={{ background: "linear-gradient(135deg, var(--forest-light), var(--forest))", boxShadow: "0 4px 20px rgba(46,139,87,0.35)" }}
          >
            Start a Conversation
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ---------- Card grid helper ---------- */
function CardGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <section className="max-w-5xl mx-auto mb-24">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((s) => (
          <div key={s.title} className="glass rounded-2xl border p-6" style={{ borderColor: "rgba(46,139,87,0.15)" }}>
            <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>{s.title}</h3>
            <p className="text-sm" style={{ color: "var(--muted)" }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Academics ---------- */
function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-24 pb-24 px-6 md:px-16">
        <Link href="/" className="inline-block text-sm mb-8" style={{ color: "var(--muted)" }}>
          ← Back
        </Link>

        <section className="text-center max-w-3xl mx-auto mb-24">
          <span className="block text-xs font-bold tracking-[4px] uppercase mb-3" style={{ color: "var(--forest-light)" }}>
            Academics
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
            Helping students move forward with clarity and purpose.
          </h1>
          <p className="mb-8" style={{ color: "var(--muted)" }}>
            K–12 academic coaching across Australian, US, IB, British, Indian and other international curricula.
            <br />
            1:1 &amp; Small Group | Online &amp; Face-to-Face
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#enquiry"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white"
              style={{ background: "linear-gradient(135deg, var(--forest-light), var(--forest))", boxShadow: "0 4px 20px rgba(46,139,87,0.35)" }}
            >
              Explore Academic Coaching
            </Link>
            <Link
              href="/#enquiry"
              className="px-6 py-3 rounded-xl font-semibold text-sm border"
              style={{ color: "var(--text)", borderColor: "rgba(46,139,87,0.3)" }}
            >
              Start a Conversation
            </Link>
          </div>
        </section>

        <section className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>
            Every student has a different starting point.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg font-semibold" style={{ color: "var(--forest-light)" }}>
            <span>Catch up.</span>
            <span>Keep up.</span>
            <span>Get ahead.</span>
            <span>Prepare.</span>
          </div>
        </section>

        <CardGrid
          items={[
            { title: "Primary", desc: "Building strong foundations." },
            { title: "Years 7–10", desc: "Strengthening skills and developing independence." },
            { title: "Years 11–12", desc: "Senior subjects, assessment and examination preparation." },
          ]}
        />
        <div className="text-center -mt-16 mb-24">
          <Link href="/#enquiry" className="text-sm font-semibold" style={{ color: "var(--forest-light)" }}>
            Explore Academic Coaching →
          </Link>
        </div>

        <section className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>
            Subjects
          </h2>
          <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm" style={{ color: "var(--muted)" }}>
            {["English", "Mathematics", "Science", "Business", "Economics", "Legal Studies", "Engineering Studies", "Humanities", "Specialist Subjects"]
              .map((s, i, arr) => (
                <span key={s}>
                  {s}{i < arr.length - 1 ? " |" : ""}
                </span>
              ))}
          </p>
          <Link href="/#enquiry" className="inline-block mt-6 text-sm font-semibold" style={{ color: "var(--forest-light)" }}>
            View Subjects →
          </Link>
        </section>

        <section className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>
            Learning across curricula
          </h2>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Australian | US | IB | British | Indian | International &amp; More
          </p>
          <Link href="/#enquiry" className="inline-block mt-6 text-sm font-semibold" style={{ color: "var(--forest-light)" }}>
            Explore Curriculum Support →
          </Link>
        </section>

        <section className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>
            Exams &amp; Assessments
          </h2>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            HSC | UCAT | HAST | SAT | School Entrance | Scholarship Assessments | IELTS | PTE
          </p>
          <Link href="/#enquiry" className="inline-block mt-6 text-sm font-semibold" style={{ color: "var(--forest-light)" }}>
            Explore Exam &amp; Test Preparation →
          </Link>
        </section>

        <section className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>
            Understand. Unlock. Unleash.
          </h2>
          <Link href="/#enquiry" className="text-sm font-semibold" style={{ color: "var(--forest-light)" }}>
            How It Works →
          </Link>
        </section>

        <section className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: "var(--text)" }}>
            Let&apos;s start with where your child is now.
          </h2>
          <Link
            href="/#enquiry"
            className="inline-block px-8 py-3 rounded-xl font-semibold text-sm text-white"
            style={{ background: "linear-gradient(135deg, var(--forest-light), var(--forest))", boxShadow: "0 4px 20px rgba(46,139,87,0.35)" }}
          >
            Start a Conversation
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

/* ---------- Sports ---------- */
function SportsPage() {
  return (
    <CategoryPageShell
      eyebrow="Sports"
      heading="Coaching and skill development across selected sports."
      subtext="1:1 & Small Group | Online & Face-to-Face"
      primaryHref="/#enquiry"
      primaryLabel="Explore Sports Coaching"
    >
      <CardGrid
        items={[
          { title: "Cricket", desc: "Technique, match awareness and skill progression." },
          { title: "Football / Soccer", desc: "Foundational skills through to advanced play." },
          { title: "Other Sports", desc: "Additional sports coaching available on request." },
        ]}
      />
    </CategoryPageShell>
  );
}

/* ---------- Arts (Music) ---------- */
function ArtsPage() {
  return (
    <CategoryPageShell
      eyebrow="Arts"
      heading="Instrumental learning and musical development."
      subtext="1:1 & Small Group | Online & Face-to-Face"
      primaryHref="/#enquiry"
      primaryLabel="Explore Music Coaching"
    >
      <CardGrid
        items={[
          { title: "Piano", desc: "From first notes to advanced repertoire." },
          { title: "Guitar", desc: "Acoustic and electric, all skill levels." },
          { title: "Ukulele", desc: "A fun, accessible entry into music." },
          { title: "Drums", desc: "Rhythm, timing and technique." },
        ]}
      />
    </CategoryPageShell>
  );
}

/* ---------- Tech (Technology) ---------- */
function TechPage() {
  return (
    <CategoryPageShell
      eyebrow="Technology"
      heading="Technology and digital skills for today's learners."
      subtext="1:1 & Small Group | Online & Face-to-Face"
      primaryHref="/#enquiry"
      primaryLabel="Explore Technology Programmes"
    >
      <CardGrid
        items={[
          { title: "Coding & Programming", desc: "Foundational to advanced programming skills." },
          { title: "Digital Literacy", desc: "Practical skills for everyday technology use." },
          { title: "Age-Appropriate Tracks", desc: "Programmes tailored by age and experience." },
        ]}
      />
    </CategoryPageShell>
  );
}

/* ---------- Languages ---------- */
function LanguagesPage() {
  return (
    <CategoryPageShell
      eyebrow="Languages"
      heading="English language and language proficiency support."
      subtext="1:1 & Small Group | Online & Face-to-Face"
      primaryHref="/#enquiry"
      primaryLabel="Explore Language Programmes"
    >
      <CardGrid
        items={[
          { title: "English Language", desc: "Building fluency, comprehension and confidence." },
          { title: "IELTS", desc: "Preparation pathway for the IELTS assessment." },
          { title: "PTE", desc: "Preparation pathway for the PTE assessment." },
          { title: "Other Languages", desc: "Additional language support available on request." },
        ]}
      />
    </CategoryPageShell>
  );
}