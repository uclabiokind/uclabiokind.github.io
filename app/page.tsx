import type { Metadata } from "next";
import { JoinOptions } from "./components/JoinOptions";
import { assetPath, practiceAreas, sitePath } from "./site-data";

export const metadata: Metadata = {
  title: { absolute: "UCLA BioKind Analytics — Data Science for Good" },
  description:
    "UCLA students helping Los Angeles healthcare nonprofits turn data into action.",
};

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero simplified-hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="shell home-hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow eyebrow-light">UCLA · Data science for good</p>
            <h1>
              Better data.
              <br />
              <em>Brighter outcomes.</em>
            </h1>
            <p className="hero-lede">
              UCLA students helping Los Angeles healthcare nonprofits turn data
              into action.
            </p>
            <a className="button button-mint" href={sitePath("/showcase")}>
              See how we help <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div className="hero-image-frame">
              <img
                src={assetPath("/images/team-working.jpg")}
                alt="Royce Hall on the UCLA campus at sunset"
              />
            </div>
            <div className="insight-card" aria-label="Our focus">
              <div className="insight-card-top">
                <span>Our focus</span>
                <span className="live-dot">Los Angeles, CA</span>
              </div>
              <strong>Healthcare × Analytics</strong>
              <div className="mini-bars" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <small>A student-run UCLA chapter.</small>
            </div>
            <div className="hero-stamp" aria-hidden="true">
              <span>UCLA</span>
              <span>↘</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section simple-services-section">
        <div className="shell">
          <div className="simple-section-heading">
            <div>
              <p className="eyebrow">What we do</p>
              <h2>Practical analysis for nonprofit teams.</h2>
            </div>
            <a className="text-link" href={sitePath("/showcase")}>
              View our capabilities <span aria-hidden="true">→</span>
            </a>
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

      <JoinOptions compact />
    </main>
  );
}
