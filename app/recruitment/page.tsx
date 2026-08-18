import type { Metadata } from "next";
import {
  chapterEmail,
  instagramUrl,
  recruitment,
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
            <p>
              This page will always show the latest process and application link
              when the application cycle opens.
            </p>
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
              <h2>Recruitment timeline.</h2>
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
                </div>
              </article>
            ))}
          </div>
          <p className="recruitment-timeline-note">
            Exact dates are posted here and on Instagram when each recruitment
            cycle is confirmed.
          </p>
        </div>
      </section>
    </main>
  );
}
