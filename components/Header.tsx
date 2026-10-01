"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { mainNavigation } from "@/lib/siteConfig";

export default function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDetailsElement>(null);
  const links = mainNavigation.map(({ label, href }) => {
    const active = pathname === href || pathname.startsWith(`${href}/`);
    return <Link key={href} href={href} aria-current={active ? "page" : undefined} onClick={() => { if (menuRef.current) menuRef.current.open = false; }}>{label}</Link>;
  });

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="wordmark" href="/" aria-label="DIMARDI home">DIMARDI<span className="logo-dot">.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{links}</nav>
        <div className="header-actions">
          <button className="icon-button" aria-label="Open search preview" popoverTarget="search-preview">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.4"/><path d="m16 16 4.5 4.5" stroke="currentColor" strokeWidth="1.4"/></svg>
          </button>
          <details className="mobile-menu" ref={menuRef} onKeyDown={event => { if (event.key === "Escape" && menuRef.current) { menuRef.current.open = false; menuRef.current.querySelector("summary")?.focus(); } }}>
            <summary aria-label="Toggle navigation"><span/><span/></summary>
            <nav aria-label="Mobile navigation">{links}</nav>
          </details>
        </div>
      </div>
      <div id="search-preview" popover="auto" className="search-preview">
        <div className="flex items-center justify-between gap-8"><h2>Search watches</h2><button className="icon-button" popoverTarget="search-preview" popoverTargetAction="hide" aria-label="Close search">×</button></div>
        <p>Search will be available when the collection is added.</p>
      </div>
    </header>
  );
}
