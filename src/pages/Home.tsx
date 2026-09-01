import { Link } from "react-router-dom";
import Crest from "../components/Crest";
import Ornament from "../components/Ornament";
import { acts, krewe, season } from "../content";

export default function Home() {
  return (
    <>
      {/* Full-bleed parade photograph with a wine wash, matching the Shamrock hero pattern. */}
      <section className="hero-stage">
        <img
          className="hero-stage-photo"
          src="/art/parade.jpg"
          alt="Nighttime Gasparilla parade float with a wooden windmill, tower lights, and carnival beads in the air."
        />
        <div className="hero-stage-veil" aria-hidden="true" />
        <div className="hero-stage-copy rise">
          <Crest size={108} decorative />
          <p className="welcome">A quarter century on Bayshore</p>
          <p className="kicker kicker-light">Krewe of</p>
          <h1>{krewe.name}</h1>
          <p className="motto motto-light">
            {krewe.motto.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
          <Ornament className="ornament-gold" />
          <p className="note note-light">
            A Tampa women's krewe in its 25th year. The beads get photographed. The sisterhood
            and the giving are the point.
          </p>
          <div className="hero-actions">
            <Link className="ticket gold" to="/soiree">
              Silver Soirée
            </Link>
            <Link className="ticket ghost" to="/apply">
              Apply to Join
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap program-block">
        <p className="eyebrow">The public program</p>
        <h2 className="section-title">Three acts. One krewe.</h2>
        <div className="acts">
          {acts.map((act) => (
            <Link className="act-card" key={act.to} to={act.to}>
              <img src={act.image} alt={act.alt} />
              <div className="act-copy">
                <p className="eyebrow">{act.act}</p>
                <h2>{act.title}</h2>
                <p>{act.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap">
        <div className="season-panel">
          <div>
            <p className="eyebrow">25th year</p>
            <h2 className="section-title">The season, as it stands</h2>
            <p className="note" style={{ margin: "0.8rem 0 0", textAlign: "left" }}>
              Tickets and guest lists will run through this house so officers are not chasing a
              headcount in a group text. The Stage Door stays locked until January 2027.
            </p>
          </div>
          <ol className="season-list">
            {season.map((event) => (
              <li key={event.title}>
                <p className="eyebrow">{event.when}</p>
                <Link to={event.to}>{event.title}</Link>
                <p>{event.where}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
