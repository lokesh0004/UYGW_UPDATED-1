import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "Language Programmes | UYGW Education" };

export default function LanguageProgrammesPage() {
  return (
    <SubPageLayout
      eyebrow="Languages"
      heading="The right words can open doors."
      intro={[
        "Whether you're learning a new language for school, travel, work, connection or simply because you've always wanted to, we believe language learning should be practical, engaging and enjoyable.",
        "At UYGW, we offer language learning across a range of languages, including German, French, Spanish and English, along with IELTS and PTE preparation for learners working towards study, migration or professional goals.",
      ]}
      backHref="/courses/5"
      backLabel="Back to Languages"
      blocks={[
        { type: "pills", title: "Languages", items: ["German", "French", "Spanish", "English"] },
        {
          type: "cards",
          title: "Programmes",
          cols: 4,
          items: [
            { title: "English Language", desc: "Building fluency, comprehension and confidence." },
            { title: "IELTS", desc: "Preparation pathway for the IELTS assessment." },
            { title: "PTE", desc: "Preparation pathway for the PTE assessment." },
            { title: "Other Languages", desc: "Additional language support available on request." },
          ],
        },
      ]}
      ctaHeading="Looking for the right language support?"
      ctaText="Let's talk."
    />
  );
}
