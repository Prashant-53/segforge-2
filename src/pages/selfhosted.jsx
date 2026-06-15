import React from "react";
import SelfHostedHero from "../subPages/product/self-hosted/hero";
import DataSovereigntySection from "../subPages/product/self-hosted/yourData";
import DeploymentModelsSection from "../subPages/product/self-hosted/deployAnywhere";
import InfrastructureManagerSection from "../subPages/product/self-hosted/infrastructure";
import ProductionReliabilitySection from "../subPages/product/self-hosted/deployment";
import MainLayout from "../layouts/mainLayout";

const SelfHosted = () => {
  return (
    <MainLayout>
      <SelfHostedHero />
      <DataSovereigntySection />
      <DeploymentModelsSection />
      <InfrastructureManagerSection />
      <ProductionReliabilitySection />
    </MainLayout>
  );
};

export default SelfHosted;
