import { FormEvent } from "react";

export default function StageDoor() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="door-card">
      <p className="eyebrow">Members only</p>
      <h1>Stage Door</h1>
      <p>
        Roster, dues, and photo permissions open here in January 2027. This form does not log
        anyone in yet.
      </p>
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
      <p className="fine-print">
        Accounts will be created from the official krewe roster. Do not invent a password for a
        sister who has not been invited.
      </p>
    </div>
  );
}
