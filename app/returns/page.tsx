import type { Metadata } from "next";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
  title: "Returns",
  description:
    "Return arrangements will depend on the applicable terms of sale. This page is currently informational and in draft form.",
};

export default function Page() {
  return (
    <InformationPage
      title="RETURNS"
      breadcrumb="Returns"
      intro="Return arrangements will depend on the applicable terms of sale. This page is currently informational and in draft form."
      notice="Detailed return conditions will be provided in the final Terms of Sale before the website begins accepting online purchases."
      sections={[
        {
          title: "RETURN REQUESTS",
          text: "Contact DIMARDI to discuss a return request and the relevant purchase details. The final terms of sale will explain the applicable process and conditions.",
        },
        {
          title: "CONDITION OF RETURNED ITEMS",
          text: "The final terms will describe the condition requirements for returned watches and any accompanying box, papers or accessories. Please retain all items supplied with your watch.",
        },
        {
          title: "RETURN SHIPPING",
          text: "Return delivery arrangements, responsibilities and any costs will be explained in the final terms. Please contact DIMARDI before arranging a return shipment.",
        },
        {
          title: "REFUNDS",
          text: "Any applicable refund process, timing and method will be set out in the final terms of sale. This preview website does not currently take payments or process refunds.",
        },
        {
          title: "DAMAGED OR INCORRECT ITEMS",
          text: "If an item arrives damaged or appears different from what was agreed, contact DIMARDI with details and photographs so the matter can be reviewed.",
        },
      ]}
    />
  );
}
