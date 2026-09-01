const levels = [
  {
    name: "Friend of the Anniversary",
    amount: "$25",
    note: "Named in the digital program.",
  },
  {
    name: "Family or Business Underwriter",
    amount: "$350",
    note: "Named with a short line in the program. No homepage banner.",
  },
];

export default function Underwriters() {
  return (
    <article className="page wrap">
      <p className="eyebrow">The program</p>
      <h1>Underwriters</h1>
      <div className="prose">
        <p>
          The 25th-year digital home can be paid for by anniversary gifts instead of the operating
          budget. Les Belles Femmes is a 501(c)(7) social organization. These gifts are not
          tax-deductible. Have the krewe accountant review the invitation wording.
        </p>
      </div>
      <div className="underwriter-grid">
        {levels.map((level) => (
          <section className="panel" key={level.name}>
            <p className="eyebrow">{level.amount}</p>
            <h2>{level.name}</h2>
            <p>{level.note}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
