import { FormEvent, useEffect, useState } from "react";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art, firstYearCosts, joiningSteps, lesBeaux } from "../content";
import { getApplyInquiry, saveApplyInquiry } from "../forms";

export default function Apply() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSent(Boolean(getApplyInquiry()));
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    saveApplyInquiry({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      sponsor: String(data.get("sponsor") ?? ""),
      why: String(data.get("why") ?? ""),
    });
    setSent(true);
  }

  return (
    <article className="page wrap">
      <p className="eyebrow">Call board</p>
      <h1>Casting Call</h1>
      <Ornament />
      <div className="prose" style={{ marginTop: "1.25rem" }}>
        <p>
          This demonstration form belongs to a fictional story. It does not apply anyone to a real
          group, collect dues, or contact a real officer.
        </p>
      </div>

      <ol className="topic-grid">
        {joiningSteps.map((item) => (
          <li className="panel" key={item.step}>
            <p className="eyebrow">Step {item.step}</p>
            <h2>{item.title}</h2>
            <p>{item.note}</p>
          </li>
        ))}
      </ol>

      <div className="split">
        <div>
          <PhotoPlate
            src={art.tickets}
            alt="A silver ticket and a cabaret-red ticket on cream paper."
            caption="A fictional invitation into the story."
            imgClassName="photo-wide"
          />
          <section className="stack-gap panel">
            <p className="eyebrow">Gentlemen</p>
            <h2>{lesBeaux.name}</h2>
            <p>{lesBeaux.copy}</p>
          </section>
        </div>
        <section className="panel">
          <h2>Join the story</h2>
          <p className="fine-copy">This decorative form stays on your device and has no real membership role.</p>
          {sent ? (
            <p className="banner-ok" role="status">
              A fictional Belle has added your name to the imaginary guest list.
            </p>
          ) : (
            <form className="form-row" onSubmit={onSubmit}>
              <label>
                Name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Email
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                Your parade nickname
                <input name="sponsor" required />
              </label>
              <label>
                A sentence about why
                <textarea name="why" rows={4} />
              </label>
              <button type="submit">Send into the story</button>
            </form>
          )}
        </section>
      </div>

      <section className="stack-gap">
        <p className="eyebrow">First year</p>
        <h2 className="section-title">What it costs besides sparkle</h2>
        <div className="topic-grid">
          {firstYearCosts.map((cost) => (
            <section className="panel" key={cost.item}>
              <p className="eyebrow">{cost.amount}</p>
              <h2>{cost.item}</h2>
              <p>{cost.note}</p>
            </section>
          ))}
        </div>
      </section>
    </article>
  );
}
