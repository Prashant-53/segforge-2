import React from "react";
import RealTimeCDCHero from "../../subPages/product/realTImeCDC/RealTimeCDCHero";
import DatabaseConnectivitySection from "../../subPages/product/realTImeCDC/universalDatabase";
import SmartRouterSection from "../../subPages/product/realTImeCDC/smartRouterSection";
import PipelineArchitectureSection from "../../subPages/product/realTImeCDC/pipelineArchitectureSection";
import MonitoringSection from "../../subPages/product/realTImeCDC/monitoringSection";
import { CTABanner } from "../../components/BottomCTA";

import MainLayout from "../../layouts/mainLayout";

const RealTimeCDC = () => {
  return (
    <MainLayout>
      <RealTimeCDCHero />
      <DatabaseConnectivitySection />
      <SmartRouterSection />
      <PipelineArchitectureSection />
      <MonitoringSection />
      <CTABanner />
    </MainLayout>
  );
};

export default RealTimeCDC;
