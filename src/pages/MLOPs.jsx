import React from "react";
import MLOpsHero from "../subPages/product/MLOPs/hero";
import FeatureEngineering from "../subPages/product/MLOPs/featureEngineering";
import ExperimentTracking from "../subPages/product/MLOPs/experimentTracking";
import UnderstandTrustModels from "../subPages/product/MLOPs/understandTrustModels";
import DeployMonitorModels from "../subPages/product/MLOPs/deployMonitorModels";
import MainLayout from "../layouts/mainLayout";

const MLOPs = () => {
  return (
    <MainLayout>
      <MLOpsHero />
      <FeatureEngineering />
      <ExperimentTracking />
      <UnderstandTrustModels />
      <DeployMonitorModels />
    </MainLayout>
  );
};

export default MLOPs;
