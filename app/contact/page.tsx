import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ContactDetails from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact DIMARDI about watches, delivery or selling your watch.",
};
export default function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT DIMARDI"
        intro="Have a question about a watch, delivery, selling a watch or anything else? Contact us directly."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <div className="site-container contact-page">
        <ContactDetails prominent />
        <div className="contact-topics">
          <section>
            <h2>GENERAL ENQUIRIES</h2>
            <p>For questions about watches, purchasing or delivery.</p>
          </section>
          <section>
            <h2>SELLING A WATCH</h2>
            <p>
              For enquiries about selling your watch, please use our Sell Your
              Watch page or contact us directly.
            </p>
            <Link className="text-link" href="/sell-your-watch">
              SELL YOUR WATCH <span aria-hidden="true">↗</span>
            </Link>
          </section>
          <section>
            <h2>RESPONSE</h2>
            <p>We aim to respond to enquiries as soon as possible.</p>
          </section>
        </div>
      </div>
    </>
  );
}
