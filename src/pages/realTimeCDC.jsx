import React from "react";
import RealTimeCDCHero from "../subPages/product/realTImeCDC/RealTimeCDCHero";
import CaptureEveryChange from "../subPages/product/realTImeCDC/captureEveryChange";
import SmartRouterSection from "../subPages/product/realTImeCDC/smartRouterSection";
import CDCWatchdogSection from "../subPages/product/realTImeCDC/CDCWatchdogSection";
import SchemaEvolutionSection from "../subPages/product/realTImeCDC/schemaEvolutionSection";

import MainLayout from "../layouts/mainLayout";

const RealTimeCDC = () => {
  return (
    <MainLayout>
      <RealTimeCDCHero />
      <CaptureEveryChange />
      <SmartRouterSection />
      <CDCWatchdogSection />
      <SchemaEvolutionSection />
    </MainLayout>
  );
};

export default RealTimeCDC;
