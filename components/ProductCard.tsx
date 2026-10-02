import Image from "next/image";
import Link from "next/link";
import { placeholderWatches } from "@/lib/watches";
import WatchPlaceholder from "./WatchPlaceholder";

export default function ProductCard({ index }: { index: number }) {
  const watch = placeholderWatches.find((watch) => watch.index === index);
  if (!watch) return null;
  const photo = watch.photos[0];
  return (
    <article className="product-card">
      <Link
        href={`/watches/${watch.slug}`}
        className="product-link"
        aria-label={`View watch ${index}${watch.soldOut ? " — sold out" : ""}`}
      >
        {photo ? (
          <>
            <div className="product-image product-photo">
              <Image
                src={photo}
                alt={`Watch ${index}`}
                fill
                sizes="(max-width: 419px) calc(100vw - 40px), (max-width: 767px) 50vw, (max-width: 1023px) 33vw, 25vw"
                className="product-photograph"
              />
              {watch.soldOut && (
                <span className="sold-out-badge">SOLD OUT</span>
              )}
            </div>
            {watch.description && (
              <p className="product-description">{watch.description}</p>
            )}
          </>
        ) : (
          <>
            <WatchPlaceholder />
            <div className="product-info">
              <p className="product-brand">BRAND</p>
              <h3>MODEL</h3>
              <p className="product-details">REFERENCE / YEAR / CONDITION</p>
              <p className="product-price" aria-label="Price to be added">
                € —
              </p>
            </div>
          </>
        )}
      </Link>
    </article>
  );
}
