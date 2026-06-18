import React from "react";
import ArchitectureReviewHero from "../../subPages/solutions/Architecture-Review/hero";
import ArchitectureReviewChallenge from "../../subPages/solutions/Architecture-Review/challenge";
import ArchitectureFramework from "../../subPages/solutions/Architecture-Review/answer";
import ProductionReadinessScorecard from "../../subPages/solutions/Architecture-Review/simulator";
import PerformanceSecurityOptimization from "../../subPages/solutions/Architecture-Review/built";
import FinOpsOperationalEfficiency from "../../subPages/solutions/Architecture-Review/enterprise";
import ArchitectureReviewCTA from "../../subPages/solutions/Architecture-Review/cta";
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
      <ArchitectureReviewCTA />
    </MainLayout>
  );
};

export default ArchitectureReview;
