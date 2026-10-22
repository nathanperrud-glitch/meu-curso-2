import React, { useState } from 'react';
import {
  GALLERY_ITEMS,
  WORKFLOW_PRESETS,
  resolveWorkflowPromptText,
  GalleryItem,
} from '../utils/studioLogic';

export const GalleryAndWorkflowSection: React.FC = () => {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);
  const [activePresetIndex, setActivePresetIndex] = useState<number>(0);
  const [activePromptTab, setActivePromptTab] = useState<'base' | 'ref01' | 'ref02'>('base');
  const [customPrompts, setCustomPrompts] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationCount, setGenerationCount] = useState<number>(1);

  const currentPreset = WORKFLOW_PRESETS[activePresetIndex];
  const displayedPrompt = resolveWorkflowPromptText(
    currentPreset,
    activePromptTab,
    customPrompts[currentPreset.id]
  );

  const handleGenerateClick = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerationCount((c) => c + 1);
    }, 350);
  };

  const handleCyclePreset = () => {
    const nextIdx = (activePresetIndex + 1) % WORKFLOW_PRESETS.length;
    setActivePresetIndex(nextIdx);
    setActivePromptTab('base');
    handleGenerateClick();
  };

  return (
    <>
      {/* SECTION 4: REALISTIC GALLERY PROOF */}
      <section
        className="py-16 md:py-24 px-4 bg-[#FAFAFA]"
        data-purpose="realistic-gallery-proof"
      >
        <div className="max-w-[960px] mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase">
            REALISMO SEM CÂMERA
          </span>
          <h2 className="text-[26px] sm:text-[36px] md:text-[40px] leading-[1.08] font-extrabold uppercase tracking-[-0.03em] text-[#111315] mt-2 mb-10">
            ISSO NÃO É UMA PESSOA REAL.
            <br />
            <span className="text-[#B5BAC3]">É O QUE VOCÊ VAI APRENDER A CRIAR.</span>
          </h2>

          {/* White Outer Showcase Frame */}
          <div className="bg-white p-3.5 sm:p-5 rounded-[24px] border border-[#EBECEE] soft-card-shadow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              {GALLERY_ITEMS.map((item) => {
                const isSelected = selectedGalleryItem?.id === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() =>
                      setSelectedGalleryItem((prev) => (prev?.id === item.id ? null : item))
                    }
                    aria-label={`Inspecionar ${item.label}`}
                    className={`group relative rounded-[16px] overflow-hidden aspect-[9/16] bg-[#141413] text-left cursor-pointer transition-all duration-200 ${
                      isSelected ? 'ring-2 ring-[#FF5520] scale-[1.01]' : 'hover:scale-[1.01]'
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-[9px] font-mono tracking-wider text-white/90 uppercase">
                      <span className="text-white/60">{item.index}</span>
                      <span className="font-bold tracking-[0.08em]">{item.label}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Interactive inspection drawer when user clicks any 9:16 portrait */}
            {selectedGalleryItem && (
              <div className="mt-4 pt-3.5 px-4 pb-1 border-t border-[#EBECEE] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-left text-xs">
                <div>
                  <span className="font-mono text-[10px] font-bold text-[#FF5520] uppercase mr-2">
                    [{selectedGalleryItem.index} • {selectedGalleryItem.label}]
                  </span>
                  <span className="text-[#111315] font-semibold">
                    {selectedGalleryItem.subtitle}
                  </span>
                  <p className="text-[11px] font-mono text-[#646973] mt-0.5">
                    Prompt: {selectedGalleryItem.promptSnippet}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-[11px] font-mono text-[#111315] bg-[#F5F5F6] px-2.5 py-1 rounded-md border border-[#EBECEE]">
                    Consistência: <strong>{selectedGalleryItem.consistency}</strong>
                  </span>
                </div>
              </div>
            )}
          </div>

          <p className="text-[11px] text-[#A1A6B0] mt-4">
            Área preparada para receber imagens e vídeos 9:16 sem alterar o layout.
          </p>
        </div>
      </section>

      {/* SECTION 5: WORKFLOW IN ACTION ("VEJA A INFLUENCER EM AÇÃO.") */}
      <section className="py-16 md:py-24 px-4 bg-[#FAFAFA]" data-purpose="workflow-in-action">
        <div className="max-w-[980px] mx-auto text-center">
          <span className="text-[10px] font-bold tracking-[0.14em] text-[#FF5520] uppercase">
            VEJA O PROCESSO
          </span>

          {/* Serif Display Heading matching Image_1 */}
          <h2 className="font-editorial text-[34px] sm:text-[46px] md:text-[52px] leading-[1.02] font-normal uppercase tracking-[-0.01em] text-[#111315] mt-2">
            VEJA A INFLUENCER
            <br />
            <span className="italic text-[#FF5520] font-normal">EM AÇÃO.</span>
          </h2>

          <p className="text-[12px] sm:text-[13px] text-[#646973] max-w-[420px] mx-auto mt-3 mb-10 leading-relaxed">
            Uma imagem. Algumas referências. Um prompt.
            <br />
            E uma nova realidade criada com inteligência artificial.
          </p>

          {/* Node Workflow Canvas Window matching Image_1 */}
          <div className="bg-white rounded-[24px] border border-[#EBECEE] soft-card-shadow overflow-hidden text-left">
            {/* Window Top Bar */}
            <div className="px-5 py-3.5 border-b border-[#F0F1F3] flex flex-wrap items-center justify-between gap-3 bg-white">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider uppercase">
                <span className="font-bold text-[#111315]">INFLUVENCE.AI</span>
                <span className="text-[#FF5520]">•</span>
                <span className="text-[#A1A6B0]">WORKFLOW</span>
              </div>

              {/* Interactive Scene Switcher Pills */}
              <div className="flex items-center gap-1.5" role="group" aria-label="Cenários de demonstração">
                {WORKFLOW_PRESETS.map((preset, idx) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => {
                      setActivePresetIndex(idx);
                      setActivePromptTab('base');
                    }}
                    className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-colors cursor-pointer ${
                      idx === activePresetIndex
                        ? 'bg-[#FFF3EE] text-[#FF5520] font-bold border border-[#FFD8C7]'
                        : 'bg-[#F7F7F8] text-[#646973] hover:text-[#111315] border border-transparent'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              <span className="text-[10px] font-mono text-[#A1A6B0] bg-[#F7F7F8] px-2.5 py-1 rounded-md border border-[#EBECEE]">
                100%
              </span>
            </div>

            {/* Dotted Node Graph Interior */}
            <div className="p-5 sm:p-7 md:p-8 dot-grid-bg relative">
              {/* Desktop SVG Bezier Node Connectors matching Image_1 */}
              <svg
                aria-hidden="true"
                viewBox="0 0 900 440"
                preserveAspectRatio="none"
                className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0"
              >
                <path
                  d="M 235 125 C 265 125, 255 220, 285 220"
                  fill="none"
                  stroke="#D5D8DF"
                  strokeWidth="1.5"
                />
                <path
                  d="M 235 330 C 265 330, 255 220, 285 220"
                  fill="none"
                  stroke="#D5D8DF"
                  strokeWidth="1.5"
                />
                <line
                  x1="540"
                  y1="220"
                  x2="615"
                  y2="220"
                  stroke="#D5D8DF"
                  strokeWidth="1.5"
                />
              </svg>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                {/* COLUMN 1: 01 CHARACTER + 02 REFERENCE */}
                <div className="lg:col-span-3 flex flex-col gap-4 relative z-10">
                  {/* Node 01: CHARACTER */}
                  <div className="bg-white rounded-[16px] p-3 border border-[#EBECEE] soft-card-shadow relative">
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#A1A6B0] uppercase mb-2">
                      <span>01 • CHARACTER</span>
                      <span>1 OF 1</span>
                    </div>
                    <div className="rounded-xl overflow-hidden aspect-square bg-[#F5F5F6] mb-2">
                      <img
                        src={currentPreset.characterImage}
                        alt={currentPreset.characterName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="font-bold text-[#111315]">{currentPreset.characterName}</span>
                      <span className="text-[8px] tracking-wider text-[#A1A6B0] uppercase">
                        IDENTITY
                      </span>
                    </div>
                    {/* Right Node Port Dot */}
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF5520] ring-4 ring-white"
                    />
                  </div>

                  {/* Node 02: REFERENCE */}
                  <div className="bg-white rounded-[16px] p-3 border border-[#EBECEE] soft-card-shadow relative">
                    <div className="flex items-center justify-between text-[9px] font-mono text-[#A1A6B0] uppercase mb-2">
                      <span>02 • REFERENCE</span>
                      <span>2 USED</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 relative">
                      <div>
                        <div className="rounded-lg overflow-hidden aspect-square bg-[#F5F5F6] mb-1.5">
                          <img
                            src={currentPreset.refPrimaryImage}
                            alt={currentPreset.refPrimaryLabel}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-[8px] font-mono font-bold text-[#111315] uppercase leading-tight truncate">
                          {currentPreset.refPrimaryLabel}
                        </p>
                      </div>

                      {/* Center Plus Badge */}
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 z-10 w-5 h-5 rounded-full bg-white border border-[#EBECEE] text-[#FF5520] text-[10px] font-bold flex items-center justify-center shadow-xs"
                      >
                        +
                      </span>

                      <div>
                        <div className="rounded-lg overflow-hidden aspect-square bg-[#F5F5F6] mb-1.5">
                          <img
                            src={currentPreset.refSecondaryImage}
                            alt={currentPreset.refSecondaryLabel}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-[8px] font-mono font-bold text-[#111315] uppercase leading-tight truncate">
                          {currentPreset.refSecondaryLabel}
                        </p>
                      </div>
                    </div>
                    {/* Right Node Port Dot */}
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF5520] ring-4 ring-white"
                    />
                  </div>
                </div>

                {/* COLUMN 2: 03 PROMPT + GENERATING NODE */}
                <div className="lg:col-span-5 flex flex-col sm:flex-row items-center gap-4 relative z-10">
                  {/* Node 03: PROMPT */}
                  <div className="flex-1 w-full bg-white rounded-[16px] p-4 border border-[#EBECEE] soft-card-shadow relative">
                    {/* Left Node Port Dot */}
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF5520] ring-4 ring-white"
                    />

                    <div className="flex items-center justify-between text-[9px] font-mono text-[#A1A6B0] uppercase mb-3">
                      <span>03 • PROMPT</span>
                      <span>2 REFERENCES</span>
                    </div>

                    {/* 3 Prompt Tabs matching Image_1 */}
                    <div className="flex items-center gap-1.5 mb-3">
                      <button
                        type="button"
                        onClick={() => setActivePromptTab('base')}
                        className={`px-2 py-1 rounded text-[8px] font-mono uppercase tracking-wider border transition-colors cursor-pointer whitespace-nowrap ${
                          activePromptTab === 'base'
                            ? 'bg-[#FFF5F0] border-[#FF5520] text-[#FF5520] font-bold'
                            : 'bg-[#F7F7F8] border-[#EBECEE] text-[#646973]'
                        }`}
                      >
                        BASE PROMPT
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePromptTab('ref01')}
                        className={`px-2 py-1 rounded text-[8px] font-mono uppercase tracking-wider border transition-colors cursor-pointer whitespace-nowrap ${
                          activePromptTab === 'ref01'
                            ? 'bg-[#FFF5F0] border-[#FF5520] text-[#FF5520] font-bold'
                            : 'bg-[#F7F7F8] border-[#EBECEE] text-[#646973]'
                        }`}
                      >
                        REFERENCE 01
                      </button>
                      <button
                        type="button"
                        onClick={() => setActivePromptTab('ref02')}
                        className={`px-2 py-1 rounded text-[8px] font-mono uppercase tracking-wider border transition-colors cursor-pointer whitespace-nowrap ${
                          activePromptTab === 'ref02'
                            ? 'bg-[#FFF5F0] border-[#FF5520] text-[#FF5520] font-bold'
                            : 'bg-[#F7F7F8] border-[#EBECEE] text-[#646973]'
                        }`}
                      >
                        REFERENCE 02
                      </button>
                    </div>

                    {/* Editable Prompt Area */}
                    <label htmlFor="workflow-prompt-input" className="sr-only">
                      Prompt de geração
                    </label>
                    <textarea
                      id="workflow-prompt-input"
                      rows={4}
                      value={displayedPrompt}
                      onChange={(e) => {
                        if (activePromptTab === 'base') {
                          setCustomPrompts((prev) => ({
                            ...prev,
                            [currentPreset.id]: e.target.value,
                          }));
                        }
                      }}
                      readOnly={activePromptTab !== 'base'}
                      className="w-full text-[11px] leading-[1.55] text-[#4B5059] bg-[#FAFAFB] border border-[#EBECEE] rounded-xl p-3 font-sans resize-none focus:outline-none focus:border-[#FF5520]"
                    />

                    {/* Dark + GENERATE Button */}
                    <button
                      type="button"
                      onClick={handleCyclePreset}
                      className="mt-3 w-full py-2.5 px-4 rounded-xl bg-[#111315] hover:bg-[#23262A] text-white font-mono text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span className="text-[#FF5520]">+</span>
                      <span>{isGenerating ? 'GENERATING...' : 'GENERATE'}</span>
                    </button>

                    {/* Right Node Port Dot */}
                    <span
                      aria-hidden="true"
                      className="hidden sm:block absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF5520] ring-4 ring-white"
                    />
                  </div>

                  {/* Small GENERATING pill node in the middle */}
                  <div className="bg-white rounded-xl px-3 py-2.5 border border-[#EBECEE] soft-card-shadow flex flex-col items-center justify-center shrink-0">
                    <div className="flex items-center gap-1 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520]/60" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5520]/30" />
                    </div>
                    <span className="text-[7px] font-mono tracking-widest uppercase text-[#A1A6B0]">
                      {isGenerating ? 'RENDERING' : 'GENERATING'}
                    </span>
                  </div>
                </div>

                {/* COLUMN 3: 04 OUTPUT */}
                <div className="lg:col-span-4 relative z-10">
                  <div className="bg-white rounded-[18px] p-3.5 border border-[#EBECEE] soft-card-shadow relative">
                    {/* Left Node Port Dot */}
                    <span
                      aria-hidden="true"
                      className="hidden lg:block absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#FF5520] ring-4 ring-white"
                    />

                    <div className="flex items-center justify-between text-[9px] font-mono text-[#A1A6B0] uppercase mb-2.5">
                      <span>04 • OUTPUT</span>
                      <span>GENERATED #{generationCount}</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#141413]">
                      <img
                        src={currentPreset.outputImage}
                        alt="Resultado gerado pela IA"
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover transition-opacity duration-300 ${
                          isGenerating ? 'opacity-60' : 'opacity-100'
                        }`}
                      />
                      <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[8px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full">
                        FINAL GENERATION
                      </div>
                      <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-[#4ADE80] text-[9px] font-mono font-bold px-2 py-0.5 rounded-md">
                        {currentPreset.consistencyScore}
                      </div>
                    </div>

                    <div className="mt-2.5 flex items-center justify-between text-[8px] font-mono uppercase text-[#A1A6B0]">
                      <span className="font-bold text-[#111315]">GERAÇÃO IA</span>
                      <span>IDENTIDADE + REFERÊNCIA + PROMPT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-[#646973] max-w-[460px] mx-auto mt-6 leading-relaxed">
            <strong className="text-[#111315]">Você não precisa começar do zero.</strong> Combine
            personagens, referências e ideias para construir novas cenas mantendo identidade e
            consistência.
          </p>
        </div>
      </section>
    </>
  );
};
