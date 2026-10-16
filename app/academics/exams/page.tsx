import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "Exam & Test Preparation | UYGW Education" };

export default function ExamPreparationPage() {
  return (
    <SubPageLayout
      eyebrow="Exam & Test Preparation"
      heading="Preparation with purpose."
      intro={[
        "Don't leave everything until the week before.",
        "Good preparation starts early. We work out what the assessment requires, where the student is now and what needs to improve. Then we practise. And practise again.",
      ]}
      tagline="Preparation with purpose, not panic."
      backHref="/courses/1"
      backLabel="Back to Academics"
      blocks={[
        {
          type: "cards",
          cols: 4,
          items: [
            { title: "HSC", desc: "Senior secondary preparation for the NSW Higher School Certificate." },
            { title: "UCAT", desc: "Preparation for the University Clinical Aptitude Test." },
            { title: "HAST", desc: "Preparation for the Higher Ability Selective Test." },
            { title: "SAT", desc: "Preparation for the SAT college admissions test." },
            { title: "School Entrance", desc: "Getting ready for school entrance assessments." },
            { title: "Scholarship Assessments", desc: "Preparing for scholarship assessments." },
            { title: "IELTS", desc: "Language proficiency pathway. Full details are on our Languages page.", href: "/languages/programmes" },
            { title: "PTE", desc: "Language proficiency pathway. Full details are on our Languages page.", href: "/languages/programmes" },
          ],
        },
      ]}
      related={[
        { label: "Academic Coaching", href: "/academics/coaching" },
        { label: "Subjects", href: "/academics/subjects" },
        { label: "Curriculum Support", href: "/academics/curriculum" },
        { label: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
