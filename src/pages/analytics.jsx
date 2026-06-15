import React from "react";
import AnalyticsHero from "../subPages/product/Analytics/analyticsHero";
import ExploreDataFreely from "../subPages/product/Analytics/exploreDataFreely";
import AnalyzeEventsSection from "../subPages/product/Analytics/analyzeEventsSection";
import AnalyticsDashboardsSection from "../subPages/product/Analytics/analyticsDashboardsSection";
import MainLayout from "../layouts/mainLayout";

const Analytics = () => {
  return (
    <MainLayout>
      <AnalyticsHero />
      <ExploreDataFreely />
      <AnalyzeEventsSection />
      <AnalyticsDashboardsSection />
    </MainLayout>
  );
};

export default Analytics;
