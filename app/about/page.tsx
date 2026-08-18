import type { Metadata } from "next";
import { nationalUrl } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "UCLA BioKind connects student analysts with Los Angeles healthcare nonprofits.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="page-hero quiet-page-hero">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy reveal">
            <p className="eyebrow eyebrow-light">About UCLA BioKind</p>
            <h1>
              UCLA students working with
              <br />
              <em>healthcare nonprofits.</em>
            </h1>
            <p>
              We connect UCLA undergraduates with healthcare nonprofits that
              need help understanding their data.
            </p>
          </div>
          <div
            className="simple-page-hero-image about-photo-placeholder reveal reveal-delay"
            role="img"
            aria-label="Image placeholder for UCLA BioKind together"
          >
            <span>Image of UCLA BioKind together</span>
          </div>
        </div>
      </section>

      <section className="section simple-about-section">
        <div className="shell simple-about-grid">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2>A student-run chapter at UCLA.</h2>
          </div>
          <div>
            <p className="large-copy">
              Our members bring together data science, statistics, computing,
              economics, and the life sciences.
            </p>
            <p>
              We are part of a national BioKind network with 23 university
              chapters and more than 80 healthcare nonprofit partners.
            </p>
            <a className="text-link" href={nationalUrl} target="_blank" rel="noreferrer">
              Visit national BioKind <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
