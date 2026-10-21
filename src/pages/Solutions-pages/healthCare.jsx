import React from "react";
import HealthcareHero from "../../subPages/solutions/healthcare/hero";
import HealthcareChallenge from "../../subPages/solutions/healthcare/challenge";
import HealthcarePlatform from "../../subPages/solutions/healthcare/answer";
import HealthcareUseCases from "../../subPages/solutions/healthcare/useCases";
import HealthcareSovereignty from "../../subPages/solutions/healthcare/govern";
import CTA from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const HealthCare = () => {
  return (
    <MainLayout>
      <HealthcareHero />
      <HealthcareChallenge />
      <HealthcarePlatform />
      <HealthcareUseCases />
      <HealthcareSovereignty />
      <CTA />
    </MainLayout>
  );
};

export default HealthCare;
