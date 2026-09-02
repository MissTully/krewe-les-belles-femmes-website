import { FormEvent, useEffect, useState } from "react";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art } from "../content";
import { getSoireeInterest, saveSoireeInterest } from "../forms";

export default function Soiree() {
  const [sent, setSent] = useState(false);
  useEffect(() => { setSent(Boolean(getSoireeInterest())); }, []);
  function onSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); const data = new FormData(event.currentTarget); saveSoireeInterest({ name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""), party: String(data.get("party") ?? "2") }); setSent(true); }
  return (
    <article className="page wrap refined-page"><p className="eyebrow">25th anniversary</p><h1>The Silver Soirée</h1><Ornament />
      <div className="split heritage-lead"><div><PhotoPlate src={art.soireeInvite} alt="Silver Soirée artwork." caption="Celebrating over 25 years of Truth, Beauty, Freedom, and Love." imgClassName="photo-wide" /><div className="prose" style={{ marginTop: "1.5rem" }}><p className="lead-copy">Saturday, November 14, 2026 · Carrollwood Country Club</p><p>Join Les Belles Femmes as we celebrate a quarter century of sisterhood, pageantry, friendship, and service.</p><p>Event details, seating, and ticket information should be confirmed through the krewe before making plans.</p></div></div>
        <section className="panel"><p className="eyebrow">Interested?</p><h2>Stay connected</h2><p className="fine-copy">Share your interest so you have a place to keep the event on your radar. This site does not process ticket purchases.</p>{sent ? <p className="banner-ok" role="status">Thank you. Your interest has been saved on this device.</p> : <form className="form-row" onSubmit={onSubmit}><label>Name<input name="name" required autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>Party size<select name="party" defaultValue="2"><option>1</option><option>2</option><option>4</option><option>6</option></select></label><button type="submit">Save my interest</button></form>}</section></div>
    </article>
  );
}
