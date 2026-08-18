import {
  chapterEmail,
  instagramUrl,
  nationalUrl,
  sitePath,
} from "../site-data";

type JoinOptionsProps = {
  compact?: boolean;
};

export function JoinOptions({ compact = false }: JoinOptionsProps) {
  const nonprofitEmail = `mailto:${chapterEmail}?subject=${encodeURIComponent(
    "Nonprofit partnership inquiry",
  )}`;

  return (
    <section
      className={compact ? "join-options-section compact" : "join-options-section"}
      aria-labelledby={compact ? "get-involved-home" : "get-involved"}
    >
      <div className="shell">
        <div className="join-options-heading">
          <p className="eyebrow">Get involved</p>
          <h2 id={compact ? "get-involved-home" : "get-involved"}>
            Two ways to work with us.
          </h2>
        </div>

        <div className="join-options-grid">
          <article id="students" className="join-option student-option">
            <p className="card-eyebrow">For UCLA students</p>
            <h3>Join the chapter.</h3>
            <p>
              Apply to work on data projects for healthcare nonprofits.
            </p>
            <div className="join-option-actions">
              <a
                className="button button-dark student-join-button"
                href={sitePath("/recruitment")}
              >
                Join the chapter <span aria-hidden="true">→</span>
              </a>
              <a className="text-link" href={instagramUrl} target="_blank" rel="noreferrer">
                Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article id="nonprofits" className="join-option nonprofit-option">
            <p className="card-eyebrow">For healthcare nonprofits</p>
            <h3>Partner with our team.</h3>
            <p>
              Have a data question or project? Tell us what your organization
              needs, and we’ll explore whether we’re a good fit.
            </p>
            <div className="join-option-actions">
              <a className="button button-dark" href={nonprofitEmail}>
                Email UCLA BioKind <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={nationalUrl} target="_blank" rel="noreferrer">
                National BioKind <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}
