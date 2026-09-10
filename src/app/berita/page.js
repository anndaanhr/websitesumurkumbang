"use client";

import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Script from "next/script";

export default function BeritaPage() {
  return (
    <main className="relative z-10">
      <PageHeader 
        title="Berita & Informasi Desa" 
        subtitle="Kabar terkini, pengumuman publik, dan dokumentasi kegiatan resmi Desa Sumur Kumbang." 
      />

      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto space-y-12">
          
          {/* Card Profil Instagram Resmi Desa */}
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 shadow-2xl">
              {/* Subtle background glow */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                
                {/* Info Profil */}
                <div className="flex flex-col md:flex-row items-center gap-5">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-[3px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-[0_0_25px_rgba(225,48,108,0.4)] shrink-0">
                    <div className="w-full h-full rounded-full bg-[#050914] p-1 flex items-center justify-center overflow-hidden">
                      <img 
                        src="/images/images/icons/logolamsel.png" 
                        alt="Logo Desa Sumur Kumbang" 
                        className="w-full h-full object-contain p-1 rounded-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">@sumurkumbangofficial</h2>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-sans font-semibold bg-accent/20 text-accent border border-accent/40">
                        Akun Resmi
                      </span>
                    </div>
                    <p className="font-sans text-white/70 text-sm md:text-base max-w-xl font-light leading-relaxed">
                      Pemerintah Desa Sumur Kumbang, Kec. Kalianda, Kab. Lampung Selatan. Seluruh pembaruan dan siaran informasi desa terhubung langsung ke kanal ini.
                    </p>
                  </div>
                </div>

                {/* Tombol Kunjungi Instagram */}
                <div className="shrink-0 w-full md:w-auto">
                  <a 
                    href="https://www.instagram.com/sumurkumbangofficial/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-6 py-3.5 rounded-full font-sans font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:opacity-95 hover:scale-105 transition-all shadow-[0_0_25px_rgba(225,48,108,0.35)] cursor-pointer"
                  >
                    <span>Kunjungi Instagram</span>
                    <span className="text-base">↗</span>
                  </a>
                </div>

              </div>
            </div>
          </Reveal>

          {/* Feed Instagram Elfsight Widget */}
          <Reveal delay={200}>
            <div className="w-full min-h-[450px] bg-white/5 border border-white/10 rounded-[2rem] p-4 md:p-8 overflow-hidden relative shadow-2xl">
              <div className="elfsight-app-1fbecf20-88e0-4a88-8345-cadc37e8eb01" data-elfsight-app-lazy></div>
            </div>
          </Reveal>

          {/* Script Elfsight platform */}
          <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />

        </div>
      </section>
    </main>
  );
}

