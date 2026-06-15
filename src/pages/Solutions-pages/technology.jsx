import React from "react";
import TechnologyHero from "../../subPages/solutions/Technology/hero";
import TechnologyChallenge from "../../subPages/solutions/Technology/challenge";
import TechnologyPlatform from "../../subPages/solutions/Technology/answer";
import TechnologyUseCases from "../../subPages/solutions/Technology/useCases";
import TechnologyGovernance from "../../subPages/solutions/Technology/govern";
import TechnologyDeployment from "../../subPages/solutions/Technology/scale";
import TechnologyCTA from "../../subPages/solutions/Technology/cta";
import MainLayout from "../../layouts/mainLayout";

const Retail = () => {
  return (
    <MainLayout>
      <TechnologyHero />
      <TechnologyChallenge />
      <TechnologyPlatform />
      <TechnologyUseCases />
      <TechnologyGovernance />
      <TechnologyDeployment />
      <TechnologyCTA />
    </MainLayout>
  );
};

export default Retail;
