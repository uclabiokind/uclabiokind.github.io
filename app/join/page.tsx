import type { Metadata } from "next";
import { JoinOptions } from "../components/JoinOptions";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Join UCLA BioKind as a student or partner with the chapter as a healthcare nonprofit.",
};

export default function JoinPage() {
  return (
    <main id="main-content">
      <section className="simple-join-hero">
        <div className="shell reveal">
          <p className="eyebrow eyebrow-light">UCLA BioKind</p>
          <h1>Get involved.</h1>
          <p>
            Whether you’re a UCLA student or a healthcare nonprofit, we’d love
            to hear from you.
          </p>
        </div>
      </section>
      <JoinOptions />
    </main>
  );
}
