import React, { useState } from 'react';
import { Check, Plus, ShieldCheck, X } from 'lucide-react';
import {
  PRICING_PLANS,
  validateCheckoutSubmission,
  CheckoutValidationResult,
} from '../utils/studioLogic';

interface PricingFaqAndFooterSectionProps {
  selectedCheckoutPlan: 'start' | 'plus' | null;
  onOpenCheckout: (planId: 'start' | 'plus') => void;
  onCloseCheckout: () => void;
}

const FAQ_ITEMS = [
  {
    q: 'O que é o INFLUVENCE?',
    a: 'É o treinamento prático passo a passo onde você aprende a criar influenciadoras digitais ultra-realistas com inteligência artificial, manter o mesmo rosto sempre consistente e gerar vídeos e imagens para monetizar no Instagram, TikTok e parcerias com marcas.',
  },
  {
    q: 'Preciso entender de inteligência artificial?',
    a: 'Não. O treinamento foi desenhado do absoluto zero. Qualquer pessoa, mesmo sem conhecimento técnico prévio, consegue acompanhar copiando os prompts, referências e processos ensinados nas aulas.',
  },
  {
    q: 'Preciso saber editar vídeos?',
    a: 'Não é necessário. Mostramos como utilizar ferramentas automáticas e fluxos diretos para montagem e finalização com qualidade profissional.',
  },
  {
    q: 'Preciso aparecer?',
    a: 'De forma alguma! Toda a proposta é criar uma personagem 100% digital que estará na frente das câmeras por você, garantindo total privacidade e liberdade.',
  },
  {
    q: 'Consigo acompanhar e fazer tudo pelo celular?',
    a: 'Sim! As ferramentas utilizadas operam na nuvem diretamente pelo navegador ou aplicativo no celular (iOS e Android), sem exigir computador potente ou placa de vídeo.',
  },
  {
    q: 'Por quanto tempo tenho acesso?',
    a: 'Seu acesso ao método é imediato mediante pagamento único, incluindo todas as aulas, estruturas de prompts e atualizações aplicáveis da versão adquirida.',
  },
  {
    q: 'Quais ferramentas de IA são utilizadas?',
    a: 'Apresentamos as melhores ferramentas de geração de imagem fotorrealista, retenção de identidade facial (consistência de rosto), clonagem/geração de voz e animação de vídeo em alta definição.',
  },
  {
    q: 'Existe algum custo adicional com ferramentas?',
    a: 'Ensinamos tanto alternativas com créditos gratuitos para você dar os primeiros passos quanto os planos profissionais de melhor custo-benefício para escalar sua produção.',
  },
  {
    q: 'Quando recebo acesso?',
    a: 'O acesso é liberado imediatamente no seu e-mail logo após a confirmação do pagamento via Pix ou Cartão de Crédito.',
  },
];

export const PricingFaqAndFooterSection: React.FC<PricingFaqAndFooterSectionProps> = ({
  selectedCheckoutPlan,
  onOpenCheckout,
  onCloseCheckout,
}) => {
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);
  const [activeLegalDoc, setActiveLegalDoc] = useState<'termos' | 'privacidade' | 'suporte' | null>(
    null
  );

  // Checkout Modal State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'card'>('pix');
  const [couponCode, setCouponCode] = useState('');
  const [validationResult, setValidationResult] = useState<CheckoutValidationResult | null>(null);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const activePlanObj =
    PRICING_PLANS.find((p) => p.id === (selectedCheckoutPlan || 'plus')) || PRICING_PLANS[1];

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCheckoutPlan) return;
    const res = validateCheckoutSubmission({
      planId: selectedCheckoutPlan,
      fullName,
      email,
      paymentMethod,
      couponCode,
    });
    setValidationResult(res);
    if (res.valid) {
      setOrderCompleted(true);
    }
  };

  const resetAndOpenCheckout = (planId: 'start' | 'plus') => {
    setValidationResult(null);
    setOrderCompleted(false);
    onOpenCheckout(planId);
  };

  return (
    <>
      {/* SECTION 9: PRICING PLANS */}
      <section
        id="oferta"
        className="py-16 md:py-24 px-4 bg-[#F5F5F6] border-t border-[#EBECEE]"
        data-purpose="pricing-plans"
      >
        <div className="max-w-[920px] mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase">
            ESCOLHA COMO COMEÇAR
          </span>
          <h2 className="text-[26px] sm:text-[36px] md:text-[42px] leading-[1.06] font-extrabold uppercase tracking-[-0.03em] text-[#111315] mt-2">
            DO PRIMEIRO
            <br />
            CONTEÚDO
            <br />
            <span className="text-[#B5BAC3]">À OPERAÇÃO COMPLETA.</span>
          </h2>
          <p className="text-[11px] sm:text-xs text-[#646973] max-w-[430px] mx-auto mt-3 mb-12 leading-relaxed">
            Duas formas de entrar no INFLUVENCE. Comece com o método completo ou domine também
            infoprodutos, TikTok Shop e escala.
          </p>

          {/* 2-Column Pricing Grid matching Image_1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch text-left">
            {PRICING_PLANS.map((plan) => {
              const isPlus = plan.id === 'plus';
              return (
                <div
                  key={plan.id}
                  className={`rounded-[24px] p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-200 ${
                    isPlus
                      ? 'bg-gradient-to-b from-[#FFF6F0] via-white to-white border-2 border-[#FFD5C2] soft-card-shadow'
                      : 'bg-white border border-[#EBECEE] soft-card-shadow'
                  }`}
                >
                  {/* Top-Right Badge for PLUS */}
                  {plan.badge && (
                    <div className="absolute top-4 right-5 bg-[#FFF0E6] border border-[#FFD5C2] text-[#FF5520] text-[8px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}

                  <div>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[#FF5520] block mb-2">
                      {plan.tierKicker}
                    </span>

                    <h3 className="text-[28px] sm:text-[32px] font-extrabold text-[#111315] tracking-tight leading-none">
                      {plan.name}
                    </h3>

                    <p className="text-[11px] sm:text-xs text-[#646973] mt-2.5 mb-5 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* FOCADO EM Box */}
                    <div
                      className={`p-3 rounded-xl border text-center mb-4 ${
                        isPlus
                          ? 'bg-[#FFF9F6] border-[#FFE3D5]'
                          : 'bg-[#FAFAFB] border-[#EBECEE]'
                      }`}
                    >
                      <span className="text-[8px] font-mono uppercase tracking-widest text-[#A1A6B0] block mb-0.5">
                        FOCADO EM
                      </span>
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#111315]">
                        {plan.focusLabel}
                      </span>
                    </div>

                    {/* Optional 2-Training Bundle Box for PLUS */}
                    {plan.bundleHeader && (
                      <div className="p-3 rounded-xl bg-white border border-[#FFE3D5] text-center mb-5">
                        <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-[#FF5520] block mb-1.5">
                          {plan.bundleHeader.title}
                        </span>
                        <div className="flex items-center justify-center gap-2 text-[9px] font-mono font-bold text-[#111315]">
                          <span className="px-2 py-0.5 rounded bg-[#FAFAFB] border border-[#EBECEE]">
                            {plan.bundleHeader.leftLabel}
                          </span>
                          <span className="text-[#FF5520]">+</span>
                          <span className="px-2 py-0.5 rounded bg-[#FFF5F0] border border-[#FFD5C2] text-[#FF5520]">
                            {plan.bundleHeader.rightLabel}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Features Checklist */}
                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((feat) => (
                        <li key={feat.text} className="flex items-start gap-2.5 text-[11px]">
                          <Check className="w-3.5 h-3.5 text-[#FF5520] shrink-0 mt-0.5 stroke-[2.5]" />
                          <span
                            className={
                              feat.bold
                                ? 'font-bold text-[#111315]'
                                : 'font-medium text-[#4B5059]'
                            }
                          >
                            {feat.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {plan.bottomNote && (
                      <p className="text-[10px] font-bold text-[#111315] mb-6 leading-relaxed">
                        {plan.bottomNote}
                      </p>
                    )}
                  </div>

                  {/* Price & Action Footer */}
                  <div className="pt-5 border-t border-[#F0F1F3]">
                    <span className="text-[8px] font-mono uppercase tracking-widest text-[#A1A6B0] block">
                      PAGAMENTO ÚNICO
                    </span>
                    <div className="flex items-baseline gap-0.5 mt-1 mb-4 tabular-nums">
                      <span className="text-xs font-bold text-[#646973] mr-1">R$</span>
                      <span className="text-[38px] sm:text-[42px] font-extrabold text-[#111315] leading-none tracking-tight">
                        {plan.priceInteger}
                      </span>
                      <span className="text-sm font-extrabold text-[#111315]">
                        ,{plan.priceCents}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => resetAndOpenCheckout(plan.id)}
                      className="w-full py-3.5 px-5 rounded-xl cta-orange-gradient text-white font-bold text-[11px] uppercase tracking-[0.06em] text-center transition-transform active:scale-[0.99] cursor-pointer"
                    >
                      {plan.ctaLabel}
                    </button>

                    <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[9px] text-[#A1A6B0]">
                      <ShieldCheck className="w-3 h-3 text-[#A1A6B0]" />
                      <span>Compra segura &nbsp;•&nbsp; Acesso imediato</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ SECTION */}
      <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]" data-purpose="faq-section">
        <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase mb-2">
              FAQ
            </span>
            <h2 className="text-[28px] sm:text-[34px] leading-[1.06] font-extrabold uppercase tracking-[-0.03em] text-[#111315] mb-3">
              PERGUNTAS
              <br />
              <span className="text-[#B5BAC3]">FREQUENTES.</span>
            </h2>
            <p className="text-[11px] sm:text-xs text-[#646973]">
              Informações diretas antes de você começar.
            </p>
          </div>

          {/* Right Column: 9 FAQ Pill Rows matching Image_1 */}
          <div className="lg:col-span-8 flex flex-col gap-2.5">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div
                  key={item.q}
                  className="bg-white rounded-xl border border-[#EBECEE] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-4 py-3.5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[#FAFAFB] transition-colors"
                  >
                    <span className="text-[12px] sm:text-[13px] font-bold text-[#111315]">
                      {item.q}
                    </span>
                    <span
                      className={`w-5 h-5 rounded-full bg-[#FFF5F0] text-[#FF5520] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-45' : ''
                      }`}
                    >
                      <Plus className="w-3 h-3 stroke-[2.5]" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-[11px] sm:text-xs text-[#646973] leading-relaxed border-t border-[#F5F5F6]">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA & FOOTER */}
      <footer
        className="pt-16 md:pt-24 pb-10 px-4 bg-[#FAFAFA] relative overflow-hidden border-t border-[#EBECEE]"
        data-purpose="final-cta-footer"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[360px] warm-section-glow pointer-events-none"
        />

        <div className="max-w-[960px] mx-auto text-center relative z-10">
          {/* Final CTA Block */}
          <div className="max-w-[640px] mx-auto mb-16">
            <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase">
              A NOVA CREATOR ECONOMY
            </span>
            <h2 className="text-[26px] sm:text-[38px] md:text-[42px] leading-[1.08] font-extrabold uppercase tracking-[-0.03em] text-[#111315] mt-2">
              A PRÓXIMA INFLUENCIADORA
              <br />
              <span className="text-[#B5BAC3]">PODE NEM EXISTIR.</span>
            </h2>
            <p className="text-[11px] sm:text-xs font-semibold text-[#8E939E] uppercase tracking-[0.08em] mt-3 mb-7 leading-relaxed">
              MAS O CONTEÚDO DELA PODE ESTAR
              <br />
              EM TODO LUGAR.
            </p>

            <button
              type="button"
              onClick={() => resetAndOpenCheckout('start')}
              className="cta-orange-gradient text-white font-bold text-[11px] sm:text-xs tracking-[0.06em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl transition-transform active:scale-[0.99] cursor-pointer"
            >
              QUERO APRENDER A CRIAR COM IA
            </button>

            <p className="text-[10px] text-[#A1A6B0] mt-2.5 font-medium">
              R$ 47,90 &nbsp;•&nbsp; pagamento único
            </p>
          </div>

          {/* Footer Divider */}
          <div className="w-full h-px bg-[#EBECEE] mb-6" />

          {/* Bottom Bar matching Image_1 */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#A1A6B0]">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-[#FFF3EE] border border-[#FFD5C2] text-[#FF5520] font-bold text-[9px] flex items-center justify-center">
                I
              </span>
              <span className="font-bold text-[#111315] tracking-wider uppercase">
                INFLUVENCE
              </span>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setActiveLegalDoc('termos')}
                className="hover:text-[#111315] transition-colors cursor-pointer"
              >
                Termos
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalDoc('privacidade')}
                className="hover:text-[#111315] transition-colors cursor-pointer"
              >
                Privacidade
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalDoc('suporte')}
                className="hover:text-[#111315] transition-colors cursor-pointer"
              >
                Suporte
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[9px] text-[#B5BAC3]">
            <span>© 2026 INFLUVENCE. Todos os direitos reservados.</span>
            <span>
              Os resultados variam de acordo com aplicação estratégica, ferramentas utilizadas e
              execução de cada aluno.
            </span>
          </div>
        </div>
      </footer>

      {/* LEGAL / SUPPORT DIALOG */}
      {activeLegalDoc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Informações institucionais"
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div className="bg-white rounded-2xl max-w-md w-full p-6 border border-[#EBECEE] shadow-xl text-left">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-extrabold uppercase text-[#111315]">
                {activeLegalDoc === 'termos' && 'Termos de Uso — INFLUVENCE'}
                {activeLegalDoc === 'privacidade' && 'Política de Privacidade'}
                {activeLegalDoc === 'suporte' && 'Central de Suporte ao Aluno'}
              </h3>
              <button
                type="button"
                aria-label="Fechar janela"
                onClick={() => setActiveLegalDoc(null)}
                className="p-1 text-[#646973] hover:text-[#111315]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-[#646973] leading-relaxed mb-4">
              {activeLegalDoc === 'termos' &&
                'O treinamento INFLUVENCE concede licença individual de acesso às aulas, estruturas de prompts e fluxos de criação de influenciadoras digitais com IA.'}
              {activeLegalDoc === 'privacidade' &&
                'Seus dados cadastrais são protegidos e utilizados exclusivamente para liberação imediata do acesso à área de membros e comunicações oficiais.'}
              {activeLegalDoc === 'suporte' &&
                'Atendimento dedicado aos alunos via e-mail suporte@influvence.com.br e dentro da plataforma de aulas em até 24 horas úteis.'}
            </p>
            <button
              type="button"
              onClick={() => setActiveLegalDoc(null)}
              className="w-full py-2.5 rounded-xl bg-[#111315] text-white text-xs font-bold uppercase cursor-pointer"
            >
              Entendi
            </button>
          </div>
        </div>
      )}

      {/* INTERACTIVE CHECKOUT MODAL */}
      {selectedCheckoutPlan && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Finalizar inscrição no Influvence"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-white rounded-[24px] max-w-lg w-full p-6 sm:p-8 border border-[#EBECEE] shadow-2xl text-left relative my-8">
            <button
              type="button"
              aria-label="Fechar checkout"
              onClick={onCloseCheckout}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#F5F5F6] text-[#646973] hover:text-[#111315] flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {!orderCompleted ? (
              <form onSubmit={handleCheckoutSubmit} noValidate>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF5520]">
                  INSCRIÇÃO OFICIAL • ACESSO IMEDIATO
                </span>
                <h3 className="text-xl font-extrabold text-[#111315] mt-1 mb-4">
                  Plano {activePlanObj.name} — R$ {activePlanObj.priceInteger},
                  {activePlanObj.priceCents}
                </h3>

                {/* Plan Switcher Tabs inside Checkout */}
                <div className="grid grid-cols-2 gap-2 p-1 bg-[#F5F5F6] rounded-xl mb-5">
                  <button
                    type="button"
                    onClick={() => {
                      onOpenCheckout('start');
                      setValidationResult(null);
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedCheckoutPlan === 'start'
                        ? 'bg-white text-[#111315] shadow-xs'
                        : 'text-[#646973] hover:text-[#111315]'
                    }`}
                  >
                    START • R$ 47,90
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onOpenCheckout('plus');
                      setValidationResult(null);
                    }}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      selectedCheckoutPlan === 'plus'
                        ? 'bg-white text-[#FF5520] shadow-xs'
                        : 'text-[#646973] hover:text-[#111315]'
                    }`}
                  >
                    PLUS • R$ 197,90
                  </button>
                </div>

                <div className="space-y-3.5">
                  <div>
                    <label
                      htmlFor="checkout-fullname"
                      className="block text-xs font-bold text-[#111315] mb-1"
                    >
                      Nome completo
                    </label>
                    <input
                      id="checkout-fullname"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Digite seu nome completo"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBECEE] text-xs text-[#111315] focus:outline-none focus:border-[#FF5520]"
                    />
                    {validationResult?.errors.fullName && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">
                        {validationResult.errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="checkout-email"
                      className="block text-xs font-bold text-[#111315] mb-1"
                    >
                      E-mail para receber o acesso
                    </label>
                    <input
                      id="checkout-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="seuemail@exemplo.com.br"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#EBECEE] text-xs text-[#111315] focus:outline-none focus:border-[#FF5520]"
                    />
                    {validationResult?.errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 font-medium">
                        {validationResult.errors.email}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('pix')}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold cursor-pointer ${
                        paymentMethod === 'pix'
                          ? 'border-[#FF5520] bg-[#FFF5F0] text-[#FF5520]'
                          : 'border-[#EBECEE] text-[#646973]'
                      }`}
                    >
                      Pix (Liberação Imediata)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`py-2.5 px-3 rounded-xl border text-xs font-bold cursor-pointer ${
                        paymentMethod === 'card'
                          ? 'border-[#FF5520] bg-[#FFF5F0] text-[#FF5520]'
                          : 'border-[#EBECEE] text-[#646973]'
                      }`}
                    >
                      Cartão de Crédito
                    </button>
                  </div>

                  <div>
                    <label
                      htmlFor="checkout-coupon"
                      className="block text-[11px] font-semibold text-[#646973] mb-1"
                    >
                      Cupom de desconto (opcional — ex: IA10)
                    </label>
                    <input
                      id="checkout-coupon"
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Código promocional"
                      className="w-full px-3.5 py-2 rounded-xl border border-[#EBECEE] text-xs font-mono text-[#111315] focus:outline-none focus:border-[#FF5520]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full py-3.5 rounded-xl cta-orange-gradient text-white font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Confirmar Inscrição • R$ {activePlanObj.priceInteger},{activePlanObj.priceCents}
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 rounded-full bg-[#FFF3EE] text-[#FF5520] flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#FF5520]">
                  ACESSO LIBERADO COM SUCESSO
                </span>
                <h3 className="text-lg font-extrabold text-[#111315] mt-1">
                  Bem-vindo(a) ao INFLUVENCE {activePlanObj.name}, {fullName}!
                </h3>
                <p className="text-xs text-[#646973] mt-2 leading-relaxed">
                  Enviamos os dados de acesso imediato para <strong>{email}</strong>. Total
                  processado via {paymentMethod === 'pix' ? 'Pix' : 'Cartão'}:{' '}
                  <strong>{validationResult?.formattedTotal}</strong>
                  {validationResult?.discountApplied ? ' (Cupom 10% aplicado)' : ''}.
                </p>
                <button
                  type="button"
                  onClick={onCloseCheckout}
                  className="mt-6 w-full py-3 rounded-xl bg-[#111315] text-white text-xs font-bold uppercase cursor-pointer"
                >
                  Voltar para a Página
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
