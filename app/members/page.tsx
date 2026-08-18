import type { Metadata } from "next";
import {
  assetPath,
  members,
  memberYear,
  sitePath,
} from "../site-data";

export const metadata: Metadata = {
  title: "Members",
  description: `Meet the ${memberYear} UCLA BioKind Analytics team.`,
};

function memberCount(count: number) {
  return `${String(count).padStart(2, "0")} ${
    count === 1 ? "member" : "members"
  }`;
}

export default function MembersPage() {
  const board = members.filter((member) => member.group === "Board");
  const generalMembers = members.filter(
    (member) => member.group === "General members",
  );

  return (
    <main id="main-content">
      <section className="members-hero simple-members-hero page-hero-light">
        <div className="shell members-hero-grid">
          <div>
            <p className="eyebrow">Members</p>
            <h1>Meet the team.</h1>
          </div>
          <div className="members-hero-note">
            <span>{memberYear} team</span>
            <p>
              {members.length} {members.length === 1 ? "member" : "members"} in
              the UCLA chapter.
            </p>
          </div>
        </div>
      </section>

      <section className="section simplified-member-section">
        <div className="shell">
          <div className="member-section-title">
            <p className="eyebrow">{memberYear} chapter board</p>
            <span>{memberCount(board.length)}</span>
          </div>
          <div className="member-grid board-grid">
            {board.map((member) => (
              <article className="member-card" key={member.name}>
                <div className="member-photo">
                  <img src={assetPath(member.image)} alt={member.name} />
                </div>
                <div className="member-info">
                  <p>{member.role}</p>
                  <h2>{member.name}</h2>
                  <span>{member.study}</span>
                </div>
              </article>
            ))}
          </div>

          {generalMembers.length > 0 && (
            <details className="roster-details">
              <summary>
                <span>View general members</span>
                <span>{memberCount(generalMembers.length)}</span>
              </summary>
              <div className="member-grid general-member-grid">
                {generalMembers.map((member) => (
                  <article className="member-card compact" key={member.name}>
                    <div className="member-photo">
                      <img src={assetPath(member.image)} alt={member.name} />
                    </div>
                    <div className="member-info">
                      <h2>{member.name}</h2>
                      <span>{member.study}</span>
                    </div>
                  </article>
                ))}
              </div>
            </details>
          )}

          <div className="roster-note">
            <a className="button button-dark" href={sitePath("/recruitment")}>
              Interested in joining? <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
