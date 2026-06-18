import React from "react";
import MachineLearningHero from "../../subPages/solutions/ML-OPs/hero";
import MLOpsHub from "../../subPages/solutions/ML-OPs/mlHub";
import ExplainableAI from "../../subPages/solutions/ML-OPs/ai&eval";
import IndustryTemplates from "../../subPages/solutions/ML-OPs/industry-specific";
import ProductionServing from "../../subPages/solutions/ML-OPs/serving-monitoring";
import MLROISimulator from "../../subPages/solutions/ML-OPs/ROI-Simulator";
import MachineLearningCTA from "../../subPages/solutions/ML-OPs/cta";
import MainLayout from "../../layouts/mainLayout";

const MLOPSTeam = () => {
  return (
    <MainLayout>
      <MachineLearningHero />
      <MLOpsHub />
      <ExplainableAI />
      <IndustryTemplates />
      <ProductionServing />
      <MLROISimulator />
      <MachineLearningCTA />
    </MainLayout>
  );
};

export default MLOPSTeam;
