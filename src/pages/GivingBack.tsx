import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import SampleStory from "../components/SampleStory";
import { art, benefitStance, partners } from "../content";
import { sampleStories } from "../sampleCopy";

export default function GivingBack() {
  const giving = sampleStories.filter((story) => story.page === "benefit");

  return (
    <article className="page wrap">
      <p className="eyebrow">Act III · Benefit night</p>
      <h1>The Benefit</h1>
      <Ornament />
      <div className="split">
        <div className="prose">
          <p>Beauty with purpose. The public photographs the float.</p>
          <p>{benefitStance}</p>
        </div>
        <PhotoPlate
          src={art.gift}
          alt="Gloved hands offering a wrapped gift and a bouquet of red flowers."
          caption="The year is measured by what reached the partners."
          imgClassName="photo-square"
        />
      </div>

      <section className="stack-gap">
        <p className="eyebrow">Voice sample</p>
        <h2 className="section-title">How giving should read</h2>
        <div className="story-stack">
          {giving.map((story) => (
            <SampleStory key={story.id} story={story} />
          ))}
        </div>
      </section>

      <div className="charity-grid">
        {partners.map((partner) => (
          <section className="panel" key={partner.name}>
            <h2>{partner.name}</h2>
            <p>{partner.note}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
