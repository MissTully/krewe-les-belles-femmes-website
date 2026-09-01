import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="playbill">
          <p className="kicker">Krewe of</p>
          <h1>Les Belles Femmes</h1>
          <p className="motto">
            <span>Truth</span>
            <span>Beauty</span>
            <span>Freedom</span>
            <span>Love</span>
          </p>
          <p className="note">
            A Tampa women&apos;s krewe in its 25th year. The beads get photographed.
            The sisterhood and the giving are the point.
          </p>
          <div className="hero-actions">
            <Link className="ticket silver" to="/soiree">
              Silver Soirée
            </Link>
            <Link className="ticket red" to="/apply">
              Apply to Join
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap">
        <div className="acts">
          <Link className="act-card" to="/heritage">
            <p className="eyebrow">Act I</p>
            <h2>Heritage</h2>
            <p>Founded in 2002. A quarter century of parade nights, founders, and Tampa memory.</p>
          </Link>
          <Link className="act-card" to="/fellowship">
            <p className="eyebrow">Act II</p>
            <h2>Fellowship</h2>
            <p>Belles and Les Beaux. Ages mixed. The room is a sisterhood, not a chorus line.</p>
          </Link>
          <Link className="act-card" to="/giving-back">
            <p className="eyebrow">Act III</p>
            <h2>Giving Back</h2>
            <p>Beauty with purpose. The Spring, Best Buddies, Pediatric Cancer Foundation, and more.</p>
          </Link>
        </div>
      </section>
    </>
  );
}
