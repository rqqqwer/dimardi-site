import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import WatchPlaceholder from "@/components/WatchPlaceholder";
import { placeholderWatches } from "@/lib/watches";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Watch Preview",
  description:
    "DIMARDI watch listing preview. Specifications, condition and pricing will be added when inventory is available.",
};
export function generateStaticParams() {
  return placeholderWatches.map(({ slug }) => ({ slug }));
}

const sections = [
  [
    "DESCRIPTION",
    "This is a preview listing. A description of the individual watch, its history where known, and its specifications will be added when the piece is listed.",
  ],
  [
    "CONDITION",
    "Every watch offered by DIMARDI is inspected before being listed. Detailed information about the condition of each individual piece will be provided in its listing.",
  ],
  [
    "AUTHENTICITY",
    "Information relevant to the individual watch and any accompanying documentation will be provided with its listing. Please contact us to discuss the details and any questions before purchasing.",
  ],
  [
    "DELIVERY",
    "Available delivery options and costs will be confirmed before purchase. Shipping availability may depend on destination and the value of the watch.",
  ],
  [
    "RETURNS",
    "Detailed return conditions will be provided in the final Terms of Sale before the website begins accepting online purchases.",
  ],
];

export default async function WatchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!placeholderWatches.some((watch) => watch.slug === slug)) notFound();
  return (
    <div className="site-container watch-detail">
      <Breadcrumbs
        items={[{ label: "Watches", href: "/watches" }, { label: "Watch" }]}
      />
      <div className="watch-detail-grid">
        <div className="watch-gallery">
          <WatchPlaceholder label="Main watch image placeholder" />
          <div className="gallery-thumbnails">
            {[1, 2, 3].map((index) => (
              <WatchPlaceholder
                key={index}
                label={`Additional watch image placeholder ${index}`}
              />
            ))}
          </div>
        </div>
        <div className="watch-summary">
          <p className="eyebrow">BRAND</p>
          <h1>MODEL</h1>
          <p className="detail-price">€ —</p>
          <p className="draft-notice">
            Preview listing — no watch is currently offered for sale on this
            page.
          </p>
          <dl className="watch-specifications">
            {[
              "Reference",
              "Year",
              "Condition",
              "Case size",
              "Movement",
              "Box",
              "Papers",
            ].map((label) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>—</dd>
              </div>
            ))}
            <div>
              <dt>Availability</dt>
              <dd>
                Available{" "}
                <span className="availability-note">(placeholder)</span>
              </dd>
            </div>
          </dl>
          <a
            className="button button-dark"
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(`Watch enquiry — ${slug}`)}`}
          >
            ENQUIRE ABOUT THIS WATCH <span aria-hidden="true">↗</span>
          </a>
          <Link className="button button-outline" href="/contact">
            CONTACT US <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="watch-information">
        {sections.map(([title, text]) => (
          <section key={title}>
            <h2>{title}</h2>
            <p>{text}</p>
            {title === "DELIVERY" && (
              <Link className="text-link" href="/shipping">
                SHIPPING & DELIVERY ↗
              </Link>
            )}
            {title === "RETURNS" && (
              <Link className="text-link" href="/returns">
                RETURN INFORMATION ↗
              </Link>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
