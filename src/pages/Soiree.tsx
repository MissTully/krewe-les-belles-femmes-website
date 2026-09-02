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
      <p className="eyebrow">Opening night</p>
      <h1>The Silver Soirée</h1>
      <Ornament />
      <div className="split">
        <div>
          <PhotoPlate
            src={art.soireeInvite}
            alt="Join the Soirée playbill: three women in evening dress, champagne, and the krewe motto."
            caption="A fictional evening at Moonrise Pavilion."
            imgClassName="photo-wide"
          />
          <div className="prose" style={{ marginTop: "1.5rem" }}>
            <p>
              One imaginary Saturday each autumn, the Belles gather at Moonrise Pavilion for sparkling
              mocktails, costume prizes, and a dance floor that never seems quite large enough.
            </p>
            <p>Producer credits live in the program. No banner ads on the Front Stage.</p>
          </div>
        </div>
        <section className="panel">
          <h2>Hold a house seat</h2>
          <p className="fine-copy">
            This decorative form belongs to the fictional story and does not reserve a real ticket.
          </p>
          {sent ? (
            <p className="banner-ok" role="status">
              Your imaginary place at the table is saved.
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
              <button type="submit">Save my imaginary seat</button>
            </form>
          )}
        </section>
      </div>
    </article>
  );
}
