import React from "react";
import AnalyticsHero from "../../subPages/product/Analytics/analyticsHero";
import EmbeddedBISection from "../../subPages/product/Analytics/EmbeddedBISection";
import InteractiveAnalyticsNotebooks from "../../subPages/product/Analytics/InteractiveAnalyticsNotebooks";
import DirectLakehouseQuerying from "../../subPages/product/Analytics/DirectLakehouseQuerying";
import AnalyticsAcrossWorkspace from "../../subPages/product/Analytics/AnalyticsAcrossWorkspace";
import MLRiskModels from "../../subPages/product/Analytics/MLRiskModels";
import AnalyticsFAQ from "../../subPages/product/Analytics/faq";
import { CTABanner } from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const Analytics = () => {
  return (
    <MainLayout>
      <AnalyticsHero />
      <EmbeddedBISection />
      <InteractiveAnalyticsNotebooks />
      <DirectLakehouseQuerying />
      <AnalyticsAcrossWorkspace />
      <MLRiskModels />
      {/* <AnalyticsFAQ /> */}
      <CTABanner />
    </MainLayout>
  );
};

export default Analytics;
