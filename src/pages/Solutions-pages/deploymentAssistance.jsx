import React from "react";
import DeploymentHero from "../../subPages/solutions/Deployment-Assistance/hero";
import DeploymentChallenge from "../../subPages/solutions/Deployment-Assistance/challenge";
import DeploymentFramework from "../../subPages/solutions/Deployment-Assistance/answer";
import InfrastructureBlueprintConfigurator from "../../subPages/solutions/Deployment-Assistance/simulator";
import AutomatedProvisioning from "../../subPages/solutions/Deployment-Assistance/built";
import DeploymentResilience from "../../subPages/solutions/Deployment-Assistance/enterprise";
import DeploymentCTA from "../../subPages/solutions/Deployment-Assistance/cta";
import MainLayout from "../../layouts/mainLayout";

const DeploymentAssistance = () => {
  return (
    <MainLayout>
      <DeploymentHero />
      <DeploymentChallenge />
      <DeploymentFramework />
      <InfrastructureBlueprintConfigurator />
      <AutomatedProvisioning />
      <DeploymentResilience />
      <DeploymentCTA />
    </MainLayout>
  );
};

export default DeploymentAssistance;
