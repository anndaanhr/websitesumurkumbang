"use client";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  const [activeCulture, setActiveCulture] = useState("ruwat");

  return (
    <main>
      <Hero />

      {/* STORYTELLING SECTION */}
      <section id="explore" className="py-16 md:py-32 px-4 md:px-8 relative z-10">
        <div className="max-w-[1200px] mx-auto space-y-24 md:space-y-32">
          
          {/* SECTION 1: PORTAL BERITA (Floating Collage) */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 relative">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/20 rounded-full blur-[100px] md:blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            
            <Reveal className="w-full md:w-5/12 order-2 md:order-1 relative z-10 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4 mb-4 md:mb-6">
                <span className="h-[1px] w-8 md:w-12 bg-accent"></span>
                <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-accent uppercase font-bold">Informasi Publik</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6 text-white leading-tight tracking-tight">Portal <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">Berita Desa</span></h2>
              <p className="font-sans text-white/70 leading-relaxed mb-8 md:mb-10 font-light text-base md:text-lg max-w-md mx-auto md:mx-0">
                Ikuti terus perkembangan, pengumuman, dan cerita terbaru dari keseharian masyarakat Desa Sumur Kumbang melalui portal informasi terintegrasi kami.
              </p>
              <Link href="/berita" className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 font-bold text-white transition-all duration-300 bg-white/5 border border-white/20 rounded-full hover:bg-accent hover:text-black hover:border-accent overflow-hidden shadow-xl w-full md:w-auto">
                <span className="relative z-10 flex items-center gap-3 tracking-wide text-sm md:text-base">Buka Portal Berita <span className="group-hover:translate-x-2 transition-transform text-lg">→</span></span>
              </Link>
            </Reveal>

            <Reveal className="w-full md:w-7/12 order-1 md:order-2 relative h-[300px] md:h-[550px]" delay={200}>
              {/* Main Background Image */}
              <div className="absolute inset-0 md:inset-4 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/20 shadow-2xl z-10 group">
                <img src="/images/background/gapuradesa.jpeg" alt="Berita Desa" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[5s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050914]/90 via-black/40 to-transparent pointer-events-none"></div>
              </div>
            </Reveal>
          </div>

          {/* SECTION 2: BUDAYA & TRADISI (Overlapping Grid & Timeline) */}
          <div id="budaya" className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mt-24 md:mt-40 relative">
            <Reveal className="w-full md:w-6/12 relative h-[450px] md:h-[600px] order-2 md:order-1" delay={200}>
              <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
                <div className="flex flex-col gap-3 md:gap-4 pt-6 md:pt-12">
                  <div className="h-[60%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group relative bg-white/5">
                    <img src="/images/wisata/ruwatbumi/ruwatbumi1.jpg" alt="Budaya Ruwat Bumi" className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ${activeCulture === 'ruwat' ? 'opacity-100 scale-100 group-hover:scale-110' : 'opacity-0 scale-95'}`} />
                    <img src="/images/wisata/gotongroyong/gotongroyong1.jpeg" alt="Gotong Royong" className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ${activeCulture === 'gotong' ? 'opacity-100 scale-100 group-hover:scale-110' : 'opacity-0 scale-95'}`} />
                  </div>
                  <div className="h-[40%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-accent/20 shadow-2xl bg-accent/5 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 text-center relative">
                     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent"></div>
                     <div className="relative z-10 w-full h-full flex items-center justify-center px-2 md:px-0">
                       <p className={`font-sans text-accent text-xs md:text-base font-medium italic absolute transition-all duration-700 ${activeCulture === 'ruwat' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'}`}>"Menjaga keharmonisan alam, manusia, dan Sang Pencipta"</p>
                       <p className={`font-sans text-accent text-xs md:text-base font-medium italic absolute transition-all duration-700 ${activeCulture === 'gotong' ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>"Membangun kesejahteraan lewat kekuatan kebersamaan"</p>
                     </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-4 pb-6 md:pb-12">
                  <div className="h-[30%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 flex items-center justify-center relative">
                    {/* Ruwat Bumi */}
                    <div className={`absolute flex flex-col items-center justify-center gap-1 md:gap-2 transition-all duration-700 ${activeCulture === 'ruwat' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-45 scale-50 pointer-events-none'}`}>
                      <span className="text-3xl md:text-4xl opacity-80 mb-0 md:mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">🌾</span>
                      <span className="text-[8px] md:text-[10px] font-sans uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/50 font-semibold text-center">Kearifan Lokal</span>
                    </div>
                    {/* Gotong Royong */}
                    <div className={`absolute flex flex-col items-center justify-center gap-1 md:gap-2 transition-all duration-700 ${activeCulture === 'gotong' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-45 scale-50 pointer-events-none'}`}>
                      <span className="text-3xl md:text-4xl opacity-80 mb-0 md:mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">🤝</span>
                      <span className="text-[8px] md:text-[10px] font-sans uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/50 font-semibold text-center">Solidaritas</span>
                    </div>
                  </div>
                  <div className="h-[70%] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group relative bg-white/5">
                    <img src="/images/wisata/ruwatbumi/ruwatbumi2.jpg" alt="Tradisi Ruwat Bumi" className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ${activeCulture === 'ruwat' ? 'opacity-100 scale-100 group-hover:scale-110' : 'opacity-0 scale-95'}`} />
                    <img src="/images/wisata/gotongroyong/gotongroyong2.jpeg" alt="Tradisi Gotong Royong" className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2s] ${activeCulture === 'gotong' ? 'opacity-100 scale-100 group-hover:scale-110' : 'opacity-0 scale-95'}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="w-full md:w-6/12 relative z-10 order-1 md:order-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4 md:mb-6">
                <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] text-white/50 uppercase font-bold">Warisan Leluhur</span>
                <span className="h-[1px] w-8 md:w-12 bg-white/30"></span>
              </div>
              <h2 className="text-4xl md:text-6xl font-semibold mb-8 md:mb-12 text-white leading-tight tracking-tight">Budaya & <span className="text-accent italic">Tradisi</span></h2>
              
              <div className="space-y-6 md:space-y-10 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute left-[19px] top-4 bottom-8 w-[2px] bg-gradient-to-b from-accent via-white/10 to-transparent z-0"></div>
                
                <div onClick={() => setActiveCulture('ruwat')} className={`relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-8 group cursor-pointer p-4 md:-ml-4 rounded-2xl transition-all duration-300 ${activeCulture === 'ruwat' ? 'bg-white/5 shadow-2xl' : 'hover:bg-white/5 hover:shadow-2xl'}`}>
                  <div className={`w-12 h-12 md:w-10 md:h-10 mx-auto md:mx-0 rounded-full bg-[#050914] border-4 flex items-center justify-center shrink-0 mt-0 md:mt-1 transition-all duration-300 group-hover:scale-110 ${activeCulture === 'ruwat' ? 'border-accent shadow-[0_0_15px_rgba(202,138,4,0.4)] group-hover:bg-accent' : 'border-white/20 group-hover:border-accent shadow-[0_0_0px_rgba(202,138,4,0)] group-hover:shadow-[0_0_15px_rgba(202,138,4,0.4)]'}`}>
                    <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeCulture === 'ruwat' ? 'bg-accent group-hover:bg-black' : 'bg-transparent group-hover:bg-accent'}`}></div>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 mb-2 md:mb-3">
                      <h3 className={`text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${activeCulture === 'ruwat' ? 'text-accent' : 'text-white group-hover:text-accent'}`}>Ruwat Bumi (Peperahan)</h3>
                      <span className={`hidden md:inline-block text-accent text-xl transition-all duration-300 font-bold ${activeCulture === 'ruwat' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>→</span>
                    </div>
                    <p className={`font-sans leading-relaxed font-light text-sm md:text-lg transition-colors duration-300 ${activeCulture === 'ruwat' ? 'text-white/80' : 'text-white/60 group-hover:text-white/80'}`}>
                      Dilaksanakan setiap bulan Muharram sebagai bentuk rasa syukur atas hasil panen dan doa memohon keselamatan, diakhiri dengan makan bersama yang mempererat tali silaturahmi.
                    </p>
                  </div>
                </div>
                
                <div onClick={() => setActiveCulture('gotong')} className={`relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-8 group cursor-pointer p-4 md:-ml-4 rounded-2xl transition-all duration-300 ${activeCulture === 'gotong' ? 'bg-white/5 shadow-2xl' : 'hover:bg-white/5 hover:shadow-2xl'}`}>
                  <div className={`w-12 h-12 md:w-10 md:h-10 mx-auto md:mx-0 rounded-full bg-[#050914] border-4 flex items-center justify-center shrink-0 mt-0 md:mt-1 transition-all duration-300 group-hover:scale-110 ${activeCulture === 'gotong' ? 'border-accent shadow-[0_0_15px_rgba(202,138,4,0.4)] group-hover:bg-accent' : 'border-white/20 group-hover:border-accent shadow-[0_0_0px_rgba(202,138,4,0)] group-hover:shadow-[0_0_15px_rgba(202,138,4,0.4)]'}`}>
                     <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeCulture === 'gotong' ? 'bg-accent group-hover:bg-black' : 'bg-transparent group-hover:bg-accent'}`}></div>
                  </div>
                  <div>
                    <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3 mb-2 md:mb-3">
                      <h3 className={`text-xl md:text-2xl font-semibold tracking-wide transition-colors duration-300 ${activeCulture === 'gotong' ? 'text-accent' : 'text-white group-hover:text-accent'}`}>Gotong Royong</h3>
                      <span className={`hidden md:inline-block text-accent text-xl transition-all duration-300 font-bold ${activeCulture === 'gotong' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`}>→</span>
                    </div>
                    <p className={`font-sans leading-relaxed font-light text-sm md:text-lg transition-colors duration-300 ${activeCulture === 'gotong' ? 'text-white/80' : 'text-white/60 group-hover:text-white/80'}`}>
                      Nilai luhur yang mencakup perbaikan fasilitas umum hingga pembangunan desa, secara konsisten memperkuat kebersamaan antar warga dari berbagai suku.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* SECTION 3: EKSPLORASI WISATA (Cinematic Parallax View) */}
          <div className="relative mt-20 md:mt-40">
             <Reveal className="w-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden relative border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col md:flex-row min-h-[450px] md:min-h-[650px] group">
                {/* Massive Parallax Background */}
                <div className="absolute inset-0">
                  <img src="/images/wisata/teropongkota/teropongkota1.jpg" alt="Wisata" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-[10%] group-hover:scale-105 transition-transform duration-[5s]" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050914] via-[#050914]/90 to-[#050914]/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-transparent to-transparent"></div>
                </div>
                
                <div className="relative z-10 p-8 py-16 md:p-20 flex flex-col justify-center text-center md:text-left items-center md:items-start w-full md:w-7/12">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 mb-6 md:mb-8">
                    <span className="px-3 md:px-4 py-1 md:py-1.5 bg-accent/20 border border-accent/50 text-accent font-bold text-[8px] md:text-[10px] font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full backdrop-blur-md">Destinasi Utama</span>
                    <span className="px-3 md:px-4 py-1 md:py-1.5 bg-white/10 border border-white/20 text-white font-bold text-[8px] md:text-[10px] font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-full backdrop-blur-md">Pesona Alam</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tighter leading-tight">Jelajahi <br className="hidden md:block"/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Wisata Desa</span></h3>
                  <p className="font-sans text-white/80 font-light text-sm md:text-xl leading-relaxed mb-8 md:mb-12 max-w-xl mx-auto md:mx-0">
                    Saksikan pesona lanskap Teropong Kota Kalianda, taklukkan puncak Gunung Rajabasa, hingga napak tilas sejarah di Petilasan Syeh Mansyur.
                  </p>
                  
                  <Link href="/wisata" className="btn bg-white text-black hover:bg-accent border-0 rounded-2xl px-6 md:px-10 py-4 md:py-5 font-bold flex items-center justify-center gap-3 md:gap-4 transition-all hover:scale-105 w-full md:w-fit shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(202,138,4,0.4)]">
                    Mulai Petualangan <span className="text-xl md:text-2xl">→</span>
                  </Link>
                </div>
                
                {/* Floating Interactive Image Cards on the Right */}
                <div className="relative z-10 p-10 md:p-16 w-full md:w-5/12 hidden md:flex items-center justify-center">
                  <div className="relative w-full h-[450px]">
                    {/* Card 1 */}
                    <div className="absolute top-4 right-4 w-[70%] h-64 rounded-3xl overflow-hidden border-4 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] rotate-6 hover:rotate-0 hover:scale-110 hover:z-30 hover:border-accent/50 transition-all duration-500 cursor-pointer group/card1">
                       <img src="/images/wisata/pendakian/gnrajabasa1.jpg" className="w-full h-full object-cover group-hover/card1:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/card1:opacity-100 transition-opacity flex items-end p-4">
                          <p className="text-white font-bold tracking-wide">Gunung Rajabasa</p>
                       </div>
                    </div>
                    {/* Card 2 */}
                    <div className="absolute bottom-4 left-4 w-[70%] h-64 rounded-3xl overflow-hidden border-4 border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)] -rotate-6 hover:rotate-0 hover:scale-110 hover:z-30 hover:border-accent/50 transition-all duration-500 cursor-pointer group/card2">
                       <img src="/images/wisata/petilasan/petilasan1.jpg" className="w-full h-full object-cover group-hover/card2:scale-110 transition-transform duration-700" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover/card2:opacity-100 transition-opacity flex items-end p-4">
                          <p className="text-white font-bold tracking-wide">Petilasan Syeh Mansyur</p>
                       </div>
                    </div>
                  </div>
                </div>
             </Reveal>
          </div>

          {/* SECTION 4: PEMERINTAHAN & PELAYANAN (Futuristic Structured Layout) */}
          <div className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
             <Reveal className="md:col-span-5 relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 border border-white/10 shadow-2xl flex flex-col justify-between group min-h-[350px] text-center md:text-left">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img src="/images/background/gapuradesa.jpeg" alt="Gapura Desa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s] grayscale-[20%] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/80 to-[#050914]/40"></div>
                </div>
                
                <div className="relative z-10 flex flex-col h-full justify-center md:justify-start">
                  <div className="w-16 h-16 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-3xl mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(0,0,0,0.5)]">🏛️</div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-white mb-3 tracking-tight">Profil <br className="hidden md:block"/>Pemerintahan</h3>
                  <p className="font-sans text-accent font-bold tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px] uppercase mb-6 drop-shadow-md">Berdiri Sejak 1745</p>
                  
                  <p className="font-sans text-white/80 font-light text-sm md:text-base leading-relaxed mb-8 md:mb-12 text-shadow mx-auto md:mx-0 max-w-sm">
                    Kenali Kepala Desa beserta jajaran aparatur yang mendedikasikan diri, serta pelajari sejarah lengkap asal-usul Desa Sumur Kumbang.
                  </p>
                </div>
                
                <Link href="/profil" className="relative z-10 w-full flex items-center justify-between p-4 md:p-5 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 hover:bg-black/60 hover:border-white/30 transition-all cursor-pointer group/btn shadow-xl mt-auto">
                  <div className="flex items-center gap-3 md:gap-4 text-left">
                     <div>
                       <p className="text-white font-semibold text-xs md:text-sm">Lihat Profil Desa</p>
                       <p className="text-white/50 text-[8px] md:text-[10px] font-sans uppercase tracking-widest mt-1">Struktur & Sejarah</p>
                     </div>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover/btn:bg-accent group-hover/btn:text-black transition-all shadow-lg shrink-0">
                    →
                  </div>
                </Link>
             </Reveal>

             <Reveal className="md:col-span-7 glass-card relative overflow-hidden rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 border border-accent/20 bg-[#0a0f1c] group text-center md:text-left" delay={200}>
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 mb-8 md:mb-10">
                    <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Pusat Layanan Warga</h3>
                    <div className="hidden md:block h-[1px] flex-1 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </div>
                  
                  <div className="flex-1 space-y-4 md:space-y-6 flex flex-col justify-center">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group/card">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-accent/40 to-accent/10 flex items-center justify-center text-2xl md:text-3xl border border-accent/20 shadow-[0_0_20px_rgba(202,138,4,0.15)] group-hover/card:scale-110 transition-transform shrink-0">📋</div>
                      <div>
                        <p className="font-semibold text-white text-lg md:text-xl mb-1 md:mb-2">Administrasi Kependudukan</p>
                        <p className="text-xs md:text-sm text-white/50 font-sans leading-relaxed">Layanan cepat pembuatan KTP, Kartu Keluarga, & Surat Pengantar.</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white/5 hover:bg-white/10 transition-all border border-transparent hover:border-white/10 group/card">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500/30 to-blue-500/5 flex items-center justify-center text-2xl md:text-3xl border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover/card:scale-110 transition-transform shrink-0">🏢</div>
                      <div>
                        <p className="font-semibold text-white text-lg md:text-xl mb-1 md:mb-2">Fasilitas Desa</p>
                        <p className="text-xs md:text-sm text-white/50 font-sans leading-relaxed">Informasi penggunaan Balai Desa dan ruang publik untuk warga.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-white/10">
                    <a href="https://maps.app.goo.gl/sL99UeK8MdmgoxZU8" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group/btn flex flex-col md:flex-row items-center justify-between gap-6 p-5 md:p-6 rounded-[2rem] bg-gradient-to-r from-accent/10 via-white/5 to-transparent border border-accent/20 hover:border-accent/40 transition-all shadow-lg hover:shadow-[0_0_30px_rgba(202,138,4,0.15)]">
                       
                       <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-5 w-full md:w-auto">
                          <div className="w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-full bg-accent text-black flex items-center justify-center text-xl md:text-2xl shadow-[0_0_15px_rgba(202,138,4,0.4)] group-hover/btn:scale-110 group-hover/btn:rotate-3 transition-transform">
                             🗺️
                          </div>
                          <div>
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                              <p className="text-white font-semibold text-base md:text-lg">Kunjungi Balai Desa</p>
                              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span>
                            </div>
                            <p className="text-white/60 font-sans text-xs md:text-sm">Bantuan & aduan langsung di jam kerja operasional.</p>
                          </div>
                       </div>
                       
                       <div className="relative z-10 w-full md:w-auto flex items-center justify-center gap-3 bg-white/5 px-6 py-3 rounded-full border border-white/10 group-hover/btn:bg-accent group-hover/btn:text-black group-hover/btn:border-accent transition-all text-xs md:text-sm text-white font-semibold">
                         Buka Google Maps
                         <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                       </div>

                    </a>
                  </div>
                </div>
             </Reveal>
          </div>

        </div>
      </section>
    </main>
  );
}
