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
              <h2 className="text-2xl font-semibold mb-8 text-accent">Pemerintahan Desa</h2>
              <div className="w-24 h-24 bg-white/5 rounded-[2rem] mx-auto mb-6 overflow-hidden border border-white/10 backdrop-blur-md shadow-xl">
                <img src="/images/struktur/pakkades.png" alt="Kepala Desa Sumur Kumbang" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kepala Desa</h3>
              <p className="text-white/50 font-sans text-xs uppercase tracking-widest">Pemerintah Desa Sumur Kumbang</p>
            </div>
          </Reveal>

        </div>
      </section>
    </main>
  );
}
