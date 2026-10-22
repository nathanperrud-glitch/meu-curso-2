export interface WorkflowScenePreset {
  id: string;
  label: string;
  characterName: string;
  characterImage: string;
  refPrimaryLabel: string;
  refPrimaryImage: string;
  refSecondaryLabel: string;
  refSecondaryImage: string;
  basePrompt: string;
  ref01Details: string;
  ref02Details: string;
  outputImage: string;
  outputLabel: string;
  consistencyScore: string;
}

export interface GalleryItem {
  id: string;
  index: string;
  label: string;
  subtitle: string;
  image: string;
  consistency: string;
  promptSnippet: string;
}

export interface PlanOption {
  id: 'start' | 'plus';
  tierKicker: string;
  name: string;
  badge?: string;
  description: string;
  focusLabel: string;
  bundleHeader?: {
    title: string;
    leftLabel: string;
    rightLabel: string;
  };
  features: { text: string; bold?: boolean }[];
  bottomNote?: string;
  priceInteger: number;
  priceCents: string;
  ctaLabel: string;
}

export interface CheckoutInput {
  planId: 'start' | 'plus';
  fullName: string;
  email: string;
  paymentMethod: 'pix' | 'card';
  couponCode?: string;
}

export interface CheckoutValidationResult {
  valid: boolean;
  errors: {
    fullName?: string;
    email?: string;
  };
  finalPriceCents: number;
  formattedTotal: string;
  discountApplied: boolean;
}

export const HOTLINK_IMAGES = {
  heroVideoCover:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC6CqRFL9eGR93Ci9opUBoiY8LFqeFme8r9xzW6OSZtmDRmxdfgX4CI6foHoUA-pvhN95KqHaChPV6iSAFYSYoRPWIP0PIQZcj4sK2aoOFdh-uiSfzADIVDivZkNS_36SBUkbGxFJpY5rQBDr4QTA0oHKOA4Fp0yuQEnjElp8xBOH4anpg1RI-cz8GsppcsE5Pi9t-8zUHDI2iaMUxPvkPYDJQuL3e9Tmb7mhyGWJLbI3BrkC0vBq86',
  gallery01:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBTR_lfHUnHU5cEkgPC0Dxf2UrRfWI1grNxmvK6S_M1261nIFdGGgAtzexZgaLiCwXy878Am_j7v44zx3qoh_Jc0zC-fk6lOJwd3BYHiv7hg37OafO09mo2lnMz5ckv1zSZ2x9ugBh29BO6p-DlIlBuLq8ZbU8TdUaW4w3Wtn19z4vdvfB2kWIVPrWMV33wF6XjR6qrQ4MpEktnsclRB_gTJapINhr5Ql5zz-yCjrdX9vJC7PYcrCRs',
  gallery02:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDkV2JAzeiWZcleXvFGkPR0VqJWkl4aJkbm2S0Vr2fvfMRdEwAfNSJzjYIJoha9xN9jORsCe44cMevHZDFuC-PXJEUqgQV37Xu9unJ5JmlqVKSL6bV4z50A9wBuTC6U2JmEuqRkOKaeGtBqgbQhfa3BeyaRFlJbUCL9m0ud-sOwqLN5RDznxycvl8F7H3pd0k2mxtNqKkrCVUQrxNzupiZ_GnCF9a87wk6-GWqnfOIT3DbGVv1GoN1f',
  gallery03:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDpqdhi5nSrtbYuVTizvh8_2r8LdXbtUhnNUvJLmKc5LVJbIIrzaqJrojgUn9aJ6NKKeo5NSX5szizcVVqh6QC9PtWKT-RRgwZiufv3Qw0fm9AbgF4rKvRiP19ZNWaYjeY3UEqepLronVWY4-LkLEdc9-XyV0Bm6DQaK7oSAHWT2wqA_PNLRW91w6p0wUUAqk1Y2-2DFeQ4s1YOcvF9G2uDiOSdTX5aH9ywc7AG9NiBNYu5U43THPQb',
  gallery04:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA056k-0zRsjQqIHCBoAbJGDYb1tEGB_I9xS0rwxcKYQrf05rG9RRbgQXXLW1RmaXTHQz7aAsJwWOBFT0WhrWAX-CuXCTUH0SpbWblc_SO-a2OUcNNIW0LzfNG4YIc6EUnBfdDR95tcJVUePLXI0iph6UHkj-AS6teGt-uKxoS-va9A2P47hFVdaQxoXKaEuB2xn4sa1nsZEfsfmpdUo0yMQPmwcGyFsMCZ6NW1colXEZju7_EtYeqz',
  workflowFaceRefA:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBz2lJ9_lJJR3sPnB9qsMkvgWvqIRkmGTgD1lWmFzap2DoN147gLOs71TZZsCPF35l5U9fH2-zsMQJhBDvRl0wFdsEEqWfjpE2RfPQvsyvCphvG3IEZwb6DiKEAh88O4hwaRuzxnhUxTdmR1HcparTvhbKvwaNiiTyteRUV86L1kqNdFGpujHK7bLwy7xKZ5jWJIS4mNUHSgfD0bOboDRuVk_KbvbH16BjgtKkQD0t7VE8Lsp4XnaNI',
  workflowCarRefB:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCArSKMarHMbWWaE10o8W4TOp97UENpc_edUqwDXHDN5bIAinNoXnRTXqu0yjFF5ZPPBQAjvvkIRNuQJ3eGv_wpmjpQZv2JF-eKABnT2eYwEDXk5DDOoCWXddi1omOMt-MMG5wEUwCE1Lt05fa-_q05pZvv8_wtrfnEqmdHBVgpdP9NtQ3o-5ffoECTgZMlMAxP2rdzVMZPlz2BDIFYZnIKBbJeVh-2ZgLgnkHwXA-MSCkCKGPTU0aX',
  workflowInteriorRefC:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAacoJHC6CN4dky8OiMEI_zesMmWYTljG9gZDt7X82pgTMIRvxIsDDvrWBIMvmHvCq83tMx1NDdGj1KM7wqwnzTtRWmOqvXxwAXjJLhnLQacxX8KStFx4BQgtfoUcl1LYFxC1H5lYMybcAuyFQz9WMtCJDPuMsTYWDcIThbXAqaGB9jWPdgb3Ypqsy0BbsQX1LgKIwwmL5_kSZ6XsN2Aqb_FUGNVBm2GBRF9TuEZsun9GMOBvZ7MXzN',
  workflowFinalOutput:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBHxSPMKtrK5cZDsFUwa83ATq_ddoC3HKhyLJjzCTrTzYsTH_FljMNy7fNyAHRAPnMJK1BwfmRfaX96-ZY7KzFqKNjRgKsg_n7k5P6Uk5hS1zIe1fnPSIukBZbwrVcHv6HFh5DasdRNVbpSGeoMvKtAObP2B1zIPSsnqad5xE6AObHbXBFslJ4Ntr466pgrflZCdUOIULHxNGBYo1gzzSLguXuQCZPY1S--fFhkKY2uK8U3XP7EozWV',
  mobilePreview:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC3WGDKEy9XpnOyM6vvgXtVpIC2MdWZ4jI27ZRLo8ss1Nc89JTdEjZT1-veQjUvCuxk5EJJMz4u1SEEbr0eh5mg6h41gz3pKbFE9AiC9L1qTcHAgQqOPyV61sdKQBYQQgaqxKs-49Id9z3ztYqUDlpB-KZntwbi1T3lX_c8DT1lpZPY7a8WYbmWIeTcc4Ovn65-MfzXPcaJTcwAtv3czgtimhb0Pbpa2r7ISXk0wStr_1WUc392iQ84',
};

export const WORKFLOW_PRESETS: WorkflowScenePreset[] = [
  {
    id: 'porsche-editorial',
    label: 'Porsche 911 Editorial',
    characterName: 'INFLUENCER_01',
    characterImage: HOTLINK_IMAGES.workflowFaceRefA,
    refPrimaryLabel: 'PORSCHE 911',
    refPrimaryImage: HOTLINK_IMAGES.workflowCarRefB,
    refSecondaryLabel: 'INTERIOR CAR',
    refSecondaryImage: HOTLINK_IMAGES.workflowInteriorRefC,
    basePrompt:
      'Place the woman INFLUENCER_01 inside the referenced Porsche 911 interior, preserving her identity, facial features and appearance while matching the car interior with maximum visual consistency...',
    ref01Details:
      'Reference 01 Lock: Porsche 911 Carrera cabriolet exterior & steering badge geometry, natural daylight reflections on metallic trim, 35mm f/1.8 depth of field.',
    ref02Details:
      'Reference 02 Lock: Espresso leather sports seats, warm golden-hour window key light, authentic skin micro-texture and natural catchlights.',
    outputImage: HOTLINK_IMAGES.workflowFinalOutput,
    outputLabel: 'GERAÇÃO IA • IDENTIDADE + REFERÊNCIA + PROMPT',
    consistencyScore: '99.4%',
  },
  {
    id: 'ugc-golden-hour',
    label: 'UGC Golden Hour',
    characterName: 'INFLUENCER_01',
    characterImage: HOTLINK_IMAGES.workflowFaceRefA,
    refPrimaryLabel: 'SUNLIGHT PORTRAIT',
    refPrimaryImage: HOTLINK_IMAGES.gallery02,
    refSecondaryLabel: 'LIFESTYLE TERRACE',
    refSecondaryImage: HOTLINK_IMAGES.gallery01,
    basePrompt:
      'Close-up candid UGC frame of INFLUENCER_01 in warm sunset light, soft natural skin pores, subtle smile looking at camera, handheld iPhone 16 Pro aesthetic, 9:16 vertical...',
    ref01Details:
      'Reference 01 Lock: Direct golden hour rim lighting on blonde hair strands, zero plastic smoothing, authentic freckles and epidermis texture.',
    ref02Details:
      'Reference 02 Lock: Warm architectural stone terrace background with soft bokeh, natural shadows, high dynamic range.',
    outputImage: HOTLINK_IMAGES.gallery02,
    outputLabel: 'GERAÇÃO IA • RETRATO UGC LUZ NATURAL',
    consistencyScore: '99.7%',
  },
  {
    id: 'fashion-campaign',
    label: 'Fashion Campaign',
    characterName: 'INFLUENCER_01',
    characterImage: HOTLINK_IMAGES.workflowFaceRefA,
    refPrimaryLabel: 'HIGH FASHION',
    refPrimaryImage: HOTLINK_IMAGES.gallery03,
    refSecondaryLabel: 'PRODUCT SHOT',
    refSecondaryImage: HOTLINK_IMAGES.gallery04,
    basePrompt:
      'Editorial campaign portrait of INFLUENCER_01 wearing sunglasses and luxury resort wear, tropical foliage backdrop, crisp magazine lighting, identical facial bone structure...',
    ref01Details:
      'Reference 01 Lock: Luxury eyewear reflections, symmetrical facial proportions locked via LoRA weight 0.85, editorial color grading.',
    ref02Details:
      'Reference 02 Lock: Commercial campaign framing for Instagram Reels and brand lookbooks with high contrast.',
    outputImage: HOTLINK_IMAGES.gallery03,
    outputLabel: 'GERAÇÃO IA • CAMPANHA DE MODA 4K',
    consistencyScore: '99.2%',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'portrait-01',
    index: '01',
    label: 'INFLUENCER PORTRAIT',
    subtitle: 'Identidade facial consistente em múltiplos ângulos',
    image: HOTLINK_IMAGES.gallery01,
    consistency: '99.6%',
    promptSnippet: 'Candid mirror & architectural portrait, natural daylight, 35mm raw skin texture --ar 9:16',
  },
  {
    id: 'ugc-02',
    index: '02',
    label: 'UGC CREATOR',
    subtitle: 'Formato autêntico para Reels, Stories e TikTok',
    image: HOTLINK_IMAGES.gallery02,
    consistency: '99.8%',
    promptSnippet: 'Golden hour close-up portrait, warm sunlight hitting hair, realistic pores, iPhone 16 Pro UGC --ar 9:16',
  },
  {
    id: 'fashion-03',
    index: '03',
    label: 'FASHION CAMPAIGN',
    subtitle: 'Editorial para marcas, lookbooks e parcerias',
    image: HOTLINK_IMAGES.gallery03,
    consistency: '99.4%',
    promptSnippet: 'Outdoor luxury fashion editorial, designer eyewear, lush background, crisp daylight --ar 9:16',
  },
  {
    id: 'product-04',
    index: '04',
    label: 'PRODUCT CONTENT',
    subtitle: 'Demonstração comercial e anúncios de alta conversão',
    image: HOTLINK_IMAGES.gallery04,
    consistency: '99.5%',
    promptSnippet: 'Evening commercial lifestyle shot, holding product with natural hand geometry, studio rim light --ar 9:16',
  },
];

export const PRICING_PLANS: PlanOption[] = [
  {
    id: 'start',
    tierKicker: 'INFLUVENCE',
    name: 'START',
    description: 'Comece do zero e crie sua Influencer IA pronta para gerar conteúdo e vendas.',
    focusLabel: 'Criar  •  desenvolver  •  monetizar Influencer IA',
    features: [
      { text: 'Estratégia completa de INFLUVENCE' },
      { text: 'Criação de Influencer IA do zero' },
      { text: 'Influenciadora extremamente realista' },
      { text: 'IAs utilizadas para criar os conteúdos' },
      { text: 'Criação de imagens e vídeos com IA' },
      { text: 'Criação de conteúdos virais' },
      { text: 'Memória e processos de personagem' },
      { text: 'Estrutura completa para o perfil de conteúdo' },
      { text: 'Estratégias de monetização e vendas' },
      { text: 'Do básico à monetização da personagem' },
    ],
    bottomNote: 'Tudo que você precisa para criar sua Influencer IA e começar a monetizar.',
    priceInteger: 47,
    priceCents: '90',
    ctaLabel: 'QUERO COMEÇAR AGORA',
  },
  {
    id: 'plus',
    tierKicker: 'INFLUVENCE + MÁQUINA DE INFLUENCER IA',
    name: 'PLUS',
    badge: 'MELHOR ESCOLHA',
    description: 'Domine as duas principais estratégias para ganhar dinheiro com Influenciadores IA.',
    focusLabel: 'Influencer IA  +  Infoprodutos  +  TikTok Shop  +  Escala',
    bundleHeader: {
      title: 'VOCÊ RECEBE 2 TREINAMENTOS COMPLETOS:',
      leftLabel: 'INFLUVENCE',
      rightLabel: 'MÁQUINA DE INFLUENCER IA',
    },
    features: [
      { text: 'Tudo que existe no plano Start', bold: true },
      { text: 'INFLUVENCE completo', bold: true },
      { text: 'Máquina de Influencer IA completa', bold: true },
      { text: 'Criação realista e conteúdo viral com IA' },
      { text: 'Monetização e venda de produtos' },
      { text: 'Estratégia completa para infoprodutos' },
      { text: 'Conteúdo para vender em escala' },
      { text: 'Estrutura de Influencer IA para vendas' },
      { text: 'TikTok Shop do zero' },
      { text: 'Pesquisa de produtos e vídeos de venda' },
      { text: 'Do básico ao avançado para escalar' },
    ],
    priceInteger: 197,
    priceCents: '90',
    ctaLabel: 'QUERO O ACESSO COMPLETO',
  },
];

export function resolveWorkflowPromptText(
  preset: WorkflowScenePreset,
  activeTab: 'base' | 'ref01' | 'ref02',
  customPrompt?: string
): string {
  if (activeTab === 'base') {
    return customPrompt !== undefined ? customPrompt : preset.basePrompt;
  }
  if (activeTab === 'ref01') {
    return preset.ref01Details;
  }
  return preset.ref02Details;
}

export function formatBRLFromCents(cents: number): string {
  const safeCents = Math.max(0, Math.round(cents));
  const integerPart = Math.floor(safeCents / 100);
  const decimalPart = String(safeCents % 100).padStart(2, '0');
  return `R$ ${integerPart},${decimalPart}`;
}

export function validateCheckoutSubmission(input: CheckoutInput): CheckoutValidationResult {
  const errors: { fullName?: string; email?: string } = {};
  const trimmedName = input.fullName.trim();
  const trimmedEmail = input.email.trim();

  if (trimmedName.length < 3) {
    errors.fullName = 'Informe seu nome completo para emissão do acesso.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Informe um endereço de e-mail válido.';
  }

  const baseCents = input.planId === 'plus' ? 19790 : 4790;
  const normalizedCoupon = (input.couponCode || '').trim().toUpperCase();
  const discountApplied = normalizedCoupon === 'IA10' || normalizedCoupon === 'INFLUVENCE10';
  const finalPriceCents = discountApplied ? Math.round(baseCents * 0.9) : baseCents;

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    finalPriceCents,
    formattedTotal: formatBRLFromCents(finalPriceCents),
    discountApplied,
  };
}
