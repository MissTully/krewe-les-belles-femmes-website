import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import SampleStory from "../components/SampleStory";
import { art, houseLines, interKrewe, lesBeaux } from "../content";
import { sampleStories } from "../sampleCopy";

export default function Fellowship() {
  const roomStories = sampleStories.filter((story) => story.page === "sisterhood");

  return (
    <article className="page wrap">
      <p className="eyebrow">Act II · The room</p>
      <h1>Sisterhood</h1>
      <Ornament />
      <div className="split reverse">
        <PhotoPlate
          src={art.banner}
          alt="Two women in cabaret dress flanking the krewe name, motto, and a Tampa skyline with a tower."
          caption="The costume is cabaret. The room is a sisterhood."
          imgClassName="photo-wide"
        />
        <div className="prose">
          <p>
            Ada Fontaine brings the best paperback recommendations, Maris Cole can turn a tablecloth
            into a costume, and June Waverly is usually first on the dance floor. Their standing rule:
            arrive as you are and leave with three new friends.
          </p>
          <p>
            The product is the room: book-club debates, costume-table chaos, porch parties, and a
            dressing-room rule that still fits on a mirror. Every person and story here is fictional.
          </p>
          <p className="display italic cabaret">What would Dolly do?</p>
          <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
            <Link className="ticket red" to="/apply">
              Casting Call
            </Link>
            <Link className="ticket" to="/company">
              Calling cards
            </Link>
            <Link className="ticket" to="/stage-door">
              Stage Door
            </Link>
          </div>
        </div>
      </div>

      <section className="stack-gap">
        <p className="eyebrow">Voice sample</p>
        <h2 className="section-title">How the room should sound</h2>
        <div className="story-stack">
          {roomStories.map((story) => (
            <SampleStory key={story.id} story={story} />
          ))}
        </div>
      </section>

      <section className="stack-gap">
        <p className="eyebrow">The mirror</p>
        <h2 className="section-title">Lines the house already keeps</h2>
        <ul className="house-lines">
          {houseLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section className="stack-gap split">
        <div className="panel">
          <p className="eyebrow">Gentlemen</p>
          <h2>{lesBeaux.title}</h2>
          <p>{lesBeaux.copy}</p>
        </div>
        <div className="panel">
          <p className="eyebrow">Across the bay</p>
          <h2>Other houses</h2>
          {interKrewe.map((night) => (
            <p key={night.name}>
              <strong>{night.name}.</strong> {night.note}
            </p>
          ))}
        </div>
      </section>

      <div className="stack-gap">
        <PhotoPlate
          src={art.dressing}
          alt="Top hat, crimson feathers, silver beads, cream gloves, and black boots on a dressing table."
          caption="Boots, beads, and the hat. Then the sisterhood."
          imgClassName="photo-landscape"
        />
      </div>
    </article>
  );
}
