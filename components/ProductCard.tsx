import Link from "next/link";
import { placeholderWatches } from "@/lib/watches";
import WatchPlaceholder from "./WatchPlaceholder";

export default function ProductCard({ index }: { index: number }) {
  const watch = placeholderWatches.find(watch => watch.index === index);
  if (!watch) return null;
  return (
    <article className="product-card">
      <Link href={`/watches/${watch.slug}`} className="product-link" aria-label={`View watch preview ${index}`}>
        <WatchPlaceholder/>
        <div className="product-info"><p className="product-brand">BRAND</p><h3>MODEL</h3><p className="product-details">REFERENCE / YEAR / CONDITION</p><p className="product-price" aria-label="Price to be added">€ —</p></div>
      </Link>
    </article>
  );
}
