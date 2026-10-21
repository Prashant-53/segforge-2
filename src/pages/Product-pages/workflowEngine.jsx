import React from "react";
import WorkflowHero from "../../subPages/product/Workflow-Engine/hero";
import WorkflowConcept from "../../subPages/product/Workflow-Engine/WorkflowConcept";
import BuildYourWorkflow from "../../subPages/product/Workflow-Engine/BuildYourWorkflow";
import WorkflowExecution from "../../subPages/product/Workflow-Engine/execution";
import WorkflowReliability from "../../subPages/product/Workflow-Engine/reliability";
import OrchestrationFAQ from "../../subPages/product/Workflow-Engine/faq";

import CTABanner from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const WorkFlowEngine = () => {
  return (
    <MainLayout>
      <WorkflowHero />
      <WorkflowConcept />
      <WorkflowExecution />
      <WorkflowReliability />
      <BuildYourWorkflow />
      {/* <OrchestrationFAQ /> */}
      <CTABanner />
    </MainLayout>
  );
};

export default WorkFlowEngine;
