const partners = [
  {
    name: "The Spring of Tampa Bay",
    note: "Shelter and advocacy for people leaving domestic violence.",
  },
  {
    name: "Best Buddies",
    note: "Friendship and inclusion for people with intellectual and developmental disabilities.",
  },
  {
    name: "Pediatric Cancer Foundation",
    note: "Support for children and families facing pediatric cancer.",
  },
  {
    name: "Koncert 4 Kids",
    note: "Music and community events that raise money for children in care.",
  },
];

export default function GivingBack() {
  return (
    <article className="page wrap">
      <p className="eyebrow">Act III</p>
      <h1>Giving Back</h1>
      <div className="prose">
        <p>
          Beauty with purpose. The public photographs the float. The krewe measures the year by
          what reached the partners below. Confirm names and gift language with the board before
          treating this list as final.
        </p>
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
