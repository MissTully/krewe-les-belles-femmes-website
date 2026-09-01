import { Link } from "react-router-dom";
import Crest from "../components/Crest";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { acts, art, krewe, season } from "../content";

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
          <p className="welcome">Twenty-five seasons on Bayshore</p>
          <p className="kicker kicker-light">The company of</p>
          <h1>{krewe.name}</h1>
          <p className="motto motto-light">
            {krewe.motto.map((word) => (
              <span key={word}>{word}</span>
            ))}
          </p>
          <Ornament className="ornament-gold" />
          <p className="note note-light">
            A Tampa women's krewe in its silver anniversary season. The beads get photographed.
            The sisterhood and the giving are the point.
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
        <h2 className="section-title">Three acts. One company.</h2>
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
        <div className="season-panel">
          <div>
            <p className="eyebrow">Silver season</p>
            <h2 className="section-title">Dates on the bill</h2>
            <p className="note" style={{ margin: "0.8rem 0 0", textAlign: "left" }}>
              Tickets and guest lists will run through this house so officers are not chasing a
              headcount in a group text. The full playbill, including what is still only a month,
              lives on Playbill. The Stage Door stays locked until January 2027.
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
