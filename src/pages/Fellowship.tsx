import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art } from "../content";

export default function Fellowship() {
  return (
    <article className="page wrap">
      <p className="eyebrow">Act II · Sisterhood</p>
      <h1>The Green Room</h1>
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
            This is a sisterhood of Belles, with Les Beaux as the gentlemen's auxiliary.
            The digital home treats both with the same dignity. No generated dancer stands in for a
            real member on the roster. The playbill art on this page is costume, not a portrait of
            anyone in the krewe.
          </p>
          <p>
            About fifty to seventy-five of us. Ages mixed. The featured line of the house is simple
            enough to live on a dressing-room mirror: wear the outfit, add the sparkle, buy the
            boots, dream big, laugh loudly, never dull your sparkle, be generous, choose kindness,
            be unapologetically you.
          </p>
          <p className="display italic cabaret">What would Dolly do?</p>
          <p>
            The member directory, dues status, and photo permissions live behind the Stage Door.
            That door opens in January 2027, after the Front Stage anniversary pages are live.
          </p>
          <p>
            If you have been asked to join, use Casting. If you already belong, wait for your officer
            to send the Stage Door invitation. Do not expect a public roster here.
          </p>
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
