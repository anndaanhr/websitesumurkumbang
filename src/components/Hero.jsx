"use client";
import Reveal from "./Reveal";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative pt-40 pb-32 px-4 md:px-8 flex flex-col items-center justify-center min-h-[90vh] md:min-h-screen text-center z-10 overflow-hidden">
      
      {/* Mobile-only background glow for extra visual interest */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/30 rounded-full blur-[100px] md:hidden z-0"></div>

      <Reveal delay={0} className="relative z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <p className="text-accent text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase drop-shadow-md">
            Warisan di Kaki Gunung Rajabasa
          </p>
        </div>
      </Reveal>
      
      <Reveal delay={150} className="relative z-10 w-full">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold leading-tight text-white mb-6 md:mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Sumur <br className="md:hidden" />Kumbang
        </h1>
      </Reveal>
      
      <Reveal delay={300} className="relative z-10 w-full px-4">
        <p className="text-base sm:text-lg md:text-xl font-sans text-white/80 max-w-[600px] mx-auto mb-10 md:mb-12 leading-relaxed drop-shadow-lg font-light">
          Jelajahi keindahan alam yang asri dan kentalnya tradisi warga di desa tertinggi wilayah Kalianda.
        </p>
      </Reveal>
      
      <Reveal delay={450} className="relative z-10 w-full px-8 md:px-0 md:w-auto">
        <Link href="#explore" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-300 bg-white rounded-full hover:bg-accent overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(202,138,4,0.4)] w-full md:w-auto">
          <span className="relative z-10 flex items-center gap-3 text-sm md:text-base tracking-wide">
            Eksplorasi Perjalanan <span className="group-hover:translate-y-1 transition-transform">↓</span>
          </span>
        </Link>
      </Reveal>
      
      {/* Scroll Indicator */}
      <Reveal delay={800} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10 hidden md:block">
        <span className="text-white text-2xl">↓</span>
      </Reveal>
    </header>
  );
}
