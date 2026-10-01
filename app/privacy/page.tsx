import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Draft information about how personal information may be handled when the website’s services become available.",
};

export default function Page() {
  return (
    <InformationPage
      title="PRIVACY POLICY"
      breadcrumb="Privacy"
      intro="Draft information about how personal information may be handled when the website’s services become available."
      notice="Draft privacy information — this policy will be finalized before forms or online sales involving personal data are enabled."
      sections={[
        {
          title: "INFORMATION WE COLLECT",
          text: "The demonstration form does not send or save the information entered into it. Information provided through direct email or phone contact is separate from this form. Final privacy information will explain the data involved in the services offered.",
        },
        {
          title: "HOW INFORMATION MAY BE USED",
          text: "Information supplied in a direct enquiry may be used to understand and respond to that enquiry. The purposes and basis for any future website data processing will be described in the final policy.",
        },
        {
          title: "CONTACT FORMS",
          text: "The sell enquiry form is currently a frontend demonstration. Submitting it only displays a local confirmation message; it does not send details or upload photographs.",
        },
        {
          title: "COOKIES",
          text: "This prototype does not include an analytics or advertising cookie integration. Any cookies or similar technologies introduced with future services will be described before those services are enabled.",
        },
        {
          title: "THIRD-PARTY SERVICES",
          text: "No form submission service, payment provider or authentication service is connected to this prototype. Any future external services and their role in handling information will be identified in the final policy.",
        },
        {
          title: "DATA RETENTION",
          text: "This prototype has no backend storage for form entries. Retention arrangements for future services and direct enquiries will be described in the final privacy policy.",
        },
        {
          title: "YOUR RIGHTS",
          text: "The final policy will explain the rights that apply to personal information and how to make a request. Contact DIMARDI if you have a question about information shared in a direct enquiry.",
        },
      ]}
    />
  );
}
