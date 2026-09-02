import { useEffect, useState } from "react";
import { hearAbout, mailtoInquiry } from "@/lib/content";
import { getApplyInquiry, saveApplyInquiry, type ApplyInquiry } from "@/lib/forms";
import { Ticket } from "@/components/ticket-link";

type Props = {
  heading?: string;
  lede?: string;
  subject?: string;
  dark?: boolean;
};

export function ApplyForm({
  heading = "Tell us you’d like to visit",
  lede = "Leave a note for the membership chair. We will save it here, then open an email so it actually reaches the krewe.",
  subject = "LBF membership inquiry",
  dark = false,
}: Props) {
  const [saved, setSaved] = useState<ApplyInquiry | null>(null);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [how, setHow] = useState<string>(hearAbout[0]);
  const [note, setNote] = useState("");

  useEffect(() => {
    const existing = getApplyInquiry();
    if (existing) {
      setSaved(existing);
      setName(existing.name);
      setEmail(existing.email);
      setHow(existing.how);
      setNote(existing.note);
    }
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (name.trim().length < 2) {
      setError("Please share your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please share a valid email.");
      return;
    }
    const payload = { name: name.trim(), email: email.trim(), how, note: note.trim() };
    saveApplyInquiry(payload);
    setSaved({ ...payload, savedAt: new Date().toISOString() });
  }

  const mailto = saved
    ? mailtoInquiry(
        subject,
        [`Name: ${saved.name}`, `Email: ${saved.email}`, `How I found LBF: ${saved.how}`, "", saved.note || "(no extra note)"].join(
          "\n",
        ),
      )
    : "";

  return (
    <div className={dark ? "text-cream" : ""}>
      <h2 className={`font-display text-3xl ${dark ? "text-cream" : ""}`}>{heading}</h2>
      <p className={`mt-3 max-w-xl text-sm leading-relaxed ${dark ? "text-cream/75" : "text-muted"}`}>{lede}</p>

      {saved ? (
        <div className="banner-ok mt-6" role="status">
          We have your note, {saved.name.split(" ")[0]}. Send it to the membership chair so it reaches the krewe —
          local save alone is only on this device.
        </div>
      ) : null}

      <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
        <label className="form-field">
          <span className="kicker">Name</span>
          <input
            name="name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="form-field">
          <span className="kicker">Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="form-field">
          <span className="kicker">How did you find us?</span>
          <select name="how" value={how} onChange={(e) => setHow(e.target.value)}>
            {hearAbout.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="form-field">
          <span className="kicker">A note (optional)</span>
          <textarea
            name="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Who invited you, what you’re hoping to find, or simply hello."
          />
        </label>
        {error ? (
          <p className="m-0 text-sm text-cabaret" role="alert">
            {error}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          <Ticket type="submit" variant={dark ? "gold" : "wine"}>
            {saved ? "Update note" : "Save note"}
          </Ticket>
          {saved ? (
            <Ticket href={mailto} variant={dark ? "ghost" : "ink"}>
              Send by email
            </Ticket>
          ) : null}
        </div>
      </form>
    </div>
  );
}
