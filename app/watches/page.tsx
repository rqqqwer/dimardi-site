import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { WatchCards } from "@/components/ProductGrid";
import CatalogueControls from "@/components/CatalogueControls";

export const metadata: Metadata = {
  title: "Watches",
  description:
    "Explore the DIMARDI watch collection preview, with a focus on brand-new pieces and clear listing information.",
};
export default function WatchesPage() {
  return (
    <>
      <PageHero
        title="WATCHES"
        intro="Explore our curated selection of watches, with a focus on brand-new pieces. Each watch is individually selected and presented with clear information about its condition and specifications."
        breadcrumbs={[{ label: "Watches" }]}
        eyebrow="THE COLLECTION"
      />
      <section
        className="site-container catalogue-section"
        aria-label="Watch catalogue"
      >
        <CatalogueControls />
        <div className="catalogue-count">
          <span>12 WATCH PREVIEWS</span>
          <span>INVENTORY TO FOLLOW</span>
        </div>
        <WatchCards count={12} />
      </section>
    </>
  );
}
