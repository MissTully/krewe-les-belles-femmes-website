import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art, benefitStance, partners } from "../content";

export default function GivingBack() {
  return (
    <article className="page wrap refined-page">
      <p className="eyebrow">Giving back</p><h1>Beauty With Purpose</h1><Ornament />
      <div className="split heritage-lead"><div className="prose"><p className="lead-copy">The celebration does not stop at the parade route.</p><p>{benefitStance}</p><p>Service is part of the LBF spirit: standing shoulder-to-shoulder, supporting organizations that matter, and turning fellowship into meaningful community involvement.</p></div><PhotoPlate src={art.givingStill} alt="Gift imagery representing the spirit of giving." caption="Celebration with purpose." imgClassName="photo-square" /></div>
      <section className="stack-gap"><p className="eyebrow">Community partners</p><h2 className="section-title">Organizations we support</h2><div className="charity-grid">{partners.map((partner) => <section className="panel charity-card" key={partner.name}><p className="partner-mark">LBF</p><h2>{partner.name}</h2><p>{partner.note}</p></section>)}</div></section>
      <div className="stack-gap"><PhotoPlate src={art.gift} alt="Hands offering a wrapped gift." caption="Giving is part of the year-round story." imgClassName="photo-wide" /></div>
    </article>
  );
}
