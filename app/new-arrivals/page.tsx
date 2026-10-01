import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { WatchCards } from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "New Arrivals",
  description: "The latest pieces added to the DIMARDI collection.",
};
export default function NewArrivalsPage() {
  return (
    <>
      <PageHero
        title="NEW ARRIVALS"
        intro="The latest pieces added to the DIMARDI collection."
        breadcrumbs={[{ label: "New Arrivals" }]}
        eyebrow="RECENTLY SELECTED"
      />
      <section
        className="site-container catalogue-section"
        aria-label="New arrival watch previews"
      >
        <WatchCards count={8} startIndex={5} />
        <div className="editorial-note">
          <p>
            New pieces are added as they become available. Availability can
            change quickly, so please contact us if you are interested in a
            particular watch.
          </p>
          <Link className="text-link" href="/contact">
            CONTACT US <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
