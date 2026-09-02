import { Link } from "react-router-dom";
import Crest from "../components/Crest";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { acts, art, krewe, season, yearRhythm } from "../content";

export default function Home() {
  return (
    <>
      <section className="hero-stage">
        <img
          className="hero-stage-photo"
          src={art.ladies}
          alt="Three women in Belle Époque cabaret dress, the house painting of Les Belles Femmes."
          style={{ objectPosition: "center 18%" }}
        />
        <div
          className="hero-stage-veil"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(180deg, rgba(58,18,24,0.18) 0%, rgba(13,11,12,0.28) 40%, rgba(36,16,20,0.84) 100%)",
          }}
        />
        <div className="hero-stage-copy rise">
          <Crest size={108} decorative />
          <p className="welcome">A fictional season in Bellwether</p>
          <p className="kicker kicker-light">Krewe of</p>
          <h1>{krewe.name}</h1>
          <p className="motto motto-light">
            {krewe.motto.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
          <Ornament className="ornament-gold" />
          <p className="note note-light">
            A hypothetical women's circle that loves a parade route, a brilliant book, a late-night
            dance floor, and one another. Every person and story on this site is fictional.
          </p>
          <div className="hero-actions">
            <Link className="ticket gold" to="/soiree">
              Opening night
            </Link>
            <Link className="ticket ghost" to="/apply">
              Casting Call
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap program-block">
        <div className="poster-stage rise">
          <PhotoPlate
            src={art.poster}
            alt="Anniversary playbill for the Krewe of Les Belles Femmes: three women in cabaret dress, motto, Tampa 2002."
            caption="The house playbill for the silver season."
            imgClassName="photo-poster"
          />
        </div>
      </section>

      <section className="wrap">
        <p className="eyebrow">Front of house</p>
        <h2 className="section-title">Three acts. One house.</h2>
        <PhotoPlate
          src={art.threeActs}
          alt="A three-panel playbill: dressing for the soirée, a stage performance, and a philanthropic toast."
          caption="Call. The room. The toast."
          className="triptych"
          imgClassName="photo-triptych"
        />
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
        <p className="eyebrow">A year in the house</p>
        <h2 className="section-title">Sparkle has a calendar</h2>
        <p className="note" style={{ margin: "0 0 1.2rem", textAlign: "left" }}>
          From book-club chapters to porchlight dances, every invented gathering has room for a
          great outfit, a generous laugh, and one more friend at the table.
        </p>
        <ol className="season-list">
          {yearRhythm.map((beat) => (
            <li key={beat.title}>
              <p className="eyebrow">{beat.when}</p>
              <span>{beat.title}</span>
              <p>{beat.note}</p>
            </li>
          ))}
        </ol>
        <p style={{ margin: "1.1rem 0 2.5rem" }}>
          <Link className="ticket" to="/apply">
            How a guest becomes a Belle
          </Link>
        </p>
      </section>

      <section className="wrap">
        <div className="season-panel">
          <div>
            <p className="eyebrow">Silver season</p>
            <h2 className="section-title">Dates on the bill</h2>
            <p className="note" style={{ margin: "0.8rem 0 0", textAlign: "left" }}>
              The Ball is opening night, not the whole pitch. The full fictional playbill lives here,
              and the Stage Door is simply part of the story.
            </p>
            <p style={{ margin: "0.9rem 0 0" }}>
              <Link className="ticket" to="/calendar">
                Open the playbill
              </Link>
            </p>
            <img
              className="season-stub"
              src={art.stub25}
              alt="A cream anniversary ticket stub marked 25th, with silver filigree."
            />
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
