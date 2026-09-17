import type { Metadata } from "next";
import { JoinOptions } from "./components/JoinOptions";
import { assetPath, practiceAreas, projectSteps, sitePath } from "./site-data";

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
              <h2>Build your skills. Support a nonprofit.</h2>
              <p className="services-intro">
                Work in a team of 10–12 student analysts with a faculty advisor
                and project lead. Apply what you learn in class to real
                questions in healthcare.
              </p>
            </div>
            <a className="text-link" href={sitePath("/showcase")}>
              Explore our projects <span aria-hidden="true">→</span>
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

          <div className="student-project-process">
            <p className="eyebrow">How a project works</p>
            <h3>From the first question to the final presentation.</h3>
            <p className="project-process-intro">
              A typical project runs six to ten weeks. You&apos;ll take part in
              each stage, with support from your team.
            </p>
            <ol className="project-step-grid">
              {projectSteps.map((step) => (
                <li key={step.number}>
                  <span className="project-step-number" aria-hidden="true">
                    {step.number}
                  </span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
            <a className="text-link" href={sitePath("/recruitment")}>
              Join the chapter <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <JoinOptions compact />
    </main>
  );
}
