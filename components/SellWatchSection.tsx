import Link from "next/link";
export default function SellWatchSection() {
  return (
    <section className="sell-section" aria-labelledby="sell-title">
      <div className="site-container sell-inner">
        <div>
          <p className="eyebrow">THE NEXT CHAPTER</p>
          <h2 id="sell-title">Sell Your Watch</h2>
          <p>
            Looking to sell a watch? Tell us about your piece and we’ll get back
            to you.
          </p>
        </div>
        <Link className="button button-outline" href="/sell-your-watch">
          SELL YOUR WATCH <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
