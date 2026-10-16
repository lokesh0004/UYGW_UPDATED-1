import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "Curriculum Support | UYGW Education" };

export default function CurriculumSupportPage() {
  return (
    <SubPageLayout
      eyebrow="Curriculum Support"
      heading="Different curriculum. The right coach."
      intro={[
        "Different curriculum. Same goal: good learning.",
        "A student shouldn't have to explain their entire curriculum to their coach. That's our job.",
      ]}
      backHref="/courses/1"
      backLabel="Back to Academics"
      blocks={[
        {
          type: "groups",
          items: [
            { title: "Australian", list: ["Australian Curriculum", "NSW", "HSC", "VCE", "QCE", "WACE", "SACE", "and more"] },
            { title: "US", list: ["Common Core", "NGSS", "State-based curricula", "and more"] },
            { title: "IB", list: ["PYP", "MYP", "Diploma Programme", "Career-related Programme"] },
            { title: "British", list: ["Key Stages", "GCSE", "IGCSE", "A Levels"] },
            { title: "Indian", list: ["CBSE", "ICSE", "ISC"] },
            { title: "International", list: ["Singapore", "Canadian", "New Zealand", "Other international and school-specific programmes"] },
          ],
        },
        {
          type: "text",
          paragraphs: [
            "Our coaches bring expertise across different educational systems, allowing us to connect students with someone who understands the curriculum they are studying.",
          ],
          closing: "Wherever they're learning, the right coach matters.",
        },
      ]}
      related={[
        { label: "Academic Coaching", href: "/academics/coaching" },
        { label: "Subjects", href: "/academics/subjects" },
        { label: "Exam & Test Preparation", href: "/academics/exams" },
        { label: "How It Works", href: "/how-it-works" },
      ]}
    />
  );
}
