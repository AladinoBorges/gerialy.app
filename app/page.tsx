'use client';

import { HeroHeaderWithAppScreenshot } from '@/components/Heroes/WithAppScreenshot';
import { ProductOnboardingNavigationBar } from '@/components/Navigation/ProductOnboarding';

export default function Home() {
  return (
    <ProductOnboardingNavigationBar>
      <HeroHeaderWithAppScreenshot />
    </ProductOnboardingNavigationBar>
  );
}
