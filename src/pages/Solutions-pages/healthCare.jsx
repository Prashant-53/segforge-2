import React from "react";
import HealthcareHero from "../../subPages/solutions/healthcare/hero";
import HealthcareChallenge from "../../subPages/solutions/healthcare/challenge";
import HealthcarePlatform from "../../subPages/solutions/healthcare/answer";
import HealthcareUseCases from "../../subPages/solutions/healthcare/useCases";
import HealthcareSovereignty from "../../subPages/solutions/healthcare/govern";
import HealthcareCTA from "../../subPages/solutions/healthcare/cta";
import MainLayout from "../../layouts/mainLayout";

const HealthCare = () => {
  return (
    <MainLayout>
      <HealthcareHero />
      <HealthcareChallenge />
      <HealthcarePlatform />
      <HealthcareUseCases />
      <HealthcareSovereignty />
      <HealthcareCTA />
    </MainLayout>
  );
};

export default HealthCare;
