import Link from "next/link";
import ProductCard from "./ProductCard";

export function WatchCards({ count, startIndex = 1 }: { count: number; startIndex?: number }) {
  return <div className="watch-grid grid grid-cols-1 gap-x-6 gap-y-10 min-[420px]:grid-cols-2 lg:grid-cols-4">{Array.from({ length: count }, (_, i) => <ProductCard key={i} index={startIndex + i}/>)}</div>;
}

type Props = { id: string; title: string; subtitle: string; count: number; startIndex?: number; label: string; href: string; linkLabel: string };
export default function ProductGrid({ id, title, subtitle, count, startIndex = 1, label, href, linkLabel }: Props) {
  return <section id={id} className="collection-section site-container" aria-labelledby={`${id}-title`}><div className="section-heading"><div><p className="eyebrow">{label}</p><h2 id={`${id}-title`}>{title}</h2><p className="section-description">{subtitle}</p></div><Link className="collection-note" href={href}>{linkLabel}<span aria-hidden="true">↗</span></Link></div><WatchCards count={count} startIndex={startIndex}/></section>;
}
