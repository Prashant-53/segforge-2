import React from "react";
import HybridCloudHero from "../subPages/product/hybridInfrastructure/hero";
import HybridConnectivitySection from "../subPages/product/hybridInfrastructure/bringEveryEnvironmentTogether";
import WorkloadDeploymentSection from "../subPages/product/hybridInfrastructure/deployWorkloads";
import InfrastructureManagementSection from "../subPages/product/hybridInfrastructure/scaleInfra";
import MainLayout from "../layouts/mainLayout";

const HybridInfrastructure = () => {
  return (
    <MainLayout>
      <HybridCloudHero />
      <HybridConnectivitySection />
      <WorkloadDeploymentSection />
      <InfrastructureManagementSection />
    </MainLayout>
  );
};

export default HybridInfrastructure;
