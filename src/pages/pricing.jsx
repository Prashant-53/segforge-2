import React from "react";
import PricingHero from "../subPages/Pricing/hero";
import UsageBasedPricing from "../subPages/Pricing/usage";
import FragmentationCostCalculator from "../subPages/Pricing/fragmentationCostCalculator";
import DeploymentModels from "../subPages/Pricing/deploymentModel";
import MainLayout from "../layouts/mainLayout";

const Pricing = () => {
  return (
    <MainLayout>
      <PricingHero />
      <DeploymentModels />
      <UsageBasedPricing />
      <FragmentationCostCalculator />
    </MainLayout>
  );
};

export default Pricing;
