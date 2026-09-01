import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { partners } from "../content";

export default function GivingBack() {
  return (
    <article className="page wrap">
      <p className="eyebrow">Act III</p>
      <h1>Giving Back</h1>
      <Ornament />
      <div className="split">
        <div className="prose">
          <p>
            Beauty with purpose. The public photographs the float. The krewe measures the year by
            what reached the partners below. Confirm names and gift language with the board before
            treating this list as final.
          </p>
        </div>
        <PhotoPlate
          src="/art/giving.jpg"
          alt="Still life of books, a stuffed dog, a burgundy ribbon, and a basin of spring water."
          caption="The year is measured by what reached the partners."
          imgClassName="photo-landscape"
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
