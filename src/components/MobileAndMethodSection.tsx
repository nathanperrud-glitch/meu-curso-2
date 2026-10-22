import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { HOTLINK_IMAGES } from '../utils/studioLogic';

const MOBILE_SCENES = [
  {
    prompt: 'Retrato luz natural golden hour para Reels',
    cardLeftImage: HOTLINK_IMAGES.gallery02,
    cardLeftLabel: 'Cena Golden Hour',
    cardRightImage: HOTLINK_IMAGES.mobilePreview,
    cardRightLabel: 'Reels 9:16 Pronto',
  },
  {
    prompt: 'Campanha lifestyle dentro do Porsche 911',
    cardLeftImage: HOTLINK_IMAGES.workflowFinalOutput,
    cardLeftLabel: 'Cena Porsche 911',
    cardRightImage: HOTLINK_IMAGES.gallery01,
    cardRightLabel: 'Story 9:16 Pronto',
  },
  {
    prompt: 'Editorial de moda óculos de sol verão',
    cardLeftImage: HOTLINK_IMAGES.gallery03,
    cardLeftLabel: 'Fashion Lookbook',
    cardRightImage: HOTLINK_IMAGES.gallery04,
    cardRightLabel: 'UGC Produto Pronto',
  },
];

const TRAINING_DELIVERABLES = [
  'Treinamento completo INFLUVENCE',
  'Processo de criação do zero',
  'Criação de personagens consistentes',
  'Prompts e estruturas utilizadas',
  'Ferramentas recomendadas',
  'Criação de imagens realistas',
  'Criação de vídeos',
  'Movimentos e sincronização',
  'Estratégia para conteúdo',
  'Estrutura para monetização',
  'Atualizações futuras, conforme aplicável',
];

export const MobileAndMethodSection: React.FC = () => {
  const [mobileSceneIdx, setMobileSceneIdx] = useState(0);
  const [mobilePromptInput, setMobilePromptInput] = useState(MOBILE_SCENES[0].prompt);
  const [mobileRenderCount, setMobileRenderCount] = useState(1);

  const activeMobileScene = MOBILE_SCENES[mobileSceneIdx];

  const handleMobileGenerate = () => {
    const nextIdx = (mobileSceneIdx + 1) % MOBILE_SCENES.length;
    setMobileSceneIdx(nextIdx);
    setMobilePromptInput(MOBILE_SCENES[nextIdx].prompt);
    setMobileRenderCount((c) => c + 1);
  };

  return (
    <>
      {/* SECTION 6: MOBILE OBJECTION BREAKER */}
      <section
        className="py-16 md:py-24 px-4 bg-[#F5F5F6] border-y border-[#EBECEE]"
        data-purpose="mobile-objection-breaker"
      >
        <div className="max-w-[960px] mx-auto">
          <div className="bg-white rounded-[28px] p-7 sm:p-10 md:p-12 border border-[#EBECEE] soft-card-shadow grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase mb-2">
                SEM COMPLICAÇÃO
              </span>
              <h2 className="font-editorial text-[32px] sm:text-[42px] md:text-[46px] leading-[1.02] font-normal uppercase tracking-[-0.01em] text-[#111315] mb-4">
                VOCÊ NÃO PRECISA
                <br />
                <span className="italic text-[#FF5520]">DE COMPUTADOR.</span>
              </h2>
              <p className="text-[12px] sm:text-[13px] text-[#646973] leading-[1.6] mb-6 max-w-[400px]">
                Tudo roda na nuvem. Com o celular, você já consegue criar personagens, gerar
                conteúdo e colocar tudo em movimento.
              </p>

              {/* 2x2 Numbered Pills Grid matching Image_1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-7">
                {[
                  { num: '01', text: 'Tudo na nuvem' },
                  { num: '02', text: 'Crie direto do celular' },
                  { num: '03', text: 'Sem computador potente' },
                  { num: '04', text: 'Comece de qualquer lugar' },
                ].map((pill) => (
                  <div
                    key={pill.num}
                    className="px-3.5 py-2.5 rounded-xl bg-[#FAFAFB] border border-[#EBECEE] flex items-center gap-2.5"
                  >
                    <span className="text-[10px] font-mono font-bold text-[#FF5520]">
                      {pill.num}
                    </span>
                    <span className="text-[11px] font-semibold text-[#111315]">{pill.text}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="pt-4 border-t border-[#F0F1F3] w-full">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#646973]">
                  SE VOCÊ TEM CELULAR,
                </p>
                <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#111315] mb-1.5">
                  VOCÊ JÁ PODE COMEÇAR.
                </p>
                <p className="text-[11px] text-[#8E939E] leading-relaxed max-w-[380px]">
                  Toda a criação acontece online, sem exigir computador potente, placa de vídeo ou
                  uma estrutura cara para começar.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive iPhone Mockup matching Image_1 */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-[268px] sm:w-[284px] rounded-[44px] bg-[#161719] p-3 shadow-2xl border-2 border-[#2B2D31]">
                {/* Dynamic Island */}
                <div className="absolute top-5 inset-x-0 flex justify-center z-20 pointer-events-none">
                  <div className="w-20 h-4 bg-black rounded-full" />
                </div>

                {/* Phone Screen Interior */}
                <div className="bg-white rounded-[34px] pt-9 pb-4 px-4 flex flex-col justify-between min-h-[470px] border border-[#EBECEE]">
                  <div>
                    {/* App Header */}
                    <div className="flex items-center justify-between text-[8px] font-mono uppercase tracking-wider text-[#A1A6B0] mb-4">
                      <span className="flex items-center gap-1 font-bold text-[#111315]">
                        <span className="text-[#FF5520]">•</span> INFLUVENCE.AI
                      </span>
                      <span className="text-[#FF5520] font-semibold">• CLOUD #{mobileRenderCount}</span>
                    </div>

                    {/* Greeting & Title */}
                    <p className="text-[9px] text-[#A1A6B0] font-medium">Tudo na nuvem</p>
                    <h3 className="text-[16px] font-extrabold text-[#111315] tracking-tight mb-3">
                      O que vamos criar?
                    </h3>

                    {/* Input Box inside phone */}
                    <div className="bg-[#FAFAFB] rounded-xl p-2.5 border border-[#EBECEE] mb-2.5">
                      <div className="flex items-center justify-between text-[8px] font-mono text-[#A1A6B0] uppercase mb-1">
                        <span>Imagem</span>
                        <span className="text-[#FF5520]">9:16</span>
                      </div>
                      <label htmlFor="mobile-prompt-field" className="sr-only">
                        Prompt mobile
                      </label>
                      <input
                        id="mobile-prompt-field"
                        type="text"
                        value={mobilePromptInput}
                        onChange={(e) => setMobilePromptInput(e.target.value)}
                        className="w-full text-[10px] font-medium text-[#111315] bg-transparent focus:outline-none"
                      />
                    </div>

                    {/* Dark Generate Button inside phone */}
                    <button
                      type="button"
                      onClick={handleMobileGenerate}
                      className="w-full py-2.5 rounded-xl bg-[#111315] hover:bg-[#25282C] text-white text-[9px] font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer mb-4"
                    >
                      <span className="text-[#FF5520]">+</span>
                      <span>GERAR CONTEÚDO</span>
                    </button>
                  </div>

                  {/* Generated Thumbnails inside phone */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#141413]">
                      <img
                        src={activeMobileScene.cardLeftImage}
                        alt={activeMobileScene.cardLeftLabel}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[8px] font-mono text-white font-semibold truncate">
                          {activeMobileScene.cardLeftLabel}
                        </span>
                      </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#141413]">
                      <img
                        src={activeMobileScene.cardRightImage}
                        alt={activeMobileScene.cardRightLabel}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-2">
                        <span className="text-[8px] font-mono text-white font-semibold truncate">
                          {activeMobileScene.cardRightLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] text-[#A1A6B0] text-center mt-5">
            Tudo o que você vai aprender pode ser executado de forma simples, sem depender de
            computador de alto desempenho.
          </p>
        </div>
      </section>

      {/* SECTION 7: THREE STEP METHOD */}
      <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]" data-purpose="three-step-method">
        <div className="max-w-[900px] mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase">
            O MÉTODO
          </span>
          <h2 className="text-[26px] sm:text-[36px] md:text-[40px] leading-[1.08] font-extrabold uppercase tracking-[-0.03em] text-[#111315] mt-2 mb-12">
            DA IDEIA AO CONTEÚDO
            <br />
            <span className="text-[#B5BAC3]">EM 3 ETAPAS.</span>
          </h2>

          {/* Timeline Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Horizontal connecting line on desktop */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute top-4 left-[16%] right-[16%] h-px bg-[#E5E7EB]"
            />

            {[
              {
                num: '01',
                title: 'CRIE',
                desc: 'Construa uma influenciadora digital com identidade própria e aparência extremamente realista.',
              },
              {
                num: '02',
                title: 'DÊ VIDA',
                desc: 'Transforme a personagem em imagens e vídeos com movimento, expressão, voz e cenários diferentes.',
              },
              {
                num: '03',
                title: 'PUBLIQUE',
                desc: 'Transforme o material em conteúdos preparados para redes sociais, anúncios, produtos e marcas.',
              },
            ].map((step) => (
              <div key={step.num} className="flex flex-col items-center relative z-10 px-4">
                <div className="w-8 h-8 rounded-full bg-white border border-[#EBECEE] text-[10px] font-mono font-bold text-[#A1A6B0] flex items-center justify-center mb-5 shadow-2xs">
                  {step.num}
                </div>
                <h3 className="text-[15px] font-extrabold uppercase text-[#111315] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#646973] leading-[1.6] max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: EVERYTHING YOU NEED */}
      <section
        className="py-16 md:py-24 px-4 bg-[#F5F5F6] border-t border-[#EBECEE]"
        data-purpose="everything-you-need"
      >
        <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase mb-2">
              DENTRO DO INFLUVENCE
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] leading-[1.06] font-extrabold uppercase tracking-[-0.03em] text-[#111315] mb-4">
              TUDO QUE
              <br />
              VOCÊ PRECISA
              <br />
              <span className="text-[#B5BAC3]">
                PARA
                <br />
                COMEÇAR.
              </span>
            </h2>
            <p className="text-[12px] sm:text-[13px] text-[#646973] leading-[1.6] max-w-[320px]">
              Um caminho direto da criação da personagem até a produção de conteúdo pronto para
              publicar.
            </p>
          </div>

          {/* Right Column: 11 Deliverables Card matching Image_1 */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-[#EBECEE] soft-card-shadow">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#F0F1F3] text-[9px] font-mono uppercase tracking-wider">
                <span className="text-[#A1A6B0] font-semibold">CONTEÚDO DO TREINAMENTO</span>
                <span className="text-[#FF5520] font-bold">11 ENTREGÁVEIS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                {TRAINING_DELIVERABLES.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="w-4 h-4 rounded-full bg-[#FFF3EE] border border-[#FFD8C7] text-[#FF5520] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </span>
                    <span className="text-[11px] sm:text-[12px] font-medium text-[#373A40]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
