import { FormEvent, useEffect, useState } from "react";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art, firstYearCosts, joiningSteps, lesBeaux } from "../content";
import { getApplyInquiry, saveApplyInquiry } from "../forms";

export default function Apply() {
  const [sent, setSent] = useState(false);
  useEffect(() => { setSent(Boolean(getApplyInquiry())); }, []);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data = new FormData(event.currentTarget);
    saveApplyInquiry({ name: String(data.get("name") ?? ""), email: String(data.get("email") ?? ""), sponsor: String(data.get("sponsor") ?? ""), why: String(data.get("why") ?? "") }); setSent(true);
  }
  return (
    <article className="page wrap refined-page">
      <p className="eyebrow">Membership</p><h1>Come Sit With Us</h1><Ornament />
      <div className="split heritage-lead"><div className="prose"><p className="lead-copy">Finding the right community should feel welcoming—not intimidating.</p><p>Prospective members are warmly invited to attend seasonal mixers and social events as guests of current members. Come have a drink, share some laughs, and see whether the LBF sparkle feels like yours.</p><p>Membership is intentionally personal. Reach out, meet the women, and learn more about the krewe directly from its members.</p></div><PhotoPlate src={art.tickets} alt="Elegant invitation imagery for Les Belles Femmes." caption="Your invitation begins with a connection." imgClassName="photo-wide" /></div>
      <section className="stack-gap"><p className="eyebrow">Your first steps</p><h2 className="section-title">Start with connection.</h2><ol className="topic-grid">{joiningSteps.map((item) => <li className="panel" key={item.step}><p className="eyebrow">Step {item.step}</p><h2>{item.title}</h2><p>{item.note}</p></li>)}</ol></section>
      <div className="split"><section className="panel"><p className="eyebrow">Membership inquiry</p><h2>Let’s connect</h2><p className="fine-copy">This form records your inquiry on this device. Use the official LBF membership process for a real application or invitation.</p>{sent ? <p className="banner-ok" role="status">Thank you. Your inquiry has been saved on this device.</p> : <form className="form-row" onSubmit={onSubmit}><label>Name<input name="name" required autoComplete="name" /></label><label>Email<input name="email" type="email" required autoComplete="email" /></label><label>How did you hear about LBF?<input name="sponsor" required /></label><label>Tell us a little about yourself<textarea name="why" rows={4} /></label><button type="submit">Save inquiry</button></form>}</section><section className="panel"><p className="eyebrow">Les Beaux</p><h2>{lesBeaux.name}</h2><p>{lesBeaux.copy}</p></section></div>
      <section className="stack-gap"><p className="eyebrow">Planning ahead</p><h2 className="section-title">The LBF experience</h2><div className="topic-grid">{firstYearCosts.map((cost) => <section className="panel" key={cost.item}><p className="eyebrow">{cost.amount}</p><h2>{cost.item}</h2><p>{cost.note}</p></section>)}</div></section>
    </article>
  );
}
