import Link from "next/link";
import PageHero from "./PageHero";
import ContactDetails from "./ContactDetails";

export type InformationSection = {
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
};
type Props = {
  title: string;
  breadcrumb: string;
  intro: string;
  notice?: string;
  sections: InformationSection[];
};

export default function InformationPage({
  title,
  breadcrumb,
  intro,
  notice,
  sections,
}: Props) {
  return (
    <>
      <PageHero
        title={title}
        intro={intro}
        breadcrumbs={[{ label: breadcrumb }]}
      />
      <div className="site-container information-layout">
        <aside>
          <p className="eyebrow">ON THIS PAGE</p>
          <nav aria-label="Page sections">
            {sections.map((section, index) => (
              <a key={section.title} href={`#section-${index}`}>
                {section.title}
              </a>
            ))}
            <a href="#information-contact">CONTACT</a>
          </nav>
        </aside>
        <div className="information-content">
          {notice && <p className="draft-notice">{notice}</p>}
          {sections.map((section, index) => (
            <section id={`section-${index}`} key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.text}</p>
              {section.href && (
                <Link className="text-link" href={section.href}>
                  {section.linkLabel || "LEARN MORE"}{" "}
                  <span aria-hidden="true">↗</span>
                </Link>
              )}
            </section>
          ))}
          <section id="information-contact">
            <h2>CONTACT</h2>
            <p>Contact DIMARDI directly if you have any questions.</p>
            <ContactDetails />
          </section>
        </div>
      </div>
    </>
  );
}
