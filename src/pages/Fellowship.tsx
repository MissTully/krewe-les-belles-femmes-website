import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art, houseLines, interKrewe, lesBeaux } from "../content";

export default function Fellowship() {
  return (
    <article className="page wrap refined-page">
      <p className="eyebrow">Sisterhood</p><h1>Come Find Your People</h1><Ornament />
      <div className="split reverse heritage-lead">
        <PhotoPlate src={art.banner} alt="Les Belles Femmes Parisian-inspired imagery." caption="The costume is cabaret. The connection is real." imgClassName="photo-wide" />
        <div className="prose">
          <p className="lead-copy">We believe growing older does not mean outgrowing your sense of wonder—or your love of a great party.</p>
          <p>LBF brings women together for genuine connection, lively conversation, seasonal socials, book clubs, galas, themed balls, and the shared joy of parade season.</p>
          <p>Our philosophy is simple: <strong>Wear the damn outfit. Add the sparkle. Choose kindness.</strong> Be yourself, cheer on the women around you, and make room for another friend at the table.</p>
          <div className="hero-actions" style={{ justifyContent: "flex-start" }}><Link className="ticket red" to="/apply">Learn about membership</Link><Link className="ticket" to="/company">Meet the company</Link></div>
        </div>
      </div>

      <section className="stack-gap"><p className="eyebrow">The house philosophy</p><h2 className="section-title">Live boldly. Laugh loudly. Love generously.</h2><ul className="house-lines">{houseLines.map((line) => <li key={line}>{line}</li>)}</ul></section>

      <section className="stack-gap split">
        <div className="panel"><p className="eyebrow">Les Beaux</p><h2>{lesBeaux.title}</h2><p>{lesBeaux.copy}</p></div>
        <div className="panel"><p className="eyebrow">Inter-krewe fellowship</p><h2>Community beyond our krewe</h2>{interKrewe.map((night) => <p key={night.name}><strong>{night.name}.</strong> {night.note}</p>)}</div>
      </section>
      <div className="stack-gap"><PhotoPlate src={art.dressing} alt="Parisian-inspired costume pieces." caption="Bring your sparkle." imgClassName="photo-landscape" /></div>
    </article>
  );
}
