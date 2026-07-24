import React from "react";
import HybridInfrastructureHero from "../../subPages/product/hybridInfrastructure/hero";
import ClusterProvisioningSection from "../../subPages/product/hybridInfrastructure/bringEveryEnvironmentTogether";
import ClusterProfilesSection from "../../subPages/product/hybridInfrastructure/deployWorkloads";
import CostGovernanceSection from "../../subPages/product/hybridInfrastructure/scaleInfra";
import UnifiedControlPlaneSection from "../../subPages/product/hybridInfrastructure/unifiedcontrolPlane";
import MainLayout from "../../layouts/mainLayout";
import { CTABanner } from "../../components/BottomCTA";
const HybridInfrastructure = () => {
  return (
    <MainLayout>
      <HybridInfrastructureHero />
      <ClusterProvisioningSection />
      <ClusterProfilesSection />
      <CostGovernanceSection />
      <UnifiedControlPlaneSection />
      <CTABanner />
    </MainLayout>
  );
};

export default HybridInfrastructure;
