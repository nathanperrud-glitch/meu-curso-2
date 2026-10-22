import test from 'node:test';
import assert from 'node:assert/strict';
import {
  WORKFLOW_PRESETS,
  PRICING_PLANS,
  resolveWorkflowPromptText,
  formatBRLFromCents,
  validateCheckoutSubmission,
} from './studioLogic';

test('resolveWorkflowPromptText returns correct tab content and respects custom base prompt', () => {
  const preset = WORKFLOW_PRESETS[0];
  assert.equal(resolveWorkflowPromptText(preset, 'base'), preset.basePrompt);
  assert.equal(resolveWorkflowPromptText(preset, 'base', 'Custom prompt text'), 'Custom prompt text');
  assert.equal(resolveWorkflowPromptText(preset, 'ref01'), preset.ref01Details);
  assert.equal(resolveWorkflowPromptText(preset, 'ref02'), preset.ref02Details);
});

test('pricing plans match exact prices R$ 47,90 and R$ 197,90', () => {
  const startPlan = PRICING_PLANS.find((p) => p.id === 'start');
  const plusPlan = PRICING_PLANS.find((p) => p.id === 'plus');
  assert.ok(startPlan);
  assert.ok(plusPlan);
  assert.equal(startPlan.priceInteger, 47);
  assert.equal(startPlan.priceCents, '90');
  assert.equal(plusPlan.priceInteger, 197);
  assert.equal(plusPlan.priceCents, '90');
});

test('validateCheckoutSubmission validates name, email, and calculates discount coupon', () => {
  const invalidResult = validateCheckoutSubmission({
    planId: 'start',
    fullName: 'Jo',
    email: 'invalid-email',
    paymentMethod: 'pix',
  });
  assert.equal(invalidResult.valid, false);
  assert.ok(invalidResult.errors.fullName);
  assert.ok(invalidResult.errors.email);

  const validStart = validateCheckoutSubmission({
    planId: 'start',
    fullName: 'Marina Costa',
    email: 'marina@exemplo.com.br',
    paymentMethod: 'pix',
  });
  assert.equal(validStart.valid, true);
  assert.equal(validStart.finalPriceCents, 4790);
  assert.equal(validStart.formattedTotal, 'R$ 47,90');

  const discountedPlus = validateCheckoutSubmission({
    planId: 'plus',
    fullName: 'Marina Costa',
    email: 'marina@exemplo.com.br',
    paymentMethod: 'card',
    couponCode: 'ia10',
  });
  assert.equal(discountedPlus.valid, true);
  assert.equal(discountedPlus.discountApplied, true);
  assert.equal(discountedPlus.finalPriceCents, 17811);
  assert.equal(discountedPlus.formattedTotal, formatBRLFromCents(17811));
});
