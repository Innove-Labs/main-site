import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Innove Labs",
  description: "Innove Labs is a dedicated software agency specializing in MVPs, Pre-built solutions and chatbots. Our goal is to turn your ideas into amazing digital solutions.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a dedicated software agency specializing in MVPs, Pre-built solutions and chatbots. Our goal is to turn your ideas into amazing digital solutions"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
