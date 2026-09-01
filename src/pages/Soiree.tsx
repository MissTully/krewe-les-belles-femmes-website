import { FormEvent, useEffect, useState } from "react";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art } from "../content";
import { getSoireeInterest, saveSoireeInterest } from "../forms";

export default function Soiree() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    setSent(Boolean(getSoireeInterest()));
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    saveSoireeInterest({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      party: String(data.get("party") ?? "2"),
    });
    setSent(true);
  }

  return (
    <article className="page wrap">
      <p className="eyebrow">25th Year</p>
      <h1>The Silver Soirée</h1>
      <Ornament />
      <div className="split">
        <div>
          <PhotoPlate
            src={art.soireeInvite}
            alt="Join the Soirée playbill: three women in evening dress, champagne, and the krewe motto."
            caption="Saturday, 14 November 2026 · Carrollwood Country Club."
            imgClassName="photo-wide"
          />
          <div className="prose" style={{ marginTop: "1.5rem" }}>
            <p>
              Saturday, November 14, 2026 · Carrollwood Country Club, Tampa. An evening for the
              anniversary year. Tickets and guest lists will run through this page so officers are
              not chasing a headcount in a group text.
            </p>
            <p>Producer credits live on a separate program page. No banner ads on the home.</p>
          </div>
        </div>
        <section className="panel">
          <h2>Request a ticket notice</h2>
          <p className="fine-copy">
            Phase one collects interest only. Paid ticketing comes after the board picks a
            processor.
          </p>
          {sent ? (
            <p className="banner-ok" role="status">
              Saved on this device. Live checkout is not connected yet. An officer still has to
              read it.
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
                Party size
                <select name="party" defaultValue="2">
                  <option>1</option>
                  <option>2</option>
                  <option>4</option>
                  <option>6</option>
                </select>
              </label>
              <button type="submit">Hold my place</button>
            </form>
          )}
        </section>
      </div>
    </article>
  );
}
