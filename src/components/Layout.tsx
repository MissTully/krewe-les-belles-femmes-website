import { useEffect, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import WindmillMark from "./WindmillMark";
import { krewe, links, nav } from "../content";

type Props = {
  children: ReactNode;
  backstage?: boolean;
};

export default function Layout({ children, backstage = false }: Props) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink to="/" className="brand">
          <span className="brand-crest">
            <WindmillMark size={28} decorative />
          </span>
          <span className="brand-name">
            {krewe.name}
            <small>
              {krewe.city} · Est. {krewe.founded}
            </small>
          </span>
        </NavLink>
        <nav className="nav desktop-nav" aria-label="House program">
          {!backstage &&
            nav.map((link) => (
              <NavLink key={link.to} to={link.to}>
                {link.label}
              </NavLink>
            ))}
          <NavLink to="/stage-door" className="stage-door">
            Stage Door
          </NavLink>
        </nav>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close program" : "Open program"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Program"}
        </button>
      </header>
      {open ? (
        <nav id="mobile-nav" className="mobile-nav" aria-label="House program">
          {nav.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <NavLink to="/stage-door" className="stage-door">
            Stage Door
          </NavLink>
        </nav>
      ) : null}
      <main id="main">{children}</main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <p>
              <strong>{krewe.fullName}</strong>
            </p>
            <p>
              {krewe.city}, Florida · Founded {krewe.founded}
            </p>
            <p className="footer-motto">
              {krewe.motto.join(" · ")}. {krewe.tagline}
            </p>
            <p>
              A private social organization. This site is the public Front Stage for the silver
              anniversary season. Company tools live behind the Stage Door and open in 2027.
            </p>
          </div>
          <div className="footer-links">
            <p>{links.mailing}</p>
            <a href={links.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={links.shop} target="_blank" rel="noreferrer">
              House shop
            </a>
            <NavLink to="/apply">Casting inquiry</NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}
