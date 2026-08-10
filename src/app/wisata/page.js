import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import Link from "next/link";

export default function WisataPage() {
  return (
    <main className="relative z-10">
      <PageHeader 
        title="Wisata Desa" 
        subtitle="Eksplorasi keindahan alam dan potensi pariwisata yang ditawarkan oleh Desa Sumur Kumbang." 
      />

      <section className="py-24 px-8">
        <div className="max-w-[1200px] mx-auto space-y-32">
          
          {/* Destinasi 1: Teropong Kota */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Reveal className="w-full lg:w-1/2 glass-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl transform group-hover:rotate-12 transition-transform duration-700">🔭</div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 glass-panel rounded-full text-[10px] font-sans font-bold tracking-[0.2em] text-accent mb-6 border-white/20">
                  DESTINASI KELUARGA
                </div>
                <h2 className="text-4xl font-semibold mb-4 text-white">Teropong Kota</h2>
                <p className="font-sans text-white/70 font-light leading-relaxed mb-6">
                  Menikmati pemandangan Kota Kalianda dan pesisir laut dari ketinggian lereng Gunung Rajabasa. Wisata Teropong Kota merupakan destinasi rekreasi keluarga yang menawarkan berbagai fasilitas seperti area istirahat, taman, serta sajian kuliner dari UMKM lokal.
                </p>
                <div className="font-sans text-white/50 text-xs tracking-widest uppercase border-t border-white/10 pt-4 mt-8">
                  Tiket Retribusi: <span className="text-accent font-semibold">Rp 5.000 / Orang</span>
                </div>
              </div>
            </Reveal>
            
            <Reveal className="w-full lg:w-1/2" delay={200}>
               <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-[2rem] overflow-hidden border border-white/10 aspect-video shadow-2xl">
                     <img src="/images/wisata/teropongkota/teropongkota1.jpg" alt="Teropong Kota Utama" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                  </div>
                  <div className="rounded-[1.5rem] overflow-hidden border border-white/10 aspect-square shadow-xl">
                     <img src="/images/wisata/teropongkota/teropongkota2.jpg" alt="Fasilitas Teropong Kota" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                  </div>
                  <div className="rounded-[1.5rem] overflow-hidden border border-white/10 aspect-square shadow-xl">
                     <img src="/images/wisata/teropongkota/teropongkota3.jpg" alt="Fasilitas Teropong Kota" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                  </div>
               </div>
            </Reveal>
          </div>

          {/* Destinasi 2: Basecamp Pendakian */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <Reveal className="w-full lg:w-1/2 glass-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl transform group-hover:-rotate-12 transition-transform duration-700">⛰️</div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 glass-panel rounded-full text-[10px] font-sans font-bold tracking-[0.2em] text-accent mb-6 border-white/20">
                  WISATA ALAM & PETUALANGAN
                </div>
                <h2 className="text-4xl font-semibold mb-4 text-white">Gunung Rajabasa</h2>
                <p className="font-sans text-white/70 font-light leading-relaxed mb-8">
                  Bagi para pencinta alam, Desa Sumur Kumbang menyediakan jalur pendakian resmi menuju puncak Gunung Rajabasa. Dilengkapi dengan fasilitas basecamp, pemandu lokal yang berpengalaman, dan sistem integrasi keamanan bagi para pendaki.
                </p>
                
                <Link href="/pendakian" className="btn btn-primary inline-flex">
                  Lihat Info Pendakian
                </Link>
              </div>
            </Reveal>
            
            <Reveal className="w-full lg:w-1/2" delay={200}>
               <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-[2rem] overflow-hidden border border-white/10 aspect-video shadow-2xl relative group">
                     <img src="/images/wisata/pendakian/gnrajabasa1.jpg" alt="Gunung Rajabasa Utama" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="col-span-2 rounded-[1.5rem] overflow-hidden border border-white/10 aspect-[21/9] shadow-xl relative group">
                     <img src="/images/wisata/pendakian/gnrajabasa2.jpg" alt="Gunung Rajabasa Jalur" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
               </div>
            </Reveal>
          </div>

          {/* Destinasi 3: Petilasan Syeh Mansyur */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Reveal className="w-full lg:w-1/2 glass-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl transform group-hover:rotate-12 transition-transform duration-700">🕌</div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 glass-panel rounded-full text-[10px] font-sans font-bold tracking-[0.2em] text-accent mb-6 border-white/20">
                  WISATA RELIGI & SEJARAH
                </div>
                <h2 className="text-4xl font-semibold mb-4 text-white">Petilasan Syeh Mansyur</h2>
                <p className="font-sans text-white/70 font-light leading-relaxed mb-6">
                  Situs bersejarah yang menjadi cikal bakal penamaan Desa Sumur Kumbang. Tempat ini dipercaya sebagai lokasi seorang tokoh agama menancapkan tongkat yang memunculkan mata air di dekat rimbunan pohon kembang, menjadikannya destinasi ziarah dan wisata sejarah.
                </p>
              </div>
            </Reveal>
            
            <Reveal className="w-full lg:w-1/2" delay={200}>
               <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl relative group">
                     <img src="/images/wisata/petilasan/petilasan1.jpg" alt="Petilasan Utama" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="col-span-2 rounded-[1.5rem] overflow-hidden border border-white/10 aspect-[21/9] shadow-xl relative group">
                     <img src="/images/wisata/petilasan/petilasan2.jpg" alt="Petilasan Area" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
               </div>
            </Reveal>
          </div>

          {/* Destinasi 4: Pencak Silat TTKDH */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <Reveal className="w-full lg:w-1/2 glass-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl transform group-hover:-rotate-12 transition-transform duration-700">🥋</div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 glass-panel rounded-full text-[10px] font-sans font-bold tracking-[0.2em] text-accent mb-6 border-white/20">
                  SENI & BUDAYA
                </div>
                <h2 className="text-4xl font-semibold mb-4 text-white">Pencak Silat TTKDH</h2>
                <p className="font-sans text-white/70 font-light leading-relaxed mb-8">
                  Tjimande Tari Kolot Kebon Djeruk Hilir (TTKDH) adalah seni bela diri tradisional yang terus dilestarikan oleh masyarakat desa. Atraksi pencak silat ini sering ditampilkan dalam berbagai perayaan dan penyambutan tamu kehormatan.
                </p>
              </div>
            </Reveal>
            
            <Reveal className="w-full lg:w-1/2" delay={200}>
              <div className="rounded-[2rem] overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl relative group">
                 <img src="/images/wisata/pencaksilat/ttdkh.jpg" alt="Pencak Silat TTKDH" className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              </div>
            </Reveal>
          </div>

          {/* Destinasi 5: Ruwat Bumi (Peperahan) */}
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <Reveal className="w-full lg:w-1/2 glass-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl transform group-hover:rotate-12 transition-transform duration-700">🌾</div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1 glass-panel rounded-full text-[10px] font-sans font-bold tracking-[0.2em] text-accent mb-6 border-white/20">
                  TRADISI LOKAL
                </div>
                <h2 className="text-4xl font-semibold mb-4 text-white">Ruwat Bumi (Peperahan)</h2>
                <p className="font-sans text-white/70 font-light leading-relaxed mb-6">
                  Upacara adat yang diadakan setiap bulan Muharram sebagai bentuk syukur kepada Tuhan atas hasil panen dan keselamatan warga. Tradisi makan bersama ini (Peperahan) sangat ikonik dan mencerminkan toleransi antar suku di Desa Sumur Kumbang.
                </p>
              </div>
            </Reveal>
            
            <Reveal className="w-full lg:w-1/2" delay={200}>
               <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 rounded-[2rem] overflow-hidden border border-white/10 aspect-video shadow-2xl relative group">
                     <img src="/images/wisata/ruwatbumi/ruwatbumi1.jpg" alt="Ruwat Bumi Utama" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="rounded-[1.5rem] overflow-hidden border border-white/10 aspect-square shadow-xl relative group">
                     <img src="/images/wisata/ruwatbumi/ruwatbumi2.jpg" alt="Ruwat Bumi Suasana" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
                  <div className="rounded-[1.5rem] overflow-hidden border border-white/10 aspect-square shadow-xl relative group">
                     <img src="/images/wisata/ruwatbumi/ruwatbumi3.jpg" alt="Ruwat Bumi Acara" className="w-full h-full object-cover hover:scale-110 transition-all duration-[2s]" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                  </div>
               </div>
            </Reveal>
          </div>

        </div>
      </section>
    </main>
  );
}
