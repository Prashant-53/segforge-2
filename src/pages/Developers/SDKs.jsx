import React from "react";
import SDKHero from "../../subPages/Devlopers/SDKs/hero";
import NativeClientArchitecture from "../../subPages/Devlopers/SDKs/clientArchitecture";
import SDKImplementations from "../../subPages/Devlopers/SDKs/implementations";
import Features from "../../subPages/Devlopers/SDKs/features";
import ProgrammaticOrchestration from "../../subPages/Devlopers/SDKs/orchestration";
import ResourceApiSurface from "../../subPages/Devlopers/SDKs/APIsurface";
import CompatibilityMatrix from "../../subPages/Devlopers/SDKs/matrix";
import Installation from "../../subPages/Devlopers/SDKs/installation";
import MainLayout from "../../layouts/mainLayout";

const SDKs = () => {
  return (
    <MainLayout>
      <SDKHero />
      <NativeClientArchitecture />
      <SDKImplementations />
      <Features />
      <ProgrammaticOrchestration />
      <ResourceApiSurface />
      <CompatibilityMatrix />
      <Installation />
    </MainLayout>
  );
};

export default SDKs;
