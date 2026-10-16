import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "Sports Coaching | UYGW Education" };

export default function SportsCoachingPage() {
  return (
    <SubPageLayout
      eyebrow="Sports Coaching"
      heading="Because some of the best lessons don't happen at a desk."
      intro={[
        "Sport teaches children to keep going when something doesn't work. To listen. To work with others. To make decisions under pressure. To win graciously. And to lose without giving up.",
        "Our sports coaching develops skills on the field while helping young people grow off it too.",
      ]}
      tagline="Cricket. Football. More to come."
      backHref="/courses/2"
      backLabel="Back to Sports"
      blocks={[
        {
          type: "cards",
          title: "Sports we offer",
          items: [
            { title: "Cricket", desc: "Technique, match awareness and skill progression." },
            { title: "Football / Soccer", desc: "Foundational skills through to advanced play." },
            { title: "Other Sports", desc: "Additional sports coaching available on request." },
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
        {
          type: "text",
          title: "Our coaches",
          paragraphs: ["We don't find students for coaches. We find the right coach for the student."],
        },
      ]}
    />
  );
}
