import React from "react";
import RetailHero from "../../subPages/solutions/retail/hero";
import RetailChallenge from "../../subPages/solutions/retail/challenge";
import RetailPlatform from "../../subPages/solutions/retail/answer";
import RetailUseCases from "../../subPages/solutions/retail/RetailCases";
import RetailGovernance from "../../subPages/solutions/retail/govern";
import RetailDeployment from "../../subPages/solutions/retail/deploy";
import RetailCTA from "../../subPages/solutions/retail/cta";
import MainLayout from "../../layouts/mainLayout";

const Retail = () => {
  return (
    <MainLayout>
      <RetailHero />
      <RetailChallenge />
      <RetailPlatform />
      <RetailUseCases />
      <RetailGovernance />
      <RetailDeployment />
      <RetailCTA />
    </MainLayout>
  );
};

export default Retail;
