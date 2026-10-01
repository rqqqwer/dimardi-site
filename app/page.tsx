import Link from "next/link";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import SellWatchSection from "@/components/SellWatchSection";
import TrustSection from "@/components/TrustSection";
import ContactDetails from "@/components/ContactDetails";

export default function Home() {
  return <><Hero/><ProductGrid id="watches" title="Selected Watches" subtitle="A curated selection of watches available from DIMARDI." count={8} label="A CAREFULLY CONSIDERED COLLECTION" href="/watches" linkLabel="VIEW ALL WATCHES"/><div className="site-container"><div className="section-divider"/></div><ProductGrid id="new-arrivals" title="New Arrivals" subtitle="The latest additions to our selection." count={4} startIndex={9} label="RECENTLY SELECTED" href="/new-arrivals" linkLabel="VIEW NEW ARRIVALS"/><SellWatchSection/><section className="site-container home-about"><div><p className="eyebrow">OUR APPROACH</p><h2>A considered approach to time.</h2></div><div><p>At DIMARDI, we focus on carefully selected pre-owned watches and straightforward personal service.</p><Link className="text-link" href="/about">DISCOVER DIMARDI <span aria-hidden="true">↗</span></Link></div></section><section className="site-container home-contact"><div><h2>Let’s talk watches.</h2><Link className="text-link" href="/contact">CONTACT US <span aria-hidden="true">↗</span></Link></div><ContactDetails/></section><TrustSection/></>;
}
