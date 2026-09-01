import { FormEvent, useEffect, useState } from "react";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art } from "../content";
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
      <p className="eyebrow">Membership</p>
      <h1>Apply to Join</h1>
      <Ornament />
      <div className="split">
        <div>
          <PhotoPlate
            src={art.tickets}
            alt="A silver ticket and a cabaret-red ticket on cream paper."
            caption="Applications are reviewed by membership, not by this form."
            imgClassName="photo-wide"
          />
          <div className="prose" style={{ marginTop: "1.25rem" }}>
            <p>
              Les Belles Femmes is a private women's krewe. Use the fields so an officer can
              reach you. Do not send dues here.
            </p>
            <p>
              The application season begins in May. New members are asked to attend at least three
              recruitment socials in the application year. Prior parade guesting or security can
              stand in. Annual dues, when an officer invites them, are four hundred fifty dollars,
              and they do not travel through this page.
            </p>
          </div>
        </div>
        <section className="panel">
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
                Who asked you to apply?
                <input name="sponsor" />
              </label>
              <label>
                A sentence about why
                <textarea name="why" rows={4} />
              </label>
              <button type="submit">Send to membership</button>
            </form>
          )}
        </section>
      </div>
    </article>
  );
}
