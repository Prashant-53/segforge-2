import React from "react";
import WorkflowHero from "../../subPages/product/Workflow-Engine/hero";
import DAGOrchestration from "../../subPages/product/Workflow-Engine/dag";
import PrecisionScheduling from "../../subPages/product/Workflow-Engine/precision_scheduling";
import ResilienceRecovery from "../../subPages/product/Workflow-Engine/recovery";
import CentralizedObservability from "../../subPages/product/Workflow-Engine/centralized_observability";

import CTABanner from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const WorkFlowEngine = () => {
  return (
    <MainLayout>
      <WorkflowHero />
      <DAGOrchestration />
      <PrecisionScheduling />
      <ResilienceRecovery />
      <CentralizedObservability />
      <CTABanner />
    </MainLayout>
  );
};

export default WorkFlowEngine;
