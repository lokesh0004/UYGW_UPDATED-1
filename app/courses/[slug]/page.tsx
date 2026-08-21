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

  const discount = course.original
    ? Math.round(((course.original - course.price) / course.original) * 100)
    : null;

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--void)", minHeight: "100vh" }} className="pt-24 pb-20 px-6 md:px-16">
        <Link href="/" className="inline-block text-sm mb-8" style={{ color: "var(--muted)" }}>
          ← Back to Courses
        </Link>

        <div
          className={`rounded-3xl overflow-hidden border glass mb-10 bg-gradient-to-br ${course.grad}`}
          style={{ borderColor: "rgba(46,139,87,0.15)" }}
        >
          <div className="p-10 md:p-16 flex flex-col items-center text-center relative">
            {course.badge && (
              <span className={`absolute top-5 left-5 ${course.badgeCls} text-white text-xs font-bold px-3 py-1 rounded-lg uppercase tracking-wider`}>
                {course.badge}
              </span>
            )}
            <span className="text-6xl mb-4">{course.emoji}</span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{course.title}</h1>
            <span className="text-sm text-white/80 uppercase tracking-wider">{course.category}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ background: course.color }}
              >
                {course.initials}
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--text)" }}>{course.instructor}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>Instructor</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 py-6 border-t border-b" style={{ borderColor: "rgba(46,139,87,0.15)" }}>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--text)" }}>{course.hours}h</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>Duration</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--text)" }}>{course.lessons}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>Lessons</p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "var(--gold)" }}>{"★".repeat(course.rating)}</p>
                <p className="text-xs" style={{ color: "var(--muted)" }}>{course.reviews.toLocaleString()} reviews</p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl border p-6 h-fit" style={{ borderColor: "rgba(46,139,87,0.15)" }}>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-3xl font-bold" style={{ color: "var(--text)" }}>
                {course.price === 0 ? "Free" : `₹${course.price}`}
              </span>
              {course.original && (
                <span className="text-sm line-through" style={{ color: "var(--muted)" }}>
                  ₹{course.original}
                </span>
              )}
            </div>
            {discount !== null && (
              <p className="text-xs font-semibold mb-6" style={{ color: "var(--forest-light)" }}>
                {discount}% off
              </p>
            )}
            <button
              className="w-full py-3 rounded-xl font-semibold text-sm text-white"
              style={{
                background: "linear-gradient(135deg, var(--forest-light), var(--forest))",
                boxShadow: "0 4px 20px rgba(46,139,87,0.35)",
              }}
            >
              Enroll Now
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}