import { useEffect, useState } from "react";
import { mailtoInquiry } from "@/lib/content";
import {
  getSoireeInterest,
  saveSoireeInterest,
  type SoireeInterest,
} from "@/lib/forms";
import { Ticket } from "@/components/ticket-link";

export function SoireeForm() {
  const [saved, setSaved] = useState<SoireeInterest | null>(null);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [party, setParty] = useState("2");

  useEffect(() => {
    const existing = getSoireeInterest();
    if (existing) {
      setSaved(existing);
      setName(existing.name);
      setEmail(existing.email);
      setParty(existing.party);
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
    const payload = { name: name.trim(), email: email.trim(), party };
    saveSoireeInterest(payload);
    setSaved({ ...payload, savedAt: new Date().toISOString() });
  }

  const mailto = saved
    ? mailtoInquiry(
        "Silver Soirée interest: November 14, 2026",
        [
          `Name: ${saved.name}`,
          `Email: ${saved.email}`,
          `Party size: ${saved.party}`,
          "",
          "I would like to be considered for the Silver Soirée.",
        ].join("\n"),
      )
    : "";

  return (
    <div>
      <h2 className="font-display text-3xl">Request an invitation</h2>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
        The Silver Soirée is by invitation. Leave your name and we will save it
        here, then send the note so the ball committee actually receives it.
      </p>

      {saved ? (
        <div className="banner-ok mt-6" role="status">
          You are on the interest list as {saved.name}, party of {saved.party}.
          Send the email so the krewe can follow up.
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
          <span className="kicker">Party size</span>
          <select
            name="party"
            value={party}
            onChange={(e) => setParty(e.target.value)}
          >
            {["1", "2", "3", "4", "5", "6+"].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        {error ? (
          <p className="m-0 text-sm text-cabaret" role="alert">
            {error}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          <Ticket type="submit" variant="wine">
            {saved ? "Update interest" : "Save interest"}
          </Ticket>
          {saved ? (
            <Ticket href={mailto} variant="ink">
              Send by email
            </Ticket>
          ) : null}
        </div>
      </form>
    </div>
  );
}
