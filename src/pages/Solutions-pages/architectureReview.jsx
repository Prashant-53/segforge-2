import React from "react";
import ArchitectureReviewHero from "../../subPages/solutions/Architecture-Review/hero";
import ArchitectureReviewChallenge from "../../subPages/solutions/Architecture-Review/challenge";
import ArchitectureFramework from "../../subPages/solutions/Architecture-Review/answer";
import ProductionReadinessScorecard from "../../subPages/solutions/Architecture-Review/simulator";
import PerformanceSecurityOptimization from "../../subPages/solutions/Architecture-Review/built";
import FinOpsOperationalEfficiency from "../../subPages/solutions/Architecture-Review/enterprise";
import CTA from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const ArchitectureReview = () => {
  return (
    <MainLayout>
      <ArchitectureReviewHero />
      <ArchitectureReviewChallenge />
      <ArchitectureFramework />
      <ProductionReadinessScorecard />
      <PerformanceSecurityOptimization />
      <FinOpsOperationalEfficiency />
      <CTA />
    </MainLayout>
  );
};

export default ArchitectureReview;
