import type { Metadata } from "next";
import { practiceAreas, sitePath } from "../site-data";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "See the types of data projects UCLA BioKind can support for healthcare nonprofits.",
};

export default function ShowcasePage() {
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

      <section className="section simple-capabilities-section section-cream">
        <div className="shell">
          <div className="simple-section-heading">
            <div>
              <p className="eyebrow">Project examples</p>
              <h2>Three common starting points.</h2>
            </div>
          </div>
          <div className="simple-service-grid">
            {practiceAreas.map((area) => (
              <article className="simple-service-card" key={area.number}>
                <p className="card-eyebrow">{area.eyebrow}</p>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
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
