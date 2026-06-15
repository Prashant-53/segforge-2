import React from "react";
import MultiCloudHero from "../subPages/product/multi-cloud/hero";
import DeployAnywhereSection from "../subPages/product/multi-cloud/freedomToDeploy";
import StoragePortabilitySection from "../subPages/product/multi-cloud/storeData";
import CrossCloudConnectivitySection from "../subPages/product/multi-cloud/connectSystems";
import ManagedGlobalCloudSection from "../subPages/product/multi-cloud/manageGlobally";
import MainLayout from "../layouts/mainLayout";

const MultiCloud = () => {
  return (
    <MainLayout>
      <MultiCloudHero />
      <DeployAnywhereSection />
      <StoragePortabilitySection />
      <CrossCloudConnectivitySection />
    </MainLayout>
  );
};

export default MultiCloud;
