import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "Technology Programmes | UYGW Education" };

export default function TechnologyProgrammesPage() {
  return (
    <SubPageLayout
      eyebrow="Technology"
      heading="The future isn't something we should simply prepare children for."
      intro={[
        "They are already living in it. Technology is changing how we learn, work, communicate and create.",
        "We want young people to understand what's behind the screen: to question, create, build and solve problems rather than simply consume what someone else has made.",
      ]}
      tagline="Curiosity first. Skills second. Possibility always."
      backHref="/courses/4"
      backLabel="Back to Technology"
      blocks={[
        {
          type: "cards",
          title: "Technology skills and programmes",
          items: [
            { title: "Coding & Programming", desc: "Foundational to advanced programming skills." },
            { title: "Digital Literacy", desc: "Practical skills for everyday technology use." },
            { title: "Age-Appropriate Tracks", desc: "Programmes tailored by age and experience." },
          ],
        },
        {
          type: "cards",
          title: "Coaching formats",
          cols: 4,
          items: [
            { title: "1:1 Coaching" },
            { title: "Small Group Coaching" },
            { title: "Online" },
            { title: "Face-to-Face" },
          ],
        },
      ]}
    />
  );
}
