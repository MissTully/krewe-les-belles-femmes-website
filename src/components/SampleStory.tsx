import type { SampleStory as Story } from "../sampleCopy";
import { sampleNotice } from "../sampleCopy";

type Props = {
  story: Story;
};

/** First-person sample block. The yellow notice must stay until the board replaces the text. */
export default function SampleStory({ story }: Props) {
  return (
    <article className="sample-story">
      <p className="sample-flag">{sampleNotice}</p>
      <p className="eyebrow">{story.speaker}</p>
      <h2>{story.title}</h2>
      {story.body.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </article>
  );
}
