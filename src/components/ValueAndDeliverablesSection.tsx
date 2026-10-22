import React, { useState } from 'react';
import {
  User,
  Sparkles,
  ScanFace,
  Play,
  LayoutGrid,
  Layers,
  Cpu,
  TrendingUp,
  ArrowDown,
} from 'lucide-react';

interface FlowStep {
  number: string;
  title: string;
  subtitle: string;
  detail: string;
}

const FLOW_STEPS: FlowStep[] = [
  {
    number: '01',
    title: 'Personagem',
    subtitle: 'IDENTIDADE',
    detail: 'Definição de arquétipo, traços faciais únicos, estilo visual e assinatura estética da influenciadora.',
  },
  {
    number: '02',
    title: 'Imagem',
    subtitle: 'REALISMO',
    detail: 'Geração fotorrealista com textura de pele natural, iluminação de estúdio ou luz do sol e enquadramentos 9:16.',
  },
  {
    number: '03',
    title: 'Movimento',
    subtitle: 'EXPRESSÃO',
    detail: 'Aplicação de expressões faciais orgânicas, contato visual e gestos naturais sem aspecto robótico.',
  },
  {
    number: '04',
    title: 'Vídeo',
    subtitle: 'NARRATIVA',
    detail: 'Sincronização labial (lip-sync), voz natural e construção de cenas dinâmicas para retenção.',
  },
  {
    number: '05',
    title: 'Conteúdo',
    subtitle: 'PUBLICAÇÃO',
    detail: 'Distribuição estratégica em Reels, TikTok, Shorts, UGC comercial e parcerias com marcas.',
  },
];

const DELIVERABLES = [
  {
    num: '01',
    icon: User,
    title: 'Criação da influenciadora',
    desc: 'Aprenda a construir uma personagem com identidade visual consistente, estilo, cabelo, estética e aparência extremamente realista.',
  },
  {
    num: '02',
    icon: Sparkles,
    title: 'Realismo de outro nível',
    desc: 'Aprenda técnicas para fugir do visual artificial e criar imagens com textura, iluminação, pele e detalhes naturais.',
  },
  {
    num: '03',
    icon: ScanFace,
    title: 'O mesmo rosto. Sempre.',
    desc: 'Aprenda a manter a identidade da personagem entre diferentes fotos, cenas, roupas e ambientes.',
  },
  {
    num: '04',
    icon: Play,
    title: 'Movimentos realistas',
    desc: 'Transforme imagens em vídeos com gestos, expressões e movimentos muito mais naturais.',
  },
  {
    num: '05',
    icon: LayoutGrid,
    title: 'Conteúdo que prende atenção',
    desc: 'Entenda como estruturar conteúdos pensados para Reels, TikTok, Shorts, UGC e anúncios.',
  },
  {
    num: '06',
    icon: Layers,
    title: 'Produção em escala',
    desc: 'Crie diferentes variações e conteúdos sem depender de gravações tradicionais.',
  },
  {
    num: '07',
    icon: Cpu,
    title: 'Ferramentas e IAs',
    desc: 'Saiba quais tecnologias utilizar em cada etapa do processo e como combiná-las.',
  },
  {
    num: '08',
    icon: TrendingUp,
    title: 'Transforme criação em oportunidade',
    desc: 'Aprenda diferentes formas de aplicar INFLUVENCE IA em conteúdos, produtos, marcas e negócios digitais.',
  },
];

export const ValueAndDeliverablesSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<string>('01');
  const activeStepObj = FLOW_STEPS.find((s) => s.number === selectedStep) || FLOW_STEPS[0];

  return (
    <>
      {/* SECTION 2: VALUE PROPOSITION */}
      <section
        className="py-16 md:py-24 px-4 bg-[#F5F5F6] border-y border-[#EBECEE]"
        data-purpose="value-proposition"
      >
        <div className="max-w-[960px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase mb-3">
              VOCÊ NÃO PRECISA MAIS ESTAR NA FRENTE DA CÂMERA.
            </span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[40px] leading-[1.06] font-extrabold uppercase tracking-[-0.03em] text-[#111315] mb-6">
              AGORA VOCÊ
              <br />
              PODE CRIAR
              <br />
              <span className="text-[#B5BAC3]">QUEM ESTARÁ.</span>
            </h2>
            <div className="space-y-4 text-[#646973] text-[13px] sm:text-[14px] leading-[1.65] max-w-[440px]">
              <p>Estamos entrando em uma nova fase da criação de conteúdo.</p>
              <p>
                Hoje, uma única pessoa usando as ferramentas certas consegue criar personagens,
                imagens, cenas, vídeos, movimentos, vozes e conteúdos que antes exigiam modelos,
                estúdio, câmera, editor e uma equipe inteira.
              </p>
              <p className="pt-1 text-[#646973]">
                <strong className="font-extrabold text-[#111315]">INFLUVENCE</strong> foi criado para
                ensinar exatamente esse processo.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Pipeline Card matching Image_1 */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[24px] p-6 sm:p-8 soft-card-shadow border border-[#EBECEE] dot-grid-bg">
              <div className="text-[10px] font-bold text-[#FF5520] tracking-[0.15em] uppercase mb-5 flex items-center justify-between">
                <span>• FLUXO DE CRIAÇÃO</span>
                <span className="text-[#A1A6B0] font-mono">ETAPA {activeStepObj.number}/05</span>
              </div>

              <div className="flex flex-col items-center">
                {FLOW_STEPS.map((step, idx) => {
                  const isSelected = step.number === selectedStep;
                  return (
                    <React.Fragment key={step.number}>
                      <button
                        type="button"
                        onClick={() => setSelectedStep(step.number)}
                        aria-pressed={isSelected}
                        className={`w-full max-w-[330px] flex items-center gap-3.5 px-4 py-2.5 rounded-xl bg-white border transition-all duration-150 text-left cursor-pointer ${
                          isSelected
                            ? 'border-[#FF5520] shadow-sm ring-2 ring-[#FF5520]/10'
                            : 'border-[#EBECEE] hover:border-[#FF5520]/40'
                        }`}
                      >
                        <span
                          className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono font-bold text-[10px] shrink-0 transition-colors ${
                            isSelected
                              ? 'bg-[#FF5520] text-white'
                              : 'bg-[#FFF3EE] text-[#FF5520]'
                          }`}
                        >
                          {step.number}
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-[#111315] leading-tight">
                            {step.title}
                          </p>
                          <p className="text-[9px] font-semibold tracking-[0.12em] text-[#A1A6B0] uppercase mt-0.5">
                            {step.subtitle}
                          </p>
                        </div>
                      </button>

                      {idx < FLOW_STEPS.length - 1 && (
                        <div className="py-1 text-[#D0D4DC]" aria-hidden="true">
                          <ArrowDown className="w-3 h-3" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Active step description */}
              <div className="mt-5 pt-4 border-t border-[#F0F1F3] text-center">
                <p className="text-[11px] text-[#646973] leading-relaxed">
                  <strong className="text-[#111315]">{activeStepObj.title}:</strong>{' '}
                  {activeStepObj.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: DELIVERABLES 4x2 GRID */}
      <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]" data-purpose="deliverables-grid">
        <div className="max-w-[960px] mx-auto">
          {/* Section Header */}
          <div className="mb-10 md:mb-12 text-left">
            <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase block mb-2">
              O QUE VOCÊ VAI DOMINAR
            </span>
            <h2 className="text-[26px] sm:text-[34px] md:text-[38px] leading-[1.08] font-extrabold uppercase tracking-[-0.03em] text-[#111315]">
              DO ZERO A UMA INFLUENCIADORA
              <br />
              <span className="text-[#B5BAC3]">DIGITAL COMPLETA.</span>
            </h2>
          </div>

          {/* 4x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DELIVERABLES.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.num}
                  className="bg-white p-5 rounded-[18px] border border-[#EBECEE] hover:border-[#FF5520]/35 transition-colors duration-200 soft-card-shadow flex flex-col justify-between min-h-[188px]"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-7 h-7 rounded-lg bg-[#FFF5F0] border border-[#FFE4D6] text-[#FF5520] flex items-center justify-center">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-[#C4C8D0] tabular-nums">
                      {item.num}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-[#111315] text-[13px] leading-snug mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-[#646973] leading-[1.55]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
