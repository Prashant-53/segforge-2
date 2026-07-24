import React from "react";
import AIHero from "../../subPages/product/AI/hero.jsx";
import Second from "../../subPages/product/AI/second.jsx";
import Third from "../../subPages/product/AI/third.jsx";
import Fourth from "../../subPages/product/AI/fourth.jsx";
import Fifth from "../../subPages/product/AI/fifth.jsx";
import Sixth from "../../subPages/product/AI/sixth.jsx";
import { CTABanner } from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const AI = () => {
  return (
    <MainLayout>
      <AIHero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <CTABanner />
    </MainLayout>
  );
};

export default AI;
