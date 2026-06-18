import React from "react";
import MigrationHero from "../../subPages/solutions/Migration-Services/hero";
import MigrationChallenge from "../../subPages/solutions/Migration-Services/challenge";
import MigrationPlatform from "../../subPages/solutions/Migration-Services/answer";
import MigrationSimulator from "../../subPages/solutions/Migration-Services/simulator";
import SafeMigrations from "../../subPages/solutions/Migration-Services/built";
import MigrationConnectivity from "../../subPages/solutions/Migration-Services/enterprise";
import MigrationCTA from "../../subPages/solutions/Migration-Services/cta";
import MainLayout from "../../layouts/mainLayout";

const MigrationServices = () => {
  return (
    <MainLayout>
      <MigrationHero />
      <MigrationChallenge />
      <MigrationPlatform />
      <MigrationSimulator />
      <SafeMigrations />
      <MigrationConnectivity />
      <MigrationCTA />
    </MainLayout>
  );
};

export default MigrationServices;
