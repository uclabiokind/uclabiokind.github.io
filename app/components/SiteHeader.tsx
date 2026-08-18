"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { assetPath, basePath, navItems, sitePath } from "../site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const routePath =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;

  const isActive = (href: string) =>
    href === "/" ? routePath === "/" : routePath.startsWith(href);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href={sitePath("/")} aria-label="UCLA BioKind Analytics home">
          <img
            src={assetPath("/images/biokind-logo-header.png")}
            alt="BioKind Analytics"
            width="8000"
            height="2268"
          />
          <span className="brand-chapter">UCLA</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              href={sitePath(item.href)}
              key={item.href}
              className={isActive(item.href) ? "nav-link active" : "nav-link"}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
          <a className="button button-small button-dark" href={sitePath("/join")}>
            Get involved <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className={menuOpen ? "menu-toggle open" : "menu-toggle"}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={menuOpen ? "mobile-nav open" : "mobile-nav"}
        id="mobile-navigation"
      >
        <nav className="shell" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              href={sitePath(item.href)}
              key={item.href}
              className={isActive(item.href) ? "mobile-link active" : "mobile-link"}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
          <a className="button button-mint mobile-join" href={sitePath("/join")}>
            Get involved <span aria-hidden="true">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
