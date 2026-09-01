/**
 * Hypothetical copy for the board.
 * None of these speakers are real members. Do not treat a name, year, or gift
 * in this file as krewe record. Replace each block with a sister's own words
 * and a signed photo permission before removing the sample label.
 */

export const sampleNotice =
  "Sample voice for the board. Not an official memory. Replace with a sister's words.";

export type SampleStory = {
  id: string;
  page: "overture" | "sisterhood" | "benefit";
  kind: "memory" | "room" | "giving";
  speaker: string;
  title: string;
  body: string[];
};

export const sampleStories: SampleStory[] = [
  {
    id: "first-bayshore",
    page: "overture",
    kind: "memory",
    speaker: "A founding Belle, speaking as if it were 2002",
    title: "The windmill was smaller than the argument",
    body: [
      "We did not have a history yet. We had a rented trailer, a red door painted on plywood, and seven women who had promised their husbands they would be home before the fireworks.",
      "Bayshore does not care if you are new. The crowd wants beads and a smile you can see from the median. I learned that before I learned anyone's last name.",
      "Someone had glued feathers to a hat with craft glue. By Kennedy the hat was a suggestion. We laughed so hard a stranger handed up a bottle of water and told us to keep going. That was the first gift I remember.",
    ],
  },
  {
    id: "dressing-mirror",
    page: "sisterhood",
    kind: "room",
    speaker: "A Belle in her twelfth season, hypothetical",
    title: "The room is the costume you cannot buy",
    body: [
      "I joined for the boots. I stayed because a woman I barely knew sat on a hotel carpet and laced mine when my hands were shaking.",
      "Book club is not a performance. It is nine of us, a grocery-store cake, and a novel none of us finished. We talk about the daughter in college and the shift we cannot trade. Then we talk about the book for eleven minutes.",
      "If you need a chorus line, this is the wrong house. If you need a sister who will tell you the boa is crooked and that you still look like yourself, come sit down.",
    ],
  },
  {
    id: "beau-at-the-door",
    page: "sisterhood",
    kind: "room",
    speaker: "A Beau, hypothetical",
    title: "I carry the water. She carries the year.",
    body: [
      "They did not ask me to become a Belle. They asked me to show up on time with the extra gloves and not explain the float to men who already know.",
      "My job on parade day is simple. Watch the step. Hold the bag. Get out of the photograph unless she pulls me in. The krewe is hers. I am lucky to be in the room.",
    ],
  },
  {
    id: "first-ride",
    page: "overture",
    kind: "memory",
    speaker: "A first-year rider, hypothetical",
    title: "Nobody warns you about the standing",
    body: [
      "I thought the hard part would be the corset. The hard part was the hour before we moved, smiling at a street that had not started yet.",
      "A longtime Belle put her hand on the small of my back and said, look at one child at a time. Do not throw to the hands that already have too much. I still hear her when the route turns.",
      "I missed a shift at the hospital for that Saturday. I would miss it again. I would also tell a new woman to ask her manager in October, not the week of.",
    ],
  },
  {
    id: "spring-saturday",
    page: "benefit",
    kind: "giving",
    speaker: "A service chair, speaking in sample voice",
    title: "The float is loud. The work is not.",
    body: [
      "People photograph the windmill. That same winter we sat in a plain room at The Spring and packed bags for women who were leaving in a hurry. No feathers. No soundtrack.",
      "We do not print a dollar amount here until the treasurer and the partner both say the sentence is true. What I will say is this: the krewe measures the year by whether those bags left full.",
      "If you join us for the beads alone, you will still be asked to show up for a Saturday that does not sparkle. That is the point of Beauty with purpose.",
    ],
  },
];

export const samplePullQuotes = [
  {
    line: "Bayshore does not care if you are new.",
    source: "Sample founder memory",
  },
  {
    line: "The room is the costume you cannot buy.",
    source: "Sample sisterhood note",
  },
  {
    line: "The float is loud. The work is not.",
    source: "Sample benefit note",
  },
] as const;
