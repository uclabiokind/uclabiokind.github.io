import {
  assetPath,
  chapterEmail,
  instagramUrl,
  nationalUrl,
  sitePath,
} from "../site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div className="footer-brand">
          <img
            src={assetPath("/images/biokind-logo.png")}
            alt="BioKind Analytics"
            width="8000"
            height="2268"
          />
          <p>UCLA students helping healthcare nonprofits use data well.</p>
        </div>

        <div className="footer-column">
          <p className="footer-label">Get involved</p>
          <a href={sitePath("/recruitment")}>For UCLA students</a>
          <a href={`${sitePath("/join")}#nonprofits`}>For healthcare nonprofits</a>
        </div>

        <div className="footer-column">
          <p className="footer-label">Connect</p>
          <a href={`mailto:${chapterEmail}`}>Email us</a>
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            Instagram <span aria-hidden="true">↗</span>
          </a>
          <a href={nationalUrl} target="_blank" rel="noreferrer">
            National network <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} BioKind Analytics at UCLA</p>
        <p>Los Angeles, CA</p>
      </div>
    </footer>
  );
}
