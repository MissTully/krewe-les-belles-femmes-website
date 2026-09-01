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
          Someone in the krewe should already know your name. This form is a reach-back for an
          officer. It is not admission and it does not take dues.
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
            caption="Casting is reviewed by membership, not by this form."
            imgClassName="photo-wide"
          />
          <section className="stack-gap panel">
            <p className="eyebrow">Gentlemen</p>
            <h2>{lesBeaux.name}</h2>
            <p>{lesBeaux.copy}</p>
          </section>
        </div>
        <section className="panel">
          <h2>Leave your name</h2>
          <p className="fine-copy">Name the sister or Beau who asked you. Blank sponsor fields wait.</p>
          {sent ? (
            <p className="banner-ok" role="status">
              Received on this device. An officer still has to read it. Do not send dues here.
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
                Who in the krewe asked you?
                <input name="sponsor" required />
              </label>
              <label>
                A sentence about why
                <textarea name="why" rows={4} />
              </label>
              <button type="submit">Send to casting</button>
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
