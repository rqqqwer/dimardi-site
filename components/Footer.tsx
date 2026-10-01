import Link from "next/link";
import ContactDetails from "./ContactDetails";

const groups = [
  { heading: "SHOP", links: [["Watches", "/watches"], ["New Arrivals", "/new-arrivals"]] },
  { heading: "DIMARDI", links: [["About", "/about"], ["Sell Your Watch", "/sell-your-watch"], ["Contact", "/contact"]] },
  { heading: "INFORMATION", links: [["Shipping", "/shipping"], ["Returns", "/returns"], ["Terms", "/terms"], ["Privacy", "/privacy"]] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div className="footer-brand"><Link className="wordmark" href="/">DIMARDI<span className="logo-dot">.</span></Link><p>Pre-owned and carefully selected watches.<br/>A considered approach to time.</p></div>
          {groups.map(group => <nav key={group.heading} aria-label={`${group.heading} footer navigation`}><h2>{group.heading}</h2>{group.links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>)}
          <div className="footer-contact"><h2>CONTACT</h2><ContactDetails/></div>
        </div>
        <div className="footer-bottom"><p>© 2026 DIMARDI. All rights reserved.</p><div className="footer-social"><span>Instagram <span className="sr-only">— link coming soon</span></span><span>Facebook <span className="sr-only">— link coming soon</span></span></div><span>TIMELESS BY NATURE.</span></div>
      </div>
    </footer>
  );
}
