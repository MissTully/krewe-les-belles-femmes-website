import { Link } from "react-router-dom";
import Crest from "../components/Crest";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { acts, art, krewe, season, yearRhythm } from "../content";

export default function Home() {
  return (
    <>
      <section className="hero-stage hero-refined">
        <img className="hero-stage-photo" src={art.ladies} alt="Les Belles Femmes in Parisian-inspired cabaret style." style={{ objectPosition: "center 18%" }} />
        <div className="hero-stage-veil" aria-hidden="true" />
        <div className="hero-stage-copy rise">
          <Crest size={116} decorative />
          <p className="welcome">Tampa Bay · Est. 2002</p>
          <p className="kicker kicker-light">Krewe of</p>
          <h1>{krewe.name}</h1>
          <p className="hero-tagline">Come find your people.</p>
          <p className="motto motto-light">{krewe.motto.map((word) => <span key={word}>{word}</span>)}</p>
          <Ornament className="ornament-gold" />
          <p className="note note-light">A vibrant women’s krewe celebrating friendship, pageantry, community, and the joy of living boldly.</p>
          <div className="hero-actions">
            <Link className="ticket gold" to="/apply">Meet LBF</Link>
            <Link className="ticket ghost" to="/calendar">Explore events</Link>
          </div>
        </div>
      </section>

      <section className="intro-ribbon">
        <div className="wrap intro-ribbon-inner">
          <span>Truth</span><i>·</i><span>Beauty</span><i>·</i><span>Freedom</span><i>·</i><span>Love</span>
        </div>
      </section>

      <section className="wrap home-intro">
        <div className="home-intro-copy">
          <p className="eyebrow">We’ve been looking for you</p>
          <h2 className="section-title">A sisterhood with a little sparkle.</h2>
          <p>Life is busy. LBF is a place to put down the armor, gather with remarkable women, laugh loudly, and make memories together.</p>
          <p>Founded in Tampa Bay in 2002, Les Belles Femmes blends year-round friendship and fellowship with the pageantry of parade season—and a commitment to giving back.</p>
          <Link className="text-link" to="/heritage">Discover our story →</Link>
        </div>
        <PhotoPlate src={art.poster} alt="Les Belles Femmes anniversary artwork." caption="Twenty-five years of Truth, Beauty, Freedom, and Love." imgClassName="photo-poster" />
      </section>

      <section className="wrap">
        <p className="eyebrow">The heart of LBF</p>
        <h2 className="section-title">More than a parade. More than a party.</h2>
        <div className="acts">
          {acts.map((act) => (
            <Link className="act-card" key={act.to} to={act.to}>
              <img src={act.image} alt={act.alt} />
              <div className="act-copy"><p className="eyebrow">{act.act}</p><h2>{act.title}</h2><p>{act.copy}</p><span className="card-arrow">Explore →</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap home-calendar">
        <div>
          <p className="eyebrow">The year at a glance</p>
          <h2 className="section-title">There’s always a reason to gather.</h2>
        </div>
        <div className="season-feature-grid">
          {yearRhythm.map((beat) => <article className="feature-line" key={beat.title}><p className="eyebrow">{beat.when}</p><h3>{beat.title}</h3><p>{beat.note}</p></article>)}
        </div>
        <Link className="ticket red" to="/calendar">See the full calendar</Link>
      </section>

      <section className="home-featured">
        <div className="wrap featured-inner">
          <div><p className="eyebrow">Save the date</p><h2>Silver Soirée</h2><p>Saturday, November 14, 2026 · Carrollwood Country Club</p><p>Join us as we celebrate over 25 years of Truth, Beauty, Freedom, and Love.</p><Link className="ticket gold" to="/soiree">Silver Soirée</Link></div>
          <img src={art.stub25} alt="Silver 25th anniversary ticket artwork." />
        </div>
      </section>

      <section className="wrap home-season-list">
        <p className="eyebrow">Coming up</p>
        <div className="season-list">{season.map((event) => <div className="season-item" key={event.title}><p className="eyebrow">{event.when}</p><Link to={event.to}>{event.title}</Link><p>{event.where}</p></div>)}</div>
      </section>
    </>
  );
}
