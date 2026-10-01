import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about DIMARDI’s approach to selected pre-owned watches, transparency and personal service.",
};
export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ABOUT DIMARDI"
        intro="A considered approach to watches. A personal approach to service."
        breadcrumbs={[{ label: "About" }]}
      />
      <div className="site-container about-content">
        <section className="editorial-row">
          <p className="eyebrow">01 / OUR APPROACH</p>
          <div>
            <h2>
              Carefully selected.
              <br />
              Clearly presented.
            </h2>
            <p>
              At DIMARDI, we focus on carefully selected pre-owned watches and
              straightforward personal service.
            </p>
            <p>
              We believe choosing a watch should begin with useful information
              and an open conversation. Our approach puts clarity and individual
              attention at the centre of that experience.
            </p>
          </div>
        </section>
        <section className="editorial-row">
          <p className="eyebrow">02 / WHAT WE VALUE</p>
          <ul className="values-list">
            {[
              "Transparency",
              "Carefully selected watches",
              "Clear condition descriptions",
              "Personal communication",
              "Secure delivery",
            ].map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </section>
        <section className="editorial-row">
          <p className="eyebrow">03 / OUR SELECTION</p>
          <div>
            <h2>A focused collection.</h2>
            <p>
              DIMARDI focuses on selected pre-owned watches rather than
              maintaining an enormous catalogue. Each listing is intended to
              give you a clear view of the piece, including its condition and
              the information available about it.
            </p>
            <Link className="text-link" href="/watches">
              EXPLORE WATCHES <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
        <section className="editorial-row">
          <p className="eyebrow">04 / PERSONAL SERVICE</p>
          <div>
            <h2>Start a conversation.</h2>
            <p>
              Contact DIMARDI directly before purchasing to ask about a watch,
              request further information or discuss delivery. We aim to help
              you make a considered decision with clear, personal communication.
            </p>
            <Link className="text-link" href="/contact">
              CONTACT US <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
