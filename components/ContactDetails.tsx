import { siteConfig } from "@/lib/siteConfig";

export default function ContactDetails({
  prominent = false,
}: {
  prominent?: boolean;
}) {
  return (
    <address
      className={`contact-details${prominent ? " contact-details-prominent" : ""}`}
    >
      <div>
        <span className="eyebrow">EMAIL</span>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
      </div>
      <div>
        <span className="eyebrow">PHONE</span>
        <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
      </div>
    </address>
  );
}
