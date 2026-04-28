'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [baseDomain, setBaseDomain] = useState('bhenning.com')

  useEffect(() => {
    const parts = window.location.hostname.split('.')
    if (parts.length >= 2) setBaseDomain(parts.slice(-2).join('.'))
  }, [])

  const sites = Array.from({ length: 9 }, (_, i) => ({
    name: `site${i + 1}`,
    href: `https://site${i + 1}.${baseDomain}`,
  }))

  return (
    <>
      <header>
        <p className="header-eyebrow">bhenning.com / dashboard</p>
        <h1>
          site<em>8</em>
        </h1>
        <p className="header-sub">tools &amp; utilities - select a destination (next.js)</p>
        <div className="header-rule" />
      </header>

      <main>
        <section>
          <div className="section-label">
            <h2>Sites</h2>
          </div>

          <div className="grid">
            {sites.map((site, index) => (
              <a
                key={site.name}
                href={site.href}
                className="card"
                style={{ animationDelay: `${0.04 + index * 0.03}s` }}
              >
                <span className="card-name">{site.name}</span>
                <span className="card-path">{site.href.replace('https://', '')}</span>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer>bhenning.com - site8</footer>
    </>
  );
}
