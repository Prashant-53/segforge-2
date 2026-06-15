import React from "react";
import TelecomHero from "../../subPages/solutions/Telecommunications/hero";
import TelecomChallenge from "../../subPages/solutions/Telecommunications/challenge";
import TelecomPlatform from "../../subPages/solutions/Telecommunications/answer";
import TelecomUseCases from "../../subPages/solutions/Telecommunications/usecases";
import TelecomGovernance from "../../subPages/solutions/Telecommunications/govern";
import TelecomSovereignty from "../../subPages/solutions/Telecommunications/sovereignty";
import TelecomCTA from "../../subPages/solutions/Telecommunications/cta";
import MainLayout from "../../layouts/mainLayout";

const Telecom = () => {
  return (
    <MainLayout>
      <TelecomHero />
      <TelecomChallenge />
      <TelecomPlatform />
      <TelecomUseCases />
      <TelecomGovernance />
      <TelecomSovereignty />
      <TelecomCTA />
    </MainLayout>
  );
};

export default Telecom;
