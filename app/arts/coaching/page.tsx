import SubPageLayout from "@/components/SubPageLayout";

export const metadata = { title: "Music Coaching | UYGW Education" };

export default function MusicCoachingPage() {
  return (
    <SubPageLayout
      eyebrow="Music"
      heading="You don't have to be the next Mozart."
      intro={[
        "Maybe you just want to play. Maybe you've always wanted to learn. Maybe your child has been tapping rhythms on every surface in the house and you think it's time they had an actual instrument. 😄",
        "That's reason enough. We help students learn piano, guitar, ukulele, drums and more, at a pace that challenges them without taking away the enjoyment.",
      ]}
      tagline="Learn. Practise. Play. Enjoy."
      backHref="/courses/3"
      backLabel="Back to Music"
      blocks={[
        {
          type: "cards",
          title: "What you can learn",
          cols: 4,
          items: [
            { title: "Piano", desc: "From first notes to advanced repertoire." },
            { title: "Guitar", desc: "Acoustic and electric, all skill levels." },
            { title: "Ukulele", desc: "A fun, accessible entry into music." },
            { title: "Drums", desc: "Rhythm, timing and technique." },
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
