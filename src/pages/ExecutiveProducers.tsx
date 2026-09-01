import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art, producerLevels } from "../content";

export default function ExecutiveProducers() {
  return (
    <article className="page wrap">
      <p className="eyebrow">Program credits</p>
      <h1>Executive Producers</h1>
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
            website, a category. Executive producers will not appear as advertisements on the home.
            Those who prefer to give without a name may be listed as Anonymous, or not listed at
            all.
          </p>
          <Link className="ticket" to="/apply">
            Speak with casting
          </Link>
        </div>
        <PhotoPlate
          src={art.playbillStill}
          alt="A Les Belles Femmes playbill: three women in cabaret dress, the krewe name, and program credits."
          caption="Names belong in the program."
          imgClassName="photo-portrait"
        />
      </div>
      <div className="underwriter-grid">
        {producerLevels.map((level) => (
          <section className="panel" key={level.name}>
            <p className="eyebrow">{level.amount}</p>
            <h2>{level.name}</h2>
            <p>{level.note}</p>
          </section>
        ))}
      </div>
      <div className="split">
        <PhotoPlate
          src={art.stageFrame}
          alt="Playbill for A Night of Elegance, with the krewe ladies and a red velvet curtain."
          caption="A Night of Elegance"
          imgClassName="photo-portrait"
        />
        <PhotoPlate
          src={art.velvet}
          alt="A wine-red theater curtain with a gold playbill at its center."
          caption="The house, before the lights"
          imgClassName="photo-portrait"
        />
      </div>
    </article>
  );
}
