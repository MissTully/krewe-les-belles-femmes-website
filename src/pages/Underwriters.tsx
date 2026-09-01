import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art, underwriterLevels } from "../content";

export default function Underwriters() {
  return (
    <article className="page wrap">
      <p className="eyebrow">The program</p>
      <h1>Underwriters</h1>
      <Ornament />
      <div className="split">
        <div className="prose">
          <p>
            The 25th-year digital home can be paid for by anniversary gifts instead of the
            operating budget. Les Belles Femmes is a 501(c)(7) social organization. These gifts are
            not tax-deductible. Have the krewe accountant review the invitation wording.
          </p>
          <p>
            Thanks will live on this page in the manner of a theater program: a name, perhaps a
            website, a category. Underwriters will not appear as advertisements on the home. Those
            who prefer to give without a name may be listed as Anonymous, or not listed at all.
          </p>
          <Link className="ticket" to="/apply">
            Speak with membership
          </Link>
        </div>
        <PhotoPlate
          src={art.ornaments}
          alt="Playbill ornaments: frames, feathers, top hats, and filigree on cream paper."
          caption="A theater program, not a marketplace."
          imgClassName="photo-wide"
        />
      </div>
      <div className="underwriter-grid">
        {underwriterLevels.map((level) => (
          <section className="panel" key={level.name}>
            <p className="eyebrow">{level.amount}</p>
            <h2>{level.name}</h2>
            <p>{level.note}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
