import { useEffect, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import WindmillMark from "./WindmillMark";
import { krewe, links, nav } from "../content";

type Props = { children: ReactNode; backstage?: boolean };
const program = [...nav.slice(0, 2), { to: "/company", label: "Members" }, ...nav.slice(2)];

export default function Layout({ children, backstage = false }: Props) {
  const { pathname } = useLocation(); const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <>
    <a className="skip" href="#main">Skip to content</a>
    <header className="site-header">
      <NavLink to="/" className="brand"><span className="brand-crest"><WindmillMark size={28} decorative /></span><span className="brand-name">{krewe.name}<small>Tampa Bay · Est. {krewe.founded}</small></span></NavLink>
      <nav className="nav desktop-nav" aria-label="Main navigation">{!backstage && program.map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}<NavLink to="/stage-door" className="stage-door">Stage Door</NavLink></nav>
      <button type="button" className="menu-toggle" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>{open ? "Close" : "Menu"}</button>
    </header>
    {open ? <nav id="mobile-nav" className="mobile-nav" aria-label="Main navigation">{program.map((link) => <NavLink key={link.to} to={link.to}>{link.label}</NavLink>)}<NavLink to="/stage-door" className="stage-door">Stage Door</NavLink></nav> : null}
    <main id="main">{children}</main>
    <footer className="site-footer"><div className="wrap footer-grid"><div><p><strong>{krewe.fullName}</strong></p><p>{krewe.city} · Established {krewe.founded}</p><p className="footer-motto">{krewe.motto.join(" · ")}</p><p>{krewe.tagline}</p></div><div className="footer-links"><a href={links.shop} target="_blank" rel="noreferrer">Visit the LBF shop</a><NavLink to="/apply">Membership</NavLink><NavLink to="/calendar">Events</NavLink><NavLink to="/giving-back">Giving Back</NavLink></div></div></footer>
  </>;
}
