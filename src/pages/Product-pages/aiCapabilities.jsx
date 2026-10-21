import React from "react";
import AICapabilitiesHero from "../../subPages/product/AI-Capabilities/hero";
import Overview from "../../subPages/product/AI-Capabilities/section2";
import AgentOrchestrationSection from "../../subPages/product/AI-Capabilities/section3";
import ModelTuningSection from "../../subPages/product/AI-Capabilities/section4";
import RAGPipelineSection from "../../subPages/product/AI-Capabilities/section5";
import MCPConnectorsSection from "../../subPages/product/AI-Capabilities/section6";
import AIEngineeringToolsSection from "../../subPages/product/AI-Capabilities/section7";
import LLMHubSection from "../../subPages/product/AI-Capabilities/section8";
import AIGatewaysSection from "../../subPages/product/AI-Capabilities/section9";
import { CTABanner } from "../../components/BottomCTA";

import MainLayout from "../../layouts/mainLayout";

const AICapabilities = () => {
  return (
    <MainLayout>
      <AICapabilitiesHero />
      <Overview />
      <AgentOrchestrationSection />
      <RAGPipelineSection />
      <MCPConnectorsSection />
      <AIEngineeringToolsSection />
      <LLMHubSection />
      <AIGatewaysSection />
      <ModelTuningSection />
      <CTABanner />
    </MainLayout>
  );
};

export default AICapabilities;
