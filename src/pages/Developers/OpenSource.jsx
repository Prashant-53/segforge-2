import React from "react";
import OpenSourceHero from "../../subPages/Devlopers/Open-Source/hero";
import OSSStack from "../../subPages/Devlopers/Open-Source/ossStack";
import DataPortability from "../../subPages/Devlopers/Open-Source/storage";
import GitForData from "../../subPages/Devlopers/Open-Source/gitData";
import ArchitectureTransparency from "../../subPages/Devlopers/Open-Source/architecture";
import DeploymentEntryPoints from "../../subPages/Devlopers/Open-Source/deployment";
import MainLayout from "../../layouts/mainLayout";

const SDKs = () => {
  return (
    <MainLayout>
      <OpenSourceHero />
      <OSSStack />
      <DataPortability />
      <GitForData />
      <ArchitectureTransparency />
      <DeploymentEntryPoints />
    </MainLayout>
  );
};

export default SDKs;
