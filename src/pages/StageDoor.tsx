import WindmillMark from "../components/WindmillMark";
import { art } from "../content";

export default function StageDoor() {
  return <div className="stage-scene"><img src={art.curtain} alt="" className="stage-scene-photo" /><div className="stage-scene-veil" /><div className="door-card"><img className="door-poster" src={art.stageDoorPoster} alt="Les Belles Femmes Stage Door artwork." /><WindmillMark size={36} /><p className="eyebrow">Members</p><h1>Stage Door</h1><p>Member-only information belongs behind the curtain. This area is reserved for official LBF communications, member resources, and parade details.</p><p className="banner-locked" role="status">Member access is not yet connected on this website.</p><p className="fine-print">Please use the krewe’s established member communications for private information. Never enter a real password into an unverified form.</p></div></div>;
}
