import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import SampleStory from "../components/SampleStory";
import { art, memoryCall, paradeWeekend } from "../content";
import { sampleStories } from "../sampleCopy";

export default function Heritage() {
  const memories = sampleStories.filter((story) => story.page === "overture");

  return (
    <article className="page wrap">
      <p className="eyebrow">Act I · House history</p>
      <h1>The Overture</h1>
      <Ornament />
      <div className="split">
        <div className="prose">
          <p>
            This is a fictional story. Celeste Marlowe, Inez Bell, and Poppy Raines met at a
            rain-soaked neighborhood parade in the imaginary town of Bellwether. They shared a
            paper umbrella, an audacious idea for a float, and the belief that friendship deserves sequins.
          </p>
          <p>
            Their first float was a hand-painted moon named Mabel. It moved at the pace of a sleepy
            turtle, but the women danced beside it anyway. Every person and memory here is invented.
          </p>
          <p className="display italic">Motto: Truth, Beauty, Freedom, Love—and always save room for dessert.</p>
          <p>{memoryCall.copy}</p>
          <Link className="ticket" to="/soiree">
            Opening night
          </Link>
        </div>
        <PhotoPlate
          src={art.pinwheel}
          alt="A silver paper windmill with a red ribbon, held in a hand."
          caption="The house mark, small enough to hold."
          imgClassName="photo-square"
        />
      </div>

      <section className="stack-gap">
        <p className="eyebrow">Voice sample</p>
        <h2 className="section-title">How a memory should read</h2>
        <div className="story-stack">
          {memories.map((story) => (
            <SampleStory key={story.id} story={story} />
          ))}
        </div>
      </section>

      <section className="stack-gap">
        <p className="eyebrow">Parade weekend</p>
        <h2 className="section-title">What a first ride is, without a fake clock</h2>
        <div className="topic-grid">
          {paradeWeekend.map((item) => (
            <section className="panel" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.note}</p>
            </section>
          ))}
        </div>
      </section>

      <div className="stack-gap">
        <PhotoPlate
          src={art.dusk}
          alt="A fictional parade street at dusk, drawn as a lithograph."
          caption="Bellwether at dusk. The route exists only in the story."
          imgClassName="photo-wide"
        />
      </div>
      <div className="stack-gap">
        <PhotoPlate
          src={art.windmill}
          alt="Original house mark painting of a wooden windmill with a cabaret-red door."
          caption="The house mark. Ours, not a Paris franchise."
          imgClassName="photo-square"
        />
      </div>
    </article>
  );
}
