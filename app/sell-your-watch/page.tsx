import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SellWatchForm from "@/components/SellWatchForm";
import ContactDetails from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Sell Your Watch",
  description:
    "Learn how to share the details of your watch with DIMARDI. Preview the watch enquiry process.",
};
const steps = [
  ["SEND DETAILS", "Tell us the brand, model, reference number and condition."],
  [
    "ADD PHOTOS",
    "Provide clear photos of the watch, box, papers and accessories.",
  ],
  ["REVIEW", "We review the information and contact you."],
  [
    "NEXT STEPS",
    "If the watch is suitable for DIMARDI, we discuss the next steps directly with you.",
  ],
];
export default function SellYourWatchPage() {
  return (
    <>
      <PageHero
        title="SELL YOUR WATCH"
        intro="Interested in selling your watch? Send us the details and we will review your request."
        breadcrumbs={[{ label: "Sell Your Watch" }]}
      />
      <div className="site-container sell-page">
        <ol className="process-steps">
          {steps.map(([title, text], index) => (
            <li key={title}>
              <span className="step-number">0{index + 1}</span>
              <h2>{title}</h2>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className="sell-form-layout">
          <aside>
            <p className="eyebrow">A PERSONAL CONVERSATION</p>
            <h2>
              Every piece has
              <br />
              its next chapter.
            </h2>
            <p>
              Prefer to contact us directly? Use the details below. The form is
              a frontend preview of the enquiry process.
            </p>
            <ContactDetails />
          </aside>
          <SellWatchForm />
        </div>
      </div>
    </>
  );
}
