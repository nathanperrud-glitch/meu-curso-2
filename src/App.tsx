/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ValueAndDeliverablesSection } from './components/ValueAndDeliverablesSection';
import { GalleryAndWorkflowSection } from './components/GalleryAndWorkflowSection';
import { MobileAndMethodSection } from './components/MobileAndMethodSection';
import { PricingFaqAndFooterSection } from './components/PricingFaqAndFooterSection';

export default function App() {
  const [selectedCheckoutPlan, setSelectedCheckoutPlan] = useState<'start' | 'plus' | null>(null);

  const scrollToOffer = () => {
    const el = document.getElementById('oferta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedCheckoutPlan('plus');
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111315] selection:bg-[#FF5520] selection:text-white">
      <HeroSection onSelectPlanClick={scrollToOffer} />
      <ValueAndDeliverablesSection />
      <GalleryAndWorkflowSection />
      <MobileAndMethodSection />
      <PricingFaqAndFooterSection
        selectedCheckoutPlan={selectedCheckoutPlan}
        onOpenCheckout={(planId) => setSelectedCheckoutPlan(planId)}
        onCloseCheckout={() => setSelectedCheckoutPlan(null)}
      />
    </main>
  );
}
