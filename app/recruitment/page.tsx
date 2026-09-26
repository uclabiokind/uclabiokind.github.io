import type { Metadata } from "next";
import {
  chapterEmail,
  instagramUrl,
  recruitment,
  projectSteps,
} from "../site-data";

export const metadata: Metadata = {
  title: "Student Recruitment",
  description:
    "Learn how UCLA students can join BioKind Analytics and view the recruitment process.",
};

export default function RecruitmentPage() {
  return (
    <main id="main-content">
      <section className="simple-join-hero student-recruitment-hero">
        <div className="shell reveal">
          <p className="eyebrow eyebrow-light">For UCLA students</p>
          <h1>Join the chapter.</h1>
          <p>
            Work with other UCLA students on data projects for healthcare
            nonprofits.
          </p>
          <a className="button button-mint" href="#recruitment-timeline">
            View the timeline <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="section recruitment-status-section">
        <div className="shell recruitment-status-grid">
          <div>
            <p className="eyebrow">Current recruitment</p>
            <h2>{recruitment.status}</h2>
          </div>
          <div className="recruitment-status-copy">
            <div className="button-row">
              {recruitment.applicationUrl ? (
                <a
                  className="button button-dark"
                  href={recruitment.applicationUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply now <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <a
                  className="button button-dark"
                  href={recruitment.updatesUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Join the general interest mailing list{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              )}
              <a
                className="text-link"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
                Follow Instagram <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section recruitment-page-section section-cream"
        id="recruitment-timeline"
      >
        <div className="shell">
          <div className="simple-section-heading">
            <div>
              <h2>Fall 2026 recruitment timeline.</h2>
            </div>
            <a className="text-link" href={`mailto:${chapterEmail}`}>
              Ask a question <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="recruitment-timeline-list">
            {recruitment.timeline.map((step) => (
              <article key={step.number}>
                <span className="recruitment-step-number">{step.number}</span>
                <span className="recruitment-step-timing">{step.timing}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  {step.link && (
                    <a
                      className="text-link"
                      href={step.link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {step.link.label} <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <div className="student-project-process">
            <p className="eyebrow">How a project works</p>
            <h2>From the first question to the final presentation.</h2>
            <p className="project-process-intro">
              A typical project runs six to ten weeks. You&apos;ll take part in
              each stage, with support from your team.
            </p>
            <ol className="project-step-grid">
              {projectSteps.map((step) => (
                <li key={step.number}>
                  <span className="project-step-number" aria-hidden="true">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
