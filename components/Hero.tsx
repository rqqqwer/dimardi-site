import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="site-container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="short-line" /> THE DIMARDI COLLECTION
          </p>
          <h1 id="hero-title">
            TIMELESS PIECES.
            <br />
            <span>SELECTED</span>
            <br />
            WITH CARE.
          </h1>
          <p className="hero-description">
            Carefully selected watches, with a focus on brand-new pieces.
          </p>
          <Link className="button button-dark" href="/watches">
            EXPLORE WATCHES <span aria-hidden="true">↗</span>
          </Link>
          <p className="hero-footnote">A considered approach to time.</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="dial-relief">
            <div className="dial-inner">
              <span className="dial-center" />
            </div>
          </div>
          <span className="art-caption">THE ART OF SELECTION</span>
          <span className="art-number">01 / DIMARDI</span>
        </div>
      </div>
      <div className="hero-bottom site-container">
        <span>GOOD TIME. WELL CHOSEN.</span>
        <Link href="/watches">
          DISCOVER THE COLLECTION <span aria-hidden="true">↓</span>
        </Link>
      </div>
    </section>
  );
}
