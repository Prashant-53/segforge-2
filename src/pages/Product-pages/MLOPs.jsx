import React from "react";
import MLOpsHero from "../../subPages/product/MLOPs/hero";
import FeatureEngineering from "../../subPages/product/MLOPs/featureEngineering";
import ModelTrainingSection from "../../subPages/product/MLOPs/experimentTracking";
import MLInferenceSection from "../../subPages/product/MLOPs/understandTrustModels";
import ModelEvaluationSection from "../../subPages/product/MLOPs/deployMonitorModels";
import CTABanner from "../../components/BottomCTA";

import MainLayout from "../../layouts/mainLayout";

const MLOPs = () => {
  return (
    <MainLayout>
      <MLOpsHero />
      <FeatureEngineering />
      <ModelTrainingSection />
      <MLInferenceSection />
      <ModelEvaluationSection />
      <CTABanner />
    </MainLayout>
  );
};

export default MLOPs;
