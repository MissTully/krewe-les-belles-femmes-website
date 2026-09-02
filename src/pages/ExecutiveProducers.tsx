import { Link } from "react-router-dom";
import Ornament from "../components/Ornament";
import PhotoPlate from "../components/PhotoPlate";
import { art } from "../content";

export default function ExecutiveProducers() {
  return <article className="page wrap refined-page"><p className="eyebrow">Support LBF</p><h1>Support the Krewe</h1><Ornament /><div className="split heritage-lead"><div className="prose"><p className="lead-copy">Help keep the pageantry, fellowship, and community spirit of Les Belles Femmes moving forward.</p><p>The supplied information describes LBF as a Tampa Bay women's krewe with year-round socials, book club, galas, themed balls, parade participation, and charitable involvement.</p><p>For current sponsorship, underwriting, donations, or other support opportunities, please connect directly with the krewe rather than relying on unconfirmed amounts or payment details on this site.</p><Link className="ticket red" to="/apply">Contact LBF</Link></div><PhotoPlate src={art.playbillStill} alt="Les Belles Femmes program artwork." caption="Support the women behind the celebration." imgClassName="photo-portrait" /></div></article>;
}
