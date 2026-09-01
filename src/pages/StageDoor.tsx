import { FormEvent, useState } from "react";
import WindmillMark from "../components/WindmillMark";

export default function StageDoor() {
  const [tried, setTried] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTried(true);
  }

  return (
    <div className="stage-scene">
      <img src="/art/velvet.jpg" alt="" className="stage-scene-photo" />
      <div className="stage-scene-veil" />
      <div className="door-card">
        <WindmillMark size={40} />
        <p className="eyebrow">Members only</p>
        <h1>Stage Door</h1>
        <p>
          Roster, dues, and photo permissions open here in January 2027. This form does not log
          anyone in yet.
        </p>
        {tried ? (
          <p className="banner-locked" role="status">
            Not yet. Accounts will be created from the official krewe roster. Wait for your
            officer.
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
            <button type="submit">Not yet</button>
          </form>
        )}
        <p className="fine-print">
          Accounts will be created from the official krewe roster. Do not invent a password for a
          sister who has not been invited.
        </p>
      </div>
    </div>
  );
}
