import React from "react";
import ManufacturingHero from "../../subPages/solutions/Manufacturing/hero";
import ManufacturingChallenge from "../../subPages/solutions/Manufacturing/challenge";
import ManufacturingPlatform from "../../subPages/solutions/Manufacturing/answer";
import ManufacturingUseCases from "../../subPages/solutions/Manufacturing/useCases";
import ManufacturingGovernance from "../../subPages/solutions/Manufacturing/govern";
import ManufacturingSovereignty from "../../subPages/solutions/Manufacturing/sovereinity";
import ManufacturingCTA from "../../subPages/solutions/Manufacturing/cta";
import MainLayout from "../../layouts/mainLayout";

const HealthCare = () => {
  return (
    <MainLayout>
      <ManufacturingHero />
      <ManufacturingChallenge />
      <ManufacturingPlatform />
      <ManufacturingUseCases />
      <ManufacturingGovernance />
      <ManufacturingSovereignty />
      <ManufacturingCTA />
    </MainLayout>
  );
};

export default HealthCare;
