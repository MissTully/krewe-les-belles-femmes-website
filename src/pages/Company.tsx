import { FormEvent, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CallingCardView from "../components/CallingCard";
import Ornament from "../components/Ornament";
import { houseLines } from "../content";
import {
  getCallingCard,
  getCardCase,
  keepCard,
  saveCallingCard,
} from "../forms";
import {
  cardSharePath,
  company,
  emptyCard,
  readSharedCard,
  socialLabels,
  type CallingCard,
  type MemberRole,
  type SocialKind,
} from "../members";

const socialKinds = Object.keys(socialLabels) as SocialKind[];

type Filter = "all" | MemberRole;

function newId() {
  return `card-${Date.now()}`;
}

export default function Company() {
  const location = useLocation();
  const navigate = useNavigate();
  const shared = useMemo(() => readSharedCard(location.search), [location.search]);

  const [filter, setFilter] = useState<Filter>("all");
  const [draft, setDraft] = useState<CallingCard>(emptyCard);
  const [caseCards, setCaseCards] = useState<CallingCard[]>([]);
  const [savedNote, setSavedNote] = useState("");
  const [copyNote, setCopyNote] = useState("");
  const [keepNote, setKeepNote] = useState("");

  useEffect(() => {
    setDraft(getCallingCard() ?? emptyCard());
    setCaseCards(getCardCase());
  }, []);

  const shown = company.filter((card) => (filter === "all" ? true : card.role === filter));

  function onSaveMine(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.name.trim() || !draft.line.trim()) {
      setSavedNote("A card needs a name and one sentence.");
      return;
    }
    const saved = saveCallingCard({
      ...draft,
      id: draft.id && draft.id !== "mine" ? draft.id : newId(),
      socials: draft.socials.filter((item) => item.handle.trim()),
    });
    setDraft(saved);
    setSavedNote("Saved on this device only. Copy the link if you want a sister to see it.");
  }

  async function copyLink(card: CallingCard) {
    const url = `${window.location.origin}${cardSharePath(card)}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopyNote("Link copied.");
    } catch {
      window.prompt("Copy this card link", url);
      setCopyNote("Link ready.");
    }
  }

  function onKeep(card: CallingCard) {
    setCaseCards(keepCard(card));
    setKeepNote(`Kept ${card.name} in your case on this device.`);
  }

  function setSocial(index: number, field: "kind" | "handle", value: string) {
    setDraft((current) => {
      const socials = current.socials.map((item, i) =>
        i === index
          ? { ...item, [field]: field === "kind" ? (value as SocialKind) : value }
          : item,
      );
      return { ...current, socials };
    });
  }

  function addSocialRow() {
    setDraft((current) => ({
      ...current,
      socials: [...current.socials, { kind: "instagram", handle: "" }],
    }));
  }

  return (
    <article className="page wrap">
      <p className="eyebrow">Front of house · The Company</p>
      <h1>Calling cards</h1>
      <Ornament />
      <div className="prose">
        <p>
          A Belle should be easy to find after the parade, and hard to mistake for a mailing
          list. These cards use initials, one sentence, and only the social accounts a woman
          chooses to show. No portraits. No generated faces. No roster until Stage Door opens.
        </p>
        <p className="fine-copy">
          The printed company below is sample voice. Your own card and any card you keep live
          on this browser only. A shared link carries the card in the address. It is not an
          account.
        </p>
      </div>

      {shared ? (
        <section className="stack-gap shared-card">
          <p className="eyebrow">A card arrived</p>
          <h2 className="section-title">Someone sent you this</h2>
          <CallingCardView
            card={shared}
            actions={{
              onCopyLink: () => copyLink(shared),
              onKeep: () => onKeep(shared),
              copyState: copyNote || undefined,
              keepState: keepNote || undefined,
            }}
          />
          <button type="button" className="ticket" onClick={() => navigate("/company")}>
            Clear the shared card
          </button>
        </section>
      ) : null}

      <section className="stack-gap">
        <div className="company-toolbar">
          <div>
            <p className="eyebrow">House company</p>
            <h2 className="section-title">The sample playbill</h2>
          </div>
          <div className="filter-row" role="group" aria-label="Filter the company">
            {(
              [
                ["all", "All"],
                ["belle", "Belles"],
                ["officer", "Officers"],
                ["beau", "Les Beaux"],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={filter === value ? "ticket red" : "ticket"}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className="company-grid">
          {shown.map((card) => (
            <CallingCardView
              key={card.id}
              card={card}
              sample
              actions={{
                onCopyLink: () => copyLink(card),
                onKeep: () => onKeep(card),
              }}
            />
          ))}
        </div>
      </section>

      <section className="stack-gap split company-desk">
        <form className="panel card-form" onSubmit={onSaveMine}>
          <p className="eyebrow">Your desk</p>
          <h2>Write your calling card</h2>
          <p className="fine-copy">
            Put only what you would hand a sister on a cream card. Skip any network you do
            not want next to your name.
          </p>

          <div className="form-row">
            <label>
              Name
              <input
                name="name"
                value={draft.name}
                onChange={(event) => setDraft({ ...draft, name: event.target.value })}
                required
                autoComplete="name"
              />
            </label>
            <label>
              Place in the house
              <select
                name="role"
                value={draft.role}
                onChange={(event) =>
                  setDraft({ ...draft, role: event.target.value as MemberRole })
                }
              >
                <option value="belle">Belle</option>
                <option value="officer">Officer</option>
                <option value="beau">Les Beaux</option>
              </select>
            </label>
            <label>
              Office or habit
              <input
                name="office"
                value={draft.office ?? ""}
                onChange={(event) => setDraft({ ...draft, office: event.target.value })}
                placeholder="Book club, costume table, extra bag"
              />
            </label>
            <label>
              Season joined
              <input
                name="seasonJoined"
                value={draft.seasonJoined ?? ""}
                onChange={(event) => setDraft({ ...draft, seasonJoined: event.target.value })}
                placeholder="2014 or First season"
              />
            </label>
            <label>
              One sentence
              <textarea
                name="line"
                value={draft.line}
                onChange={(event) => setDraft({ ...draft, line: event.target.value })}
                required
                maxLength={180}
              />
            </label>
            <label>
              House line
              <select
                name="houseLine"
                value={draft.houseLine ?? ""}
                onChange={(event) => setDraft({ ...draft, houseLine: event.target.value })}
              >
                <option value="">None</option>
                {houseLines.map((line) => (
                  <option key={line} value={line}>
                    {line}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <p className="eyebrow" style={{ marginTop: "1.2rem" }}>
            Social accounts
          </p>
          {draft.socials.map((item, index) => (
            <div className="social-row" key={`${item.kind}-${index}`}>
              <label>
                Network
                <select
                  value={item.kind}
                  onChange={(event) => setSocial(index, "kind", event.target.value)}
                >
                  {socialKinds.map((kind) => (
                    <option key={kind} value={kind}>
                      {socialLabels[kind]}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Handle or address
                <input
                  value={item.handle}
                  onChange={(event) => setSocial(index, "handle", event.target.value)}
                  placeholder="@name or full web address"
                  autoComplete="off"
                />
              </label>
            </div>
          ))}
          <button type="button" className="ticket" onClick={addSocialRow}>
            Add another network
          </button>

          <div className="hero-actions" style={{ justifyContent: "flex-start", marginTop: "1.1rem" }}>
            <button type="submit" className="ticket red">
              Save on this device
            </button>
            <button
              type="button"
              className="ticket"
              onClick={() => draft.name && draft.line && copyLink(draft)}
            >
              Copy my card link
            </button>
          </div>
          {savedNote ? (
            <p className="banner-ok" role="status">
              {savedNote}
            </p>
          ) : null}
          {copyNote ? <p className="fine-copy">{copyNote}</p> : null}
        </form>

        <div>
          <p className="eyebrow">Preview</p>
          <h2 className="section-title">How it will read</h2>
          {draft.name.trim() && draft.line.trim() ? (
            <CallingCardView card={draft} />
          ) : (
            <p className="fine-copy">Name and one sentence first. The card appears here.</p>
          )}

          <div className="stack-gap">
            <p className="eyebrow">Card case</p>
            <h2 className="section-title">Sisters you kept</h2>
            {caseCards.length === 0 ? (
              <p className="fine-copy">
                Open a shared link, then keep the card. The case stays on this phone until
                the browser forgets it.
              </p>
            ) : (
              <div className="company-grid company-grid-tight">
                {caseCards.map((card) => (
                  <CallingCardView key={card.id} card={card} />
                ))}
              </div>
            )}
            {keepNote ? (
              <p className="banner-ok" role="status">
                {keepNote}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </article>
  );
}
