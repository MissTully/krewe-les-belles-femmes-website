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
            About fifty to seventy-five of us. Ages mixed. Belles first. Les Beaux beside them.
            No generated dancer stands in for a real member on the roster. The playbill art on this
            page is costume, not a portrait of anyone in the krewe.
          </p>
          <p>
            The product is the room: book club, a shared Saturday with another Tampa krewe, and a
            dressing-room rule that still fits on a mirror.
          </p>
          <p className="display italic cabaret">What would Dolly do?</p>
          <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
            <Link className="ticket red" to="/apply">
              Casting Call
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
