import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "Academic Coaching | UYGW Education" };

export default function AcademicCoachingPage() {
  return (
    <SubPageLayout
      eyebrow="Academic Coaching"
      heading="The right support for where they are now."
      intro={[
        "The right support can change everything. Not because someone suddenly becomes a different student, but because they finally understand.",
        "They know what they're doing. They know where they're going. And perhaps most importantly, they stop thinking: \"I'm just not good at this.\"",
      ]}
      backHref="/courses/1"
      backLabel="Back to Academics"
      blocks={[
        {
          type: "cards",
          title: "Support for every stage",
          intro: "Our coaches work with students from primary school through to senior secondary, across subjects, curricula and learning needs.",
          items: [
            { title: "Primary", desc: "Foundations, literacy, numeracy, confidence with schoolwork, extension." },
            { title: "Years 7–10", desc: "Subject understanding, assessment skills, staying on track, extension." },
            { title: "Years 11–12", desc: "Senior subjects, HSC preparation, assessment and examination skills." },
          ],
        },
        {
          type: "cards",
          title: "Choose the format that suits you",
          cols: 4,
          items: [
            { title: "1:1 Coaching" },
            { title: "Small Group Coaching" },
            { title: "Online" },
            { title: "Face-to-Face" },
          ],
        },
        {
          type: "text",
          title: "What happens in a session",
          paragraphs: [
            "The coach identifies the priorities and direction for the sessions. Students learn, practise and apply. As they progress, the approach evolves.",
          ],
          closing: "The format may change. The care doesn't.",
        },
      ]}
      related={[
        { label: "Subjects", href: "/academics/subjects" },
        { label: "Curriculum Support", href: "/academics/curriculum" },
        { label: "Exam & Test Preparation", href: "/academics/exams" },
        { label: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
