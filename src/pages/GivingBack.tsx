import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art, benefitStance, partners } from "../content";

export default function GivingBack() {
  return (
    <article className="page wrap">
      <p className="eyebrow">Act III · Benefit night</p>
      <h1>The Benefit</h1>
      <Ornament />
      <div className="split">
        <div className="prose">
          <p>Beauty with purpose. The public photographs the float.</p>
          <p>{benefitStance}</p>
        </div>
        <PhotoPlate
          src={art.gift}
          alt="Gloved hands offering a wrapped gift and a bouquet of red flowers."
          caption="The year is measured by what reached the partners."
          imgClassName="photo-square"
        />
      </div>
      <div className="charity-grid">
        {partners.map((partner) => (
          <section className="panel" key={partner.name}>
            <h2>{partner.name}</h2>
            <p>{partner.note}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
