import React, { useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Lock, Settings } from 'lucide-react';
import { HOTLINK_IMAGES } from '../utils/studioLogic';

interface HeroSectionProps {
  onSelectPlanClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectPlanClick }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(34);
  const [activeChapter, setActiveChapter] = useState('Consistência Facial 99.4% em 1 Clique');

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev >= 100 ? 0 : prev + 1;
        if (next < 35) {
          setActiveChapter('01 • Como criar um rosto hiper-realista único');
        } else if (next < 70) {
          setActiveChapter('02 • Mantendo o mesmo rosto em qualquer cenário');
        } else {
          setActiveChapter('03 • Transformando fotos em Reels virais e monetizados');
        }
        return next;
      });
    }, 450);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (pct: number) => {
    const totalSeconds = Math.round((pct / 100) * 222);
    const mins = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const secs = String(totalSeconds % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <header
      className="relative pt-10 md:pt-14 pb-16 md:pb-24 px-4 bg-[#FAFAFA] overflow-hidden"
      data-purpose="hero-section"
    >
      <div className="max-w-[960px] mx-auto text-center flex flex-col items-center">
        {/* Top Kicker */}
        <p className="text-[10px] md:text-[11px] font-bold tracking-[0.16em] text-[#FF5520] uppercase mb-4 flex items-center gap-1.5">
          <span aria-hidden="true">•</span>
          <span>A NOVA ERA DOS INFLUENCIADORES JÁ COMEÇOU</span>
        </p>

        {/* Main 3-Line Headline */}
        <h1
          className="text-[28px] sm:text-[42px] md:text-[48px] leading-[1.08] font-extrabold uppercase tracking-[-0.03em] text-[#111315] max-w-[820px]"
          style={{ textWrap: 'balance' }}
        >
          CRIE INFLUENCIADORAS
          <br />
          <span className="text-[#FF5520]">TÃO REALISTAS</span> QUE NINGUÉM
          <br />
          VAI ACREDITAR QUE SÃO IA.
        </h1>

        {/* VSL Video Container matching Image_1 */}
        <div className="mt-8 md:mt-10 w-full max-w-[650px] rounded-[20px] overflow-hidden video-elevation bg-[#141413] border border-black/10 relative select-none">
          {/* Top Safari-like URL bar inside the frame */}
          <div className="px-4 py-2.5 bg-gradient-to-b from-black/80 to-black/30 flex items-center justify-between text-white/75 text-xs border-b border-white/10">
            <div className="flex items-center gap-1.5 font-sans text-[13px] tracking-tight text-white/85">
              <Lock className="w-3.5 h-3.5 text-white/60 shrink-0" />
              <span>influvence.com.br</span>
            </div>
            {isPlaying && (
              <span className="text-[11px] font-mono text-[#FF5520] truncate max-w-[260px]">
                {activeChapter}
              </span>
            )}
          </div>

          {/* Aspect Video Canvas */}
          <div
            className="relative aspect-[16/10] w-full overflow-hidden group cursor-pointer"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            <img
              src={HOTLINK_IMAGES.heroVideoCover}
              alt="Influenciadora realista criada por Inteligência Artificial"
              referrerPolicy="no-referrer"
              className={`w-full h-full object-cover object-center transition-transform duration-700 ${
                isPlaying ? 'scale-105 brightness-95' : 'group-hover:scale-[1.02]'
              }`}
            />

            {/* Measured contrast vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

            {/* Left overlay copy matching Image_1 */}
            <div className="absolute left-4 sm:left-8 top-4 sm:top-1/2 sm:-translate-y-1/2 text-left pointer-events-none z-10 max-w-[44%] sm:max-w-none">
              <p className="text-white/95 text-[13px] sm:text-[21px] font-normal leading-[1.3] tracking-tight drop-shadow-sm">
                •Sem aparecer
                <br />
                •Conteúdo em massa
              </p>
              {isPlaying && (
                <p className="mt-2 text-[10px] sm:text-[11px] font-mono text-[#FF5520] bg-black/75 px-2.5 py-1 rounded-md border border-white/10">
                  Reproduzindo demonstração • {formatTime(progress)} / 03:42
                </p>
              )}
            </div>

            {/* Center Play/Pause Button */}
            <button
              type="button"
              aria-label={isPlaying ? 'Pausar vídeo de apresentação' : 'Reproduzir vídeo de apresentação'}
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying((prev) => !prev);
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black/55 hover:bg-[#FF5520] text-white flex items-center justify-center backdrop-blur-md border border-white/25 transition-all duration-200 transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF5520] shadow-xl"
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </button>

            {/* Bottom Video Control Bar matching Image_1 */}
            <div
              className="absolute bottom-0 inset-x-0 px-4 py-2.5 flex items-center gap-3 z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                onClick={() => setIsPlaying((prev) => !prev)}
                className="text-white/85 hover:text-white transition-colors p-1"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>

              {/* Scrubber Bar */}
              <div
                role="slider"
                aria-label="Progresso do vídeo"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                tabIndex={0}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickX = e.clientX - rect.left;
                  const nextPct = Math.max(0, Math.min(100, Math.round((clickX / rect.width) * 100)));
                  setProgress(nextPct);
                }}
                className="flex-1 h-1 bg-white/25 rounded-full overflow-hidden cursor-pointer relative"
              >
                <div
                  className="h-full bg-[#FF5520] rounded-full transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <span className="text-[10px] font-mono text-white/75 tabular-nums">
                {formatTime(progress)}
              </span>

              <button
                type="button"
                aria-label={isMuted ? 'Ativar som' : 'Silenciar vídeo'}
                onClick={() => setIsMuted((prev) => !prev)}
                className="text-white/80 hover:text-white transition-colors p-1"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>

              <div className="w-10 h-1 bg-white/25 rounded-full overflow-hidden hidden sm:block">
                <div className={`h-full bg-[#FF5520] ${isMuted ? 'w-0' : 'w-3/4'}`} />
              </div>

              <Settings className="w-3.5 h-3.5 text-white/70 hidden sm:block" />
              <Maximize2 className="w-3.5 h-3.5 text-white/70" />
            </div>
          </div>
        </div>

        {/* Hero Primary CTA */}
        <div className="mt-7 md:mt-8 flex flex-col items-center">
          <button
            type="button"
            onClick={onSelectPlanClick}
            className="cta-orange-gradient text-white font-bold text-[11px] sm:text-xs tracking-[0.06em] uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded-xl transition-transform duration-150 active:scale-[0.99] cursor-pointer whitespace-nowrap"
          >
            QUERO DOMINAR A IA E CRIAR MINHA INFLUENCIADORA
          </button>
          <p className="text-[11px] text-[#8E939E] mt-2.5 font-medium tracking-wide">
            Acesso imediato &nbsp;•&nbsp; Pagamento único
          </p>
        </div>
      </div>
    </header>
  );
};
