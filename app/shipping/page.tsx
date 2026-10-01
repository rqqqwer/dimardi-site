import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
  title: "Shipping",
  description:
    "A considered approach to getting your watch to you. Delivery arrangements will be discussed before purchase.",
};

export default function Page() {
  return (
    <InformationPage
      title="SHIPPING & DELIVERY"
      breadcrumb="Shipping"
      intro="A considered approach to getting your watch to you. Delivery arrangements will be discussed before purchase."
      sections={[
        {
          title: "DELIVERY OPTIONS",
          text: "Available delivery options and costs will be confirmed before purchase. Please contact us to discuss arrangements for your destination.",
        },
        {
          title: "INSURED SHIPPING",
          text: "Insured shipping options will be discussed before purchase. Availability and the scope of cover may depend on the destination and the value of the watch.",
        },
        {
          title: "PACKAGING",
          text: "Packaging arrangements will be confirmed for each watch, including any box, papers or accessories stated in its listing.",
        },
        {
          title: "DELIVERY TIMES",
          text: "Estimated delivery times will be confirmed when delivery arrangements are agreed. Timing may vary according to destination and the selected delivery option.",
        },
        {
          title: "INTERNATIONAL DELIVERY",
          text: "Shipping availability may depend on destination and the value of the watch. Any applicable customs requirements or destination charges should be clarified before purchase.",
        },
        {
          title: "RECEIVING YOUR WATCH",
          text: "Please check the package and its contents on arrival. If you notice damage or anything unexpected, keep the packaging and contact DIMARDI with the details.",
        },
      ]}
    />
  );
}
