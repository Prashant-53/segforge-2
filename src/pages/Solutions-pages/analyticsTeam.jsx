import React from "react";
import AnalyticsHero from "../../subPages/solutions/Analytics-Team/hero";
import InteractiveNotebooks from "../../subPages/solutions/Analytics-Team/notebooks";
import RealTimeBI from "../../subPages/solutions/Analytics-Team/BI";
import HistoricalForensics from "../../subPages/solutions/Analytics-Team/forensics";
import QueryToChartPrototyper from "../../subPages/solutions/Analytics-Team/query-chart";
import SelfServiceGovernance from "../../subPages/solutions/Analytics-Team/governance";
import AnalyticsCTA from "../../subPages/solutions/Analytics-Team/cta";
import MainLayout from "../../layouts/mainLayout";

const AnalyticsTeam = () => {
  return (
    <MainLayout>
      <AnalyticsHero />
      <InteractiveNotebooks />
      <RealTimeBI />
      <HistoricalForensics />
      <QueryToChartPrototyper />
      <SelfServiceGovernance />
      <AnalyticsCTA />
    </MainLayout>
  );
};

export default AnalyticsTeam;
