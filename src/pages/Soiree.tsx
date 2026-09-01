import { FormEvent, useState } from "react";

export default function Soiree() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Phase 1 collects interest only. Paid ticketing comes after the board picks a processor.
    setSent(true);
  }

  return (
    <article className="page wrap">
      <p className="eyebrow">25th Year</p>
      <h1>The Silver Soirée</h1>
      <div className="prose">
        <p>
          Saturday, November 14, 2026 · Carrollwood Country Club, Tampa. An evening for the
          anniversary year. Tickets and guest lists will run through this page so officers are not
          chasing a headcount in a group text.
        </p>
        <p>Underwriting lives on a separate program page. No banner ads on the home.</p>
      </div>

      <section className="panel" style={{ marginTop: "1.5rem", maxWidth: "32rem" }}>
        <h2>Request a ticket notice</h2>
        {sent ? (
          <p className="banner-ok">Saved on this device. Live checkout is not connected yet.</p>
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
    </article>
  );
}
