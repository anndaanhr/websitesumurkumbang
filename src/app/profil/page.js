import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

export default function ProfilPage() {
  return (
    <main className="relative z-10">
      <PageHeader 
        title="Profil Desa" 
        subtitle="Sejarah singkat dan informasi mengenai pemerintahan Desa Sumur Kumbang." 
      />

      <section className="py-24 px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 max-w-[1200px] mx-auto">
          
          <Reveal className="w-full lg:w-2/3 glass-card">
            <h2 className="text-4xl text-accent font-semibold mb-12 border-b border-white/10 pb-6">Sejarah Desa</h2>
            
            <div className="border-l border-white/20 pl-6 md:pl-10 relative space-y-12 md:space-y-16">
              
              {/* Point 1 */}
              <div className="relative">
                <div className="absolute -left-[1.85rem] md:-left-[2.85rem] top-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]"></div>
                <span className="text-white/50 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Sekitar 1745</span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">Jejak Awal Syekh Mansyur</h3>
                <p className="font-sans text-white/70 font-light text-sm md:text-base leading-relaxed">
                  Sejarah awal Desa Sumur Kumbang bermula dari perjalanan seorang tokoh penyebar agama Islam dan adat bernama <strong>Syekh Maulana Mansyur</strong>. Beliau melakukan perjalanan di kawasan lereng Gunung Rajabasa bersama cucunya serta seorang pengawal setia bernama Ki Ajalali.
                </p>
              </div>
              
              {/* Point 2 */}
              <div className="relative">
                <div className="absolute -left-[1.85rem] md:-left-[2.85rem] top-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]"></div>
                <span className="text-white/50 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Keajaiban Alam</span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">Mata Air Keramat</h3>
                <p className="font-sans text-white/70 font-light text-sm md:text-base leading-relaxed">
                  Di tengah perjalanan, sang cucu merasa kehausan dan menangis karena tidak ada sumber air. Syekh Mansyur kemudian memanjatkan doa dan menancapkan tongkat pusakanya ke sebuah batu besar. Keajaiban terjadi saat tongkat itu dicabut: memancar air jernih yang terus mengalir tanpa henti. Menariknya, mata air ini diyakini tidak pernah kering meski dilanda kemarau panjang.
                </p>
              </div>

              {/* Point 3 */}
              <div className="relative">
                <div className="absolute -left-[1.85rem] md:-left-[2.85rem] top-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]"></div>
                <span className="text-white/50 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Etimologi Desa</span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">Lahirnya Nama "Sumur Kumbang"</h3>
                <p className="font-sans text-white/70 font-light text-sm md:text-base leading-relaxed">
                  Di sekitar mata air jernih tersebut dahulunya tumbuh rimbunan pohon kembang (bunga) yang sangat indah. Hal ini membuat lokasi tersebut awalnya dikenal dengan sebutan <strong>Sumur Kembang</strong>. Seiring berjalannya waktu dan dialek masyarakat setempat, pelafalannya perlahan berubah menjadi <strong>Sumur Kumbang</strong> seperti yang kita kenal hari ini.
                </p>
              </div>

              {/* Point 4 */}
              <div className="relative">
                <div className="absolute -left-[1.85rem] md:-left-[2.85rem] top-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]"></div>
                <span className="text-white/50 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Perkembangan Sosio-Kultural</span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">Harmoni dalam Keberagaman</h3>
                <p className="font-sans text-white/70 font-light text-sm md:text-base leading-relaxed">
                  Kesejukan udara lereng gunung dan melimpahnya hasil alam mengundang banyak pendatang untuk menetap. Desa ini kemudian tumbuh menjadi wilayah heterogen yang dihuni secara berdampingan oleh masyarakat dari berbagai suku, utamanya suku Lampung, Sunda, dan Jawa. Mereka melebur dan membentuk tatanan masyarakat yang rukun dan gotong royong.
                </p>
              </div>

              {/* Point 5 */}
              <div className="relative">
                <div className="absolute -left-[1.85rem] md:-left-[2.85rem] top-1 w-4 h-4 bg-accent rounded-full shadow-[0_0_15px_var(--color-accent)]"></div>
                <span className="text-white/50 font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Masa Kini</span>
                <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-white">Desa Wisata Religi & Adat</h3>
                <p className="font-sans text-white/70 font-light text-sm md:text-base leading-relaxed">
                  Pemerintah dan warga kini bersatu melestarikan situs sejarah <strong>Petilasan Syekh Mansyur</strong> sebagai cagar budaya. Tradisi luhur pun terus dihidupkan, salah satunya upacara <strong>Ruwat Bumi (Peperahan)</strong> di setiap bulan Muharram, di mana warga berkumpul, berdoa, dan makan bersama di atas pelepah pisang sebagai wujud syukur atas hasil bumi yang melimpah.
                </p>
              </div>
              
            </div>
          </Reveal>

          <Reveal className="w-full lg:w-1/3" delay={150}>
            <div className="glass-card text-center sticky top-32">
              <span className="text-accent text-[10px] font-sans uppercase tracking-widest font-bold block mb-2">Periode 2022 - 2029</span>
              <h2 className="text-2xl font-semibold mb-6 text-white">Pemerintahan Desa</h2>
              <div className="w-28 h-28 bg-white/5 rounded-[2rem] mx-auto mb-6 overflow-hidden border border-accent/40 backdrop-blur-md shadow-[0_0_20px_rgba(202,138,4,0.2)]">
                <img src="/images/struktur/kades.jpeg" alt="Armad - Kepala Desa Sumur Kumbang" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">ARMAD</h3>
              <p className="text-white/60 font-sans text-sm font-medium mb-6">Kepala Desa Sumur Kumbang</p>
              
              <a href="#struktur-organisasi" className="w-full py-3 px-6 rounded-xl bg-white/5 hover:bg-accent hover:text-black border border-white/10 hover:border-accent transition-all duration-300 font-sans font-semibold text-xs uppercase tracking-wider inline-block shadow-lg">
                Lihat Struktur Lengkap ↓
              </a>
            </div>
          </Reveal>

        </div>
      </section>

      {/* SECTION: STRUKTUR ORGANISASI LENGKAP */}
      <section id="struktur-organisasi" className="py-24 px-4 md:px-8 max-w-[1200px] mx-auto border-t border-white/10">
        <Reveal className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-accent/10 border border-accent/30 text-accent font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold mb-4">
            Periode 2022 s.d 2029
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Struktur Organisasi <span className="text-accent italic">Pemerintahan</span>
          </h2>
          <p className="text-white/60 font-sans text-sm md:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Mengenal lebih dekat pimpinan, jajaran perangkat desa, kepala dusun, ketua RT, serta lembaga kemasyarakatan Desa Sumur Kumbang yang berdedikasi melayani warga.
          </p>
        </Reveal>

        {/* Level 1: Kepala Desa & Sekretaris Desa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <Reveal className="glass-card p-6 md:p-8 text-center border-accent/40 bg-gradient-to-b from-accent/10 to-transparent flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-28 h-28 rounded-[2rem] overflow-hidden border-2 border-accent mb-4 shadow-[0_0_25px_rgba(202,138,4,0.3)] bg-white/5 relative z-10">
              <img src="/images/struktur/kades.jpeg" alt="Armad - Kepala Desa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="px-3 py-1 rounded-full bg-accent text-black font-sans font-bold text-[10px] uppercase tracking-widest mb-2 shadow-lg relative z-10">
              Kepala Desa
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 relative z-10">ARMAD</h3>
            <p className="text-white/50 text-xs font-sans relative z-10">Pimpin Pemerintah Desa Sumur Kumbang</p>
          </Reveal>

          <Reveal className="glass-card p-6 md:p-8 text-center border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-transparent flex flex-col items-center justify-center relative overflow-hidden group" delay={150}>
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-28 h-28 rounded-[2rem] overflow-hidden border-2 border-blue-400/50 mb-4 bg-white/5 relative z-10">
              <img src="/images/struktur/sekdes.jpeg" alt="Mus Mulyadi - Sekretaris Desa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-sans font-bold text-[10px] uppercase tracking-widest mb-2 shadow-lg relative z-10">
              Sekretaris Desa (Sekdes)
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 relative z-10">MUS MULYADI</h3>
            <p className="text-white/50 text-xs font-sans relative z-10">Koordinator Administrasi & Kesekretariatan</p>
          </Reveal>
        </div>

        {/* Level 2: KASI & KAUR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-10">
          {/* Kasi */}
          <Reveal className="glass-card border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-white/5 to-transparent p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_10px_#f43f5e]"></span>
              <h3 className="text-xl font-semibold text-white">Kepala Seksi (Kasi)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/20 hover:border-rose-400/50 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-rose-500/30 bg-white/5">
                  <img src="/images/struktur/ratna.jpeg" alt="Ratnawati" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-sans font-bold text-rose-300 block uppercase tracking-wider mb-1">Kasi Pemerintahan</span>
                <p className="text-sm font-bold text-white">RATNAWATI</p>
              </div>
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/20 hover:border-rose-400/50 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-rose-500/30 bg-white/5">
                  <img src="/images/struktur/abduljaah.jpeg" alt="Duljaah" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-sans font-bold text-rose-300 block uppercase tracking-wider mb-1">Kasi Pelayanan</span>
                <p className="text-sm font-bold text-white">DULJAAH</p>
              </div>
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/20 hover:border-rose-400/50 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-rose-500/30 bg-white/5">
                  <img src="/images/struktur/marsih.jpeg" alt="Marsih" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-sans font-bold text-rose-300 block uppercase tracking-wider mb-1">Kasi Kesejahteraan</span>
                <p className="text-sm font-bold text-white">MARSIH</p>
              </div>
            </div>
          </Reveal>

          {/* Kaur */}
          <Reveal className="glass-card border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 via-white/5 to-transparent p-6 md:p-8" delay={150}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <span className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></span>
              <h3 className="text-xl font-semibold text-white">Kepala Urusan (Kaur)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 hover:border-indigo-400/50 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-indigo-500/30 bg-white/5">
                  <img src="/images/struktur/didik.jpeg" alt="Didik Prastyawan" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-sans font-bold text-indigo-300 block uppercase tracking-wider mb-1">Kaur Keuangan</span>
                <p className="text-sm font-bold text-white">DIDIK PRASTYAWAN</p>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 hover:border-indigo-400/50 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-indigo-500/30 bg-white/5">
                  <img src="/images/struktur/tb.jpeg" alt="TB. Saipudin" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-sans font-bold text-indigo-300 block uppercase tracking-wider mb-1">Kaur Perencanaan</span>
                <p className="text-sm font-bold text-white">TB. SAIPUDIN</p>
              </div>
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 hover:border-indigo-400/50 transition-all text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-indigo-500/30 bg-white/5">
                  <img src="/images/struktur/asep.jpeg" alt="Asep Hanapi" className="w-full h-full object-cover" />
                </div>
                <span className="text-[10px] font-sans font-bold text-indigo-300 block uppercase tracking-wider mb-1">Kaur Umum</span>
                <p className="text-sm font-bold text-white">ASEP HANAPI</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Level 3: KADUS & RT */}
        <Reveal className="glass-card border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 via-white/5 to-transparent p-6 md:p-8 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></span>
              <h3 className="text-xl font-semibold text-white">Kepala Dusun & Rukun Tetangga</h3>
            </div>
            <span className="text-[10px] sm:text-xs text-white/50 font-sans uppercase tracking-widest">3 Dusun • 8 Rukun Tetangga (RT)</span>
          </div>
          
          {/* Kadus Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400/60 text-center relative overflow-hidden transition-all flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-cyan-500/30 bg-white/5">
                <img src="/images/struktur/rustami.jpeg" alt="Rustami" className="w-full h-full object-cover" />
              </div>
              <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-sans font-bold uppercase tracking-widest block w-fit mx-auto mb-2">Kadus 1</span>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">RUSTAMI</h4>
            </div>
            <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400/60 text-center relative overflow-hidden transition-all flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-cyan-500/30 bg-white/5">
                <img src="/images/struktur/safaat.jpeg" alt="Safaat" className="w-full h-full object-cover" />
              </div>
              <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-sans font-bold uppercase tracking-widest block w-fit mx-auto mb-2">Kadus 2</span>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">SAFAAT</h4>
            </div>
            <div className="p-5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 hover:border-cyan-400/60 text-center relative overflow-hidden transition-all flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-cyan-500/30 bg-white/5 flex items-center justify-center text-3xl opacity-50">
                👨‍💼
              </div>
              <span className="px-3 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-sans font-bold uppercase tracking-widest block w-fit mx-auto mb-2">Kadus 3</span>
              <h4 className="text-lg sm:text-xl font-bold text-white tracking-wide">M. HUJAEMI</h4>
            </div>
          </div>

          {/* RT Grid */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-white/50 text-center mb-6 font-semibold">Daftar Ketua Rukun Tetangga (RT 01 - RT 08)</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
              {[
                { rt: "RT 1", nama: "JUMRONI SAPRI" },
                { rt: "RT 2", nama: "ABDUL HAMID" },
                { rt: "RT 3", nama: "HAPIPI" },
                { rt: "RT 4", nama: "SARWITA" },
                { rt: "RT 5", nama: "SAKAM DADANG" },
                { rt: "RT 6", nama: "ASNAWI" },
                { rt: "RT 7", nama: "SALIM" },
                { rt: "RT 8", nama: "SATRA'I" },
              ].map((item, index) => (
                <div key={index} className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 hover:border-emerald-400/50 transition-all text-center flex flex-col justify-center">
                  <span className="text-[10px] font-sans font-bold text-emerald-400 block uppercase tracking-wider mb-1">{item.rt}</span>
                  <p className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">{item.nama}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Level 4: LEMBAGA DESA (LPM & BPD) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* LPM */}
          <Reveal className="glass-card border-emerald-500/20 bg-gradient-to-br from-emerald-950/20 via-transparent to-transparent p-6 md:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></span>
                <div>
                  <h3 className="text-xl font-semibold text-white">LPM</h3>
                  <p className="text-white/50 font-sans text-xs">Lembaga Pemberdayaan Masyarakat</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-[9px] font-sans text-emerald-400 font-bold uppercase block mb-1">Ketua</span>
                  <p className="text-xs sm:text-sm font-bold text-white">BUKHORI</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-[9px] font-sans text-emerald-400 font-bold uppercase block mb-1">Sekretaris</span>
                  <p className="text-xs sm:text-sm font-bold text-white">UNTUNG</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-[9px] font-sans text-emerald-400 font-bold uppercase block mb-1">Bendahara</span>
                  <p className="text-xs sm:text-sm font-bold text-white">AGUS JAMALUDIN</p>
                </div>
              </div>
              <div>
                <span className="text-xs font-sans font-bold text-emerald-400 uppercase tracking-widest block mb-3">Anggota LPM (9 Warga)</span>
                <div className="flex flex-wrap gap-2">
                  {["M. JUPRI", "JAYAMIN", "SONI S.", "KARNA WIJAYA", "M. ASJA", "SOPIAN SAORI", "JUMRONI SAPRI", "RATNA WIYAH", "NUR HALIMAH"].map((anggota, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-white/90 text-xs font-medium hover:bg-emerald-500/20 transition-colors">
                      {anggota}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* BPD */}
          <Reveal className="glass-card border-amber-500/20 bg-gradient-to-br from-amber-950/20 via-transparent to-transparent p-6 md:p-8 flex flex-col justify-between" delay={150}>
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_10px_#f59e0b]"></span>
                <div>
                  <h3 className="text-xl font-semibold text-white">BPD</h3>
                  <p className="text-white/50 font-sans text-xs">Badan Permusyawaratan Desa</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-[9px] font-sans text-amber-400 font-bold uppercase block mb-1">Ketua</span>
                  <p className="text-xs sm:text-sm font-bold text-white">SURADI S.Pd</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-[9px] font-sans text-amber-400 font-bold uppercase block mb-1">Sekretaris</span>
                  <p className="text-xs sm:text-sm font-bold text-white">SAIFUL ANWAR</p>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <span className="text-[9px] font-sans text-amber-400 font-bold uppercase block mb-1">Bendahara</span>
                  <p className="text-xs sm:text-sm font-bold text-white">ENTU ASTUTI</p>
                </div>
              </div>
              <div>
                <span className="text-xs font-sans font-bold text-amber-400 uppercase tracking-widest block mb-3">Anggota BPD (2 Warga)</span>
                <div className="flex flex-wrap gap-2">
                  {["SITI FATIMAH", "HENDRA PRANATA"].map((anggota, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-white/90 text-xs font-medium hover:bg-amber-500/20 transition-colors">
                      {anggota}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
