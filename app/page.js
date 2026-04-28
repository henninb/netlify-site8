const sites = [
  { name: 'brianhenning.com', href: 'https://brianhenning.com' },
  { name: 'bhenning.com', href: 'https://bhenning.com' },
  { name: 'site1', href: 'https://site1.bhenning.com' },
  { name: 'site2', href: 'https://site2.bhenning.com' },
  { name: 'site3', href: 'https://site3.bhenning.com' },
  { name: 'site4', href: 'https://site4.bhenning.com' },
  { name: 'site5', href: 'https://site5.bhenning.com' },
  { name: 'site6', href: 'https://site6.bhenning.com' },
  { name: 'site7', href: 'https://site7.bhenning.com' },
  { name: 'site8', href: 'https://site8.bhenning.com' },
  { name: 'site9', href: 'https://site9.bhenning.com' },
];

export default function HomePage() {
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
