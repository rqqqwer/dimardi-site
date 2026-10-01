import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "An overview of the subjects that will be covered in the final terms of sale. This preview website is not accepting payments.",
};

export default function Page() {
  return (
    <InformationPage
      title="TERMS & CONDITIONS"
      breadcrumb="Terms"
      intro="An overview of the subjects that will be covered in the final terms of sale. This preview website is not accepting payments."
      notice="Draft website content — final terms will be added before online sales are enabled."
      sections={[
        {
          title: "GENERAL",
          text: "This website is a visual and informational preview of DIMARDI. Final seller information and the terms governing purchases will be provided before sales are enabled.",
        },
        {
          title: "PRODUCT INFORMATION",
          text: "Current watch cards are placeholders. Actual listings will include information about the individual watch, including specifications, condition and accompanying items where known.",
        },
        {
          title: "AVAILABILITY",
          text: "Availability will be confirmed directly before purchase. Placeholder listings and their availability labels do not represent watches currently offered for sale.",
        },
        {
          title: "PRICING",
          text: "Prices have not been added to this preview. Pricing information and any applicable charges will be confirmed before a purchase is agreed.",
        },
        {
          title: "PAYMENT",
          text: "This website does not accept online payments. Payment arrangements and applicable conditions will be described in the final terms before sales are enabled.",
        },
        {
          title: "DELIVERY",
          text: "Delivery options, costs and estimated timing will be confirmed before purchase. The shipping page outlines the information that will be discussed.",
        },
        {
          title: "RETURNS",
          text: "Final return conditions and the process for requesting a return will be provided in the Terms of Sale. The current returns page is draft information only.",
        },
        {
          title: "AUTHENTICITY AND CONDITION",
          text: "Individual listings will provide available information about the watch and its condition. Any accompanying documentation or relevant assessment details will be explained for the specific piece.",
        },
        {
          title: "LIMITATION OF LIABILITY",
          text: "Any provisions concerning liability will be set out in the final terms, taking account of applicable requirements. This draft does not establish exclusions or limits of liability.",
        },
      ]}
    />
  );
}
