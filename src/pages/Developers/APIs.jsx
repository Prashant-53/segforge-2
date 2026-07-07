import React from "react";
import APIsHero from "../../subPages/Devlopers/APIs/hero";
import AuthenticationSecurity from "../../subPages/Devlopers/APIs/authentication&security";
import APIDesignPrinciples from "../../subPages/Devlopers/APIs/designPrinciples";
import CoreResourceAPIs from "../../subPages/Devlopers/APIs/coreResources";
import InteractiveAPIDocs from "../../subPages/Devlopers/APIs/interactiveAPIDocs ";
import QuickStartExamples from "../../subPages/Devlopers/APIs/quickStart";
import MainLayout from "../../layouts/mainLayout";

const APIs = () => {
  return (
    <MainLayout>
      <APIsHero />
      <AuthenticationSecurity />
      <APIDesignPrinciples />
      <CoreResourceAPIs />
      <InteractiveAPIDocs />
      <QuickStartExamples />
    </MainLayout>
  );
};

export default APIs;
