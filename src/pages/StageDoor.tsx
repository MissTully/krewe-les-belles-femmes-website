import { FormEvent, useState } from "react";
import WindmillMark from "../components/WindmillMark";
import { art } from "../content";

export default function StageDoor() {
  const [tried, setTried] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTried(true);
  }

  return (
    <div className="stage-scene">
      <img src={art.curtain} alt="" className="stage-scene-photo" />
      <div className="stage-scene-veil" />
      <div className="door-card">
        <img
          className="door-poster"
          src={art.stageDoorPoster}
          alt="Stage Door playbill: three women at a brick stage entrance under a hanging lantern."
        />
        <WindmillMark size={36} />
        <p className="eyebrow">Backstage</p>
        <h1>Stage Door</h1>
        <p>
          Behind this imaginary curtain, the Belles keep book-club picks, costume sketches, and
          parade-day snack maps. There are no real accounts here.
        </p>
        {tried ? (
          <p className="banner-locked" role="status">
            The Stage Door is make-believe; no account was created.
          </p>
        ) : (
          <form onSubmit={onSubmit}>
            <label>
              Email
              <input type="email" name="email" autoComplete="username" required />
            </label>
            <label>
              Password
              <input type="password" name="password" autoComplete="current-password" required />
            </label>
            <button type="submit">Enter the make-believe</button>
          </form>
        )}
        <p className="fine-print">
          This is a decorative form for a hypothetical group. Please do not enter a real password.
        </p>
      </div>
    </div>
  );
}
