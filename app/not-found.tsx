import { sitePath } from "./site-data";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <div className="shell">
        <p className="eyebrow eyebrow-light">404</p>
        <h1>Page not found.</h1>
        <p>The page you’re looking for doesn’t exist.</p>
        <a className="button button-mint" href={sitePath("/")}>
          Return home <span aria-hidden="true">→</span>
        </a>
      </div>
    </main>
  );
}
