import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "Subjects | UYGW Education" };

export default function SubjectsPage() {
  return (
    <SubPageLayout
      eyebrow="Subjects"
      heading="Whatever they're learning, there's a coach who understands it."
      intro={["We cover a broad range of K–12 subjects and senior courses."]}
      backHref="/courses/1"
      backLabel="Back to Academics"
      blocks={[
        {
          type: "groups",
          items: [
            { title: "English & Literacy", list: ["English", "Reading & Writing", "Creative Writing", "Public Speaking", "Debating"] },
            { title: "Mathematics", list: ["Primary Mathematics", "General Mathematics", "Advanced Mathematics", "Extension Mathematics"] },
            { title: "Science", list: ["Science", "Biology", "Chemistry", "Physics"] },
            { title: "Business & Humanities", list: ["Business Studies", "Economics", "Legal Studies", "Humanities"] },
            { title: "Senior & Specialist", list: ["Engineering Studies", "Other senior subjects"] },
            { title: "Additional Learning", list: ["Study skills / academic skills where relevant"] },
          ],
        },
        {
          type: "text",
          title: "Can't see the subject you're looking for?",
          paragraphs: ["Tell us what your student is studying and we'll help you find the right coach."],
        },
      ]}
      related={[
        { label: "Academic Coaching", href: "/academics/coaching" },
        { label: "Curriculum Support", href: "/academics/curriculum" },
        { label: "Exam & Test Preparation", href: "/academics/exams" },
        { label: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
