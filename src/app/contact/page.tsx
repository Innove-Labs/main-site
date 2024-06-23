import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Innove Labs",
  description: "Get in touch with Innove Labs, we are just a click away for your queries.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Reach out to us, we are just a click away for your queries."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
