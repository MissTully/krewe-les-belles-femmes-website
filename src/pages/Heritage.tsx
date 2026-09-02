import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art, memoryCall, paradeWeekend } from "../content";

export default function Heritage() {
  return (
    <article className="page wrap refined-page">
      <p className="eyebrow">Our story</p>
      <h1>Twenty-Five Years of Truth, Beauty, Freedom & Love</h1>
      <Ornament />
      <div className="split heritage-lead">
        <div className="prose">
          <p className="lead-copy">The Krewe of Les Belles Femmes was established in Tampa Bay in 2002. For more than two decades, LBF has brought women together around friendship, pageantry, celebration, and community.</p>
          <p>The krewe is known for its Moulin Rouge, Parisian cabaret aesthetic and its signature Eiffel Tower and Moulin Rouge windmill float. Costumes embrace the theatrical spirit: corsets, ruffles, boas, top hats, feathers, and boots.</p>
          <p>Today, LBF is about far more than the parade route. It is a year-round community of women who gather for socials, book clubs, galas, themed balls, and the moments in between.</p>
          <p className="display italic cabaret">Truth. Beauty. Freedom. Love.</p>
          <Link className="ticket red" to="/fellowship">Find your people</Link>
        </div>
        <PhotoPlate src={art.parade} alt="Parade imagery associated with Les Belles Femmes." caption="Pageantry is part of the story. Sisterhood is the heart of it." imgClassName="photo-wide" />
      </div>

      <section className="story-highlight">
        <p className="eyebrow">The legacy</p>
        <h2 className="section-title">A quarter century of sisterhood</h2>
        <p>{memoryCall.copy}</p>
      </section>

      <section className="stack-gap">
        <p className="eyebrow">Parade season</p>
        <h2 className="section-title">Dress the part. Ride together.</h2>
        <div className="topic-grid">{paradeWeekend.map((item) => <section className="panel" key={item.title}><h2>{item.title}</h2><p>{item.note}</p></section>)}</div>
      </section>

      <div className="stack-gap"><PhotoPlate src={art.dressing} alt="Parisian cabaret-inspired costume pieces." caption="Corsets, ruffles, boas, top hats, feathers, boots." imgClassName="photo-landscape" /></div>
    </article>
  );
}
