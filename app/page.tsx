'use client';

import { CoreAppFeatures } from '@/components/Features/CoreAppFeatures';
import { HeroHeaderWithAppScreenshot } from '@/components/Heroes/WithAppScreenshot';
import { ProductOnboardingNavigationBar } from '@/components/Navigation/ProductOnboarding';

export default function Home() {
  return (
    <ProductOnboardingNavigationBar>
      <HeroHeaderWithAppScreenshot />

      <CoreAppFeatures />
    </ProductOnboardingNavigationBar>
  );
}
