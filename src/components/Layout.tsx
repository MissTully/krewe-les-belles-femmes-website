import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import WindmillMark from "./WindmillMark";

type Props = {
  children: ReactNode;
  backstage?: boolean;
};

const publicLinks = [
  { to: "/heritage", label: "Heritage" },
  { to: "/fellowship", label: "Fellowship" },
  { to: "/giving-back", label: "Giving Back" },
  { to: "/soiree", label: "Silver Soirée" },
  { to: "/underwriters", label: "Underwriters" },
  { to: "/apply", label: "Apply" },
];

export default function Layout({ children, backstage = false }: Props) {
  return (
    <>
      <header className="site-header">
        <NavLink to="/" className="brand">
          <WindmillMark size={34} />
          <span className="brand-name">
            Les Belles Femmes
            <small>Tampa · Est. 2002</small>
          </span>
        </NavLink>
        <nav className="nav" aria-label="Primary">
          {!backstage &&
            publicLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          <NavLink to="/stage-door" className="stage-door">
            Stage Door
          </NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="wrap">
          <p>
            <strong>Krewe of Les Belles Femmes</strong> · Tampa, Florida · Founded 2002
          </p>
          <p>Truth · Beauty · Freedom · Love. Beauty with purpose.</p>
          <p>
            A private social organization. This site is the public Front Stage for the 25th year.
            Member tools live behind the Stage Door and open in 2027.
          </p>
        </div>
      </footer>
    </>
  );
}
