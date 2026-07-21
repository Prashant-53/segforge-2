import React from "react";
import SelfHostedHero from "../../subPages/product/self-hosted/hero";
import DataSovereigntySection from "../../subPages/product/self-hosted/yourData";
import DeploymentModelsSection from "../../subPages/product/self-hosted/deployAnywhere";
import InfrastructureManagerSection from "../../subPages/product/self-hosted/infrastructure";
import ProductionReliabilitySection from "../../subPages/product/self-hosted/deployment";
import { CTABanner } from "../../components/BottomCTA";

import MainLayout from "../../layouts/mainLayout";
import { Cat } from "lucide-react";

const SelfHosted = () => {
  return (
    <MainLayout>
      <SelfHostedHero />
      <DataSovereigntySection />
      <DeploymentModelsSection />
      <InfrastructureManagerSection />
      <ProductionReliabilitySection />
      <CTABanner />
    </MainLayout>
  );
};

export default SelfHosted;
