import React from "react";
import ObservabilityHero from "../subPages/product/observability/hero";
import PlatformHealthSection from "../subPages/product/observability/health";
import PipelineObservabilitySection from "../subPages/product/observability/trackPipeline&streamdata";
import RootCauseAnalysisSection from "../subPages/product/observability/backToSource";
import CostObservabilitySection from "../subPages/product/observability/controlCosts";
import IncidentResponseSection from "../subPages/product/observability/detectIssues";
import MainLayout from "../layouts/mainLayout";

const Observabililty = () => {
  return (
    <MainLayout>
      <ObservabilityHero />
      <PlatformHealthSection />
      <PipelineObservabilitySection />
      <RootCauseAnalysisSection />
      <CostObservabilitySection />
      <IncidentResponseSection />
    </MainLayout>
  );
};

export default Observabililty;
