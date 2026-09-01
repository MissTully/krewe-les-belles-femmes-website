import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art } from "../content";

export default function Heritage() {
  return (
    <article className="page wrap">
      <p className="eyebrow">Act I</p>
      <h1>Heritage</h1>
      <Ornament />
      <div className="split">
        <div className="prose">
          <p>
            Les Belles Femmes was founded in 2002. The krewe takes its public face from Belle Époque
            cabaret and its work from Tampa. The windmill on the float is a house mark. It is not a
            nightclub franchise.
          </p>
          <p>
            This page will hold the official written history once the board delivers it. Until then,
            the record is simple: twenty-five years of women leading a krewe, raising money for
            partners who need it, and teaching the next class what the motto means.
          </p>
          <p className="display italic">Motto: Truth, Beauty, Freedom, Love.</p>
          <p>
            Year-round there are socials, a book club, galas, the Silver Soirée, and themed balls.
            The parades Tampa already knows: Gasparilla in late January, the Sant' Yago Knight
            Parade through Ybor in mid-February, and the holiday routes besides.
          </p>
          <Link className="ticket" to="/soiree">
            The Silver Soirée
          </Link>
        </div>
        <PhotoPlate
          src={art.pinwheel}
          alt="A silver paper windmill with a red ribbon, held in a hand."
          caption="The house mark, small enough to hold."
          imgClassName="photo-square"
        />
      </div>
      <div className="stack-gap">
        <PhotoPlate
          src={art.dusk}
          alt="A Tampa parade street at dusk, drawn as a lithograph."
          caption="Tampa at dusk. The route is older than the krewe."
          imgClassName="photo-wide"
        />
      </div>
      <div className="stack-gap">
        <PhotoPlate
          src={art.windmill}
          alt="Original house mark painting of a wooden windmill with a cabaret-red door."
          caption="The house mark. Ours, not a Paris franchise."
          imgClassName="photo-square"
        />
      </div>
    </article>
  );
}
