import React from "react";
import RealTimeCDCHero from "../../subPages/product/realTImeCDC/RealTimeCDCHero";
import RealTimeTransactionLogIngestion from "../../subPages/product/realTImeCDC/RealTimeTransactionLogIngestion";
import IntelligentIngestionSmartRouter from "../../subPages/product/realTImeCDC/IntelligentIngestionSmartRouter.jsx";
import AutomatedStreamLifecycle from "../../subPages/product/realTImeCDC/AutomatedStreamLifecycle.jsx";
import CDCMonitoringSelfHealing from "../../subPages/product/realTImeCDC/CDCMonitoringSelfHealing.jsx";
import CDCFaq from "../../subPages/product/realTImeCDC/faq.jsx";
import { CTABanner } from "../../components/BottomCTA";

import MainLayout from "../../layouts/mainLayout";

const RealTimeCDC = () => {
  return (
    <MainLayout>
      <RealTimeCDCHero />
      <RealTimeTransactionLogIngestion />
      <IntelligentIngestionSmartRouter />
      <AutomatedStreamLifecycle />
      <CDCMonitoringSelfHealing />
      {/* <CDCFaq /> */}
      <CTABanner />
    </MainLayout>
  );
};

export default RealTimeCDC;
