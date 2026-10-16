import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "How It Works | UYGW Education" };

export default function HowItWorksPage() {
  return (
    <SubPageLayout
      eyebrow="How It Works"
      heading="Understand. Unlock. Unleash."
      intro={[
        "It really is quite simple.",
        "You don't need to know exactly what your child needs before you contact us. You don't need to diagnose the problem. And you certainly don't need to have a five-year academic plan.",
      ]}
      backHref="/courses/1"
      backLabel="Back to Academics"
      blocks={[
        {
          type: "steps",
          items: [
            { title: "Tell us what's happening.", desc: "What's working? What's not? What are you hoping to achieve?" },
            { title: "We listen.", desc: "We get to know the student and understand what they need." },
            { title: "We find the right fit.", desc: "The right subject. The right curriculum experience. The right coach." },
            { title: "We get to work.", desc: "Understand. Practise. Apply. Improve." },
            { title: "We keep moving.", desc: "Because what a student needs today may not be what they need six months from now." },
          ],
        },
        { type: "pills", items: ["Online", "Face-to-Face", "1:1", "Small Group"] },
        { type: "text", paragraphs: [], closing: "Simple. Human. Personal." },
      ]}
      ctaHeading="Ready to talk?"
      ctaText="Tell us a little about what you're looking for and we'll take it from there."
      related={[
        { label: "Academic Coaching", href: "/academics/coaching" },
        { label: "Subjects", href: "/academics/subjects" },
        { label: "Curriculum Support", href: "/academics/curriculum" },
        { label: "Exam & Test Preparation", href: "/academics/exams" },
      ]}
    />
  );
}
