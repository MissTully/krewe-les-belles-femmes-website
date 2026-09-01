import { FormEvent, useState } from "react";

export default function Apply() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <article className="page wrap">
      <p className="eyebrow">Membership</p>
      <h1>Apply to Join</h1>
      <div className="prose">
        <p>
          Les Belles Femmes is a private women&apos;s krewe. Applications are reviewed by
          membership, not by this form. Use the fields below so an officer can reach you. Do not
          send dues here.
        </p>
      </div>
      <section className="panel" style={{ marginTop: "1.5rem", maxWidth: "32rem" }}>
        {sent ? (
          <p className="banner-ok">Received on this device. An officer still has to read it.</p>
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
    </article>
  );
}
