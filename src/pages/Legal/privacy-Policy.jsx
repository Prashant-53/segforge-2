import React from "react";
import PrivacyPolicyHeader from "../../subPages/Privacy-policy/header";
import ComplianceGovernance from "../../subPages/Privacy-policy/compliance&Governance";
import PrivacyContact from "../../subPages/Privacy-policy/contactUs";
import CookiesSection from "../../subPages/Privacy-policy/cookies";
import DataRetention from "../../subPages/Privacy-policy/dataRetention";
import DataSovereignty from "../../subPages/Privacy-policy/dataSoveirgnity";
import PrivacyNotice from "../../subPages/Privacy-policy/imp-Notice";
import InformationCollected from "../../subPages/Privacy-policy/infoWeCollect";
import PrivacyScope from "../../subPages/Privacy-policy/intro&scope";
import PrivacyRights from "../../subPages/Privacy-policy/rights";
import TechnicalSecurity from "../../subPages/Privacy-policy/technical-Security";

import MainLayout from "../../layouts/mainLayout";

const PrivacyPolicy = () => {
  return (
    <MainLayout>
      <PrivacyPolicyHeader />
      <ComplianceGovernance />
      <CookiesSection />
      <DataRetention />
      <DataSovereignty />
      <PrivacyNotice />
      <InformationCollected />
      <TechnicalSecurity />
      <PrivacyScope />
      <PrivacyRights />
      <PrivacyContact />
    </MainLayout>
  );
};

export default PrivacyPolicy;
