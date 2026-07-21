import React from "react";
import AnalyticsHero from "../../subPages/product/Analytics/analyticsHero";
import EmbeddedSupersetSection from "../../subPages/product/Analytics/embeddedSupersetSection ";
import VisualizationHubSection from "../../subPages/product/Analytics/visualizationHubSection ";
import SQLLabSection from "../../subPages/product/Analytics/SQLLabSection ";
import AnalyticsGovernanceSection from "../../subPages/product/Analytics/analyticsGovernanceSection ";
import { CTABanner } from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const Analytics = () => {
  return (
    <MainLayout>
      <AnalyticsHero />
      <EmbeddedSupersetSection />
      <VisualizationHubSection />
      <SQLLabSection />
      <AnalyticsGovernanceSection />
      <CTABanner />
    </MainLayout>
  );
};

export default Analytics;
