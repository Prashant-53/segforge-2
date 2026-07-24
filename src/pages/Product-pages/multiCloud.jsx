import React from "react";
import MultiCloudHero from "../../subPages/product/multi-cloud/hero";
import MultiCloudStorageSection from "../../subPages/product/multi-cloud/freedomToDeploy";
import RegionalDeploymentSection from "../../subPages/product/multi-cloud/storeData";
import MultiCloudOrchestrationSection from "../../subPages/product/multi-cloud/connectSystems";
import CrossCloudGovernanceSection from "../../subPages/product/multi-cloud/crossCloudGovernance";
import MainLayout from "../../layouts/mainLayout";
import { CTABanner } from "../../components/BottomCTA";
const MultiCloud = () => {
  return (
    <MainLayout>
      <MultiCloudHero />
      <MultiCloudStorageSection />
      <RegionalDeploymentSection />
      <MultiCloudOrchestrationSection />
      <CrossCloudGovernanceSection />
      <CTABanner />
    </MainLayout>
  );
};

export default MultiCloud;
