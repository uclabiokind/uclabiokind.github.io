import type { Metadata } from "next";
import { assetPath, showcasePartners, sitePath } from "../site-data";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "See the types of data projects UCLA BioKind can support for healthcare nonprofits.",
};

export default function ShowcasePage() {
  const featuredPartners = showcasePartners.filter((partner) => partner.featured);

  return (
    <main id="main-content">
      <section className="showcase-hero simple-showcase-hero">
        <div className="shell simple-showcase-copy reveal">
          <p className="eyebrow eyebrow-light">How we can help</p>
          <h1>
            Data support for
            <br />
            <em>healthcare nonprofits.</em>
          </h1>
          <p>
            We help healthcare nonprofits analyze donor, program, event, and
            campaign data.
          </p>
          <a className="button button-mint" href={`${sitePath("/join")}#nonprofits`}>
            Partner with us <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="section showcase-partners-section section-cream">
        <div className="shell">
          <div className="simple-section-heading">
            <div>
              <p className="eyebrow">Past partners</p>
              <h2>Organizations we&apos;ve worked with.</h2>
            </div>
          </div>
          <div className="partner-logo-grid">
            {showcasePartners.map((partner) => (
              <a
                className="partner-logo-card"
                href={partner.websiteUrl}
                target="_blank"
                rel="noreferrer"
                key={partner.id}
              >
                <img src={assetPath(partner.logo)} alt={`${partner.name} logo`} />
                <span>
                  {partner.name} <b aria-hidden="true">↗</b>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section selected-work-section">
        <div className="shell">
          <div className="simple-section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Selected nonprofit partnerships.</h2>
            </div>
          </div>

          <div className="case-study-list">
            {featuredPartners.map((partner) => (
              <article className="case-study" key={partner.id}>
                <div className="case-study-copy">
                  <p className="card-eyebrow">{partner.category}</p>
                  <h3>{partner.name}</h3>
                  <p className="case-study-summary">
                    {partner.organizationSummary}
                  </p>

                  {partner.projectQuestion && (
                    <div className="case-study-question">
                      <p className="case-study-label">Partner question</p>
                      <p>{partner.projectQuestion}</p>
                    </div>
                  )}

                  {partner.deliverables.length > 0 ? (
                    <div className="case-study-deliverables">
                      <p className="case-study-label">What we delivered</p>
                      <ul>
                        {partner.deliverables.map((deliverable) => (
                          <li key={deliverable}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="case-study-review-note">
                      Project details and approved visuals are coming soon.
                    </p>
                  )}

                  <a
                    className="text-link"
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit {partner.name} <span aria-hidden="true">↗</span>
                  </a>
                </div>

                <div className="case-study-media">
                  {partner.images.length > 0 ? (
                    <div className="case-study-image-grid">
                      {partner.images.map((image) => (
                        <figure key={image.src}>
                          <img src={assetPath(image.src)} alt={image.alt} />
                          <figcaption>{image.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                  ) : (
                    <div className="case-study-visual-placeholder">
                      <img src={assetPath(partner.logo)} alt="" aria-hidden="true" />
                      <p>Approved project visual</p>
                      <strong>Coming soon.</strong>
                      <span>
                        Screenshots will be redacted and added with partner
                        permission.
                      </span>
                    </div>
                  )}

                  {partner.reportExcerpt && (
                    <a
                      className="case-study-report-link"
                      href={assetPath(partner.reportExcerpt)}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View approved report excerpt
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="showcase-permission-note">
            Project visuals are shared only with partner permission and may use
            redacted or demonstration data.
          </p>
        </div>
      </section>

      <section className="section simple-deliverables-section">
        <div className="shell simple-deliverables-grid">
          <div>
            <p className="eyebrow">What partners receive</p>
            <h2>Reports, dashboards, and practical recommendations.</h2>
          </div>
          <div className="simple-deliverable-list">
            <p><span>01</span> Clear findings and recommendations</p>
            <p><span>02</span> A usable dashboard, report, or tool</p>
            <p><span>03</span> Documented methods and a practical handoff</p>
            <small>
              Public examples are illustrative. Partner work is shared only
              with permission.
            </small>
          </div>
        </div>
      </section>
    </main>
  );
}
