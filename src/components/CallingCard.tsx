import {
  monogram,
  roleLabel,
  socialDisplay,
  socialLabels,
  socialUrl,
  type CallingCard as Card,
} from "../members";

type Props = {
  card: Card;
  /** Mark sample house cards so a guest does not treat them as roster. */
  sample?: boolean;
  /** Show copy-link and keep-in-case actions. */
  actions?: {
    onCopyLink?: () => void;
    onKeep?: () => void;
    copyState?: string;
    keepState?: string;
  };
};

export default function CallingCard({ card, sample = false, actions }: Props) {
  const links = card.socials.filter((item) => item.handle.trim());

  return (
    <article className="calling-card">
      <header className="calling-card-top">
        <span className="calling-mono" aria-hidden="true">
          {monogram(card.name)}
        </span>
        <div>
          <p className="eyebrow">
            {roleLabel(card.role)}
            {card.seasonJoined ? ` · ${card.seasonJoined}` : ""}
          </p>
          <h3>{card.name}</h3>
          {card.office ? <p className="calling-office">{card.office}</p> : null}
        </div>
      </header>

      <p className="calling-line">{card.line}</p>

      {card.houseLine ? (
        <p className="calling-house italic">{card.houseLine}</p>
      ) : null}

      {links.length > 0 ? (
        <ul className="calling-socials">
          {links.map((item) => {
            const href = socialUrl(item);
            return (
              <li key={`${item.kind}-${item.handle}`}>
                {href ? (
                  <a href={href} target="_blank" rel="noreferrer">
                    <span>{socialLabels[item.kind]}</span>
                    <em>{socialDisplay(item)}</em>
                  </a>
                ) : (
                  <span>
                    <span>{socialLabels[item.kind]}</span>
                    <em>{socialDisplay(item)}</em>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="fine-copy">No public social accounts on this card.</p>
      )}

      {sample ? <p className="calling-flag">Sample voice. Not a roster.</p> : null}

      {actions ? (
        <div className="calling-actions">
          {actions.onCopyLink ? (
            <button type="button" className="ticket" onClick={actions.onCopyLink}>
              {actions.copyState || "Copy card link"}
            </button>
          ) : null}
          {actions.onKeep ? (
            <button type="button" className="ticket red" onClick={actions.onKeep}>
              {actions.keepState || "Keep in my case"}
            </button>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
