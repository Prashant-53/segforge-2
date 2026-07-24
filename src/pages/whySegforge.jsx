import WhySegForgeHero from "../subPages/whySegforge/hero";
import WhySegForgeSection from "../subPages/whySegforge/reason";
import CostOfFragmentation from "../subPages/whySegforge/cost";
import UnifiedAnswer from "../subPages/whySegforge/answer";
import OpenArchitectureSection from "../subPages/whySegforge/architecture";
import WhyItMatters from "../subPages/whySegforge/matters";
import CTABanner from "../components/BottomCTA";

import MainLayout from "../layouts/mainLayout";

const WhySegforge = () => {
  return (
    <MainLayout>
      <WhySegForgeHero />
      <WhySegForgeSection />
      <CostOfFragmentation />
      <UnifiedAnswer />
      <OpenArchitectureSection />
      <WhyItMatters />
      <CTABanner />
    </MainLayout>
  );
};

export default WhySegforge;
